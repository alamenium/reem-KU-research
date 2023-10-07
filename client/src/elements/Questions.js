import { NavLink } from "react-router-dom";
import { useAuth } from "../util/authContext";
import "../../../the-new-student-server-main/client/src/styles/animations.css"
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6


import { useEffect, useState } from "react";



import Enpg1  from "../../../the-new-student-server-main/client/src/audio/english/P1_E.mp3";
import Enpg2  from "../../../the-new-student-server-main/client/src/audio/english/P3_E.mp3";
import Enpg3  from "../../../the-new-student-server-main/client/src/audio/english/P5_E.mp3";
import Enpg4  from "../../../the-new-student-server-main/client/src/audio/english/P7_E.mp3";
import Enpg5  from "../../../the-new-student-server-main/client/src/audio/english/P9_E.mp3";
import Enpg6  from "../../../the-new-student-server-main/client/src/audio/english/P11_E.mp3";
import Enpg7  from "../../../the-new-student-server-main/client/src/audio/english/P14_E.mp3";
import Enpg8  from "../../../the-new-student-server-main/client/src/audio/english/P15_E.mp3";
import Enpg9  from "../../../the-new-student-server-main/client/src/audio/english/P18_E.mp3";
import Enpg10  from "../../../the-new-student-server-main/client/src/audio/english/P20_E.mp3";
import Enpg11  from "../../../the-new-student-server-main/client/src/audio/english/P22_E.mp3";
import Enpg12  from "../../../the-new-student-server-main/client/src/audio/english/P24_E.mp3";

import Apg1  from "../../../the-new-student-server-main/client/src/audio/arabic/P1_A.mp3";
import Apg2  from "../../../the-new-student-server-main/client/src/audio/arabic/P3_A.mp3";
import Apg3  from "../../../the-new-student-server-main/client/src/audio/arabic/P5_A.mp3";
import Apg4  from "../../../the-new-student-server-main/client/src/audio/arabic/P7_A.mp3";
import Apg5  from "../../../the-new-student-server-main/client/src/audio/arabic/P9_A.mp3";
import Apg6  from "../../../the-new-student-server-main/client/src/audio/arabic/P11_A.mp3";
import Apg7  from "../../../the-new-student-server-main/client/src/audio/arabic/P14_A.mp3";
import Apg8  from "../../../the-new-student-server-main/client/src/audio/arabic/P15_A.mp3";
import Apg9  from "../../../the-new-student-server-main/client/src/audio/arabic/P18_A.mp3";
import Apg10  from "../../../the-new-student-server-main/client/src/audio/arabic/P20_A.mp3";
import Apg11  from "../../../the-new-student-server-main/client/src/audio/arabic/P22_A.mp3";
import Apg12  from "../../../the-new-student-server-main/client/src/audio/arabic/P24_A.mp3";


