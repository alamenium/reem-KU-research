import "./pages.css"

import {useSelector} from "react-redux";

function Caption(){

    const {page} = useSelector((state) => state.story);
    const {caption} = useSelector((state) => state.settings);
    const arabicPages = [
        // Arabic page 1
        [
            <p>في يومي الأول في المدرسة الجديدة، قدمتني المعلمة حصة إلي الصف. رحب الطلاب بي بحرارة "أهلا بك يا حمد". ثم جلست على مقعدي بخطوات بطيئة.</p>   // Other Arabic content for page 0
        ],
        // Arabic page 2
        [
            <p>عندما دق الجرس، اقترب خالد وسلم علي. ثم انضم الينا فيصل، طرحوا علي أسئلة، و كنت أرد فقط بالإيماء، دون أن أنطق بكلمة واحدة.</p>    // Other Arabic content for page 1
        ],
        // Arabic page 3
        [
            <p>خلال الفسحة، تبعت خالد وفيصل إلى ساحة المدرسة. شكلوا فرقًا ليلعبوا، ولكنهم تركوني وحيدًا، تساءلت لماذا. هل لأنني طالبًا جديدًا.</p>  // Other Arabic content for page 2
        ],
        // Arabic page 4
        [
            <p>في كافتيريا المدرسة، درت حول الجماعات، آملاً أن يدعوني للجلوس معهم. للأسف، لم تكن هناك مقاعد فارغة، فجلست وحيدًا، أراقبهم وهم يتكلمون ويضحكون.</p>,
            // Other Arabic content for page 3
        ],
        // Arabic page 5
        [
            <p>في غرفة الرسم، رسمت صورًا جميلة. على الرغم من عدم مشاركتي اليوم مع أحد، لكنني أحب هوايتي وسعيد مع نفسي و فخور بما حققته.</p>   // Other Arabic content for page 5
        ],
        // Arabic page 6
        [
            <p>في اليوم التالي، انضم إلينا طالب جديد اسمه حسن. رحبنا به وفكرت: "عظيم، حسن هو الطالب الجديد. الآن سأكون صديقًا مع الجميع لأنني لن أكون الطالب الجديد بعد الآن."</p>  // Other Arabic content for page 6
        ],
        // Arabic page 7
        [
            <p>و لكن، لم يكن كما ظننت. أصبح حسن فورًا صديق الجميع. رحبوا به، ولعبوا معًا، وشاركوا وجباتهم. ظللت وحيدًا. هل يعتقدون أنني خجول أو غير مناسب لأكون صديقًا؟</p>  // Other Arabic content for page 7
        ],
        // Arabic page 8
        [
            <p>في غرفة الرسم، جاء حسن وتحدث معي بلغة الإشارة. لاحظ جهاز السمع الخاص بي وقال لي أن أخته ترتدي واحد أيضًا و شجعني أن أتحدث. قلت له "لكنني أتكلم بثعوبة" قال لا بأس بكلامي و حفزني أن أتحدث مع الآخرين.</p>   // Other Arabic content for page 8
        ],
        // Arabic page 9
        [
            <p>اقترح حسن أن أنضم إليه في نشاط مدرسي، عرض قصصي مع مجموعة من ثلاثة أشخاص. كنت في البداية مترددًا، ولكن تشجيعه أقنعني. كانت مجموعتنا تتألف من حسن وجمال وأنا.</p>
        ],
        // Arabic page 10
        [
            <p>أخذنا أشياء لعرضنا. وباستخدام مهاراتي، قمت بإنشاء و رسم أدوات وأزياء للعرض. أعجبوا بمهاراتي التمثيلية وطريقتي الفريدة في التحدث. استمتع الجميع بأدائنا وصفقوا لنا.</p>
        ],
        // Arabic page 11
        [
            <p>في اليوم التالي دخلت الكافتيريا مترددًا وسألت حسن إذا كان بإمكاني الانضمام لهم. رحب بي، وطلبت مني مجموعة أخرى أن أجلس معهم. ابتسمت وشكرتهم.</p>
                ],
        // Arabic page 12
        [
            <p>خلال الاستراحة، لعبت كرة القدم مع أصدقائي الجدد، مدركًا أننا لن نتعرف حقًا على بعضنا البعض إلا إذا بادرنا في التواصل.</p>
        ]
    ];

    const englishPages = [
        // English page 1
        [
            <p>On my first day at the new school, Miss Hissa introduced me to the class. Everyone said “Welcome Hamad!” . The students warmly welcomed me, and I took my seat with slow steps.</p>,
            // Other English content for page 0
        ],
        // English page 2
        [
            <p>As the bell rang, Khalid approached and greeted me. When Faisal joined us, they asked me questions, and I responded with only nods, not saying a single word.</p>
            // Other English content for page 1
        ],
        // English page 3
        [
            <p>During the break, I followed Khalid and Faisal to the school playground. They formed teams for a game, but I was left alone, wondering if it was because I'm the new student.</p>
            // Other English content for page 2
        ],
        // English page 4
        [
            <p>In the school cafeteria, I circled around the groups, hoping someone would ask me to join them. Sadly, there were no empty seats, so I sat alone, watching them chat and laugh.</p>// Other English content for page 3
        ],
        // English page 5
        [
            <p>In the art room, I painted beautiful drawings. Although no one shared anything with me today, I love my hobby, and I am happy with what I have accomplished.</p>
            // Other English content for page 5
        ],
        // English page 6
        [
            <p>The next day, a new student, Hasan, joined us, and we welcomed him. I thought, "Great, Hasan is the new student now. I will be friends with everyone since I won't be the new student anymore."</p>
            // Other English content for page 6
        ],
        // English page 7
        [
            <p>However, It wasn't as I had thought. Hasan instantly became everyone's friend. They welcomed him, played together, and shared meals. I remained alone. Do they think I'm shy, or unfit to be a friend?</p>
            // Other English content for page 7
        ],
        // English page 8
        [
            <p>In the art room, Hasan came and spoke to me in sign language. He saw my hearing aid and told me his sister wears one too. He encouraged me to speak, I said “it-th hawd fo me to thpeak” He said its fine, and motivated to talk with others.</p> // Other English content for page 8
        ],
        // English page 9
        [
            <p>Hasan proposed I join him in a school activity</p>,
            <p>a storytelling performance with a group of three</p>,
            <p>At first I was hesitant, but his encouragement convinced me.</p>,
            <p>Our group included Hasan, Jamal, and myself.</p>
        ],
        // English page 10
        [
            <p>We took items for our performance. With my skills I created props and costumes. They appreciated my acting skills and unique way of speaking. Everyone enjoyed our performance and clapped for us.  </p>,
           ],
        // English page 11
        [
            <p>The next day, unsure of what will happen, I entered the cafeteria and asked Hasan if I could join. He welcomed me, and another group invited me to sit with them too. I smiled and thanked them.</p>
        ],
        // English page 12
        [
            <p>At break, I played soccer with my new friends, realizing that we wouldn't truly know each other unless we began communicating.</p>
        ],
        [
            <p>"Be yourself, and let those who accept you, accept you."</p>
        ]
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