const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const getPreviewUrl = require("./util");
const fsExtra = require('fs-extra');
const fs = require('fs');
const sharp = require('sharp');
const mime = require('mine');

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


let selectedStoryJson = JSON.parse(fs.readFileSync('selected-story.json', 'utf8'));

// Accessing the value associated with the key "story"
let selectedStoryData =  selectedStoryJson.story;

let selectedStory =  selectedStoryData.toString();
console.log(typeof  selectedStory);
// Accessing the value associated with the key "story"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the destination directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'gif', maxCount: 1 },
    { name: 'audio', maxCount: 2 } // Increase maxCount to 2 to allow multiple audio files
]), (req, res) => {
    console.log("uploading rn and the selected folder is : "+ selectedStory)
    if(selectedStory === "createNew" || selectedStory === "")  return res.status(400).send('No files were uploaded.');;
    // Check if any files were uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Get directory name from request query
    const directoryName = req.query.directoryName || '';

    // Create directory if it doesn't exist
    const directoryPath = path.join(__dirname, 'uploads', selectedStory, directoryName);
    console.log(directoryPath)
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Move files to target path

// Move files to target path
    const moveFile = (source, target, callback) => {
        // Extract file extension
        const fileExtension = path.extname(source);
        // Generate new file name based on file type
        let newFileName = '';
        if (fileExtension.startsWith('.mp3') || fileExtension.startsWith('.m4a')) {
            // Arabic audio
            newFileName = `arabic-audio${fileExtension}`;
        } else if (fileExtension.startsWith('.wav') || fileExtension.startsWith('.mp4') || fileExtension.startsWith('.mov')) {
            // English audio
            newFileName = `english-audio${fileExtension}`;
        } else if (fileExtension.startsWith('.png') || fileExtension.startsWith('.jpeg') || fileExtension.startsWith('.jpg')) {
            // Image
            newFileName = `page.jpg`; // Always convert to JPG
        } else if (fileExtension.startsWith('.gif')) {
            // GIF
            newFileName = `animated${fileExtension}`;
        } else {
            // Other files
            newFileName = `file${fileExtension}`;
        }
        // Construct target path with new file name
        const newTarget = path.join(directoryPath, newFileName);

        // If the file is an image, convert it to JPG before moving
        if (fileExtension === '.png') {
            sharp(source).toFormat('jpeg').toFile(newTarget, (err, info) => {
                if (err) {
                    console.error(`Error converting image to JPG:`, err);
                    callback(err);
                } else {
                    // Wait until conversion is complete before deleting the original file
                    setTimeout(() => {
                        fs.unlink(source, err => {
                            if (err) {
                                console.error(`Error deleting original image file ${source}:`, err);
                            }
                            callback(null);
                        });
                    }, 500); // Delay of 1 second
                }
            });
        } else {
            fs.rename(source, newTarget, err => {
                if (err) {
                    // Handle error locally without stopping execution
                    console.error(`Error moving file ${source} to ${newTarget}:`, err);
                    callback(err); // Continue execution even if error occurs
                } else {
                    callback(null);
                }
            });
        }
    };


    // Access uploaded files using req.files
    const filesToMove = [];
    if (req.files['image']) filesToMove.push(req.files['image'][0]);
    if (req.files['gif']) filesToMove.push(req.files['gif'][0]);
    if (req.files['audio']) filesToMove.push(...req.files['audio']); // Push all audio files

    if (filesToMove.length === 0) {
        return res.status(400).send('No valid files were uploaded.');
    }

    // Move files to directory
    let filesMoved = 0;
    filesToMove.forEach(file => {
        moveFile(file.path, path.join(directoryPath, file.originalname), (err) => {
            filesMoved++;
            if (err) {
                console.error(`Error moving file ${file.path} to ${path.join(directoryPath, file.originalname)}:`, err);
            }
            if (filesMoved === filesToMove.length) {
                res.send('Files uploaded successfully');
            }
        });
    });
});


app.use(express.json()); // Middleware to parse JSON requests

app.post('/saveJsonData/:directory', express.json(), (req, res) => {

    if(selectedStory === "createNew" || selectedStory === "")  return res.status(400).send('No data was uploaded.');;
    const jsonData = req.body;
    const dir = req.params.directory;

    if (!jsonData || !dir) {
        return res.status(400).json({ error: 'Missing required data' });
    }

    const filePath = path.join(__dirname, 'uploads',selectedStory , dir, 'data.json');

    for(const key in jsonData){
        // Split the string by both '/' and '\'
        jsonData[key] = jsonData[key].split(/[\/\\]/);

    }
    // Write the edited JSON data back to the file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error('Error writing JSON data:', err);
            return res.status(500).json({ error: 'Error writing JSON data' });
        }
        res.json({ message: 'JSON data saved successfully' });
    });
});

