import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FaceSelector from '../../temp_trash/FaceSelector';
import FaceSelect from '../../components/FaceSelect';
import EyesSelector from '../../temp_trash/EyesSelector';
import HairSelector from '../../temp_trash/HairSelector';
import ClothesSelector from '../../temp_trash/ClothesSelector';
import SkinColorSelector from '../../temp_trash/SkinColorSelector';
import avatarCSS from '../../styles/avatar.css';
import DisplayOptions from "./DisplayOptions";
import Human from "../../components/Human";
import white_bg from "../../images/img.png";
import {NavLink} from "react-router-dom";
function Avatar() {
    document.querySelector("body").style.backgroundImage = `url(${white_bg})`;
    const [activeTab, setActiveTab] = useState('face');
    const [clickedTab, setClickedTab] = useState('');

    const handleTabClick = (tabKey) => {
        setClickedTab(tabKey);
        setTimeout(() => {
            setActiveTab(tabKey);
            setClickedTab('');
        }, 0); // Delay for the same duration as the transition (0.3s)
    };

    useEffect(() => {
        // Clear the clickedTab state after a short delay
        const clearClickedTab = setTimeout(() => {
            setClickedTab('');
        }, 0);

        return () => clearTimeout(clearClickedTab);
    }, [clickedTab]);


    return (
        <main>
       <div id={"avatar"}>
           <NavLink
               className="nav-link"
               exact
               to={"../storystart"}
               activeClassName="nav-link-active"
           >

               <button className={"btn blue-btn"}>Story ></button>
           </NavLink>
           <Human/>
            <div className="button-container">
                <button
                    className={`btn ${activeTab === 'face' ? 'active' : ''} ${
                        clickedTab === 'face' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('face')}
                >
                    Face
                </button>
                <button
                    className={`btn ${activeTab === 'color' ? 'active' : ''} ${
                        clickedTab === 'color' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('color')}
                >
                    Skin Tone
                </button>

                <button
                    className={`btn ${activeTab === 'clothes' ? 'active' : ''} ${
                        clickedTab === 'clothes' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('clothes')}
                >
                    Clothes
                </button>
                <button
                    className={`btn ${activeTab === 'eyes' ? 'active' : ''} ${
                        clickedTab === 'eyes' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('eyes')}
                >
                    Eyes
                </button>
                <button
                    className={`btn ${activeTab === 'hair' ? 'active' : ''} ${
                        clickedTab === 'hair' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('hair')}
                >
                    Hair
                </button>


                <button
                    className={`btn ${activeTab === 'cochlear' ? 'active' : ''} ${
                        clickedTab === 'cochlear' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('cochlear')}
                >
                    Cochlear
                </button>
                <button
                    className={`btn ${activeTab === 'glasses' ? 'active' : ''} ${
                        clickedTab === 'glasses' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('glasses')}
                >
                    Glasses
                </button>
                <button
                    className={`btn ${activeTab === 'mouth' ? 'active' : ''} ${
                        clickedTab === 'mouth' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('mouth')}
                >
                    Mouth
                </button>
                <button
                    className={`btn ${activeTab === 'nose' ? 'active' : ''} ${
                        clickedTab === 'nose' ? 'changed' : ''
                    }`}
                    onClick={() => handleTabClick('nose')}
                >
                    Nose
                </button>

            </div>

        {/* Render the selected tab's content here */}
       <DisplayOptions className={"displayChoices"} type={activeTab} tabs = {handleTabClick}/>

      </div>
        </main>
  );
}

export default Avatar;


