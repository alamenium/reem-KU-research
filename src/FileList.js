import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
    const [path, setPath] = useState('');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFiles();
    }, [path]);

    const fetchFiles = () => {
        setLoading(true);
        axios.get(`http://localhost:3005/files/`)
            .then(response => setFiles(response.data))
            .catch(error => console.error('Error fetching files:', error))
            .finally(() => setLoading(false));
    } ;

    const navigateToDirectory = (directory) => {
        setPath(directory);
    };

    const renderFileIcon = (type) => {
        switch (type) {
            case 'directory':
                return <i className="fa fa-folder"></i>;
            case 'image/jpeg':
            case 'image/png':
                return <i className="fa fa-file-image"></i>;
            case 'application/pdf':
                return <i className="fa fa-file-pdf"></i>;
            default:
                return <i className="fa fa-file"></i>;
        }
    };

    return (
        <div>
            <h2>Files - {path || 'root'}</h2>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ul>
                    {path && (
                        <li onClick={() => navigateToDirectory('')}>
                            <i className="fa fa-level-up"></i> Parent Directory
                        </li>
                    )}
                    {files.map((file, index) => (
                        <li key={index} onClick={() => navigateToDirectory(file.name)}>
                            {renderFileIcon(file.type)} {file.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileList;
