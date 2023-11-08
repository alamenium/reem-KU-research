import React, { useState } from 'react';
import '../styles/displayChoices.css';
function FaceSelector({type}) {
    // Define an array of facial feature image filenames
    const facialFeatureImages = ['darkRoundFace.png', 'lightRoundFace.png', 'darkSkinny.png', 'lightSkinny.png', 'darkSquare.png', 'lightSquare.png'];

    // State to track the selected facial feature and animation flag
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [animationFlag, setAnimationFlag] = useState(false);

    // Function to handle the selection of a feature
    const handleFeatureSelect = (feature) => {
        setSelectedFeature(feature);
        setAnimationFlag(true); // Trigger the animation
        setTimeout(() => {
            setAnimationFlag(false); // Reset the animation flag after a short delay
        }, 500); // Adjust the duration to match the animation duration in CSS
    };

    return (
        <div>
            <h2 className="theme-text">Facial Features</h2>
            <ul className="feature-list">
                {facialFeatureImages.map((imageName, index) => (
                    <li key={index} className="feature-item">
                        <div
                            onClick={() => handleFeatureSelect(imageName)}
                            className={`feature-button ${selectedFeature === imageName ? 'selected' : ''}`}
                        >
                            <img
                                src={require(`../images/avatar/face/${imageName}`)}
                                alt={`Feature ${index + 1}`}
                                className="feature-image"
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                {selectedFeature && (
                    <div className={`selected-feature ${animationFlag ? 'animate' : ''}`}>
                        <h3 className="theme-text">Selected Facial Feature</h3>
                        <img
                            src={require(`../images/avatar/face/${selectedFeature}`)}
                            alt={`Selected Feature`}
                            className="selected-feature-image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FaceSelector;
