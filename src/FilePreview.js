import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilePreview = ({ fileName , dir}) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [jsonData, setJsonData] = useState(null);
    const [editedData, setEditedData] = useState(null);

    useEffect(() => {
        console.log("dir: "+dir)
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
        // Update editedData when input fields change
        setEditedData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const applyChanges = () => {
        // Update the JSON file with the edited data
        axios.post('http://localhost:3005/saveJsonData', editedData)
            .then(() => {
                // Reset editedData after applying changes
                setEditedData({ ...jsonData });
            })
            .catch(error => console.error('Error applying changes:', error));
    };

    if (!previewUrl) return null;

    // Render appropriate preview based on file type
    return (
        <div className="file-preview">
            {previewUrl.includes('.pdf') ? (
                <embed src={previewUrl} width="100%" height="600" type="application/pdf" />
            ) : previewUrl.includes('.mp4') || previewUrl.includes('.mov') ? (
                <video controls width="100%">
                    <source src={previewUrl} type="video/mp4" />
                    <source src={previewUrl} type="video/quicktime" />
                    Your browser does not support the video tag.
                </video>
            ) : previewUrl.includes('.wav') || previewUrl.includes('.mp3')|| previewUrl.includes('.m4a') ? (
                <audio controls>
                    <source src={previewUrl} type="audio/mpeg" />
                    <source src={previewUrl} type="audio/wav" />
                    <source src={previewUrl} type="audio/x-m4a" />
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
                        value={editedData[key]}
                        readOnly
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
