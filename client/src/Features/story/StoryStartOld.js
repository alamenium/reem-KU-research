import storyimg from "../../images/story/1-2.jpeg";
import React, {useEffect} from "react";
import "../../styles/story.css";
import {NavLink} from "react-router-dom";
function StoryStart(){

    useEffect(() => {
        document.querySelector("body").style.backgroundImage = "url('../images/bg-white.png')";
    },[]);

    return (
        <div>
            <div className={"overlay"}></div>
            <img className={"shadowed"} src={"../images/story/StartRead.png"} alt={""}/>
            <NavLink
                exact
                to={"../story"}
            >
                <button className={"starbutton"}> Start!</button>
            </NavLink>

        </div>
    );
}

export default StoryStart;
