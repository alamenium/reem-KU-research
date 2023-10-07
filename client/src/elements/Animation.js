import { NavLink } from "react-router-dom";
import { useAuth } from "../util/authContext";
import "../../../the-new-student-server-main/client/src/styles/animations.css"
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

import Carousel from 'react-bootstrap/Carousel';
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
import theend from "../../../the-new-student-server-main/client/src/images/story/TheEnd.jpg";
import thestart from "../../../the-new-student-server-main/client/src/images/story/StartRead.png";

import pg8  from "../../../the-new-student-server-main/client/src/images/story/animation/8.gif";


import pg9  from "../../../the-new-student-server-main/client/src/images/story/animation/9.gif";


import pg10  from "../../../the-new-student-server-main/client/src/images/story/animation/10.gif";
import pg11  from "../../../the-new-student-server-main/client/src/images/story/animation/11.gif";
import pg122  from "../../../the-new-student-server-main/client/src/images/story/animation/12.gif";

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




function Animation(props){
    
    const [page, setPage] = useState("");
    const[text,setText]=useState("");
    const[animated,setAnimated]=useState("")
    const[language,setLanguage]=useState("")

    const int=50;
    const int2=150;


    useEffect(() => {
        setLanguage(props.language)
        console.log(language)
    }, [props.language])
    useEffect(() => {
        setAnimated(props.animated);
        //console.log(animated);
        switch (props.page){
            case 0:
                setPage(<img width={1500} height={680} src={thestart}/>);
                setText(
                    <p>
                         
                    </p>
                )
                break;
            case 1:
                setPage(<img width={1500} height={700} src={pg12}/>);

                

                if(language == "arabic"){
                    
                    

                    setText(<div className="pg1">
                        
                        <p>أوّل يوم في مدرستي الجديدة، دخلت  </p>
                        <p> الطلاّب جالسون رحّبت بي </p>
                        <p> بي المعلّمة حصّة، ثم قالت للطلاّب: ينضم </p>
                        <p> ،إلينا اليوم طالب جديد، اسمه حمد </p>
                        <p> ماذا سنقول له؟</p>
                        <p> .أهلاً و سهلاً بك يا حمد </p>
                        <p> .بخطوات ثقيله ذهبت إلي مقعدي</p>
                        
                    
                        

                     </div>)

                    
                }
                else{

                    

                    setText(<div className="pg1">
                    <p>It was the first day at my new school. I came</p>
                    <p> into my classroom, everyone was sitting down. </p>
                    <p>The teacher, Miss Hissa welcomed me and then told </p>
                    <p>the class “Today a new student is joining us,</p>
                    <p> his name is Hamad. Class what do we say to Hamad?”</p>
                    <p>Everyone: "Welcome to our class Hamad".</p>
                    <p> With heavy steps, I went to my seat.</p>
    
                     </div>)

                    
                };
            
            
                
                break;
            case 2:
                setPage(<img width={1500} height={700} src={pg34}/>);

                
                if(language == "arabic"){

                    
                    setText(<div className="pg2">
                        
                        <p> دقَّ الجرس، انتهى وقت الدَّرس، أتى إليَّ ولدٌ عرفتُ أنَّ اسمه </p>
                        <p> خَالِد، سََلَنِي: كَيفَ حَالُكَ يَا حَمَد؟ لَم أُجِبهُ! ثُمَّ انضَمَّ إلَيهِ وَلَدٌ آخَرُ</p>
                        <p> اسمُهُ فَيصَل، وَسََلَنِي: هَل بَيتُكَ قَرِيبٌ مِنَ المَدرَسَةِ؟ تَرَدَّدتُ كَثِيرًا</p>
                        <p> فِي الرَّدِّ... وَلَكِنَّنِي اكتَفَيتُ بِإيمَاءَةٍ بِرَأسِي كَأَنَّنِي أَقُولُ لَهُ نَعَم، سََلَنِي</p>
                        <p> أَكثَرَ مِن سُؤَالٍ، لَكِن...! أَجَبتُ عَلَيهِم من دُونَ أَن أَنطِقَ كَلِمَةً وَاحِدَةً!</p>
                       
                        
                    </div>)
                    
                }
                else{
                   
                setText(<div className="pg2">
                    <p>The bell rang, class ended, and a boy came up to me. His name is Khalid. He asked:  </p>
                    <p> “How are you Hamad? I didn’t answer. Another boy joined, Faisal, he asked me </p>
                    <p> “Is your house close to school?” I was very reluctant to answer. I simply nodded with</p>
                    <p>   my head to say yes. They asked me more questions, but I answered </p>
                    <p>  them without speaking a word.</p>
                    
                     </div>)
                    
                }
            
                break;
            case 3:
                setPage(<img width={1500} height={700} src={pg56}/>);

                if(language == "arabic"){
                    setText(<div className="pg3">
                       
                        <p> فِي وَقتِ الفُسحَةِ، لَمَحتُ خَالِد وَفَيصَل يَهمِسَنِ مَعَ البَقِيَّةِ،</p>
                        <p> كَأَنَّهُم يَرغَبُونَ بِالذَّهَابِ إلَى مَكَانٍ مَا، لَحِقتُهُم حَتَّى وَصَلنَا إلَى</p>
                        <p> مَلعَبِ المَدرَسَةِ، اتَّخَذَ كُلٌّ مِن خَالِد وَفَيصَل نَاحِيَةً مِنَ المَلعَبِ،</p>
                        <p> وَبَدَأَ بِاختِيَارِ اللَّعِبِنَ فِي فَرِيقِهِ، انتَظَرتُ دَورِي حَتَّى بَقِيتُ</p>
                        <p> وَحِيدًا، وَبَدَؤُوا بِرَكلِ الكُرَةِ وَلَعِبِ المُبَارَاةِ.</p>
                        
                        
                        <p className="pg37">
                    لَم أَفهَم لِمَاذَا لَم يَختَارُونِي؟ 
                   
                  
                    </p>
                    <p className="pg38">
                    هَل لِنَّنِي طَالِبٌ جَدِيدٌ؟
                    </p>   
                    
                     </div>)
                }
                else{
                setText(<div className="pg3">
                    <p> During recess, I noticed Khalid and Faisal whispering with </p>
                    <p>  the others. It seemed they are about to head some place. </p>
                    <p>  I followed them, until we reached the school playground.  Each took </p>
                    <p>  a spot and they started to form their teams. I waited for my turn until   </p>
                    <p>  I was left alone. They started to kick the ball and start the game.</p>
                    
                    <p className="pg35">
                    I didn’t understand why they didn’t pick me. 
                    </p>
                    <p className="pg36">
                     Is it because Im the new student?
                    </p>     
                    
                    </div>
                    )

                }
                break;
            case 4:
                setPage(<img width={1500} height={700} src={pg78}/>);

                if(language == "arabic"){
                    setText(<div className="pg4">
                    <p> فِي مَقصَفِ المَدرَسَةِ، جَلَسَ طُلَّبُ فَصلِيَ الجَدِيدِ فِي مَجمُوعَاتٍ،</p>
                    <p> طُفتُ حَولَ كُلِّ مَجمُوعَةٍ، فَلَرُبَّمَا سَيُرَحِّبُ أَحَدُهُم بِي وَيَدعُونِي</p>
                    <p> !لِلجُلُوسِ! لَكِن... لَم أَجِد أَيَّ مَقعَدٍ بِجِوَارِهِم</p>
                    

                    <p className="pg42">
                    جَلَستُ بَعِيدًا لَِتَنَاوَلَ 
                    </p>
                    <p className="pg43">
                    وَجبَتِي، وَأَرَاهُم جَمِيعًا
                    </p>
                    <p className="pg44">
                    !يَتَحَدَّثُونَ وَيَضحَكُونَ
                    </p>

                    
                     </div>)
                }
                else{
                setText(<div className="pg4">
                    <p>  In the school lunchroom my class mates sat in groups. I went by all the groups.  </p>
                    <p> Maybe someone will ask me to join them I thought. However I didn’t find any </p>
                    <p> free seats around them. I sat far away and ate my food while seeing them all chat and laugh. </p>   
                    
                     </div>)
                }
                break;
            case 5:
                setPage(<img width={1500} height={700} src={pg910}/>);

                if(language == "arabic"){
                    setText(<div className="pg5">
                    <p> ،فِي المَرسَمِ، رَسَمتُ لَوحَاتٍ جَمِيلَةً، فَأَنَا أُحِبُّ قِرَاءَةَ القِصَصِ</p>
                    <p> وَأَتَعَلَّمُ مِنهَا سَردَ الحِكَايَاتِ، وَرَسمَ شَخصِيَّاتِهَا، صَحِيحٌ أَنَّهُ لَم</p>
                    <p> يُشَرِكنِي أَحَدٌ اليَومَ فِي أَيِّ شَيءٍ! لَكِنَّنِي أُحِبُّ هِوَايَتِي، وَسَعِيدٌ</p>
                    <p> .بِمَا أَنجَزتُهُ</p>
                    
                     </div>)
                }
                else{
                setText(<div className="pg5">
                    <p> In the art room I made beautiful paintings. I love reading stories. They taught me how to tell </p>
                    <p> stories and create their characters. Although no one joined me in any activity today, </p>
                    <p> however I love my hobbies, and I’m happy with what I accomplished. </p>     
                    
                     </div>)
                }
                break;
            case 6:
                setPage(<img width={1500} height={700} src={pg1112}/>);

                if(language == "arabic"){
                    setText(<div className="pg62">
                    <p> فِي اليَومِ التَّالِي، دَخَلَ عَلَينَا طَالِبٌ، رَحَّبَت</p>
                    <p> بِهِ المُعَلِّمَةُ حِصَّة، قَالَت لِلطُّاَّبِ: يَنضَمُّ</p>
                    <p> إلَينَا اليَومَ طَالِبٌ جَدِيدٌ، اسمُهُ حَسَن، مَاذَا</p>
                    <p> سََنقُولُ لَهُ؟ أَجَبنَا جَمِيعًا: أَهلً وَسَهلً بِكَ</p>
                    <p> .يَا حَسَن</p>
                    <p> قُلتُ لِنَفسِي: رَائِعٌ... حَسَن هُوَ الطَّالِبُ</p>
                    <p> ،الجَدِيدُ، الآنَ سََكُونُ صَدِيقًا لِلجَمِيعِ</p>
                    <p> .لَِنَّنِي لَن أَكُونَ الطَّالِبَ الجَدِيدَ بَعدَ اليَومِ</p>
                  
                    
                    
                     </div>)
                }
                else{
                setText(<div className="pg6">
                <p>  In the following day, a student came in class. Miss Hissa welcomed him saying: </p>
                <p> “Today a new student is joining us, his name is Hasan. Class what do we say to Hasan?”</p>
                <p>  Everyone: Welcome to our class Hasan! I thought “Great! Hasan is the new student.</p>
                <p className="pg65">   I won’t be the new student anymore! </p>     
                <p className="pg66">   I’ll be friends with everyone now.”</p>     
                
                 </div>)
                }
                break;
            case 7:
                setPage(<img width={1500} height={700} src={pg1314}/>);

                if(language == "arabic"){
                    setText(<div className="pg7">
                    <p> لَم يَكُنِ الأَمرُ كَمَا ظَنَنتُ... أَصبَحَ حَسَن صَدِيقَ الجَمِيعِ مِن أَوَّلِ لَحظَةٍ! رَحَّبُوا</p>
                    <p> بِهِ، تَحَدَّثَ مَعَهُم، وَتَحَدَّثُوا مَعَهُ، ضَحِكُوا جَمِيعُهُم، لَعِبَ مَعَهُم فِي المَلعَبِ،</p>
                    <p> وَفِي المَطعَمِ انضَمَّ إلَى الجَمِيعِ وَتَنَاوَلَ وَجَبتَهُ مَعَهُم، بَينَمَا بقِيتُ وَحِيدًا كَمَا</p>
                    <p> أَنَا! لِمَاذَا يَا تُرَى؟ هَل يَعتَقِدُ الجَمِيعُ أَنِّي خَجُولٌ أَو مُمِلٌّ أَو لَ أَصلُحُ أَن أَكُونَ</p>
                    <p className="pg72"> صَدِيقًا لَِحَدٍ؟</p>
                    
                     </div>)
                }
                else{
                setText(<div className="pg7">
                    <p> It wasn’t as I expected. Hasan quickly became everyone's friend. They all chatted together   </p>
                    <p> and played together. He joined them in the lunchroom, while I stayed alone.</p>
                    <p>  “Why!” I wondered. “Do they think I’m boring or shy or can’t be a good friend?”.</p>    
                    
                     </div>)
                }
                break;
            case 8:
                if(animated=="on"){
                    setPage( 

                        <img width={1500} height={700} src={pg8}/>);
                }
                else{setPage(<img width={1500} height={700} src={pg1516}/>)}
            
                if(language == "arabic"){
                    setText(<div className="pg8">
                    <p> فِي المَرسَمِ، رَسَمتُ سَفِينَةً كَبِيَرةً وَعَلَيهَا كُلُّ طُلَّبِ فَصلِنَا، جَاءَ</p>
                    <p> حَسَن وَحَدَّقَ بِرَسمَتِي، أُعجِبَ بِهَا، كُنتُ خَجِلً مِن أَن يَسأَلَنِي أَيَّ</p>
                    <p> سُؤَالٍ من دُونَ أَن أَتَفَوَّهَ بِأَيِّ كَلِمَةٍ! لَكِنَّهُ فَاجَأَنِي عِندَمَا سَلَنِي</p>
                    <p> مُحَِّركًا شَفَتَيهِ بِلُغَةِ الإِشَرَةِ: لِمَاذَا أَنتَ لَستَ فِي السَّفِينَةِ؟ تَعَجَّبتُ</p>
                    <p> جِدًّا! فَأَجَبتُهُ بِلُغَةِ الإِشَرَةِ: كَيفَ عَرَفتَ؟ قَالَ: مِنَ السَّمَّاعَةِ التِي</p>
                    <p> تَرتَدِيهَا فِي أُذُنِكَ.</p>
                    <p> شَرَحَ لِي حَسَن أَنَّ أُختَهُ الصَّغِيَرةَ تَرتَدِي سَمَّاعَةً مِثلِي، لِذَلِكَ يُتقِنُ</p>
                    <p> لُغَةَ الإشَرَةِ لِيَتَوَاصَلَ مَعَهَا، حَمَّسَنِي عَلَ الكَلَمِ فَأَجَبتُهُ قَائِلً: أَنَا</p>
                    <p>  أَتَكَلَّمُ بِثُعُوبَةٍ )يَعنِي أَنَا أَتَكَلَّمُ بِصُعُوبَةٍ).</p>
                    <p> حَفَّزَنِي بِأَن لَ دَاعِيَ لِإشَرَةِ مَا دُمتُ أَتَكَلَّمُ هَكَذَا، فَكَلَمِي كَانَ </p>
                    <p>  مَفهُومًا بِالنِّسبَةِ لَهُ، وَحَثَّنِي أَن أُبَادِرَ بِالحَدِيثِ مَعَ الآخَرِينَ بَدَلً مِن</p>
                    <p> .أَن أَنتَظِرَهُم </p>
                    
                     </div>)
                }
                else{
                setText(<div className="pg8">
                    <p>  In the art room, I painted a large ship that had all my classmates in it. Hasan came up to me  </p>
                    <p> and admired my painting. I was worried I wouldn’t answer him with words if he asked me </p>
                    <p>  anything. I was surprised when Hasan used sign language to ask me “Why are you not in  </p>  
                    <p>   the ship with us?”. I replied with sign language “How did you know?”. Hasan said </p> 
                    <p>   “from the hearing aid you’re wearing.” He explained that he learned sign language since his</p> 
                    <p>   younger sister also uses a hearing aid. He encouraged me to speak more. I answered </p>  
                    <p>  “But I thpeek with difficulty” (meaning I speak with difficulty). Hasan assured me that it </p> 
                    <p> was clear enough, and said It’ll be ok to speak more with the others too.</p> 
                    
                     </div>)
                }
                break;
            case 9:
           

                if(animated=="on"){
                    setPage( 
                       
                        <img width={1500} height={700} src={pg9}/>
                        );
                }
                else{setPage(<img width={1500} height={700} src={pg1718}/>)}
            

                if(language == "arabic"){
                    setText(<div className="pg9">
                    <p> اقتَرَحَ عَلََّ أَن أَنضَمَ إلَيهِ فِي نَشَطٍ مَدرَسِيٍّ غَدًا فِي الفَصلِ، يَشتَرِطُ مَجمُوعَةً مُكَوَّنَةً</p>
                    <p> مِن ثَلَثَةِ أَشخَاصٍ لِتَمثِيلِ حِكَايَةٍ مِنَ الحِكَايَاتِ أَمَامَ البَقِيَّةِ، تَرَدَّدتُ فِي البِدَايَةِ وَبِإصَرارٍ</p>
                    <p className="pg92"> .مِنهُ اقتَنَعتُ أَخِيرًا. تَكَوَّنَتِ المَجمُوعَةُ مِن حَسَن وَجَمَال وَأَنَا ثَالِثُهُمَا</p>
                    
                    
                     </div>)
                }
                else{
                setText(<div className="pg9">
                    <p> Hasan asked if I would join him for the class activity tomorrow. We must create  </p>
                    <p> teams of three. Each team is to act out a story for the rest of the class. At first </p>
                    <p> I was nervous to say yes. In the end I was convinced to push myself and try something   </p>  
                    <p>  I’m not used to. Our team was Hasan, Jamal, and myself.</p>
                    
                     </div>)
                }
                break;
            case 10:
                
                if(animated=="on"){
                    setPage( 
                        
                        <img width={1500} height={700} src={pg10}/>
                        );
                }
                else{setPage(<img width={1500} height={700} src={pg1920}/>)}
            
                if(language == "arabic"){
                    setText(<div className="pg102">
                    <p> جَمَعنَا أَشياءَ تُسَعِدُنَا لِتَمثِيلِ الحِكَايَةِ، وَبِفَضلِ مَهَارَاتِي</p>
                    <p> فِي الرَّسمِ صَنَعتُ قُصَاصَاتٍ وَرَقِيَّةً وَأَدَوَاتٍ وَأَزيَاءَ</p>
                    <p>  .لِلتَمثِيلِ مِن مَوَادَّ بَسِيطَةٍ جِدًّا</p>
                    <p className="pg1052">  جَاءَ دَورُنَا وَقُمنَا بِتَمثِيلِ الحِكَايَةِ، استَمتَعَ الطُّلَّبُ وَضَحِكُوا كَثِيرًا، عَرَفُوا مَهَارَتِي فِي التَّمثِيلِ وَقُدَرتِي عَلَى النُّطقِ بِطَرِيقَتَيَ الخَاصَّةِ، فَأَحَبُّو ا مَا صَنَعنَاهُ وَصَفَّقُوا لَنَا كَثِيرًا وَمَعَهُمُ المُعَلِّمَةُ حِصَّة</p>
                    
                     </div>)
                }
                else{
                setText(<div className="pg10">
                    <p> We gathered items to help us tell the story. With my art skills I created  </p>
                    <p>  our costumes from cutout cardboard and painted them.</p>
                    <p className="pg105"> When it was our turn, the class laughed and cheered. They learned about my skills, my love for story telling, and my special way of speaking. They loved what we did, the whole class and Miss Hessa clapped for us. </p>  
                    
                  
                     </div>)
                }
                break;
            case 11:

            if(animated=="on"){
                setPage( 
                    
                    <img width={1500} height={700} src={pg11}/>
                    );
            }
            else{setPage(<img width={1500} height={700} src={pg2122}/>)}
              

                if(language == "arabic"){
                    setText(<div className="pg112">
                    <p> فِي اليَومِ التَّالِي... تَرَدَّدتُ كَثِيرًا فِي الدُّخُولِ إلَى المَطعَمِ، هَل سََكُونُ اليَومَ</p>
                    <p> صَدِيقَ الجَمِيعِ أَيضًا أَو سََعُودُ كَمَا كُنتُ الطَّالِبَ الجَدِيدَ؟</p>
                    <p>  بَعدَ التَّفكِيرِ دَخَلتُ إلَى صَالَةِ الطَّعَامِ، وَسََلتُ حَسَنًا: هَل أَثتَطِيعُ الجُلُوثَ</p>
                    <p >  مَعَكُم )يَعنِي: هَل أَستَطِيعُ الجُلُوسَ مَعَكُم(؟ قَالَ حَسَن: بِالتَّأكِيدِ، وَهُنَا رَأَيتُ</p>
                    <p>.مَجمُوعَةً أُخرَى تُنَادِي: اجلِس مَعَنَا، ابتَسَمتُ وَشَكَرتُهُم </p>
                    
                     </div>)
                }
                else{
                setText(<div className="pg11">
                    <p> Before going into the lunchroom the following day I thought “will I be their friend,  </p>
                    <p> or will I stay the new student?”. After some thinking I went in, I asked Hasan </p>
                    <p> “Can I thit with you?”  (meaning: Can I sit with you?) He replied “Ofcourse!” </p>  
                    <p>  Then I heard another group call me to sit with them. I smiled and thanked them. </p>
                    
                     </div>)
                }
                break;
            case 12:

            if(animated=="on"){
                setPage( 
                    
                    <img width={1500} height={700} src={pg122}/>
                    );
            }
            else{setPage(<img width={1500} height={700} src={pg2324}/>)}
                

                
                if(language == "arabic"){
                    setText(<div className="pg122">
                    <p> وَعِندَمَا حَانَ وَقتُ الفُسحَةِ، أَصبَحتُ أَلعَبُ مَعَ أَصدِقَائِي</p>
                    <p> الكُرَةَ، وَمُنذُ تِلكَ اللَّحظَةِ أَدَركتُ بِأَنَّهُ لَن يَعرِفَ بَعضُنَا بَعضًا</p>
                    <p>.إِلَّ إذَا بَادَرنَا بِالكَلَمِ </p>
                    
                    
                     </div>)
                }
                else{
                setText(<div className="pg12">
                    <p>When it was time for recess, I was playing ball with my classmates. At that moment,  </p>
                    <p>I realized that we might never get to know each other if we don't don't come forward  </p>
                    <p>
                    and communicate with one another.
                    </p>
                    
                     </div>)
                }
                break;
            case 13:
                setPage(<img width={1500} height={680} src={theend}/>);
                setText(
                    <p>
                         
                    </p>
                )
                break;
            default:
                setPage(pg12);
                break;
                
        }
      }, [props.page,language,animated]);
    return(
        <div className="center">
       
            <div className="page">
            
            {page}
            {text}
            </div>
            
            
        </div>
    );
}
export default Animation