import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StoryDropdown({fetchDirFunc}) {
    const [selectedChoice, setSelectedChoice] = useState('');
    const [choices, setChoices] = useState([]);
    const [newChoice, setNewChoice] = useState('');

    useEffect(() => {
        fetchChoices();
        fetchSelectedChoice();
    }, []);

    // Function to fetch available choices
    const fetchChoices = () => {
        axios.get('http://localhost:3005/choices')
            .then(response => {
                setChoices(response.data);
            })
            .catch(error => console.error('Error fetching choices:', error));
    };
    const fetchSelectedChoice = () => {
        axios.get('http://localhost:3005/selectedChoice')
            .then(response => {
                setSelectedChoice(response.data.story);
            })
            .catch(error => console.error('Error fetching selected choice:', error));
    };

    // Function to handle selection change
    const handleSelectionChange = (event) => {
        // setSelectedChoice(event.target.value);
        console.log("select " + event.target.value)
        // if(event.target.value === "createNew") return
        handleSaveSelectedStory(event.target.value);

    };
    const handleSaveSelectedStory = (newSelection) => {
        console.log("selected " + newSelection)
            axios.post('http://localhost:3005/selectedChoice', { story: newSelection })
                .then(() => {
                    setSelectedChoice(newSelection);
                    console.log("newSelection: "+newSelection)
                    if(newSelection !== "createNew") {
                        fetchDirFunc();
                        console.log("fetchDirFunc()")
                    }
                })
                .catch(error => console.error('Error saving selected story:', error));

    };

    // Function to handle creation of a new choice
    const handleCreateNewChoice = () => {
        console.log("new choice: "+ newChoice)
        if (newChoice.trim() !== '') {
            setSelectedChoice(newChoice);
            axios.post('http://localhost:3005/choices', { choice: newChoice })
                .then(() => {
                    fetchChoices(); // Fetch updated list of choices
                    setNewChoice(''); // Reset new choice input
                    console.log("new choice inner "+ newChoice)
                    handleSaveSelectedStory(newChoice);
                })
                .catch(error => console.error('Error creating new choice:', error));
        }
    };

    const handleDeleteChoice = (choice) => {
        axios.delete(`http://localhost:3005/choices/${choice}`)
            .then(() => {
                fetchChoices(); // Fetch updated list of choices
                if (selectedChoice === choice) {
                    setSelectedChoice(''); // Reset selected choice if deleted
                    handleSaveSelectedStory('');
                    fetchDirFunc();
                }
            })
            .catch(error => console.error('Error deleting choice:', error));
    };

    return (
    <div id={"storySelect"}>
        <select value={selectedChoice} onChange={handleSelectionChange}>
            <option value="">Select an option</option>
            {choices.map(choice => (
                <option key={choice} value={choice}>{choice}</option>
            ))}
            <option value="createNew">Create New</option>
        </select>
        {selectedChoice === 'createNew' && (
            <div>
                <input id={"newstory"} placeholder={"Story Name"} type="text" value={newChoice} onChange={(e) => setNewChoice(e.target.value)} />
                <button onClick={handleCreateNewChoice}>Create</button>
            </div>
        )}
        {selectedChoice && <button style={{backgroundColor: "red"}} onClick={() => handleDeleteChoice(selectedChoice)}
                 disabled={!selectedChoice}>Delete selected Story</button>}

    </div>
);
}


export default StoryDropdown;
