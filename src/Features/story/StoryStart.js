import storyimg from "../../images/story/1-2.jpeg";
import React, {useEffect} from "react";
import "../../styles/story.css";
import {NavLink} from "react-router-dom";
import Human from "../../components/Human";
import {useSelector} from "react-redux";
function StoryStart(){

    useEffect(() => {
        document.querySelector("body").style.backgroundImage = "url('../images/bg-white.png')";
    },[]);

    const {caption, avatar} = useSelector((state) => state.settings);
    return (
        <div>
            <img className={"shadowed"} style={{visibility:"hidden"}} src={"../images/story/StartRead.png"} alt={""}/>
            <NavLink
                exact
                to={"../story"}
                style={{
                    position: "relative",
                    bottom: "150px"
                }}
            >
                <button className={"starbutton"} style={{background: "white", color: "black", textDecoration: "none !important", border: "black 4px solid"}}> Start!</button>
            </NavLink>

            {avatar==="On" && <Human full={true} d_on={"On"}
                    d_text={caption === "English" ? "I’m excited to read this story together! Lets start!" : "انا متحمس لقراءة هذه القصة معًا! هيا نبدأ!"}></Human>}
        </div>
    );
}

export default StoryStart;
