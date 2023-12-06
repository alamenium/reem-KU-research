import faceSRC from "../images/avatar/face/darkRoundFace.png";
import '../styles/human.css';
import eyeSRC from "../images/avatar/eyes/basicGreen.png";
import clothesSRC from "../images/avatar/clothes/orange.png";
import glassesSRC from "../images/avatar/glasses/blue.png";
import mouthSRC from "../images/avatar/mouth/closed.png";
import noseSRC from "../images/avatar/nose/1.png";

import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import story from "../Features/story/Story";

function Human({d_on = false, d_text = "", full = false, back = true}){

    const { face, hair, eyes,cochlear, clothes, glasses, mouth, nose } = useSelector((state) => state.avatar);
    const [currHair, changeCurrHair] = useState("none");
    const { page , started } = useSelector((state) => state.story);
    useEffect(() => {
        if(full){
            document.getElementById("human").style.top="-5rem"
        }else{
            document.getElementById("human").style.top="2rem"}

            if(face.includes("Round"))
                changeCurrHair(hair.slice(0, hair.length-4)+"R.png");
            else if(face.includes("Square"))
                changeCurrHair(hair.slice(0, hair.length-4)+"S.png");
            else
                changeCurrHair(hair.slice(0, hair.length-4)+".png");

    }, [face, hair]);
    return (
<div >
        <div id={"human"} style={{position: "relative"}}>
            <img id={"face"} src={face} alt={""}/>
            {hair!=="none" && <img id={"hair"} src={currHair.replace("hair", "backHead").replace(".png", "B.png").replace("RB", "B").replace("BB", "B")} alt={""}/>}
            {eyes!=="none" && <img id={"eyes"} src={eyes} alt={""}/>}
            { (cochlear!=="none" && !back) && <img id={"cochlear"} src={cochlear} alt={""}/>}
            {clothes!=="none" && !full && <img id={"clothes"} src={clothes} alt={""}/>}
            {clothes!=="none" && full &&  <img id={"fullclothes"} src={clothes.replace("clothes", "full")} alt={""}/>}
            {glasses!=="none" && !back &&<img id={"glasses"} src={glasses} alt={""}/>}
            {mouth!=="none" && !back &&<img id={"mouth"} src={mouth} alt={""}/>}
            {nose!=="none" &&!back && <img id={"nose"} src={nose} alt={""}/>}
            {d_on && <div style={{position: "relative", left: "-300px", top: "100px", fontSize: "1.5rem"}} className="message-container">
                {d_text}
            </div>}
        </div>
</div>
    );
 }

 export default Human;