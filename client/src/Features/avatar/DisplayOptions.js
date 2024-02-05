import React, { useState , useEffect} from 'react';
import '../../styles/displayChoices.css';
import fileData from '../../folder_layout.json';

import { useDispatch, useSelector } from 'react-redux';

import { setFace, setColor, setHair,
    setEyes, setClothes,
    setSkin, setGlasses,
    setMouth, setNose , setCochlear} from "./avatarSlice";

function DisplayOptions({type, tabs}) {
    const dispatch = useDispatch();

    const {color, face } = useSelector((state) => state.avatar);
    // Define an array of facial feature image filenames
    const featureImages = fileData[type]["files"].filter(f=> type !== "hair" && type !== "face" && type !== "color"|| (f[f.length-5] !== "R" &&  f[f.length-5] !== "S"&&type!=="face"&& type !== "color")|| ( type !== "hair" && f.startsWith(color) && type !== "color") || (type === "color" && f.includes("less") && (face.includes("Round") && f.includes("Round") || face.includes("Square") && f.includes("Square") || face.includes("Skinny") && f.includes("Skinny") )));

    // State to track the selected facial feature and animation flag
    const [selectedFeature, setSelectedFeature] = useState(null);

    const tabSelect =( newTab)=>{
        tabs(newTab);
    }

    const handleSliceChange =(value)=>{
        value=`../images/avatar/${type}/${value}`
        let delay = 50;
        switch (type) {
            case "face":
                dispatch (setFace(value));
                setTimeout(()=>tabSelect("color"), delay);
                break;
            case "color":
                if(value.includes("light")) {
                    dispatch(setColor("light"));
                    dispatch (setFace(face.replace("dark", "light").replace("black", "light")));
                }else if(value.includes("dark")){
                    dispatch(setColor("dark"));
                    dispatch (setFace(face.replace("light", "dark").replace("black", "dark")));
                }else if(value.includes("black")){
                    dispatch(setColor("black"));
                    dispatch (setFace(face.replace("light", "black").replace("dark", "black")));
                }
                setTimeout(()=>tabSelect("clothes"), delay);

                break;
            case "hair":
                dispatch( setHair(value));
                setTimeout(()=>tabSelect("cochlear"), delay);
                break;
            case "cochlear":
                dispatch( setCochlear(value));
                setTimeout(()=>tabSelect("glasses"), delay);
                break;
            case "eyes":
                dispatch( setEyes(value));
                setTimeout(()=>tabSelect("hair"), delay);
                break;
            case "clothes":
                dispatch  (setClothes(value));
                setTimeout(()=>tabSelect("eyes"), delay);
                break;
            case "skin":
                dispatch  ( setSkin(value));
                setTimeout(()=>tabSelect("glasses"), delay);
                break;
            case "glasses":
                dispatch    (setGlasses(value));
                setTimeout(()=>tabSelect("mouth"), delay);
                break;
            case "mouth":
                dispatch    (setMouth(value));
                setTimeout(()=>tabSelect("nose"), delay);
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

                {(type === "hair"|| type==="cochlear" || type==="glasses" || type==="mouth") && <li key={"none"} className="feature-item">
                    <div
                        onClick={() => handleFeatureSelect("none")}
                        className={`feature-button ${selectedFeature === "none" ? 'selected' : ''}`}
                    >
                        <img
                            src={require(`../../images/cross.png`)}
                            alt={`Feature none`}
                            className="feature-image"
                        />
                    </div>
                </li>},
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
                ))},
            </ul>

        </div>
        </React.Fragment>
    );
}

export default DisplayOptions;
