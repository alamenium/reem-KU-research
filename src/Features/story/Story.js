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
    const {currStory, pageCount} = useSelector((state) => state.story);
    const dispatch = useDispatch();
    const {page} = useSelector((state) => state.story);
    const beforeReading = (caption === "English")? beforeReadingE: beforeReadingA;
    const afterReading = (caption === "English")? afterReadingE: afterReadingA;

    const [before, setBefore] = useState(['']);
    const [after, setAfter] = useState(['']);
    const [captions, setCaptions] = useState(['']);
    const [maxPage, setMaxPage] = useState(999);


    const [rightDis, setRightDis] = useState(false);
    const [leftDis, setLeftDis] = useState(true);
    const [fileType, setFileType] = useState("jpg");
    const [dia_index, setDia_index] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch JSON data from wherever it is
                const response = await fetch(`/data/${page}`);
                const data = await response.json();

                // Set the state based on the parsed JSON data
                setBefore(data[`before-${caption}`]);
                setAfter(data[`after-${caption}`]);
                setCaptions(data[`captions-${caption}`]);
                console.log(after);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, [currStory, page, pageCount]); // Run once on component mount
    useEffect(() => {
        // Define the URL of the Express route
        const url = 'http://localhost:3005/count-pages';

        // Make a GET request to the Express route
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                // Update state with the count of subdirectories
                setMaxPage(Number(data.count));
            })
            .catch(error => {
                console.error('Error fetching subdirectory count:', error);
            });
    }, []);

    useEffect(() => {
        document.querySelector("body").style.backgroundImage = "url('../images/bg-white.png')";
    },[]);


    useEffect(()=>{
        setFileType("gif");
        if(audio==="On" )
        document.getElementById("voice").play();
    }, [page]);



    useEffect(()=>{
        if(((dia_index >= beforeReading[(page-1)/2].length)||avatar==="Off") && cap === 'On')
            if(document.getElementById("voice") !== null)
                document.getElementById("voice").play();
    }, [page])


    useEffect(()=>{
        setFileType("gif");

        if(((dia_index >= beforeReading[(page-1)/2].length)||avatar==="Off") && cap === 'On')
            if(document.getElementById("voice") !== null)
             document.getElementById("voice").play();
    }, [((dia_index >= beforeReading[(page-1)/2].length)||avatar==="Off") && cap === 'On'])
    const handleRightClick = () => {
        if((dia_index < (after.length + before.length))&& avatar==="On"){
            setDia_index(dia_index+1);
        }
        else {
            if (page < maxPage) {
                dispatch(setPage(page + 1));
                setLeftDis(false);
            } else if (page === maxPage) {
                dispatch(setPage(page + 1));
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
            if (page > 2) {
                setRightDis(false);
                dispatch(setPage(page - 1));
            } else if (page === 2) {
                setLeftDis(true)
                dispatch(setPage(page - 1));
            } else {
                setLeftDis(true)
            }
            setDia_index((after.length + before.length))
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
                        {audio === "On" && <audio id={"voice"} src={`./uploads/${page}/${caption.toLowerCase()}-audio.mp3`} />}
                        <div className={"image-fig"}     >
                            <img className={"story-image"} id={"jpgstory"} src={`./uploads/${page}/page.jpg`} onClick={()=>console.log(captions[Number(page)-1])} onLoad={()=>showhide(true)} alt={""}/>
                            {((dia_index >= before.length)||avatar==="Off") && <div className={"caption"} id={`a${page}`} key={2}>{captions[Number(page)-1]}</div>}
                        </div>
                        {animation === "On" && <img className={"story-image"} id={"gifstory"}  src={`./uploads/${page}/animated.gif`}
                                                    onLoad={() => {
                                                        showhide(false)
                                                    }} onError={() => showhide(true)} alt={""}/>}
                        {animation === "Off" && <span id={"gifstory"}></span>}
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
                        <button className={"starbutton"}  id ={"starrrr"}> End Story!</button>
                    </NavLink>}

                    {avatar==="On" &&<div>
                        <Human back={dia_index%3===0} full={true} d_on={dia_index !== beforeReading.length} d_text = {dia_index < beforeReading.length? beforeReading[dia_index]: dia_index === beforeReading.length? " ": afterReading[dia_index - 1 - beforeReading.length]} />
                    </div>}

                </div>

                );
                }

                export default Story;