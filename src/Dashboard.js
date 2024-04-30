import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/dashboard.css';
import FilePreview from "./FilePreview";
import StoryDropdown from "./StoryDropdown";

function Dashboard() {
    // State variables
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadImage, setUploadImage] = useState(null);
    const [uploadGif, setUploadGif] = useState(null);
    const [uploadAudio, setUploadAudio] = useState(null);
    const [captionEnglish, setCaptionEnglish] = useState('');
    const [captionArabic, setCaptionArabic] = useState('');
    const [beforeEnglish, setBeforeEnglish] = useState('');
    const [beforeArabic, setBeforeArabic] = useState('');
    const [afterEnglish, setAfterEnglish] = useState('');
    const [afterArabic, setAfterArabic] = useState('');
    const [loading, setLoading] = useState(false);
    const [jsonEditData, setJsonEditData] = useState(null); // State variable to hold JSON edit data
    const [directoryName, setDirectoryName] = useState('1');
    const [currentDirectory, setCurrentDirectory] = useState('');
    const [directoryStack, setDirectoryStack] = useState([]);
    const [pageCount, setPageCount] = useState(null);

    const [uploadAudioArabic, setUploadAudioArabic] = useState(null);
    const fileExtensions = ['png', 'jpeg', 'gif', 'mp4', 'mov', 'pdf', 'json', 'mp3', 'm4a', 'jpg', 'jpeg', 'gif', 'png', 'pdf', 'mp4', 'mov', 'mp3', 'wav'];
    const [fileName, setFileName] = useState('');

    function findNextDirectory(directoryNames) {
        console.log(files)
        if(files.length  < 1) return 1
        setSelectedFile('')
        // Convert directory names to numbers
        const directoryNumbers = directoryNames.map(Number);

        // Sort the numbers in ascending order
        directoryNumbers.sort((a, b) => a - b);

        // Find the missing numbers
        const missingNumbers = [];
        for (let i = 0; i < directoryNumbers.length - 1; i++) {
            if (directoryNumbers[i + 1] - directoryNumbers[i] > 1) {
                const missingNumber = directoryNumbers[i] + 1;
                missingNumbers.push(missingNumber.toString());
            }
        }

        // If there are missing numbers, return the smallest one
        if (missingNumbers.length > 0) {
            return missingNumbers[0];
        } else {
            // Otherwise, return the next number after the last directory
            return (directoryNumbers[directoryNumbers.length - 1] + 1).toString();
        }
    }

    useEffect(() => {
        fetchDir();
    }, []);

    useEffect(() => {
        if (findNextDirectory(files) !== 'NaN') {
            setDirectoryName(findNextDirectory(files));
        }
    }, [files]);

    useEffect(() => {
        // Define the URL of the Express route
        const url = 'http://localhost:3005/count-pages';

        // Make a GET request to the Express route
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                // Update state with the count of subdirectories
                setPageCount(data.count);
            })
            .catch(error => {
                console.error('Error fetching subdirectory count:', error);
            });
    }, [files]);

    // Function to fetch files
    const fetchFiles = (directory = '') => {
        setLoading(true);
        axios.get(`http://localhost:3005/files/${directory}`)
            .then(response => {
                const sortedDirectories = response.data.sort((a, b) => parseInt(a) - parseInt(b));
                setFiles(sortedDirectories);
                setCurrentDirectory(directory);
            })
            .catch(error => console.error('Error fetching files:', error))
            .finally(() => setLoading(false));
    };

    const fetchDir = (directory = '') => {
        setLoading(true);
        axios.get(`http://localhost:3005/directory${"?directory=" + directory}`)
            .then(response => {
                // Sort directory names so that larger numbers go to the bottom
                if (response.data !== "" && response.data !== "{}") {

                const sortedDirectories = response.data.sort((a, b) => parseInt(a) - parseInt(b));
                console.log(sortedDirectories);
                setFiles(sortedDirectories);
                setCurrentDirectory(directory);
                findNextDirectory(files);
            }
            })
            .catch(error => console.error('Error fetching files:', error))
            .finally(() => setLoading(false));
    };
    // Function to handle file click
    const handleFileClick = (fileName) => {
        setSelectedFile(fileName);
    };

    // Function to handle directory click
    const handleDirClick = (fileName) => {
        setSelectedFile("");
        fetchDir(fileName);
    };

    // Function to handle file upload
    const handleFileUpload = () => {
        fetchDir(directoryStack.pop())
        setLoading(true);
        const formData = new FormData();
        if (uploadImage) {
            formData.append('image', uploadImage);
        }
        if (uploadGif) {
            formData.append('gif', uploadGif);
        }
        if (uploadAudio) {
            // Append both Arabic and English audio files
            formData.append('audioEnglish', uploadAudio);
        }
        if(uploadAudioArabic){
            formData.append('audioArabic', uploadAudioArabic); // Assuming you have another state for Arabic audio file
        }
        axios.post('http://localhost:3005/upload', formData, { params: { directoryName } })
            .then(() => {
                // Reset file upload state variables
                setUploadImage(null);
                setUploadGif(null);
                setUploadAudio(null);
                setUploadAudioArabic(null); // Reset Arabic audio upload state variable
                // Reset text input state variables
                setCaptionEnglish('');
                setCaptionArabic('');
                setBeforeEnglish('');
                setBeforeArabic('');
                setAfterEnglish('');
                setAfterArabic('');
                // Reset directory name state variable
                setDirectoryName('');
                fetchFiles();
                saveTextInputs(directoryName); // Save text inputs after uploading files
            })
            .catch(error => console.error('Error uploading files:', error))
            .finally(() => setLoading(false));

        // Reset input elements
        document.getElementById('imageInput').value = ''; // Reset image input element
        document.getElementById('gifInput').value = ''; // Reset gif input element
        document.getElementById('audioInput').value = ''; // Reset English audio input element
        document.getElementById('arabicAudioInput').value = ''; // Reset Arabic audio input element
    };


    // Function to handle file delete
    const handleFileDelete = (fileName) => {
        setLoading(true);
        axios.delete(`http://localhost:3005/files/${fileName}`)
            .then(() => {
                setSelectedFile(null);
                fetchFiles();
            })
            .catch(error => console.error('Error deleting file:', error))
            .finally(() => setLoading(false));
    };

    // Function to handle directory delete
    const handleDirDelete = (fileName) => {
        setLoading(true);
        axios.delete(`http://localhost:3005/dir/${fileName}`)
            .then(() => {
                setSelectedFile(null);
                fetchFiles();
            })
            .catch(error => console.error('Error deleting file:', error))
            .finally(() => setLoading(false));
    };

    // Function to save text inputs
    const saveTextInputs = (dir) => {
        setLoading(true);
        const jsonData = {
            'caption-english': captionEnglish,
            'caption-arabic': captionArabic,
            'before-english': beforeEnglish,
            'before-arabic': beforeArabic,
            'after-english': afterEnglish,
            'after-arabic': afterArabic
        };
        axios.post(`http://localhost:3005/saveJsonData/${dir}`, jsonData)
            .then(() => {
                // Reset state variables for both languages
                setCaptionEnglish('');
                setCaptionArabic('');
                setBeforeEnglish('');
                setBeforeArabic('');
                setAfterEnglish('');
                setAfterArabic('');
            })
            .catch(error => console.error('Error saving text inputs:', error))
            .finally(() => setLoading(false));
    };

    return (
        <main id="dashboard">
            <h1 style={{lineHeight: "1em"}}>Dr Reem Story Portal</h1>
            <p style={{lineHeight: "0.5em", fontSize: "0.8em", marginBottom:"0"}}>Developed by Eng. Youssef AlNajdi</p>
            <div className="app">
                <div className="container">
                    <div className="upload-section">
                        <h2>Upload Files &amp; Text Inputs</h2>
                        <div>
                            <label>Image (PNG/JPEG)</label>
                            <input id="imageInput" type="file" accept="image/png, image/jpeg" onChange={(e) => setUploadImage(e.target.files[0])} />
                        </div>
                        <div>
                            <label>GIF</label>
                            <input id="gifInput" type="file" accept="image/gif" onChange={(e) => setUploadGif(e.target.files[0])} />
                        </div>
                        <p>Audio must be mp3 format, click to visit  <a target={"_blank"} href={"https://online-audio-converter.com/"}>Converter</a></p>
                        <div>
                            <label>English Audio</label>
                            <input id="audioInput" type="file" accept="audio/mp3" onChange={(e) => setUploadAudio(e.target.files[0])} />
                        </div>
                        <div>
                            <label>Arabic Audio</label>
                            <input id="arabicAudioInput" type="file" accept="audio/mp3" onChange={(e) => setUploadAudioArabic(e.target.files[0])} />
                        </div>
                        <label style={{ paddingRight: "1em"}}>CAPTIONS</label>
                        <textarea value={captionEnglish} onChange={(e) => setCaptionEnglish(e.target.value)} placeholder="Caption (English)" />
                        <br />
                        <textarea value={captionArabic} onChange={(e) => setCaptionArabic(e.target.value)} placeholder="Caption (Arabic)" />
                        <br />
                        <p>Entries are separated by slashes:  / or \</p>
                        <label style={{ paddingRight: "1em"}}>QUESTIONS before caption</label>
                        <textarea value={beforeEnglish} onChange={(e) => setBeforeEnglish(e.target.value)} placeholder="Before (English)" />
                        <br />
                        <textarea value={beforeArabic} onChange={(e) => setBeforeArabic(e.target.value)} placeholder="Before (Arabic)" />
                        <br />
                        <label style={{ paddingRight: "1em"}}>QUESTIONS after caption</label>
                        <textarea value={afterEnglish} onChange={(e) => setAfterEnglish(e.target.value)} placeholder="After (English)" />
                        <br />
                        <textarea value={afterArabic} onChange={(e) => setAfterArabic(e.target.value)} placeholder="After (Arabic)" />
                        <br /><br />
                        <label style={{display: "inline", paddingRight: "1em"}}> Page number</label>
                        <input  id={"dirchoice"} type="number" value={directoryName} onChange={(e) => setDirectoryName(e.target.value)} placeholder="Directory Name" />
                        <br /><br /><br />
                        <button className="upload-button" onClick={handleFileUpload}>Upload &amp; Save</button>
                    </div>

                    <div className="upload-section">
                        <h1>Story selector</h1>
                        <StoryDropdown fetchDirFunc = {fetchDir.bind(this)}/>
                        {currentDirectory && <button style = {{display: "inline", height: "1em", margin: "0"}} key={"delete-btn"} className={"back"} onClick={() => fetchDir(directoryStack.pop())}>⬅</button>}

                        {!currentDirectory && <h2 style = {{display: "inline"}}>Pages</h2>}
                        <p>{`Page count: ${pageCount? pageCount:0}`}</p>

                        <ul className="file-list">
                            {files != null && files.map(file => {
                                if (fileExtensions.every(extension => !file.includes(extension))) {
                                    return <li key={file} className={"dir"}>
                                        <button className={"view-page-button"} key={file} onClick={() => handleDirClick(file)}> {file} </button>
                                        <button className={"delete-button"} onClick={() => handleDirDelete(file)}>Delete</button>
                                    </li>
                                } else {
                                    return <li key={file} onClick={() => handleFileClick(file)}>{file}
                                        { !currentDirectory && <button
                                            className={"delete-button"} onClick={() => handleDirDelete(file)}>Delete</button>}
                                    </li>;
                                }
                            })}
                        </ul>

                        {selectedFile && (
                            <>
                                <h2>File Details</h2>
                                <div className="file-details">
                                    <h3>{selectedFile}</h3>

                                </div>
                                <FilePreview fileName={selectedFile} setJsonEditData={setJsonEditData} dir={currentDirectory} /> {/* Pass setJsonEditData as prop */}
                            </>
                        )}
                    </div>
                </div>
                {loading && <div className="loading-indicator"></div>}
            </div>
        </main>

    );
}

export default Dashboard;
