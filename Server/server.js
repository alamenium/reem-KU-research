const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000; // Set your desired port number

// Serve static files from a directory (in this case, the JSON file)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
