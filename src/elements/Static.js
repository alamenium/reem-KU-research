import { NavLink } from "react-router-dom";
import { useAuth } from "../util/authContext";
import "../../../the-new-student-server-main/client/src/styles/animations.css"

import { useEffect, useState } from "react";
import pg12 from "../../../the-new-student-server-main/client/src/images/story/1-2.jpeg";
import pg34 from "../../../the-new-student-server-main/client/src/images/story/3-4.jpg";
import pg56 from "../../../the-new-student-server-main/client/src/images/story/5-6.jpg";
import pg78 from "../../../the-new-student-server-main/client/src/images/story/7-8.jpg";
import pg910 from "../../../the-new-student-server-main/client/src/images/story/9-10.jpg";
import pg1112 from "../../../the-new-student-server-main/client/src/images/story/11-12.jpg";
import pg1314 from "../../../the-new-student-server-main/client/src/images/story/13-14.jpg";
import pg1516 from "../../../the-new-student-server-main/client/src/images/story/15-16.jpg";
import pg1718 from "../../../the-new-student-server-main/client/src/images/story/17-18.jpg";
import pg1920 from "../../../the-new-student-server-main/client/src/images/story/19-20.jpg";
import pg2122 from "../../../the-new-student-server-main/client/src/images/story/21-22.jpg";
import pg2324 from "../../../the-new-student-server-main/client/src/images/story/23-24.jpg";
import end from "../../../the-new-student-server-main/client/src/images/story/TheEnd.jpg";
function Static(props){
    
    const [page, setPage] = useState("");
    const[text,setText]=useState("");
    useEffect(() => {
        switch (props.page){
            case 1:
                setPage(pg12);
                setText(<div className="pg1">
                    <p>I came into my classroom on the first day of </p>
                    <p> school. Everyone was sitting down. The teacher,</p>
                    <p> Miss Hissa welcomed me and told the class </p>
                    <p> “Today a new student is joining us, his name </p>
                    <p> is Hamad. Class what do we say to Ahmed?”</p>
                    <p>Everyone: Welcome to our class Hamad.</p>
                    <p> With heavy steps, I went to my seat.</p>
                     </div>)
                break;
            case 2:
                setPage(pg34);
                setText(<div className="pg2">
                    <p>The bell rang, class ended, and a boy came up to me. His name is Khalid. He asked:  </p>
                    <p> “How are you Hamad? I didn’t answer. Another boy joined, Faisal, he asked me </p>
                    <p> “Is your house close to school?” I was very reluctant to answer. I simply nodded with</p>
                    <p>   my head to say yes. They asked mire questions, but I answered </p>
                    <p>  without speaking a word.</p>
                    
                     </div>)
                break;
            case 3:
                setPage(pg56);
                setText(<div className="pg3">
                    <p> During recess, I noticed Khalid and Faisal whispering with </p>
                    <p>  the others. It seemed they are about to head some place. </p>
                    <p>  I followed them, until we reached the school playground.  Each took </p>
                    <p>  Each took a spot and they started to pick their teams. I waited for my turn until   </p>
                    <p>  I was left alone and they started to kick the ball and start the game.</p>
                    
                    <p className="pg35">
                    I didn’t understand why they didn’t pick me. 
                    </p>
                    <p className="pg36">
                     Is it because Im the new student?
                    </p>     
                    </div>
                    )

                
                break;
            case 4:
                setPage(pg78);
                setText(<div className="pg4">
                    <p>  In the school lunchroom my class mates sat in groups. I went by all the groups hoping </p>
                    <p> that one group would ask me to join them. However I didn’t find any seats around them.</p>
                    <p>  I sat far away. I eat my food while seeing them all chat and laugh. </p>     
                     </div>)
                break;
            case 5:
                setPage(pg910);
                setText(<div className="pg5">
                    <p> In the art room I made beautiful paintings. I love reading stories. They taught me how to tell </p>
                    <p> stories and create their characters. Even though it’s true that no one joined me in any activity</p>
                    <p>  today, however I love my hobbies, and I’m happy with what I accomplished. </p>     
                     </div>)
                break;
            case 6:
                setPage(pg1112);
                setText(<div className="pg6">
                <p>  In the following day, a student came in class. Miss Hissa welcomed him saying: </p>
                <p> “Today a new student is joining us, his name is Hasan. Class what do we say to Hasan?”</p>
                <p>  Everyone: Welcome to our class Hasan! I told myself “Great! Hasan is the new student.</p>
                <p className="pg65">   I won’t be the new student anymore! </p>     
                <p className="pg66">   I’ll be friends with everyone now.”</p>     
                

                 </div>)
                break;
            case 7:
                setPage(pg1314);
                setText(<div className="pg7">
                    <p> It wasn’t as I expected. Hasan quickly became everyone's friend. They all chatted together   </p>
                    <p> and played together. He joined them in the lunchroom, while I stayed alone.</p>
                    <p>  “Why” I wondered. “Do they think I’m boring or shy or can’t be a friend?”. </p>     
                     </div>)
                break;
            case 8:
                setPage(pg1516);
                setText(<div className="pg8">
                    <p>  In the art room, I painted a large ship that had all my classmates in it. Hasan came up to me  </p>
                    <p> and admired my painting. I was worried I wouldn’t answer him with words if he asked me </p>
                    <p>  anything. I was surprised when he Hasan used sign language to ask me “Why are you not in  </p>  
                    <p>   the ship with us?”. I replied with sign language “How did you know?”. Hasan said </p> 
                    <p>   “from the hearing aid you’re wearing.” He explained that he learned sign language since his</p> 
                    <p>   younger sister also uses a hearing aid. Heencouraged to speak more. I answered </p>  
                    <p>  “But I thpeek with difficulty” (meaning I speak with difficulty). Hasan assured me that it </p> 
                    <p> was clear enough, and asked that It’ll be ok to speak more verbally with the others too.
</p> 
                    <p>   </p>   
                     </div>)
                break;
            case 9:
                setPage(pg1718);
                setText(<div className="pg9">
                    <p> Hasan asked if I would join him for the class activity tomorrow. We must create  </p>
                    <p> teams of three. Each team is to act out a story for the rest of the class. At first </p>
                    <p> I was nervous to say yes. In the end I was convinced to push myself and try something   </p>  
                    <p>  I’m not used to. Our team was Hasan, Jamal, and myself.</p>
                  
                     </div>)
                break;
            case 10:
                setPage(pg1920);
                setText(<div className="pg10">
                    <p> We gathered items to help us tell the story. With my art skills I created  </p>
                    <p>  our costumes from cutout cardboard and painted them.</p>
                    <p className="pg105"> When it was our turn, the class laughed and cheered. They learned about my skills, my love for  </p>  
                    <p>  </p>
                  
                     </div>)
                break;
            case 11:
                setPage(pg2122);
                setText(<div className="pg11">
                    <p> Before going into the lunchroom the following day I thought “will I be their friend,  </p>
                    <p> or will I stay the new student?”. After some thinking I went in, I asked Hasan </p>
                    <p> “Can I thit with you?”  (meaning: Can I sit with you?) He replied “Ofcourse!” </p>  
                    <p>  Then I heard another group call me to sit with them. I smiled and thanked them. </p>
                  
                     </div>)
                break;
            case 12:
                setPage(pg2324);
                setText(<div className="pg12">
                    <p>When it was time for recess, I was playing ball with my classmates. At that moment,  </p>
                    <p>I realized that we might never get to know each other if we don't initiate contact. </p>
                    <p>Be yourself. </p>  
                    <p> Whoever accepts you, will accept you.  </p>
                  
                     </div>)
                break;
            case 13:
                setPage(end);
            default:
                setPage(pg12);
                break;
                
        }
      }, [props.page]);
    return(
        <div className="center">
       
            <div className="page">
            <img width={1500} height={700} src={page}/>
            {text}
            </div>
            <p>{props.page}</p>
        </div>
    );
}
export default Static