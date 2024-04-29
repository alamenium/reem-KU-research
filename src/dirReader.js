const fs = require('fs');
const path = require('path');

function isImageFile(filename) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    const ext = path.extname(filename).toLowerCase();
    return imageExtensions.includes(ext);
}

function readDirectory(directoryPath) {
    const items = fs.readdirSync(directoryPath);
    const result = {};

    items.forEach((item) => {
        const itemPath = path.join(directoryPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            // Recursively read subdirectories
            result[item] = readDirectory(itemPath);
        } else if (stat.isFile()) {
            if (isImageFile(item)) {
                if (!result.files) {
                    result.files = [];
                }
                result.files.push(item);
            }
        }
    });

    return result;
}

const folderPath = './images/avatar'; // Use your folder path here
const layout = readDirectory(folderPath);

const jsonFilePath = 'folder_layout.json'; // Specify the JSON file where the layout will be saved

fs.writeFileSync(jsonFilePath, JSON.stringify(layout, null, 2));
console.log(`Folder layout saved to ${jsonFilePath}`);
