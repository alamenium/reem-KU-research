import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilePreview = ({ fileName , dir}) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [jsonData, setJsonData] = useState(null);
    const [editedData, setEditedData] = useState(null);

    useEffect(() => {
        console.log("dir: "+dir)
        console.log("filename: "+fileName)
        if (fileName) {
            fetchPreviewUrl(fileName);
        }
    }, [fileName]);

    const fetchPreviewUrl = (fileName) => {
        axios.get(`http://localhost:3005/files/${dir}/${fileName}/preview`)
            .then(response => {
                setPreviewUrl(response.data.previewUrl.replace('files', 'uploads'));

                // Check if the previewed file is JSON
                if (fileName.endsWith('.json')) {
                    axios.get(response.data.previewUrl.replace('files', 'uploads'))
                        .then(response => {
                            console.log('JSON data response:', response.data);
                            setJsonData(response.data);
                            setEditedData({ ...response.data });
                        })
                        .catch(error => console.error('Error fetching JSON data:', error));
                }
            })
            .catch(error => console.error('Error fetching preview:', error));

    };

    const handleInputChange = (key, value) => {
        console.log(key + " " + value);
        let temp = jsonData;
        temp[key] = value;
        // Update editedData when input fields change
        setJsonData(prevState => (temp));
        console.log("edited data ");
        console.log(jsonData);
        applyChanges();
    };

    const applyChanges = () => {
        // Update the JSON file with the edited data
        axios.post('http://localhost:3005/saveJsonData/'+dir, jsonData)
            .then(() => {
                // Reset editedData after applying changes
                setJsonData({ ...jsonData });
            })
            .catch(error => console.error('Error applying changes:', error));
    };

    if (!previewUrl) return null;
    console.log("filename "+ fileName)
    // Render appropriate preview based on file type
    return (
        <div className="file-preview" key={"preview: " + fileName}>
            {previewUrl.includes('.pdf') ? (
                <embed src={previewUrl} width="100%" height="600" type="application/pdf" />
            ) : previewUrl.includes('.mp4') || previewUrl.includes('.mov') ? (
                <video controls width="100%">
                    <source src={previewUrl} type="video/mp4" />
                    <source src={previewUrl} type="video/quicktime" />
                    Your browser does not support the video tag.
                </video>
            ) : (previewUrl.includes('.wav') || previewUrl.includes('.mp3')|| previewUrl.includes('.m4a') ) ? (
                <audio controls key={"audio: " + fileName}>
                    <source  key={"audio1: " + fileName} src={previewUrl} type="audio/mpeg" />
                    <source  key={"audio2: " + fileName} src={previewUrl} type="audio/wav" />
                    <source  key={"audio3: " + fileName} src={previewUrl} type="audio/x-m4a" />
                    Your browser does not support the audio tag.
                </audio>
            ) : previewUrl.match(/\.(jpeg|jpg|png|gif|webp)$/) ? (
                <img src={previewUrl} alt="File Preview" />
            ) : (
                <div>

                    {jsonData && Object.keys(jsonData).map(key => (
                        <div key={key}>
                    <label>{key}</label>
                    <textarea
                        value={jsonData[key]}
                        onChange={e => handleInputChange(key, e.target.value)}
                    />
                </div>
            ))}
                </div>
            )}
        </div>
    );
};

export default FilePreview;
