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
            <img className={"shadowed"} style={{visibility:"hidden"}} src={"../images/story/StartRead.png"} alt={""}/>
            <NavLink
                exact
                to={"../story"}
            >
                <button className={"starbutton"} style={{background: "white", color: "black", textDecoration: "none !important", border: "black 4px solid"}}> Start!</button>
            </NavLink>

        </div>
    );
}

export default StoryStart;
