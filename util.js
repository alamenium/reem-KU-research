const path = require('path');

// Function to generate preview URLs for different file types
const getPreviewUrl = (fileName, filePath) => {
    // Get file extension
    const fileExtension = path.extname(fileName).toLowerCase();

    const dir_file = path.join(filePath, fileName);
    // Check file type and return corresponding preview URL
    if (fileExtension === '.pdf') {
        // Assuming the PDF preview URL is accessible at a specific route
        return `http://localhost:3005/previews/${fileName}`;
    } else if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(fileExtension)) {
        // Assuming the image preview URL is the same as the file URL
        return dir_file;
    } else if (['.mp4', '.mov'].includes(fileExtension)) {
        // Assuming the video preview URL is the same as the file URL
        return dir_file;
    } else if (['.mp3', '.wav', '.m4a'].includes(fileExtension)) {
        // Assuming the audio preview URL is the same as the file URL
        return dir_file;
    } else if (fileExtension === '.json') {
        // Assuming the JSON preview URL is the same as the file URL
        return dir_file;
    } else {
        // Default case: return a placeholder or error message
        return 'http://localhost:3005/default-preview';
    }
};

module.exports = getPreviewUrl;
