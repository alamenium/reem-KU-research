import storyimg from "../../images/story/1-2.jpeg";
import React, {useEffect, useState} from "react";
import "../../styles/story.css";
import Human from "../../components/Human";

import {setPage} from "./storySlice";
import {useDispatch, useSelector} from "react-redux";
import Caption from "./Captions"
import {NavLink} from "react-router-dom";
import {afterReadingE, beforeReadingE, afterReadingA, beforeReadingA} from "./Questions";

function Story(){
    const {audio, caption, animation, avatar, cap} = useSelector((state) => state.settings);
    const dispatch = useDispatch();
    const {page} = useSelector((state) => state.story);
    const beforeReading = (caption === "English")? beforeReadingE: beforeReadingA;
    const afterReading = (caption === "English")? afterReadingE: afterReadingA;
    useEffect(() => {
        document.querySelector("body").style.backgroundImage = "url('../images/bg-white.png')";
    },[]);

    useEffect(()=>{
        setFileType("gif");
        if(audio==="On")
        document.getElementById("voice").play();
    }, [page])
    const [rightDis, setRightDis] = useState(false);
    const [leftDis, setLeftDis] = useState(true);
    const [fileType, setFileType] = useState("jpg");
    const [dia_index, setDia_index] = useState(0);

    const handleRightClick = () => {
        if((dia_index < (afterReading[(page-1)/2].length + beforeReading[(page-1)/2].length))&& avatar==="On"){
            setDia_index(dia_index+1);
        }
        else {
            if (page < 23) {
                dispatch(setPage(page + 2));
                setLeftDis(false);
            } else if (page === 23) {
                dispatch(setPage(page + 2));
                setRightDis(true);
            } else {
                setRightDis(true)
            }
            setDia_index(0);
        }
    }
    const handleLeftClick = () => {

        if(dia_index > 0&& avatar==="On"){
            setDia_index(dia_index-1);
        }
        else{
            if (page > 3) {
                setRightDis(false);
                dispatch(setPage(page - 2));
            } else if (page === 3) {
                setLeftDis(true)
                dispatch(setPage(page - 2));
            } else {
                setLeftDis(true)
            }
            setDia_index((afterReading[(page - 1) / 2].length + beforeReading[(page - 1) / 2].length))
        }    }

    const showhide = (hide)=>{
        if(!hide){
            document.getElementById("jpgstory").style.display = "none";
            document.getElementById("gifstory").style.display = "block";
        }
        else{
            document.getElementById("jpgstory").style.display = "block";
            document.getElementById("gifstory").style.display = "none";
        }
    }
    return (
        <div>
            <div id={"boxstory"}>
                {audio==="On"  && <audio id={"voice"} src={`../audio/${caption.toLowerCase()}/${page}.mp3`} />}
                <img className={"story-image"} id={"jpgstory"} src={`../images/story/${page}-${page+1}.jpg`} onLoad={()=>showhide(true)} alt={""}/>
                {animation === "On" && <img className={"story-image"} id={"gifstory"} src={`../images/story/${page}-${page + 1}.gif`}
                      onLoad={() => {
                          showhide(false)
                      }} onError={() => showhide(true)} alt={""}/>}
                {animation === "Off" && <span id={"gifstory"}></span>}
                {((dia_index >= beforeReading[(page-1)/2].length)||avatar==="Off") && cap === 'On' &&<Caption/>}
                <div id={"button-container"}>
                    <button id={"back-button"}  className={"float-left"} onClick={handleLeftClick}>
                       <img src={"../images/button.webp"}/>
                    </button>
                    {leftDis&&<div className={"btn-disabled float-left left-dis"}></div>}

                    <button id={"right-button"} className={"float-right"} onClick={handleRightClick}>
                        <img src={"../images/button.webp"}/>
                    </button>
                    {rightDis&&<div className={"btn-disabled float-right right-dis"}></div>}

                </div>
            </div>
            {page === 25 && <NavLink
                exact
                to={"https://docs.google.com/forms/d/1m13GS18t5CUwHnHGbTj1eMIagBw-dVQ_Bg_Y6OjcrN0/edit"}
            >
                <button className={"starbutton"}> End Story!</button>
            </NavLink>}

            {avatar==="On" &&<div>
                <Human back={dia_index%3==0} full={true} d_on={dia_index !== beforeReading[(page-1)/2].length} d_text = {dia_index < beforeReading[(page-1)/2].length? beforeReading[(page-1)/2][dia_index]: dia_index === beforeReading[(page-1)/2].length? " ": afterReading[(page-1)/2][dia_index - 1 - beforeReading[(page-1)/2].length]} />
            </div>}

        </div>

    );
}

export default Story;
