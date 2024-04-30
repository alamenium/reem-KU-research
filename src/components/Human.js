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
import avatar from "../Features/avatar/Avatar";

function Human({d_on = false, d_text = "", full = false, back = false}){

    const { face, hair, eyes,cochlear, clothes, glasses, mouth, nose } = useSelector((state) => state.avatar);
    const [currHair, changeCurrHair] = useState("none");
    const { page , started } = useSelector((state) => state.story);
    const {audio, caption, animation, avatar, cap} = useSelector((state) => state.settings);

    useEffect(() => {
        if(full){
            document.getElementById("human").style.top="-2rem"
        }else{
            document.getElementById("human").style.top="2rem"}

            if(face.includes("Round"))
                changeCurrHair(hair.slice(0, hair.length-4)+"R.png");
            else if(face.includes("Square"))
                changeCurrHair(hair.slice(0, hair.length-4)+"S.png");
            else
                changeCurrHair(hair.slice(0, hair.length-4)+".png");

    }, [face, hair]);

    useEffect(()=>{
        if(back){
            document.getElementById("eyes").style.paddingLeft = "40px";
        }else{

            document.getElementById("eyes").style.paddingLeft = "0";
        }
    })
    return (
<div >
        <div id={"human"} style={{position: "relative"}}>
            {back === false && <img id={"face"} src={face} alt={""}/>}
            {back === true && <img id={"face"} src={`../images/avatar/backface/${face.includes("light")?"light": face.includes("dark")?"dark":"black"}.png`} alt={""}/>}

            {hair!=="none" && back === true &&  <img id={"hair"} src={currHair.replace("hair", "backHead").replace(".png", "B.png").replace("RB", "B").replace("BB", "B")} alt={""}/>}
            {hair!=="none" && back === false && !currHair.includes("6") &&  !currHair.includes("5") && <img id={"hair"} src={currHair} alt={""}/>}
            {hair!=="none" && back === false && (currHair.includes("6") || currHair.includes("5")) && <img id={"hairoffset"} src={currHair} alt={""}/>}
            {eyes!=="none" && back === false&& <img id={"eyes"} src={eyes} alt={""}/>}
            { (cochlear!=="none" && !back) && <img id={"cochlear"} src={cochlear} alt={""}/>}
            {clothes!=="none" && !full && <img id={"clothes"} src={clothes} alt={""}/>}
            {clothes!=="none" && full &&  <img id={"fullclothes"} src={clothes.replace("clothes", "full")} alt={""}/>}
            {glasses!=="none" && !back &&<img id={"glasses"} src={glasses} alt={""}/>}
             {mouth!=="none" && !back &&<img id={"mouth"} src={mouth} alt={""}/>}
            {nose!=="none" &&!back && <img id={"nose"} src={nose} alt={""}/>}
            {d_on && back === false && (d_text.length > 2) && <div style={{position: "relative", left: "-300px", top: "100px", fontSize: "1.5rem"}} className="message-container l">
                {d_text}
            </div>}
            {d_on && back === true && (d_text.length > 2) && <div style={{position: "relative", right: "-300px", top: "100px", fontSize: "1.5rem"}} className="message-container r">
                {d_text}
            </div>}
            {(page ===25) && (avatar === "On") && <div style={{position: "relative", right: "-300px", top: "100px", fontSize: "1.5rem"}} className="message-container r">
                {caption === "English"? "Be yourself, and let those who accept you, accept you.":"كن نفسك، وليتقبلك من يتقبلك"}
            </div>}
        </div>
</div>
    );
 }

 export default Human;