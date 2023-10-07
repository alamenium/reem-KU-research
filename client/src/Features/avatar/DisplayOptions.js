import React, { useState , useEffect} from 'react';
import '../../styles/displayChoices.css';
import fileData from '../../folder_layout.json';

import { useDispatch, useSelector } from 'react-redux';

import { setFace, setHair,
    setEyes, setClothes,
    setSkin, setGlasses,
    setMouth, setNose } from "./avatarSlice";

function DisplayOptions({type}) {
    const dispatch = useDispatch();


    // Define an array of facial feature image filenames
    const featureImages = fileData[type]["files"].filter(f=> type !== "hair" || (f[f.length-5] !== "R" &&  f[f.length-5] !== "S"));

    // State to track the selected facial feature and animation flag
    const [selectedFeature, setSelectedFeature] = useState(null);

    const handleSliceChange =(value)=>{
        value=`../images/avatar/${type}/${value}`
        switch (type) {
            case "face":
                dispatch (setFace(value));
                break;
            case "hair":
                dispatch( setHair(value));
                break;
            case "eyes":
                dispatch( setEyes(value));
                break;
            case "clothes":
                dispatch  (setClothes(value));
                break;
            case "skin":
                dispatch  ( setSkin(value));
                break;
            case "glasses":
                dispatch    (setGlasses(value));
                break;
            case "mouth":
                dispatch    (setMouth(value));
                break;
            case "nose":
                dispatch  (setNose(value));
        }
    }

    // Function to handle the selection of a feature
    const handleFeatureSelect = (feature) => {
        handleSliceChange(feature);
        setSelectedFeature(feature);
    };

    return (
        <React.Fragment>
        {/*<div>*/}
        {/*    {selectedFeature && (*/}
        {/*        <div className={`selected-feature ${animationFlag ? 'animate' : ''}`}>*/}
        {/*            <h3 className="theme-text">Selected Facial Feature</h3>*/}
        {/*            <img*/}
        {/*                src={require(`../images/avatar/face/${selectedFeature}`)}*/}
        {/*                alt={`Selected Feature`}*/}
        {/*                className="selected-feature-image"*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*</div>*/}
        <div  className={"displayChoices"}>
            <ul className="feature-list">
                {featureImages.map((imageName, index) => (
                    <li key={index} className="feature-item">
                        <div
                            onClick={() => handleFeatureSelect(imageName)}
                            className={`feature-button ${selectedFeature === imageName ? 'selected' : ''}`}
                        >
                            <img
                                src={require(`../../images/avatar/${type}/${imageName}`)}
                                alt={`Feature ${index + 1}`}
                                className="feature-image"
                            />
                        </div>
                    </li>
                ))}
            </ul>

        </div>
        </React.Fragment>
    );
}

export default DisplayOptions;