app.get("data/:directory", (req, res) => {
    const dir = req.params.directory;
    const filePath = path.join(__dirname, 'uploads',selectedStory, dir, 'data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON data:', err);
            return res.status(500).json({ error: 'Error reading JSON data' });
        }
        res.json(JSON.parse(data));
    });
});
app.get('/choices', (req, res) => {
    try {
        // Read the list of choices from a JSON file
        const choices = JSON.parse(fs.readFileSync('choices.json', 'utf8'));
        res.json(choices);
    } catch (error) {
        console.error('Error fetching choices:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/choices', (req, res) => {

    try {
        const { choice } = req.body;
        selectedStory = choice;
        if (!choice || choice.trim() === '' ||choice.trim() ==="createNew") {
            return res.status(400).json({ error: 'Invalid choice' });
        }

        // Read the existing choices from the JSON file
        let choices = [];
        try {
            choices = JSON.parse(fs.readFileSync('choices.json', 'utf8'));
        } catch (error) {
            // File does not exist or is empty
        }

        // Add the new choice to the list
        choices.push(choice);

        // Write the updated choices back to the file
        fs.writeFileSync('choices.json', JSON.stringify(choices, null, 2));

        // Create a directory with the new choice name under "uploads"
        const directoryPath = `./uploads/${choice}`;

        fs.mkdir(directoryPath, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
                return res.status(500).json({ error: 'Error creating directory' });
            }
            console.log('Directory created successfully');
            res.json({ message: 'New choice created successfully' });
        });
    } catch (error) {
        console.error('Error creating new choice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to delete a choice
app.delete('/choices/:choice', (req, res) => {
    const choiceToDelete = req.params.choice;
    const choicesFilePath = path.join(__dirname, 'choices.json');
    try {
        // Read the existing choices from the JSON file
        let choices = JSON.parse(fs.readFileSync(choicesFilePath, 'utf8'));

        // Remove the choice from the list
        const index = choices.indexOf(choiceToDelete);
        if (index !== -1) {
            choices.splice(index, 1);

            // Write the updated choices back to the file
            fs.writeFileSync(choicesFilePath, JSON.stringify(choices, null, 2));

            // Delete the directory associated with the choice
            const directoryPath = path.join(__dirname, 'uploads', choiceToDelete);
            fs.rmdir(directoryPath, { recursive: true }, (err) => {
                if (err) {
                    console.error('Error deleting directory:', err);
                    return res.status(500).json({ error: 'Error deleting directory' });
                }
                console.log('Directory deleted successfully');
                res.json({ message: 'Choice deleted successfully' });
            });
            selectedStory = '';
        } else {
            res.status(404).json({ error: 'Choice not found' });
        }
    } catch (error) {
        console.error('Error deleting choice:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/selectedChoice', (req, res) => {
    try {
        // Read the currently selected story from a JSON file
        selectedStoryJson = JSON.parse(fs.readFileSync('selected-story.json', 'utf8'));

        selectedStoryData =  selectedStoryJson.story;

        selectedStory =  selectedStoryData.toString();
        res.json(selectedStoryJson);
    } catch (error) {
        console.error('Error fetching selected story:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to update the currently selected story
app.post('/selectedChoice', (req, res) => {
    try {
        const { story } = req.body;

        if (!story || story.trim() === '') {
            return res.status(400).json({ error: 'Invalid story' });
        }

        // Write the updated selected story to the JSON file
        fs.writeFileSync('selected-story.json', JSON.stringify({ story }, null, 2));

        selectedStory = story.toString();
        res.json({ message: 'Selected story updated successfully' });
    } catch (error) {
        console.error('Error updating selected story:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/files/:fileName/preview', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, 'uploads', selectedStory);

    // Assuming you have a function named getPreviewUrl to generate preview URLs
    const previewUrl = getPreviewUrl(fileName, filePath);

    res.json({ previewUrl }) ;
});
app.get('/files/:dir/:fileName/preview', (req, res) => {
    const dir = req.params.dir;
    const fileName = req.params.fileName;
    const filePath = path.join("http://localhost:3005", 'uploads',selectedStory,  dir);

    // Assuming you have a function named getPreviewUrl to generate preview URLs
    const previewUrl = getPreviewUrl(fileName, filePath).replaceAll("\\", "/").replace("http:/", "http://") ;
    console.log("previewUrl: "+previewUrl)
    res.json({ previewUrl }) ;
});

app.get('/files', (req, res) => {
    const directoryPath = path.join(__dirname, 'uploads',selectedStory );
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Error reading directory');
        }
        res.json(files);
    });
});
app.get('/directory', (req, res) => {
    const dir = req.query.directory || '';
    const directoryPath = path.join(__dirname, 'uploads',selectedStory, dir);

    if(selectedStory === "createNew") return res.status(200).json("{}")
    console.log("files " +directoryPath)
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Error reading directory');
        }
        res.json(files);
    });
});

app.get('/files/:directory?', (req, res) => {
    const directoryPath = req.params.directory ?
        path.join(__dirname, 'uploads',selectedStory, req.params.directory) :
        path.join(__dirname, 'uploads',selectedStory);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return  res.status(500).json({ error: 'Error reading directory' });
        }

        const fileList = files.map(file => {
            const filePath = path.join(directoryPath, file);
            const isDirectory = fs.statSync(filePath).isDirectory();
            const mimeType = isDirectory ? 'directory' : mime.getType(filePath);
            return { name: file, type: mimeType };
        });

        res.json(fileList);
    });
});

// Endpoint to delete a file
app.delete('/files/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'uploads',selectedStory, req.params.filename);
    fs.unlink(filePath, err => {
        if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).send('Error deleting file');
        }
        res.send('File deleted successfully');
    });
});


// Route to delete a file
app.delete('/dir/:dirName', (req, res) => {
    const dirName = req.params.dirName;

    const dirPath = path.join(__dirname, 'uploads',selectedStory, dirName);
    console.log("deleting dir: "+dirPath)
    fsExtra.remove(dirPath, (err) => {
        if (err) {
            console.error('Error deleting directory:', err);
            return res.status(500).json({ error: 'Failed to delete directory' });
        }
        res.json({ message: 'Directory deleted successfully' });
    });
});
app.get('/count-pages', (req, res) => {
    const directoryPath = path.join(__dirname, 'uploads',selectedStory);
    console.log("counting pages in: "+directoryPath);
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Error counting subdirectories');
            return;
        }

        // Filter out directories from the list of files
        const subdirectories = files.filter(file => file.isDirectory());
        let count =subdirectories.length;
        console.log("count: "+count)
        // Return the count of subdirectories
        res.json({count});
    });
});

// Serve React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