function Questions(props){
    
    
    const[text,setText]=useState("");
    const[animated,setAnimated]=useState("")
    const[language,setLanguage]=useState("")
    const[playbutton,setPlaybutton]=useState();
    const[message, setMessage]=useState();
    useEffect(()=>{
        setLanguage(props.language)
        console.log(props.audio);
       if(props.audio == "on"){
        setMessage("play audio")
       }
       else{
        setMessage("next")
       }
    },[props.language]);
    //this is sound
    const PlaySound=(page)=>{
        if (props.audio=="on"){
            
        switch (page){
            case 1:
                console.log("PLZ JESU????? ")
                if(language=="arabic"){
                    var sound= new Audio(Apg1);
                    sound.play();
                   
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg1);
                    sound.play();
                    console.log("PLZ JESUS ")
                }
                break;

            case 2:
                if(language=="arabic"){
                    var sound= new Audio(Apg2);
                    sound.play();
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg2);
                    sound.play();
                }
                break;
            case 3:
                if(language=="arabic"){
                    var sound= new Audio(Apg3);
                    sound.play();
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg3);
                    sound.play();
                }
                break;
            
            case 4:
                if(language=="arabic"){
                    var sound= new Audio(Apg4);
                    sound.play();
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg4);
                    sound.play();
                }
                break;
            case 5:
                if(language=="arabic"){
                    var sound= new Audio(Apg5);
                    sound.play();
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg5);
                    sound.play();
                }
                break;
            case 6:
                if(language=="arabic"){
                    var sound= new Audio(Apg6);
                    sound.play();
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg6);
                    sound.play();
                }
                break;
            case 7:
                if(language=="arabic"){
                    var sound= new Audio(Apg7);
                    sound.play();
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg7);
                    sound.play();
                }
                break;
            case 8:
                if(language=="arabic"){
                    var sound= new Audio(Apg8);
                    sound.play();
                }
                else if(language=="english"){
                    var sound= new Audio(Enpg8);
                    sound.play();
                }
                break;
            case 9:
            if(language=="arabic"){
                var sound= new Audio(Apg9);
                sound.play();
            }
            else if(language=="english"){
                var sound= new Audio(Enpg9);
                sound.play();
            }
            break;
            case 10:
            if(language=="arabic"){
                var sound= new Audio(Apg10);
                sound.play();
            }
            else if(language=="english"){
                var sound= new Audio(Enpg10);
                sound.play();
            }
            break;
            case 11:
            if(language=="arabic"){
                var sound= new Audio(Apg11);
                sound.play();
            }
            else if(language=="english"){
                var sound= new Audio(Enpg11);
                sound.play();
            }
            break;
            case 12:
            if(language=="arabic"){
                var sound= new Audio(Apg12);
                sound.play();
            }
            else if(language=="english"){
                var sound= new Audio(Enpg12);
                sound.play();
            }
            break;
        }
    }
    }

    if(props.animated =="on"){
        console.log("can i ?");
    }
    //2nd set of questions without delay
    const questionsnoDelay=()=>{
        
        switch(props.page){
            case 1:
           setText(null);
           if(language=="arabic"){
        
                setText(<div className="questions fadeIn">
                        
                <p> ما رأيك؟ هل خطرت في بالك أي أفكار؟</p>
                <p> انظر الى وجوههم؟ هل انتبهت لشيء ما؟</p>
             </div>);
          
           }
           else{
             
                setText(<div className="questions fadeIn">

                <p>What do you think? Any thoughts?</p>
                <p>Look at their faces? Can you tell anything?</p>
                
                 </div>);
           }
            break;
            case 2:
           setText(null);
           if(language=="arabic"){
        
                setText(<div className="questions fadeIn">
                        
                <p>لا يمكننا فعلا معرفة ما يشعر به لكن </p>
                <p>  هل يمكنك أن تخمن ما يشعر به؟  أظن ..</p>


             </div>);
          
           }
           else{
             
                setText(<div className="questions fadeIn">

                <p>What do you think he’s feeling?</p>
                <p>Can you guess what he’s might be feeling? I think ..</p>
                
                 </div>);
           }
            break;
            case 3:
                setText(null);
                if(language=="arabic"){
             
                     
               
                }
                else{
                  
                    
                }
                 break;
            case 4 :
                setText(null);
                if(language=="arabic"){
                    setText(<div className="questions fadeIn">
                             
                     <p> ماذا تظن أنه يشعر؟ </p>
                     <p>  هل تظن أن الآخرين يعرفون كيف يشعر ويتجاهلونه؟ </p>
                     <p>    بعد الجواب: ربما. لا يمكننا إلا أن نخمن، حتى نعرف المزيد.</p>
    
                 </div>);

                }
                else{
                    setText(<div className="questions fadeIn">
     
                    <p>What do you think he is feeling?</p>
                    <p>Do you think the others know how he feels and </p>
                    <p> they are ignoring him?</p>
                    <p>
                    Maybe. We can only guess, until we know more.
                    </p>
                     </div>);
                }
                 break;

            case 5 :
                setText(null);
                if(language=="arabic"){
                 

                }
                else{
                 
                }
                 break;
                
            case 6 :
                setText(null);
                if(language=="arabic"){
                   

                }
                else{
                   
                }
                break;
            case 7 :
                setText(null);
                if(language=="arabic"){
                 

                }
                else{
                    
                }
            break;
            case 8:
                setText(null);
                if(language=="arabic"){
                    setText(<div className="questions fadeIn">
                             
                    <p>  ما هو شعورك حيال ما عرفته للتو؟</p>
                     <p>  هل تفاجأت؟</p>
                     <p>بعد الإجابة: في بعض الأحيان لا يمكننا تخمين الأشياء بشكل صحيح ، يجب أن ننتظر حتى نتعلم المزيد</p>
                     <p> لنتأكد من تخميننا. </p>
                     <p> هل عجبك ما فعله حسن؟</p>
    
                 </div>);

                }
                else{
                    setText(<div className="questions fadeIn">
                             
                    <p>How do you feel about what you just learned?</p>
                    <p>Were you surprised? Sometimes we can’t guess things correctly,</p>
                    <p>we must wait until we learn more and know for sure. </p>
                    <p>Do you like what Hasan did? </p>
    
                 </div>);
                    
                }
            break;

            case 9:
                setText(null);
                if(language=="arabic"){
                 

                }
                else{
                  
                    
                }
            break;
            case 10:
                setText(null);
                if(language=="arabic"){
                

                }
                else{
                   
                    
                }
            break;
            case 11:
                setText(null);
                if(language=="arabic"){
                  
                    setText(<div className="questions fadeIn">
                                
                    <p>ماذا تظن أنه يشعر به الآن بعد أن تعلمت المزيد؟ </p>
                    <p>  لماذا تعتقد ذلك؟</p>
    
                 </div>);
                }
                else{
                    setText(<div className="questions fadeIn">
                                 
                    <p>What do you think he’s feeling now after you learned more?</p>
                    <p>Why do you think so?</p>
    
                 </div>);
                    
                }
            break;

            case 12:
                setText(null);
                if(language=="arabic"){
                    setText(<div className="questions fadeIn">
                             
                     <p>أوّل يوم في مدرستي الجديدة، دخلت  </p>
                     <p> الطلاّب جالسون رحّبت بي </p>
    
                 </div>);

                }
                else{
                    setText(<div className="questions fadeIn">
                             
                    <p>What do you remember most from the story?</p>
                    <p>What did you like or not like?</p>
                 
    
                 </div>);
                    
                }
            break;

                 
            
        }
    }
    //this is second set of questions with delay
    const questDelay=()=>{
        switch(props.page){
            case 1:
           setText(null);
           if(language=="arabic"){
           
            setTimeout(() => {
                        
                    
                setText(<div className="questions fadeIn">
                        
                <p> ما رأيك؟ هل خطرت في بالك أي أفكار؟</p>
                <p> انظر الى وجوههم؟ هل انتبهت لشيء ما؟</p>

             </div>);
                }, 25000)
           }
           else{
            setTimeout(() => {    
                setText(<div className="questions fadeIn">

                <p>What do you think? Any thoughts?</p>
                <p>Look at their faces? Can you tell anything?</p>
                
                 </div>);
                }, 28000)
           }
            break;
            case 2:
           setText(null);
           if(language=="arabic"){
           
            setTimeout(() => {
                        
                    
                setText(<div className="questions fadeIn">
                        
                <p>لا يمكننا فعلا معرفة ما يشعر به لكن </p>
                <p>  هل يمكنك أن تخمن ما يشعر به؟  أظن ..</p>

             </div>);
                }, 35000)
           }
           else{
            setTimeout(() => {    
                setText(<div className="questions fadeIn">

                <p>What do you think he’s feeling?</p>
                <p>Can you guess what he’s might be feeling? I think ..</p>
                
                 </div>);
                }, 32000)
           }
            break;
            case 3:
           setText(null);
           if(language=="arabic"){
           
            
           }
           else{
            
           }
            break;

            case 4:
                setText(null);
                if(language=="arabic"){
                
                 setTimeout(() => {
                             
                         
                     setText(<div className="questions fadeIn">
                             
                     <p> ماذا تظن أنه يشعر؟ </p>
                     <p>  هل تظن أن الآخرين يعرفون كيف يشعر ويتجاهلونه؟ </p>
                     <p>    بعد الجواب: ربما. لا يمكننا إلا أن نخمن، حتى نعرف المزيد.</p>
     
                  </div>);
                     }, 25000)
                }
                else{
                 setTimeout(() => {    
                    setText(<div className="questions fadeIn">
     
                    <p>What do you think he is feeling?</p>
                    <p>Do you think the others know how he feels and </p>
                    <p> they are ignoring him?</p>
                    <p>
                    Maybe. We can only guess, until we know more.
                    </p>
                     </div>);
                     }, 20000)
                }
                 break;

            case 5:
                setText(null);
                if(language=="arabic"){         
                         
                    
                }
                else{
                 
                }
                 break;
            case 6:
                    setText(null);
                    if(language=="arabic"){
                    
                     
                    }
                    else{
                   
                    }
            break;
            case 7:
                        setText(null);
                        if(language=="arabic"){
                        
                        
                        }
                    else{
                         
                    }
            break;

            case 8:
                setText(null);
                if(language=="arabic"){
                
                 setTimeout(() => {
                             
                         
                     setText(<div className="questions fadeIn">
                             
                     <p>  ما هو شعورك حيال ما عرفته للتو؟</p>
                     <p>  هل تفاجأت؟</p>
                     <p>بعد الإجابة: في بعض الأحيان لا يمكننا تخمين الأشياء بشكل صحيح ، يجب أن ننتظر حتى نتعلم المزيد</p>
                     <p> لنتأكد من تخميننا. </p>
                     <p> هل عجبك ما فعله حسن؟</p>
     
                  </div>);
                     }, 64200)
                }
                else{
                 setTimeout(() => {    
                    setText(<div className="questions fadeIn">
                             
                    <p>How do you feel about what you just learned?</p>
                    <p>Were you surprised? Sometimes we can’t guess things correctly,</p>
                    <p>we must wait until we learn more and know for sure. </p>
                    <p>Do you like what Hasan did? </p>
    
    
                 </div>);
                     }, 57000)
                }
                 break;
            case 9:
                setText(null);
                if(language=="arabic"){
                    
                    
                }
                else{
                     
                }
            break;

            case 10:
                setText(null);
                if(language=="arabic"){
                    
                    
                }
                else{
                     
                }
            break;

            case 11:
                setText(null);
                if(language=="arabic"){
                    setTimeout(() => {
                             
                         
                        setText(<div className="questions fadeIn">
                                
                        <p>ماذا تظن أنه يشعر به الآن بعد أن تعلمت المزيد؟ </p>
                        <p>  لماذا تعتقد ذلك؟</p>
        
                     </div>);
                        }, 17000)
                    
                }
                else{
                    setTimeout(() => {    
                        setText(<div className="questions fadeIn">
                                 
                        <p>What do you think he’s feeling now after you learned more?</p>
                        <p>Why do you think so?</p>
        
                     </div>);
                         }, 18000)

                }
            break;

            case 12:
                setText(null);
                if(language=="arabic"){
                
                 setTimeout(() => {
                             
                         
                     setText(<div className="questions fadeIn">
                             
                     <p>أوّل يوم في مدرستي الجديدة، دخلت  </p>
                     <p> الطلاّب جالسون رحّبت بي </p>
     
                  </div>);
                     }, 17000)
                }
                else{
                 setTimeout(() => {    
                    setText(<div className="questions fadeIn">
                             
                    <p>What do you remember most from the story?</p>
                    <p>What did you like or not like?</p>
    
                 </div>);
                     }, 18000)
                }
                 break;
            
                 
        }
    }
    //this is the questions that appear before page
    useEffect(() => {
        setAnimated(props.animated);
        
        switch (props.page){
            case 1:
                if (props.avatar == "off"){
                    setText()
                }
                else{
                if(language == "arabic"){
                   
                    setText(<div className="questions fadeIn">
                        
                        <p>اهلا! أشعر بالحماس لقراءة هذا الكتاب!</p>
                        <p> ماذا تظن هو موضوع القصة؟ ماذا تستطيع  آن ترى؟</p>
                        <p> هل تجد أي شيء مثير للاهتمام؟</p>
                        <p>  هل يعجبك؟ "أنا أعجبني أيضًا .. </p>
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                        
                     </div>)
                   
                }
                else{
                
            setText(<div className="questions fadeIn" >
                <p >Hey! I’m exited to read this book! </p>
                <p >What do you think the story is about?</p>
                <p >What can you see? Do you find anything interesting?</p>
                <p >Do you like it? I like it too ...</p>
                <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
            </div>)
                }
            }
                break;
            case 2:
                if (props.avatar == "off"){
                    setText()
                }
                else{
                if(language == "arabic"){
                   
                    setText(<div className="questions fadeIn">
                        
                        <p> أنظر الى الفتيات. هل تعتقد أنهم يقولون شيئًا جيدًا أم سيئًا؟</p>
                        <p>    بعد الجواب: ربما، لكن لا يمكننا أن نعرف حقًا.</p>
                        <p> حتى نعرف المزيد، لا يمكننا إلا أن نخمن.</p>
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                        
                     </div>)
                   
                }
                else{
                
                setText(<div className="questions fadeIn" >
                    <p >Do you think the girls are saying </p>
                    <p >something good or bad?</p>
                    
                    <p >Maybe, but we can’t really tell,</p>
                    <p >we can only guess, until we learn and know more.</p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
                    
                </div>)
            
                }
            }
                break;
            case 3:
                
            if (props.avatar == "off"){
                setText()
            }
            else{
                if(language == "arabic"){
                   
                    setText(<div className="questions fadeIn">
                        
                        <p> - ما الذي يحدث برأيك؟</p>
                   
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                        
                     </div>)
                   
                }
                else{
                
                setText(<div className="questions fadeIn">
                    <p>What do you think is happening? </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
                    </div>)
                
                }
            }
                break;
            case 4:
                if (props.avatar == "off"){
                    setText()
                }
                else{
                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
                else{
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
            }
                break;
            case 5:
                if (props.avatar == "off"){
                    setText()
                }
                else{

                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p> ماذا تظن أنه يشعر؟ </p>
                        <p>  هل تظن أن الآخرين يعرفون كيف يشعر ويتجاهلونه؟ </p>
                        <p>   بعد الجواب: ربما. لا يمكننا إلا أن نخمن، حتى نعرف المزيد.</p>
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                     </div>)
                }
                else{
                setText(<div className="questions fadeIn">
                    <p>Is there anything different here?</p>
                    <p> Why do you think so?</p>
                    <p> How do you think he feels, what can you see?</p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
                      </div>)
                }
            }
                break;
            case 6:
                if (props.avatar == "off"){
                    setText()
                }
                else{

                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
                else{
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
                break;
            }
            case 7:
                if (props.avatar == "off"){
                    setText()
                }
                else{

                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p>  ألق نظرة. ماذا ترى؟ هل لديك أي أفكار؟</p>
                
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                     </div>)
                }
                else{
                setText(<div className="questions fadeIn" >
                    <p>Take a look, do you have any thoughts? </p>
                    <p> what do you see?</p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
                      </div>)
                }
                break;
            }
            case 8:
                if (props.avatar == "off"){
                    setText()
                }
                else{
            
                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
                else{
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
                break;
            }
            case 9:
                if (props.avatar == "off"){
                    setText()
                }
                else{

                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p>  دعنا نلقي نظرة. هل تعتقد أن هناك شيئاً مختلفاً الآن بخصوص حمد؟</p>
                        <p> لماذا؟</p>
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                     </div>)
                }
                else{
                setText(<div className="questions fadeIn">
                    <p>Lets take a look. Do you think there’s anything  </p>
                    <p> different about Hamad? Why?</p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
                     </div>)
                }
            }
                break;
            case 10:
                
            if (props.avatar == "off"){
                setText()
            }
            else{
                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
                else{
                    setText(<div className="questions fadeIn">
                    <p>

                    </p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    </div>)
                }
            }
                break;
            case 11:
                if (props.avatar == "off"){
                    setText()
                }
                else{

                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    <p> برأيك ماذا يشعر به الآن؟ لماذا ؟ </p>
                       
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                     </div>)
                }
                else{
                setText(<div className="questions fadeIn">
                    <p>What do you think he’s feeling now? why? </p>
                    <p> What do you think he’s feeling now after you learned more?</p>
                    <p>Why do you think so?</p>
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
                    
                     </div>)
                }
            }
                break;
            case 12:
              
            if (props.avatar == "off"){
                setText()
            }
            else{
                
                if(language == "arabic"){
                    setText(<div className="questions fadeIn">
                    
                        <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
                    
                     </div>)
                }
                else{
                setText(<div className="questions fadeIn">
                    
                    <button onClick={()=>{PlaySound(props.page); if(props.audio == "on"){props.backheadDelay();questDelay()} else{questionsnoDelay()}}}>{message}</button>
              
                     </div>)
                }
                break;
            }
                case 13:
              
                if (props.avatar == "off"){
                    setText()
                }
                else{
                
                if(language == "arabic"){
                    setText(<div className="questions">
                    
                        
                     </div>)
                }
                else{
                setText(<div className="questions">
                    
                    
                     </div>)
                }
            }
                break;
           
            default:
                
                break;
                
                
        }
      }, [props.page,language,animated]);
    return(
       
        <div className="center">
            <div className="questions">
            {text}
            </div>
            
        </div>
            
  
    );
}
export default Questions