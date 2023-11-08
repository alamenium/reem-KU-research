import "./pages.css"

import {useSelector} from "react-redux";

function Caption(){

    const {page} = useSelector((state) => state.story);
    const {caption} = useSelector((state) => state.settings);
    const arabicPages = [
        // Arabic page 1
        [
            <p>أوّل يوم في مدرستي الجديدة، دخلت <br/>
                الطلاّب جالسون<br/> رحّبت بي المعلّمة حصّة، ثم قالت للطلاّب: ينضم، إلينا اليوم طالب جديد، اسمه حمد. ماذا سنقول له؟ <br/>أهلاً و سهلاً بك يا حمد <br/>بخطوات ثقيله ذهبت إلي مقعدي<br/></p>,
            // Other Arabic content for page 0
        ],
        // Arabic page 2
        [
            <p>دقَّ الجرس، انتهى وقت الدَّرس، أتى إليَّ ولدٌ عرفتُ أنَّ اسمه خَالِد، سََلَنِي: كَيفَ حَالُكَ يَا حَمَد؟ لَم أُجِبهُ! ثُمَّ انضَمَّ إلَيهِ وَلَدٌ آخَرُ اسمُهُ فَيصَل، وَسََلَنِي: هَل بَيتُكَ قَرِيبٌ مِنَ المَدرَسَة؟ تَرَدَّدتُ كَثِيرًا فِي الرَّدِّ... وَلَكِنَّنِي اكتَفَيتُ بِإيمَاءَةٍ بِرَأسِي كَأَنَّنِي أَقُولُ لَهُ نَعَم، سََلَنِي أَكثَرَ مِن سُؤَالٍ، لَكِن...! أَجَبتُ عَلَيهِم من دُونَ أَن أَنطِقَ كَلِمَةً وَاحِدَةً!</p>,
            // Other Arabic content for page 1
        ],
        // Arabic page 3
        [
            <p>فِي وَقتِ الفُسحَةِ، لَمَحتُ خَالِد وَفَيصَل يَهمِسَنِ مَعَ البَقِيَّةِ، كَأَنّهم يَرغَبُونَ بِالذَّهَابِ إلَى مَكَانٍ مَا، لَحِقتُهُم حَتَّى وَصَلنا إلَى مَلعَبِ المَدرَسَةِ، اتَّخَذَ كُلٌّ مِن خَالِد وَفَيصَل نَاحِيَةً مِنَ المَلعَبِ، وَبَدَأَ بِاختِيَارِ اللَّعِبِنَ فِي فَرِيقِهِ، انتَظَرتُ دَورِي حَتَّى بَقِيتُ وَحِيدًا، وَبَدَؤوا بِرَكلِ الكُرَةِ وَلَعِبِ المُبَارَاةِ.</p>,
            // Other Arabic content for page 2
        ],
        // Arabic page 4
        [
            <p>فِي مَقصَفِ المَدرَسَةِ، جَلَسَ طُلَّبُ فَصلِيَ الجَدِيدِ فِي مَجمُوعَاتٍ، طُفتُ حَولَ كُلِّ مَجمُوعَةٍ، فَلَرُبَّما سَيُرَحِّبُ أَحَدُهُم بِي وَيَدعُونِي لِلجُلُوسِ! لَكِن... لَم أَجِد أَيَّ مَقعَدٍ بِجِوَارِهِم</p>,
            // Other Arabic content for page 3
        ],
        // Arabic page 5
        [
            <p>فِي المَرسَمِ، رَسَمتُ لَوحَاتٍ جَمِيلَةً، فَأَنَا أُحِبُّ قِرَاءَةَ القِصَصِ وَأَتَعَلَّمُ مِنهَا سَردَ الحِكَايَاتِ، وَرَسمَ شَخصِيَّاتِهَا، صَحِيحٌ أَنَّهُ لَم يُشَرِكنِي أَحَدٌ اليَومَ فِي أَيِّ شَيءٍ! لَكِنَّنِي أُحِبُّ هِوَايَتِي، وَسَعِيدٌ بِمَا أَنجَزتُه</p>,
            // Other Arabic content for page 5
        ],
        // Arabic page 6
        [
            <p>فِي اليَومِ التَّالِي، دَخَلَ عَلَينَا طَالِبٌ، رَحَّبَت بِهِ المُعَلِّمَةُ حِصَّة، قَالَت لِلطُّلَّبِ: يَنضَمُّ إلَينَا اليَومَ طَالِبٌ جَدِيدٌ، اسمُهُ حَسَن، مَاذَا سََنقُولُ لَهُ؟ أَجَبنَا جَمِيعًا: أَهلً وَسَهلً بِكَ يَا حَسَن قُلت لِنَفسِي: رَائِعٌ... حَسَن هُوَ الطَّالِبُ الجَدِيدُ، الآنَ سََكُونُ صَدِيقًا لِلجَمِيعِ، لَِنَّنِي لَن أَكُونَ الطَّالِبَ الجَدِيدَ بَعدَ اليَومِ</p>,
            // Other Arabic content for page 6
        ],
        // Arabic page 7
        [
            <p>لَم يَكُنِ الأَمرُ كَمَا ظَنَنتُ... أَصبَحَ حَسَن صَدِيقَ الجَمِيعِ مِن أَوَّلِ لَحظَةٍ! رَحَّبوا بِهِ، تَحَّثَ مَعهُم، وَتَحَّثوا مَعهُ، ضَحِكُوا جَمِيعُهم، لَعِبوا مَعهُم فِي المَلعَبِ، وَفِي المَطعَمِ انضَمَّ إلَى الجَمِيعِ وَتَنَاوَلَ وَجَبتَهُ مَعَهُم، بَينَما بَقِيتُ وَحِيدًا كَمَا أَنَا! لِمَاذَا يَا تُرَى؟ هَل يَعتَقِدُ الجَمِيعُ أَنِّي خَجُولٌ أَو مُمِلٌّ أَو لَا أَصلُحُ أَن أَكُونَ صَدِيقًا لِحَدٍ؟</p>,
            // Other Arabic content for page 7
        ],
        // Arabic page 8
        [
            <p>فِي المَرسَمِ، رَسَمتُ سَفِينَةً كَبِيرَةً وَعَلَيهَا كُلُّ طُلَّبِ فَصلِنَا، جَاءَ حَسَن وَحَدَّقَ بِرَسمَتِي، أُعجِبَ بِهَا، كُنت خَجِلً مِن أَن يَسأَلنِي أَيَّ سُؤَالٍ مِن دون أَن أَتَكَلَّم بِأَيِّ كَلِمةٍ! لَكِنّهُ فَاجَأَني عِندما سَلَنِي مُحرِّكًا شَفتَيه بِلُغَةِ الإِشَارَة: لِمَاذا أَنتَ لَستَ في السَّفِينَة؟ تَعَجَّبت جِدًّا! فَأَجَبته بِلُغةِ الإِشَارَة: كَيف عَرَفتَ؟ قال: مِن السَّمَّاعَةِ التِي تَرتَديهَا فِي أُذُنِك. شَرَح لي حَسَن أَن أُخته الصَّغيرَة تَرتَدي سَمَّاعَةً مِثلي، لِذَلك يُتقِن لُغَةَ الإِشَارَة لِيَتَواصَل مَعها، حَمَّسَني عَلَ الكَلِمِ فَأَجَبته قائلً: أَنا أَتَكَلَّم بِثُعوبةٍ (يَعني أَنا أَتَكَلَّم بِصُعوبةٍ). حَفَّزني بِأَن لَيسَ هناك داعي لِلإِشَارَة ما دام أَتَكَلَّم هَكَذا، فَكلامي كان مَفهومًا بِالنِّسبَة له، وحَثَّني أَن أُبادِر بِالحَديث مَع الآخرين بَدلًا مِن أَن أَنتَظِرهم</p>,
            // Other Arabic content for page 8
        ],
        // Arabic page 9
        [
            <p>اقتَرَحَ عَلَى أن أَنضمَ إليه في نَشاطٍ مَدرَسي غَدًا في الفَصل، يَتَطَلَّبُ تَكوينُ مَجموعَةٍ مُؤلَّفَةٍ</p>,
            <p>مِن ثلاثَةِ أَشخاصٍ لِتَمثيلِ حِكايةٍ أمامَ الباقين. تَردَّدتُ في البداية وبإصرارٍ</p>,
            <p>مِنهُ اقتَنَعتُ أخيرًا. تَكوينَتِ المَجموعةُ مِن حَسَن وجَمال وأنا ثالثهما.</p>
        ],
        // Arabic page 10
        [
            <p>جَمعنا أشياء تُسعدنا لتَمثيلِ الحِكاية، وبفضل مهاراتي</p>,
            <p>في الرسم صنعتُ قُصاصاتٍ ورقيةً وأدواتٍ وأزياءً</p>,
            <p>لِلتَمثيل مِن مَوادٍ بَسيطةٍ جِدًا.</p>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <p>جاء دورنا وقُمنا بتَمثيلِ الحِكاية. استَمتَعَ الطلابُ وضَحِكوا كثيرًا. عَرَفوا مهاراتي في التمثيل وقُدرتي على النُطق بِطريقَتي الخاصة. فأحبّوا ما صنعناه وصَفَّقوا لَنا كثيرًا ومعهم المُعلِّمة حِصّة.</p>
        ],
        // Arabic page 11
        [
            <p>في اليوم التالي... تَرَدَّدتُ كثيرًا قبل دُخولِي إلى الغُداء. هل سَأَكون اليوم</p>,
            <p>صديق الجميع أيضًا أم سَأَبقى كما كُنت الطالب الجديد؟</p>,
            <p>بعد التَفكير دَخَلتُ إلى صالة الطعام، وسَأَلتُ حسنًا: هَل أَستَطيعُ الجلوس معكم؟</p>,
            <p>قال حسن: بالتأكيد، وهُنا رَأيت مَجموعةً أُخرى تُنادي: اجلِس مَعنا، ابتسمتُ وشَكرتُهم.</p>
        ],
        // Arabic page 12
        [
            <p>وعِندَما حان وَقت الفُسحة، أصبحتُ ألعب مع أصدِقائي</p>,
            <p>الكُرة، ومنذ تِلك اللَّحظةِ أدَرَكتُ بأنَّهُ لَن يَعرِفَ بَعضُنا بَعضًا</p>,
            <p>إِلَّا إِذَا بادَرنا بِالكَلام.</p>
        ],
    ];

    const englishPages = [
        // English page 1
        [
            <p>It was the first day at my new school. I came into my classroom, everyone was sitting down. The teacher, Miss Hissa welcomed me and then told the class “Today a new student is joining us, his name is Hamad. Class what do we say to Hamad?” Everyone: "Welcome to our class Hamad". With heavy steps, I went to my seat.</p>,
            // Other English content for page 0
        ],
        // English page 2
        [
            <p>The bell rang, class ended, and a boy came up to me. His name is Khalid. He asked: "How are you Hamad? I didn’t answer. Another boy joined, Faisal, he asked me “Is your house close to school?” I was very reluctant to answer. I simply nodded with my head to say yes. They asked me more questions, but I answered them without speaking a word.</p>,
            // Other English content for page 1
        ],
        // English page 3
        [
            <p>During recess, I noticed Khalid and Faisal whispering with the others. It seemed they are about to head some place. I followed them, until we reached the school playground. Each took a spot and they started to form their teams. I waited for my turn until I was left alone. They started to kick the ball and start the game.</p>,
            // Other English content for page 2
        ],
        // English page 4
        [
            <p>In the school lunchroom my class mates sat in groups. I went by all the groups. Maybe someone will ask me to join them I thought. However, I didn’t find any free seats around them. I sat far away and ate my food while seeing them all chat and laugh.</p>,
            // Other English content for page 3
        ],
        // English page 5
        [
            <p>In the art room I made beautiful paintings. I love reading stories. They taught me how to tell stories and create their characters. Although no one joined me in any activity today, however I love my hobbies, and I’m happy with what I accomplished.</p>,
            // Other English content for page 5
        ],
        // English page 6
        [
            <p>In the following day, a student came in class. Miss Hissa welcomed him saying: “Today a new student is joining us, his name is Hasan. Class what do we say to Hasan?” Everyone: Welcome to our class Hasan! I thought “Great! Hasan is the new student. I won’t be the new student anymore! I’ll be friends with everyone now.”</p>,
            // Other English content for page 6
        ],
        // English page 7
        [
            <p>It wasn’t as I expected. Hasan quickly became everyone's friend. They all chatted together and played together. He joined them in the lunchroom, while I stayed alone. “Why!” I wondered. “Do they think I’m boring or shy or can’t be a good friend?”.</p>,
            // Other English content for page 7
        ],
        // English page 8
        [
            <p>In the art room, I painted a large ship that had all my classmates in it. Hasan came up to me and admired my painting. I was worried I wouldn’t answer him with words if he asked me anything. I was surprised when Hasan used sign language to ask me “Why are you not in the ship with us?”. I replied with sign language “How did you know?”. Hasan said “from the hearing aid you’re wearing.” He explained that he learned sign language since his younger sister also uses a hearing aid. He encouraged me to speak more. I answered “But I thpeek with difficulty” (meaning I speak with difficulty). Hasan assured me that it was clear enough, and said It’ll be ok to speak more with the others too.</p>,
            // Other English content for page 8
        ],
        // English page 9
        [
            <p>Hasan asked if I would join him for the class activity tomorrow. We must create</p>,
            <p>teams of three. Each team is to act out a story for the rest of the class. At first</p>,
            <p>I was nervous to say yes. In the end I was convinced to push myself and try something</p>,
            <p>I’m not used to. Our team was Hasan, Jamal, and myself.</p>
        ],
        // English page 10
        [
            <p>We gathered items to help us tell the story. With my art skills, I created</p>,
            <p>our costumes from cutout cardboard and painted them.</p>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <br/>,
            <p>When it was our turn, the class laughed and cheered. They learned about my skills, my love for storytelling, and my special way of speaking. They loved what we did, the whole class, and Miss Hessa clapped for us.</p>
        ],
        // English page 11
        [
            <p>Before going into the lunchroom the following day I thought “will I be their friend,</p>,
            <p>or will I stay the new student?”. After some thinking I went in, I asked Hasan</p>,
            <p>“Can I sit with you?” He replied “Of course!” Then I heard another group call me to sit with them. I smiled and thanked them.</p>
        ],
        // English page 12
        [
            <p>When it was time for recess, I was playing ball with my classmates. At that moment,</p>,
            <p>I realized that we might never get to know each other if we don't don't come forward</p>,
            <p>and communicate with one another.</p>
        ],
    ];


// Render the content
    return (
        <div>
            {(caption === 'English') &&
                <div>
                    <div className={"captionE"} id={`a${Math.floor(page / 2) + 1}`} key={1}>{englishPages[Math.floor(page / 2)]}</div>
                </div>}
            {(caption === 'Arabic') &&
                <div>
                    <div className={"captionA"}  id={`a${Math.floor(page / 2) + 1}`} key={1}>{arabicPages[Math.floor(page / 2)]}</div>
                </div>}
        </div>
    );

}

export default Caption;