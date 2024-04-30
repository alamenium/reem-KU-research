import storyimg from "../../images/story/1-2.jpeg";
import React, {useEffect, useState} from "react";
import "../../styles/story.css";
import Human from "../../components/Human";

import {setPage} from "./storySlice";
import {useDispatch, useSelector} from "react-redux";
import Caption from "./Captions"
import {NavLink, redirect} from "react-router-dom";

function Story(){
    const {audio, caption, animation, avatar, cap} = useSelector((state) => state.settings);
    const {currStory, pageCount} = useSelector((state) => state.story);
    const dispatch = useDispatch();
    const {page} = useSelector((state) => state.story);
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
                const response = await fetch(`/uploads/${page}/data.json`);
                const data = await response.json();
                console.log("data");
                console.log(data);
                console.log(caption);
                // Set the state based on the parsed JSON data
                setBefore(data[`before-${caption.toLowerCase()}`]);
                setAfter(data[`after-${caption.toLowerCase()}`]);
                setCaptions(data[`caption-${caption.toLowerCase()}`]);
                console.log(data[`caption-${caption.toLowerCase()}`]);
                console.log(after);
                console.log("page");
                console.log(page);
                console.log("caption");
                console.log(data);
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
        if(((dia_index >= before.length)||avatar==="Off") && cap === 'On')
            if(document.getElementById("voice") !== null)
                document.getElementById("voice").play();
    }, [page])


    useEffect(()=>{
        setFileType("gif");

        if(((dia_index >= before.length)||avatar==="Off") && cap === 'On')
            if(document.getElementById("voice") !== null)
             document.getElementById("voice").play();
    }, [((dia_index >= before.length)||avatar==="Off") && cap === 'On'])
    const handleRightClick = () => {
        console.log("going next: "+ dia_index);
        if((dia_index < (after.length + before.length))&& avatar==="On"){
            console.log("next dia")
            setDia_index(dia_index+1);
        }
        else {
             setDia_index(0);
             dispatch(setPage(page + 1));
        }
    }
    
    useEffect(()=>{
        setLeftDis((page === 1) );
        setRightDis((page === maxPage) && dia_index === (before.length + after.length -1));
    },[maxPage, page])
    const handleLeftClick = () => {

        if (dia_index > 0 && avatar === "On") {
            setDia_index(dia_index - 1);
        } else {
            setDia_index(0);
            dispatch(setPage(page - 1));
        }
    }
    const handleEndStory = (e) => {
        // Prevent the default behavior of the anchor tag
        e.preventDefault();
        // Open the link in a new tab
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfS_G17ZtscgaOqvN3YejNgLh64O8Sy7sMzV2USYXTwrZaOFw/viewform", '_blank');
        // Redirect the current page to the new URL
        window.location.href = "http://localhost:3005"; // Change this to the desired URL
    };
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
                        {audio === "On" && <audio id={"voice"} src={`/uploads/${page}/${caption.toLowerCase()}-audio.mp3`} />}
                        <div className={"image-fig"}     >
                            <img className={"story-image"} id={"jpgstory"} src={`/uploads/${page}/page.jpg`} onClick={()=>console.log(captions)} onLoad={()=>showhide(true)} alt={""}/>
                            {((dia_index >= before.length)||avatar==="Off") && <div className={"caption"} id={`a${page}`} key={2}>{captions}</div>}
                        </div>
                        {animation === "On" && <img className={"story-image"} id={"gifstory"}  src={`/uploads/${page}/animated.gif`}
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
                    {page === maxPage && <a
                        onClick={handleEndStory}
                        href={"https://docs.google.com/forms/d/e/1FAIpQLSfS_G17ZtscgaOqvN3YejNgLh64O8Sy7sMzV2USYXTwrZaOFw/viewform"}
                    >
                        <button className={"starbutton"}  id ={"starrrr"}>End Story!</button>
                    </a>}

                    {avatar==="On" &&<div>
                        <Human back={dia_index%3===0} full={true} d_on={dia_index !== before.length} d_text = {dia_index < before.length? before[dia_index]: dia_index === before.length? " ": after[dia_index - 1 - before.length]} />
                    </div>}

                </div>

                );
                }

export default Story;