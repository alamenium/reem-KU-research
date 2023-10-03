import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAudio,
    setCaption,
    setAnimation,
    setAvatar,
} from '../slices/settingsSlice'; // Import your Redux actions
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import '../styles/settings.css'; // Import your custom CSS for this component
import gearImage from '../images/gear.png';

function Settings() {
    const dispatch = useDispatch();
    const { audio, caption, animation, avatar } = useSelector(
        (state) => state.settings
    );

    const [msg, setMsg] = useState('Save Changes');
    const [link, setLink] = useState('./story');
    const [text, setText] = useState('Story');

    const audioOn = () => {
        dispatch(setAudio('On'));
    };

    const audioOff = () => {
        dispatch(setAudio('Off'));
    };

    const english = () => {
        dispatch(setCaption('English'));
    };

    const arabic = () => {
        dispatch(setCaption('Arabic'));
    };

    const animationOn = () => {
        dispatch(setAnimation('On'));
    };

    const animationOff = () => {
        dispatch(setAnimation('Off'));
    };

    const avatarOn = () => {
        dispatch(setAvatar('On'));
        setLink("./avatar")
        setText("Avatar Creation")
    };

    const avatarOff = () => {
        dispatch(setAvatar('Off'));
        setLink("./story")
        setText("Story")
    };

    const saveChange = () => {
        setMsg('Changes Saved');
    };

    return (
        <div className="settings-container">

            <img src={gearImage} alt="Gear Right" className="gear-left" />
            <h2>Settings</h2>
            <div className="settings-group">
                <h5>Audio</h5>
                <Button
                    variant="secondary"
                    onClick={audioOn}
                    className={`${
                        audio === 'On' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    On
                </Button>
                <Button
                    variant="secondary"
                    onClick={audioOff}
                    className={`${
                        audio === 'Off' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    Off
                </Button>
            </div>

            <div className="settings-group">
                <h5>Closed Captioning</h5>
                <Button
                    variant="secondary"
                    onClick={english}
                    className={`${
                        caption === 'English' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    English
                </Button>
                <Button
                    variant="secondary"
                    onClick={arabic}
                    className={`${
                        caption === 'Arabic' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    Arabic
                </Button>
            </div>

            <div className="settings-group">
                <h5>Animation</h5>
                <Button
                    variant="secondary"
                    onClick={animationOn}
                    className={`${
                        animation === 'On' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    On
                </Button>
                <Button
                    variant="secondary"
                    onClick={animationOff}
                    className={`${
                        animation === 'Off' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    Off
                </Button>
            </div>

            <div className="settings-group">
                <h5>Avatar</h5>
                <Button
                    variant="secondary"
                    onClick={avatarOn}
                    className={`${
                        avatar === 'On' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    On
                </Button>
                <Button
                    variant="secondary"
                    onClick={avatarOff}
                    className={`${
                        avatar === 'Off' ? 'active-button' : 'inactive-button'
                    }`}
                >
                    Off
                </Button>
            </div>

            <Button variant="primary" onClick={saveChange} className="save-button">
                {msg}
            </Button>

            <div className="settings-info">
                <div className="default-settings">
                    <h5>Default</h5>
                    <p>
                        <div>Audio: Off</div>
                        <div>Caption: Arabic</div>
                        <div>Animation: Off</div>
                        <div>Avatar: Off</div>
                    </p>
                </div>
                <div className="current-settings">
                    <h5>Current</h5>
                    <p>
                        <div>Audio: {audio}</div>
                        <div>Caption: {caption}</div>
                        <div>Animation: {animation}</div>
                        <div>Avatar: {avatar}</div>
                    </p>
                </div>
            </div>

            <NavLink
                className="nav-link"
                exact
                to={link}
                activeClassName="nav-link-active"
            >
                <button className="story-button">{text}</button>
            </NavLink>


            <img src={gearImage} alt="Gear Right" className="gear-right" />
        </div>
    );
}

export default Settings;
