/* =========================================================
   EXPLORER'S GUIDE
   AMS ENCYCLOPEDIA FOR STUDENTS
   COMPLETE SCRIPT
========================================================= */


/* =========================================================
   1. TOPIC DATABASE
========================================================= */

const topics = [

    {
        id: "atom",
        title: "The Atom",
        category: "Science",
        icon: "⚛️",
        keywords: ["atom", "atoms", "proton", "protons", "neutron", "neutrons", "electron", "electrons", "nucleus"],
        short: "The tiny building block that makes up everything around us.",
        description:
            "An atom is the basic unit of ordinary matter. It has a central nucleus containing protons and neutrons, while electrons occupy the space around the nucleus.",
        essentials: [
            "Protons have a positive charge.",
            "Neutrons have no charge.",
            "Electrons have a negative charge.",
            "The nucleus contains protons and neutrons.",
            "Most of an atom is empty space."
        ],
        example:
            "A water molecule contains hydrogen and oxygen atoms. Those atoms combine to make H₂O.",
        video: "https://www.youtube.com/results?search_query=atoms+for+students"
    },

    {
        id: "photosynthesis",
        title: "Photosynthesis",
        category: "Biology",
        icon: "🌱",
        keywords: ["photosynthesis", "plants", "plant", "chlorophyll", "glucose", "sunlight"],
        short: "How plants use light energy to make their own food.",
        description:
            "Photosynthesis is the process plants use to convert light energy into chemical energy stored in glucose.",
        essentials: [
            "Plants need sunlight.",
            "Plants take in carbon dioxide.",
            "Roots absorb water.",
            "Chlorophyll captures light energy.",
            "Glucose is produced and oxygen is released."
        ],
        example:
            "A green leaf uses sunlight, water, and carbon dioxide to produce glucose and oxygen.",
        video: "https://www.youtube.com/results?search_query=photosynthesis+for+students"
    },

    {
        id: "heart",
        title: "The Human Heart",
        category: "Biology",
        icon: "❤️",
        keywords: ["heart", "blood", "circulation", "artery", "vein", "ventricle", "atrium"],
        short: "The muscular organ that pumps blood throughout your body.",
        description:
            "The heart is a muscular pump that keeps blood moving through the lungs and the rest of the body.",
        essentials: [
            "The heart has four chambers.",
            "The right side sends blood toward the lungs.",
            "The left side sends oxygen-rich blood to the body.",
            "Valves help keep blood moving in the correct direction."
        ],
        example:
            "Blood returning from the body enters the right side of the heart before traveling to the lungs.",
        video: "https://www.youtube.com/results?search_query=human+heart+for+students"
    },

    {
        id: "circuits",
        title: "Electric Circuits",
        category: "Physics",
        icon: "🔌",
        keywords: ["circuit", "electric", "electricity", "battery", "bulb", "switch", "current", "voltage"],
        short: "A path that allows electric current to flow.",
        description:
            "An electric circuit is a complete path through which electric charge can move.",
        essentials: [
            "A circuit needs a complete path.",
            "A battery can provide electrical energy.",
            "A switch can open or close the circuit.",
            "A bulb can convert electrical energy into light and heat."
        ],
        example:
            "Closing a switch completes the path, allowing current to flow through the bulb.",
        video: "https://www.youtube.com/results?search_query=electric+circuits+for+students"
    },

    {
        id: "earth",
        title: "Layers of Earth",
        category: "Earth Science",
        icon: "🌍",
        keywords: ["earth", "layers", "crust", "mantle", "core", "inner core", "outer core"],
        short: "Explore the layers hidden beneath Earth's surface.",
        description:
            "Earth is made of several major layers. Each layer has different properties, temperatures, and materials.",
        essentials: [
            "The crust is the thin outer layer.",
            "The mantle lies below the crust.",
            "The outer core is mostly liquid.",
            "The inner core is solid and extremely hot."
        ],
        example:
            "The crust is the layer where we live, while the deeper layers become much hotter and denser.",
        video: "https://www.youtube.com/results?search_query=layers+of+earth+for+students"
    },

    {
        id: "water",
        title: "The Water Cycle",
        category: "Earth Science",
        icon: "💧",
        keywords: ["water cycle", "water", "evaporation", "condensation", "precipitation", "collection"],
        short: "The continuous journey of water around Earth.",
        description:
            "Water constantly moves between Earth's surface, atmosphere, and underground through several processes.",
        essentials: [
            "Evaporation changes liquid water into water vapor.",
            "Condensation forms tiny water droplets.",
            "Precipitation returns water to Earth's surface.",
            "Collection gathers water in oceans, lakes, rivers, and other places."
        ],
        example:
            "Sunlight warms ocean water, causing some of it to evaporate into the atmosphere.",
        video: "https://www.youtube.com/results?search_query=water+cycle+for+students"
    },

    {
        id: "forces",
        title: "Forces & Motion",
        category: "Physics",
        icon: "🏀",
        keywords: ["force", "forces", "motion", "speed", "mass", "acceleration", "newton", "gravity"],
        short: "Discover how pushes and pulls affect motion.",
        description:
            "A force is a push or pull that can change an object's motion. The effect of a force depends on factors such as mass and acceleration.",
        essentials: [
            "Force is measured in newtons.",
            "A force can change speed or direction.",
            "Greater force can produce greater acceleration when mass stays constant.",
            "Mass measures how much matter an object contains."
        ],
        example:
            "Pushing a basketball harder can make it accelerate more quickly.",
        video: "https://www.youtube.com/results?search_query=forces+and+motion+for+students"
    },

    {
        id: "solar",
        title: "The Solar System",
        category: "Space",
        icon: "🪐",
        keywords: ["solar system", "sun", "planet", "planets", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"],
        short: "Explore the Sun and the worlds that orbit it.",
        description:
            "Our Solar System contains the Sun and many objects that orbit it, including eight major planets.",
        essentials: [
            "The Sun is a star.",
            "Eight planets orbit the Sun.",
            "Planets travel in paths called orbits.",
            "The planets have different sizes, temperatures, and compositions."
        ],
        example:
            "Earth completes one orbit around the Sun in about one year.",
        video: "https://www.youtube.com/results?search_query=solar+system+for+students"
    },

    {
        id: "geometry",
        title: "Geometry",
        category: "Mathematics",
        icon: "📐",
        keywords: ["geometry", "triangle", "square", "rectangle", "area", "perimeter", "shape", "angle"],
        short: "Explore shapes, measurements, angles, area, and perimeter.",
        description:
            "Geometry is the branch of mathematics that studies shapes, sizes, positions, angles, and spatial relationships.",
        essentials: [
            "Perimeter measures the distance around a shape.",
            "Area measures the surface inside a shape.",
            "Triangles have three sides.",
            "A rectangle has four right angles."
        ],
        example:
            "A rectangle with length 8 cm and width 3 cm has an area of 24 cm².",
        video: "https://www.youtube.com/results?search_query=geometry+for+students"
    },

    {
        id: "internet",
        title: "How the Internet Works",
        category: "Technology",
        icon: "🌐",
        keywords: ["internet", "web", "wifi", "router", "server", "data", "website", "browser"],
        short: "Follow information as it travels across the Internet.",
        description:
            "The Internet is a huge network of connected computers and devices that communicate by sending data.",
        essentials: [
            "Your device connects to a network.",
            "Routers help direct data.",
            "Servers store and provide information.",
            "Data is broken into packets for transmission."
        ],
        example:
            "When you open a website, your device sends requests and receives data from servers.",
        video: "https://www.youtube.com/results?search_query=how+the+internet+works+for+students"
    },

    {
        id: "dna",
        title: "DNA",
        category: "Biology",
        icon: "🧬",
        keywords: ["dna", "gene", "genes", "genetics", "double helix", "chromosome"],
        short: "The molecule that stores genetic instructions.",
        description:
            "DNA stores biological information used by living organisms to develop, function, and reproduce.",
        essentials: [
            "DNA has a double-helix structure.",
            "DNA contains four main bases.",
            "Genes are sections of DNA.",
            "DNA is organized into chromosomes."
        ],
        example:
            "A gene can contain instructions involved in producing a particular protein.",
        video: "https://www.youtube.com/results?search_query=dna+for+students"
    },

    {
        id: "civilizations",
        title: "Ancient Civilizations",
        category: "History",
        icon: "🏺",
        keywords: ["ancient", "civilization", "egypt", "egyptian", "rome", "greece", "mesopotamia", "history"],
        short: "Travel through some of humanity's earliest great civilizations.",
        description:
            "Ancient civilizations developed cities, writing systems, governments, technologies, religions, and complex cultures.",
        essentials: [
            "Ancient Egypt developed along the Nile.",
            "Mesopotamia developed between major rivers.",
            "Ancient Greece influenced philosophy, art, science, and government.",
            "Ancient Rome developed a vast empire and influential legal systems."
        ],
        example:
            "The Nile River supported farming and transportation in ancient Egypt.",
        video: "https://www.youtube.com/results?search_query=ancient+civilizations+for+students"
    },

    {
        id: "gravity",
        title: "Gravity",
        category: "Physics",
        icon: "🌎",
        keywords: ["gravity", "gravitational", "falling", "weight"],
        short: "The force that attracts objects toward one another.",
        description:
            "Gravity is an attractive force between masses. Earth's gravity pulls objects toward the ground.",
        essentials: [
            "Gravity acts on objects with mass.",
            "Earth's gravity gives objects weight.",
            "Gravity keeps planets in orbit around the Sun.",
            "Gravity becomes weaker as distance increases."
        ],
        example:
            "When you drop a ball, Earth's gravity accelerates it downward.",
        video: "https://www.youtube.com/results?search_query=gravity+for+students"
    },

    {
        id: "fractions",
        title: "Fractions",
        category: "Mathematics",
        icon: "🍕",
        keywords: ["fraction", "fractions", "numerator", "denominator", "equivalent"],
        short: "Numbers that represent parts of a whole.",
        description:
            "A fraction represents a part of a whole or a ratio between quantities.",
        essentials: [
            "The numerator is on top.",
            "The denominator is on the bottom.",
            "The denominator tells how many equal parts make the whole.",
            "The numerator tells how many parts are being considered."
        ],
        example:
            "In 3/4, the whole is divided into four equal parts and three of those parts are considered.",
        video: "https://www.youtube.com/results?search_query=fractions+for+students"
    }

];


/* =========================================================
   2. ELEMENTS
========================================================= */

const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("result");

const topicCount = document.getElementById("topicCount");

const interactiveExplorer =
    document.getElementById("interactiveExplorer");

const interactiveTitle =
    document.getElementById("interactiveTitle");

const interactiveDescription =
    document.getElementById("interactiveDescription");

const interactiveContent =
    document.getElementById("interactiveContent");

const languageButton =
    document.getElementById("languageButton");


/* =========================================================
   3. LANGUAGE
========================================================= */

let currentLanguage = "en";

const arabicTranslations = {

    "The Atom": {
        title: "الذرة",
        short: "وحدة البناء الصغيرة التي تكوّن كل ما حولنا.",
        description: "الذرة هي الوحدة الأساسية للمادة العادية."
    },

    "Photosynthesis": {
        title: "البناء الضوئي",
        short: "كيف تستخدم النباتات الضوء لصنع غذائها.",
        description: "البناء الضوئي هو العملية التي تستخدم بها النباتات الطاقة الضوئية لصنع الغذاء."
    },

    "The Human Heart": {
        title: "قلب الإنسان",
        short: "العضو العضلي الذي يضخ الدم في جميع أنحاء الجسم.",
        description: "القلب عضلة تعمل كمضخة وتحافظ على حركة الدم."
    },

    "Electric Circuits": {
        title: "الدوائر الكهربائية",
        short: "مسار يسمح بمرور التيار الكهربائي.",
        description: "الدائرة الكهربائية هي مسار كامل يمكن للشحنة الكهربائية أن تتحرك خلاله."
    },

    "Layers of Earth": {
        title: "طبقات الأرض",
        short: "استكشف الطبقات الموجودة تحت سطح الأرض.",
        description: "تتكون الأرض من عدة طبقات رئيسية تختلف في خصائصها ودرجات حرارتها."
    },

    "The Water Cycle": {
        title: "دورة الماء",
        short: "رحلة الماء المستمرة حول الأرض.",
        description: "يتحرك الماء باستمرار بين سطح الأرض والغلاف الجوي."
    },

    "Forces & Motion": {
        title: "القوى والحركة",
        short: "اكتشف كيف تؤثر قوى الدفع والسحب في الحركة.",
        description: "القوة هي دفع أو سحب يمكن أن يغير حركة الجسم."
    },

    "The Solar System": {
        title: "المجموعة الشمسية",
        short: "استكشف الشمس والعوالم التي تدور حولها.",
        description: "تتكون مجموعتنا الشمسية من الشمس والأجرام التي تدور حولها."
    },

    "Geometry": {
        title: "الهندسة",
        short: "استكشف الأشكال والقياسات والزوايا والمساحة والمحيط.",
        description: "الهندسة فرع من الرياضيات يدرس الأشكال والأحجام والزوايا."
    },

    "How the Internet Works": {
        title: "كيف يعمل الإنترنت",
        short: "تتبع المعلومات أثناء انتقالها عبر الإنترنت.",
        description: "الإنترنت شبكة ضخمة من الأجهزة المتصلة ببعضها."
    },

    "DNA": {
        title: "الحمض النووي DNA",
        short: "الجزيء الذي يخزن التعليمات الوراثية.",
        description: "يخزن DNA المعلومات البيولوجية للكائنات الحية."
    },

    "Ancient Civilizations": {
        title: "الحضارات القديمة",
        short: "رحلة عبر بعض أعظم الحضارات الأولى للبشرية.",
        description: "طورت الحضارات القديمة المدن والكتابة والحكومات والتكنولوجيا."
    },

    "Gravity": {
        title: "الجاذبية",
        short: "القوة التي تجذب الأجسام نحو بعضها.",
        description: "الجاذبية قوة تجاذب بين الأجسام التي لها كتلة."
    },

    "Fractions": {
        title: "الكسور",
        short: "أعداد تمثل أجزاءً من الكل.",
        description: "الكسر يمثل جزءًا من كل أو نسبة بين كميات."
    }

};


/* =========================================================
   4. HELPER FUNCTIONS
========================================================= */

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function getTopicText(topic) {

    if (
        currentLanguage === "ar" &&
        arabicTranslations[topic.title]
    ) {

        return arabicTranslations[topic.title];

    }

    return {
        title: topic.title,
        short: topic.short,
        description: topic.description
    };

}


function findTopic(query) {

    const cleanQuery =
        query.trim().toLowerCase();

    if (!cleanQuery) {
        return null;
    }

    return topics.find(topic => {

        const searchableText = [

            topic.title,
            topic.category,
            topic.short,
            topic.description,
            ...topic.keywords

        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(cleanQuery);

    });

}


/* =========================================================
   5. SHOW ALL TOPICS
========================================================= */

function showAllTopics() {

    result.innerHTML = "";

    topics.forEach(topic => {

        result.appendChild(
            createTopicCard(topic)
        );

    });

    if (topicCount) {
        topicCount.textContent =
            `${topics.length} topics`;
    }

}


/* =========================================================
   6. TOPIC CARDS
========================================================= */

function createTopicCard(topic) {

    const text = getTopicText(topic);

    const card =
        document.createElement("article");

    card.className = "topic-card";

    card.innerHTML = `

        <div class="topic-icon">
            ${topic.icon}
        </div>

        <span class="topic-category">
            ${escapeHTML(topic.category)}
        </span>

        <h3>
            ${escapeHTML(text.title)}
        </h3>

        <p>
            ${escapeHTML(text.short)}
        </p>

        <button
            class="topic-button"
            type="button"
        >
            Explore →
        </button>

    `;

    card.addEventListener(
        "click",
        function(event) {

            if (
                event.target.tagName.toLowerCase() === "button"
            ) {
                event.stopPropagation();
            }

            openTopic(topic);

        }
    );

    return card;

}


/* =========================================================
   7. SEARCH
========================================================= */

function searchTopics() {

    const query =
        searchBox.value.trim();

    if (!query) {

        showAllTopics();

        interactiveContent.innerHTML = `
            <div class="interactive-info">
                🔍 Search for a topic to begin exploring.
            </div>
        `;

        interactiveTitle.textContent =
            "Explore a topic interactively";

        interactiveDescription.textContent =
            "Choose a topic above to discover how it works.";

        return;

    }

    const matchingTopics =
        topics.filter(topic => {

            const searchableText = [

                topic.title,
                topic.category,
                topic.short,
                topic.description,
                ...topic.keywords

            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(
                query.toLowerCase()
            );

        });


    result.innerHTML = "";


    if (matchingTopics.length === 0) {

        result.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🔎
                </div>

                <h3>
                    No topic found
                </h3>

                <p>
                    Try searching for something like
                    <strong>atom</strong>,
                    <strong>gravity</strong>,
                    <strong>DNA</strong>,
                    or
                    <strong>photosynthesis</strong>.
                </p>

            </div>

        `;

        topicCount.textContent =
            "0 topics";

        interactiveTitle.textContent =
            "Nothing found yet";

        interactiveDescription.textContent =
            "Try another search and your interactive explorer will appear here.";

        interactiveContent.innerHTML = `
            <div class="interactive-info">
                💡 Try searching for a science, mathematics, history,
                technology, or geography topic.
            </div>
        `;

        return;

    }


    matchingTopics.forEach(topic => {

        result.appendChild(
            createTopicCard(topic)
        );

    });


    topicCount.textContent =
        `${matchingTopics.length} result${matchingTopics.length === 1 ? "" : "s"}`;


    if (matchingTopics.length === 1) {

        openTopic(matchingTopics[0]);

    } else {

        interactiveTitle.textContent =
            "Choose an interactive topic";

        interactiveDescription.textContent =
            "Several topics matched your search. Pick one to explore it.";

        interactiveContent.innerHTML = `

            <div class="interactive-card-grid">

                ${matchingTopics.map(topic => `

                    <div
                        class="interactive-card"
                        data-interactive-topic="${topic.id}"
                    >

                        <div class="icon">
                            ${topic.icon}
                        </div>

                        <h3>
                            ${escapeHTML(getTopicText(topic).title)}
                        </h3>

                        <p>
                            Click to explore
                        </p>

                    </div>

                `).join("")}

            </div>

        `;


        document
            .querySelectorAll("[data-interactive-topic]")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        const selected =
                            topics.find(
                                topic =>
                                    topic.id ===
                                    card.dataset.interactiveTopic
                            );

                        if (selected) {
                            openTopic(selected);
                        }

                    }
                );

            });

    }

}


/* =========================================================
   8. OPEN TOPIC
========================================================= */

function openTopic(topic) {

    const text = getTopicText(topic);

    searchBox.value = topic.title;

    interactiveTitle.textContent =
        `${topic.icon} ${text.title}`;

    interactiveDescription.textContent =
        text.description;


    result.innerHTML = "";

    const detailCard =
        document.createElement("div");

    detailCard.className = "topic-card";

    detailCard.innerHTML = `

        <div class="topic-icon">
            ${topic.icon}
        </div>

        <span class="topic-category">
            ${escapeHTML(topic.category)}
        </span>

        <h3>
            ${escapeHTML(text.title)}
        </h3>

        <p>
            ${escapeHTML(topic.description)}
        </p>

        <div class="cute-box">

            <strong>💡 Essentials</strong>

            <ul>
                ${topic.essentials
                    .map(item => `<li>${escapeHTML(item)}</li>`)
                    .join("")}
            </ul>

        </div>

        <div class="cute-box example-box">

            <strong>🌟 Example</strong>

            <p>
                ${escapeHTML(topic.example)}
            </p>

        </div>

        <div class="topic-actions">

            <button
                type="button"
                class="topic-action-button"
                onclick="showSimpleExplanation('${topic.id}')"
            >
                ✨ Simple
            </button>

            <button
                type="button"
                class="topic-action-button"
                onclick="showEssentials('${topic.id}')"
            >
                📌 Essentials
            </button>

            <button
                type="button"
                class="topic-action-button"
                onclick="openVideo('${topic.id}')"
            >
                🎥 Video
            </button>

        </div>

    `;

    result.appendChild(detailCard);

    topicCount.textContent =
        "1 topic";


    renderInteractive(topic);


    interactiveExplorer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   9. CUTE BOX STYLES
   Added dynamically so the new script also works
   even if the old CSS did not include these classes.
========================================================= */

function addDynamicStyles() {

    if (document.getElementById("explorerDynamicStyles")) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "explorerDynamicStyles";

    style.textContent = `

        .cute-box {
            margin-top: 16px;
            padding: 18px;
            border-radius: 18px;
            background:
                linear-gradient(
                    135deg,
                    #f7f8ff,
                    #fff7fb
                );
            border: 1px solid rgba(110,120,220,.12);
            box-shadow:
                0 8px 25px rgba(60,70,130,.06);
        }

        .cute-box strong {
            display: block;
            margin-bottom: 10px;
            color: #46527c;
        }

        .cute-box ul {
            margin: 8px 0 0 20px;
            padding: 0;
        }

        .cute-box li {
            margin: 7px 0;
            color: #68738f;
            line-height: 1.6;
        }

        .example-box {
            background:
                linear-gradient(
                    135deg,
                    #fff9f2,
                    #fff4fa
                );
        }

        .example-box p {
            margin: 0;
        }

        .topic-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 18px;
        }

        .topic-action-button {
            border: none;
            border-radius: 13px;
            padding: 11px 15px;
            background: #eef1ff;
            color: #4c5ca5;
            font-weight: 800;
            cursor: pointer;
            transition: .2s ease;
        }

        .topic-action-button:hover {
            transform: translateY(-2px);
            background: #e0e5ff;
        }

        .interactive-heading-box {
            padding: 20px;
            border-radius: 19px;
            background:
                linear-gradient(
                    135deg,
                    #f8f9ff,
                    #fff7fb
                );
            margin-bottom: 20px;
        }

        .interactive-heading-box h3 {
            margin: 0 0 7px;
        }

        .interactive-heading-box p {
            margin: 0;
        }

        .interactive-info-box {
            padding: 18px;
            border-radius: 17px;
            background: #f2f4ff;
            color: #566180;
            line-height: 1.7;
            margin-top: 15px;
        }

        .explorer-box-grid {
            display: grid;
            grid-template-columns:
                repeat(auto-fit,minmax(180px,1fr));
            gap: 14px;
            margin-top: 18px;
        }

        .explorer-box {
            padding: 18px;
            border-radius: 18px;
            background: white;
            border: 1px solid rgba(100,110,200,.1);
            box-shadow:
                0 8px 25px rgba(50,60,120,.06);
            cursor: pointer;
            transition: .2s ease;
        }

        .explorer-box:hover {
            transform: translateY(-4px);
            box-shadow:
                0 14px 30px rgba(50,60,120,.11);
        }

        .explorer-box h4 {
            margin: 8px 0;
            color: #3f4c78;
        }

        .explorer-box p {
            margin: 0;
            color: #717b96;
            line-height: 1.6;
        }

        .selected-explorer-box {
            outline: 3px solid rgba(100,120,230,.18);
        }

        .flow-arrow {
            text-align: center;
            font-size: 1.5rem;
            padding: 5px;
            color: #6675d9;
        }

        .big-number {
            font-size: 2.4rem;
            font-weight: 900;
            color: #596ce0;
        }

        .interactive-meter {
            height: 14px;
            border-radius: 999px;
            background: #e8ebf8;
            overflow: hidden;
            margin-top: 10px;
        }

        .interactive-meter-fill {
            height: 100%;
            border-radius: inherit;
            background:
                linear-gradient(
                    90deg,
                    #6678e7,
                    #9a68e9
                );
            transition: width .25s ease;
        }

        .planet-orbit-box {
            position: relative;
            width: min(100%, 420px);
            height: 420px;
            margin: 20px auto;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,230,120,.18),
                    transparent 18%
                ),
                #f8f9ff;
            overflow: hidden;
        }

        .planet-sun {
            position: absolute;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            display: grid;
            place-items: center;
            font-size: 2rem;
        }

        .planet-button {
            position: absolute;
            border: none;
            background: transparent;
            font-size: 1.8rem;
            cursor: pointer;
            transition: .2s ease;
        }

        .planet-button:hover {
            transform: scale(1.3);
        }

        .heart-flow {
            display: grid;
            gap: 9px;
            max-width: 550px;
            margin: 20px auto;
        }

        .heart-step {
            padding: 15px;
            border-radius: 15px;
            background: #fff5f7;
            border: 1px solid rgba(230,100,130,.12);
            cursor: pointer;
            transition: .2s ease;
        }

        .heart-step:hover {
            transform: translateX(5px);
        }

        .dna-helix {
            text-align: center;
            font-size: 2rem;
            line-height: 1.8;
            letter-spacing: 10px;
            padding: 20px;
            border-radius: 20px;
            background: #f7f5ff;
        }

        .layer-display {
            display: grid;
            place-items: center;
            width: min(100%,320px);
            aspect-ratio: 1;
            margin: 20px auto;
            border-radius: 50%;
            cursor: pointer;
            transition: .3s ease;
            text-align: center;
            font-weight: 900;
            padding: 25px;
            box-shadow:
                0 15px 35px rgba(60,70,130,.12);
        }

        .circuit-board {
            padding: 25px;
            border-radius: 20px;
            background: #f6f8ff;
            text-align: center;
        }

        .circuit-light {
            font-size: 4rem;
            opacity: .3;
            transition: .2s ease;
        }

        .circuit-light.on {
            opacity: 1;
            filter:
                drop-shadow(
                    0 0 18px rgba(255,210,70,.8)
                );
        }

        .geometry-shape {
            width: 150px;
            height: 100px;
            margin: 20px auto;
            background: #dfe5ff;
            border: 4px solid #6578df;
            transition: .2s ease;
        }

        .water-cycle-circle {
            width: min(100%,350px);
            aspect-ratio:1;
            margin:20px auto;
            border-radius:50%;
            display:grid;
            place-items:center;
            text-align:center;
            padding:40px;
            background:
                radial-gradient(
                    circle,
                    #edf1ff,
                    #fdf8ff
                );
            box-shadow:
                0 15px 40px rgba(70,80,140,.1);
        }

        .timeline-item {
            position:relative;
            padding:18px;
            margin:12px 0;
            border-radius:17px;
            background:white;
            border-left:5px solid #697be0;
            box-shadow:
                0 7px 22px rgba(50,60,120,.06);
            cursor:pointer;
        }

        .timeline-item:hover {
            transform:translateX(5px);
        }

    `;

    document.head.appendChild(style);

}


/* =========================================================
   10. SIMPLE EXPLANATION
========================================================= */

function showSimpleExplanation(id) {

    const topic =
        topics.find(item => item.id === id);

    if (!topic) return;

    const text =
        getTopicText(topic);

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                ✨ ${escapeHTML(text.title)} in simple words
            </h3>

            <p>
                ${escapeHTML(topic.short)}
            </p>

        </div>

        <div class="cute-box">

            <strong>🧠 Think of it like this</strong>

            <p>
                ${escapeHTML(topic.description)}
            </p>

        </div>

        <div class="cute-box example-box">

            <strong>🌟 Easy example</strong>

            <p>
                ${escapeHTML(topic.example)}
            </p>

        </div>

    `;

}


/* =========================================================
   11. ESSENTIALS
========================================================= */

function showEssentials(id) {

    const topic =
        topics.find(item => item.id === id);

    if (!topic) return;

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                📌 ${escapeHTML(topic.title)}
            </h3>

            <p>
                The things you really need to remember.
            </p>

        </div>

        <div class="explorer-box-grid">

            ${topic.essentials.map(
                (item, index) => `

                <div class="explorer-box">

                    <div class="big-number">
                        ${index + 1}
                    </div>

                    <p>
                        ${escapeHTML(item)}
                    </p>

                </div>

            `).join("")}

        </div>

    `;

}


/* =========================================================
   12. VIDEO
========================================================= */

function openVideo(id) {

    const topic =
        topics.find(item => item.id === id);

    if (!topic) return;

    window.open(
        topic.video,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   13. INTERACTIVE EXPLAINER ROUTER
========================================================= */

function renderInteractive(topic) {

    interactiveTitle.textContent =
        `${topic.icon} Interactive ${topic.title}`;

    interactiveDescription.textContent =
        "Click, change, explore, and discover how it works.";

    switch (topic.id) {

        case "atom":
            renderAtom();
            break;

        case "photosynthesis":
            renderPhotosynthesis();
            break;

        case "heart":
            renderHeart();
            break;

        case "circuits":
            renderCircuits();
            break;

        case "earth":
            renderEarth();
            break;

        case "water":
            renderWaterCycle();
            break;

        case "forces":
            renderForces();
            break;

        case "solar":
            renderSolarSystem();
            break;

        case "geometry":
            renderGeometry();
            break;

        case "internet":
            renderInternet();
            break;

        case "dna":
            renderDNA();
            break;

        case "civilizations":
            renderCivilizations();
            break;

        case "gravity":
            renderGravity();
            break;

        case "fractions":
            renderFractions();
            break;

        default:
            renderGeneric(topic);
            break;

    }

}


/* =========================================================
   14. ATOM
========================================================= */

function renderAtom() {

    interactiveContent.innerHTML = `

        <div class="atom-model">

            <div class="atom-orbit one"></div>
            <div class="atom-orbit two"></div>

            <div class="atom-nucleus">
                Nucleus
            </div>

            <button
                class="electron"
                style="top:25px;left:120px"
                data-atom="electron"
            ></button>

            <button
                class="electron"
                style="bottom:35px;right:30px"
                data-atom="electron"
            ></button>

            <button
                class="electron"
                style="top:110px;right:5px"
                data-atom="electron"
            ></button>

            <button
                class="electron"
                style="bottom:40px;left:30px"
                data-atom="electron"
            ></button>

        </div>


        <div class="explorer-box-grid">

            <div class="explorer-box" data-atom-info="proton">

                <div class="big-number">
                    +
                </div>

                <h4>Proton</h4>

                <p>
                    A positively charged particle found inside the nucleus.
                </p>

            </div>


            <div class="explorer-box" data-atom-info="neutron">

                <div class="big-number">
                    0
                </div>

                <h4>Neutron</h4>

                <p>
                    A particle with no electric charge found in the nucleus.
                </p>

            </div>


            <div class="explorer-box" data-atom-info="electron">

                <div class="big-number">
                    −
                </div>

                <h4>Electron</h4>

                <p>
                    A negatively charged particle found around the nucleus.
                </p>

            </div>


            <div class="explorer-box" data-atom-info="nucleus">

                <div class="big-number">
                    ◎
                </div>

                <h4>Nucleus</h4>

                <p>
                    The dense central region containing protons and neutrons.
                </p>

            </div>

        </div>

        <div
            id="atomInfo"
            class="interactive-info-box"
        >
            👆 Click a particle or part of the atom to learn more.
        </div>

    `;


    document
        .querySelectorAll("[data-atom-info]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const type =
                        card.dataset.atomInfo;

                    const messages = {

                        proton:
                            "🔴 Protons have a positive electric charge and are found inside the nucleus.",

                        neutron:
                            "⚪ Neutrons have no electric charge and are found inside the nucleus.",

                        electron:
                            "🔵 Electrons have a negative electric charge and occupy the space around the nucleus.",

                        nucleus:
                            "🟣 The nucleus is the tiny, dense center of an atom. It contains protons and neutrons."

                    };

                    document.getElementById(
                        "atomInfo"
                    ).textContent =
                        messages[type];

                }
            );

        });


    document
        .querySelectorAll("[data-atom='electron']")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document.getElementById(
                        "atomInfo"
                    ).textContent =
                        "🔵 You clicked an electron! Electrons have a negative charge.";

                }
            );

        });

}


/* =========================================================
   15. PHOTOSYNTHESIS
========================================================= */

function renderPhotosynthesis() {

    const steps = [

        {
            title: "☀️ 1. Light",
            text: "Sunlight provides the energy needed for photosynthesis."
        },

        {
            title: "💧 2. Water",
            text: "Roots absorb water from the soil and transport it to the leaves."
        },

        {
            title: "🌬️ 3. Carbon dioxide",
            text: "Leaves take carbon dioxide from the air."
        },

        {
            title: "🍃 4. Chlorophyll",
            text: "Chlorophyll captures light energy inside plant cells."
        },

        {
            title: "🍬 5. Glucose",
            text: "The plant produces glucose, which stores chemical energy."
        },

        {
            title: "💨 6. Oxygen",
            text: "Oxygen is released into the surrounding air."
        }

    ];


    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🌱 Build photosynthesis step by step
            </h3>

            <p>
                Click each step to see what happens.
            </p>

        </div>

        <div class="process-steps">

            ${steps.map(
                (step, index) => `

                <div
                    class="process-step"
                    data-photo-step="${index}"
                >

                    <strong>
                        ${step.title}
                    </strong>

                    <p>
                        ${step.text}
                    </p>

                </div>

            `).join("")}

        </div>

        <div
            id="photoInfo"
            class="interactive-info-box"
        >
            🌱 Start with sunlight. Then follow the steps!
        </div>

    `;


    document
        .querySelectorAll("[data-photo-step]")
        .forEach(step => {

            step.addEventListener(
                "click",
                () => {

                    document.getElementById(
                        "photoInfo"
                    ).textContent =
                        step.innerText;

                }
            );

        });

}


/* =========================================================
   16. HEART
========================================================= */

function renderHeart() {

    const steps = [

        "🩸 Body → blood returns to the right side of the heart",

        "❤️ Right ventricle → blood is pumped toward the lungs",

        "🫁 Lungs → blood receives oxygen",

        "❤️ Left side of the heart → oxygen-rich blood is pumped out",

        "🌍 Body → oxygen is delivered to cells"

    ];


    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                ❤️ Follow the blood
            </h3>

            <p>
                Click each stage to trace the journey.
            </p>

        </div>

        <div class="heart-flow">

            ${steps.map(
                (step, index) => `

                <div
                    class="heart-step"
                    data-heart-step="${index}"
                >
                    ${step}
                </div>

                ${index < steps.length - 1
                    ? `<div class="flow-arrow">↓</div>`
                    : ""}

            `).join("")}

        </div>

        <div
            id="heartInfo"
            class="interactive-info-box"
        >
            ❤️ Blood travels in a continuous loop between the heart, lungs, and body.
        </div>

    `;


    document
        .querySelectorAll("[data-heart-step]")
        .forEach(step => {

            step.addEventListener(
                "click",
                () => {

                    document.getElementById(
                        "heartInfo"
                    ).textContent =
                        `❤️ ${step.textContent.trim()}`;

                }
            );

        });

}


/* =========================================================
   17. CIRCUITS
========================================================= */

function renderCircuits() {

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🔌 Build a circuit
            </h3>

            <p>
                Toggle the switch and watch what happens.
            </p>

        </div>

        <div class="circuit-board">

            <div
                id="circuitLight"
                class="circuit-light"
            >
                💡
            </div>

            <div
                id="circuitStatus"
                class="cute-box"
            >
                The circuit is open.
            </div>

            <button
                id="circuitSwitch"
                class="topic-action-button"
                type="button"
            >
                🔘 Close Switch
            </button>

        </div>

        <div class="explorer-box-grid">

            <div class="explorer-box">

                <h4>🔋 Battery</h4>

                <p>
                    Provides electrical energy.
                </p>

            </div>

            <div class="explorer-box">

                <h4>🔘 Switch</h4>

                <p>
                    Opens or closes the path.
                </p>

            </div>

            <div class="explorer-box">

                <h4>💡 Bulb</h4>

                <p>
                    Converts electrical energy into light and heat.
                </p>

            </div>

        </div>

    `;


    let circuitOn = false;

    const switchButton =
        document.getElementById(
            "circuitSwitch"
        );

    switchButton.addEventListener(
        "click",
        () => {

            circuitOn = !circuitOn;

            const light =
                document.getElementById(
                    "circuitLight"
                );

            const status =
                document.getElementById(
                    "circuitStatus"
                );


            light.classList.toggle(
                "on",
                circuitOn
            );


            if (circuitOn) {

                switchButton.textContent =
                    "🔘 Open Switch";

                status.textContent =
                    "⚡ The circuit is closed, so current can flow and the bulb lights up.";

            } else {

                switchButton.textContent =
                    "🔘 Close Switch";

                status.textContent =
                    "⭕ The circuit is open, so the path is broken and current cannot flow.";

            }

        }
    );

}


/* =========================================================
   18. EARTH
========================================================= */

function renderEarth() {

    const layers = [

        {
            name: "🌍 Crust",
            color: "#dce5ff",
            text: "The thin outer layer where we live."
        },

        {
            name: "🔥 Mantle",
            color: "#ffe3d3",
            text: "A very thick layer of hot, solid rock that can slowly flow over long periods."
        },

        {
            name: "🟠 Outer Core",
            color: "#ffd4a8",
            text: "A very hot liquid layer made mostly of iron and nickel."
        },

        {
            name: "🔴 Inner Core",
            color: "#ffb6b6",
            text: "The extremely hot, solid center of Earth."
        }

    ];


    let currentLayer = 0;


    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🌍 Peel through Earth
            </h3>

            <p>
                Click the button to travel deeper into Earth.
            </p>

        </div>

        <div
            id="earthLayer"
            class="layer-display"
            style="background:${layers[0].color}"
        >

            <div>

                <div style="font-size:2rem">
                    ${layers[0].name}
                </div>

                <p>
                    ${layers[0].text}
                </p>

            </div>

        </div>

        <button
            id="nextLayer"
            class="topic-action-button"
            type="button"
        >
            🔍 Go Deeper
        </button>

        <div
            id="earthInfo"
            class="interactive-info-box"
        >
            Layer 1 of 4
        </div>

    `;


    document
        .getElementById("nextLayer")
        .addEventListener(
            "click",
            () => {

                currentLayer =
                    (currentLayer + 1) %
                    layers.length;

                const layer =
                    layers[currentLayer];

                const display =
                    document.getElementById(
                        "earthLayer"
                    );

                display.style.background =
                    layer.color;

                display.innerHTML = `

                    <div>

                        <div style="font-size:2rem">
                            ${layer.name}
                        </div>

                        <p>
                            ${layer.text}
                        </p>

                    </div>

                `;

                document.getElementById(
                    "earthInfo"
                ).textContent =
                    `Layer ${currentLayer + 1} of 4`;

            }
        );

}


/* =========================================================
   19. WATER CYCLE
========================================================= */

function renderWaterCycle() {

    const stages = [

        {
            name: "☀️ Evaporation",
            text: "Heat from the Sun causes liquid water to become water vapor."
        },

        {
            name: "☁️ Condensation",
            text: "Water vapor cools and forms tiny droplets in clouds."
        },

        {
            name: "🌧️ Precipitation",
            text: "Water falls from clouds as rain, snow, sleet, or hail."
        },

        {
            name: "🌊 Collection",
            text: "Water gathers in oceans, lakes, rivers, and underground."
        }

    ];


    let index = 0;


    interactiveContent.innerHTML = `

        <div class="water-cycle-circle">

            <div>

                <div
                    id="waterStage"
                    style="font-size:2rem;font-weight:900"
                >
                    ${stages[0].name}
                </div>

                <p id="waterText">
                    ${stages[0].text}
                </p>

            </div>

        </div>

        <button
            id="nextWater"
            class="topic-action-button"
            type="button"
        >
            💧 Next Stage
        </button>

        <div class="interactive-info-box">

            The water cycle keeps repeating again and again.
            There is no final stage!

        </div>

    `;


    document
        .getElementById("nextWater")
        .addEventListener(
            "click",
            () => {

                index =
                    (index + 1) %
                    stages.length;

                document.getElementById(
                    "waterStage"
                ).textContent =
                    stages[index].name;

                document.getElementById(
                    "waterText"
                ).textContent =
                    stages[index].text;

            }
        );

}


/* =========================================================
   20. FORCES & MOTION
========================================================= */

function renderForces() {

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🏀 Change the force
            </h3>

            <p>
                Move the slider and see how acceleration changes.
            </p>

        </div>

        <div class="interactive-control">

            <label>
                Force:
                <span id="forceValue">50</span> N
            </label>

            <input
                id="forceSlider"
                type="range"
                min="0"
                max="100"
                value="50"
            >

        </div>

        <div class="interactive-control">

            <label>
                Mass:
                <span id="massValue">10</span> kg
            </label>

            <input
                id="massSlider"
                type="range"
                min="1"
                max="50"
                value="10"
            >

        </div>

        <div class="cute-box">

            <strong>
                🚀 Acceleration
            </strong>

            <div
                id="accelerationValue"
                class="big-number"
            >
                5.00 m/s²
            </div>

            <div class="interactive-meter">

                <div
                    id="forceMeter"
                    class="interactive-meter-fill"
                    style="width:50%"
                ></div>

            </div>

        </div>

        <div class="interactive-info-box">

            Formula:
            <strong>
                F = m × a
            </strong>

            <br>

            So:
            <strong>
                a = F ÷ m
            </strong>

        </div>

    `;


    const forceSlider =
        document.getElementById(
            "forceSlider"
        );

    const massSlider =
        document.getElementById(
            "massSlider"
        );


    function updateForce() {

        const force =
            Number(forceSlider.value);

        const mass =
            Number(massSlider.value);

        const acceleration =
            force / mass;


        document.getElementById(
            "forceValue"
        ).textContent =
            force;

        document.getElementById(
            "massValue"
        ).textContent =
            mass;

        document.getElementById(
            "accelerationValue"
        ).textContent =
            `${acceleration.toFixed(2)} m/s²`;

        document.getElementById(
            "forceMeter"
        ).style.width =
            `${force}%`;

    }


    forceSlider.addEventListener(
        "input",
        updateForce
    );

    massSlider.addEventListener(
        "input",
        updateForce
    );

}


/* =========================================================
   21. SOLAR SYSTEM
========================================================= */

function renderSolarSystem() {

    const planets = [

        ["☿️", "Mercury"],
        ["♀️", "Venus"],
        ["🌍", "Earth"],
        ["🔴", "Mars"],
        ["🟠", "Jupiter"],
        ["🪐", "Saturn"],
        ["🔵", "Uranus"],
        ["🔵", "Neptune"]

    ];


    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🪐 Explore the planets
            </h3>

            <p>
                Click a planet to learn one quick fact.
            </p>

        </div>

        <div class="planet-orbit-box">

            <div class="planet-sun">
                ☀️
            </div>

            ${planets.map(
                (planet, index) => {

                    const angle =
                        index *
                        (360 / planets.length);

                    const radius = 165;

                    const x =
                        50 +
                        Math.cos(
                            angle *
                            Math.PI /
                            180
                        ) *
                        38;

                    const y =
                        50 +
                        Math.sin(
                            angle *
                            Math.PI /
                            180
                        ) *
                        38;

                    return `

                        <button
                            class="planet-button"
                            style="
                                left:${x}%;
                                top:${y}%;
                                transform:translate(-50%,-50%);
                            "
                            data-planet="${planet[1]}"
                            title="${planet[1]}"
                        >
                            ${planet[0]}
                        </button>

                    `;

                }

            ).join("")}

        </div>

        <div
            id="planetInfo"
            class="interactive-info-box"
        >
            🪐 Choose a planet.
        </div>

    `;


    const facts = {

        Mercury:
            "Mercury is the closest planet to the Sun.",

        Venus:
            "Venus is extremely hot and has a thick atmosphere.",

        Earth:
            "Earth is the only known planet with life.",

        Mars:
            "Mars is often called the Red Planet.",

        Jupiter:
            "Jupiter is the largest planet in our Solar System.",

        Saturn:
            "Saturn is famous for its spectacular ring system.",

        Uranus:
            "Uranus rotates on its side compared with most planets.",

        Neptune:
            "Neptune is the farthest major planet from the Sun."

    };


    document
        .querySelectorAll("[data-planet]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const planet =
                        button.dataset.planet;

                    document.getElementById(
                        "planetInfo"
                    ).textContent =
                        `🪐 ${planet}: ${facts[planet]}`;

                }
            );

        });

}


/* =========================================================
   22. GEOMETRY
========================================================= */

function renderGeometry() {

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                📐 Resize a rectangle
            </h3>

            <p>
                Change the length and width and watch the area update.
            </p>

        </div>

        <div class="interactive-control">

            <label>
                Length:
                <span id="lengthValue">8</span> cm
            </label>

            <input
                id="lengthSlider"
                type="range"
                min="1"
                max="20"
                value="8"
            >

        </div>

        <div class="interactive-control">

            <label>
                Width:
                <span id="widthValue">4</span> cm
            </label>

            <input
                id="widthSlider"
                type="range"
                min="1"
                max="15"
                value="4"
            >

        </div>

        <div
            id="geometryShape"
            class="geometry-shape"
        ></div>

        <div class="explorer-box-grid">

            <div class="explorer-box">

                <h4>📏 Area</h4>

                <div
                    id="areaValue"
                    class="big-number"
                >
                    32 cm²
                </div>

            </div>

            <div class="explorer-box">

                <h4>⭕ Perimeter</h4>

                <div
                    id="perimeterValue"
                    class="big-number"
                >
                    24 cm
                </div>

            </div>

        </div>

    `;


    const lengthSlider =
        document.getElementById(
            "lengthSlider"
        );

    const widthSlider =
        document.getElementById(
            "widthSlider"
        );


    function updateGeometry() {

        const length =
            Number(lengthSlider.value);

        const width =
            Number(widthSlider.value);

        const area =
            length * width;

        const perimeter =
            2 * (length + width);


        document.getElementById(
            "lengthValue"
        ).textContent =
            length;

        document.getElementById(
            "widthValue"
        ).textContent =
            width;

        document.getElementById(
            "areaValue"
        ).textContent =
            `${area} cm²`;

        document.getElementById(
            "perimeterValue"
        ).textContent =
            `${perimeter} cm`;


        const shape =
            document.getElementById(
                "geometryShape"
            );

        shape.style.width =
            `${Math.min(length * 12, 220)}px`;

        shape.style.height =
            `${Math.min(width * 12, 170)}px`;

    }


    lengthSlider.addEventListener(
        "input",
        updateGeometry
    );

    widthSlider.addEventListener(
        "input",
        updateGeometry
    );


    updateGeometry();

}


/* =========================================================
   23. INTERNET
========================================================= */

function renderInternet() {

    const stages = [

        {
            icon: "💻",
            title: "Your Device",
            text: "Your phone or computer sends a request."
        },

        {
            icon: "📡",
            title: "Router",
            text: "The network helps direct your data toward its destination."
        },

        {
            icon: "🌐",
            title: "Internet",
            text: "Data travels through interconnected networks."
        },

        {
            icon: "🖥️",
            title: "Server",
            text: "A server receives the request and sends information back."
        },

        {
            icon: "💻",
            title: "Your Device",
            text: "Your browser receives the data and displays the website."
        }

    ];


    let index = 0;


    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🌐 Follow your data
            </h3>

            <p>
                Press the button to move your request through the Internet.
            </p>

        </div>

        <div class="explorer-box">

            <div
                id="internetIcon"
                style="font-size:3rem"
            >
                ${stages[0].icon}
            </div>

            <h3 id="internetTitle">
                ${stages[0].title}
            </h3>

            <p id="internetText">
                ${stages[0].text}
            </p>

        </div>

        <button
            id="nextInternet"
            class="topic-action-button"
            type="button"
        >
            ➡️ Send Data
        </button>

        <div
            id="internetProgress"
            class="interactive-info-box"
        >
            Step 1 of ${stages.length}
        </div>

    `;


    document
        .getElementById("nextInternet")
        .addEventListener(
            "click",
            () => {

                index =
                    (index + 1) %
                    stages.length;

                const stage =
                    stages[index];

                document.getElementById(
                    "internetIcon"
                ).textContent =
                    stage.icon;

                document.getElementById(
                    "internetTitle"
                ).textContent =
                    stage.title;

                document.getElementById(
                    "internetText"
                ).textContent =
                    stage.text;

                document.getElementById(
                    "internetProgress"
                ).textContent =
                    `Step ${index + 1} of ${stages.length}`;

            }
        );

}


/* =========================================================
   24. DNA
========================================================= */

function renderDNA() {

    const bases = [

        ["A", "T"],
        ["T", "A"],
        ["C", "G"],
        ["G", "C"],
        ["A", "T"],
        ["C", "G"],
        ["G", "C"]

    ];


    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🧬 Explore DNA
            </h3>

            <p>
                DNA uses complementary base pairs to store information.
            </p>

        </div>

        <div class="dna-helix">

            ${bases.map(
                pair => `
                    <div>
                        ${pair[0]}
                        ═══
                        ${pair[1]}
                    </div>
                `
            ).join("")}

        </div>

        <div class="explorer-box-grid">

            <div
                class="explorer-box"
                data-dna="A"
            >

                <h4>🅰️ Adenine</h4>

                <p>
                    Adenine pairs with thymine.
                </p>

            </div>

            <div
                class="explorer-box"
                data-dna="T"
            >

                <h4>🔤 Thymine</h4>

                <p>
                    Thymine pairs with adenine.
                </p>

            </div>

            <div
                class="explorer-box"
                data-dna="C"
            >

                <h4>🔤 Cytosine</h4>

                <p>
                    Cytosine pairs with guanine.
                </p>

            </div>

            <div
                class="explorer-box"
                data-dna="G"
            >

                <h4>🔤 Guanine</h4>

                <p>
                    Guanine pairs with cytosine.
                </p>

            </div>

        </div>

        <div
            id="dnaInfo"
            class="interactive-info-box"
        >
            🧬 Click a base to learn its partner.
        </div>

    `;


    const partners = {

        A: "Adenine pairs with Thymine (T).",

        T: "Thymine pairs with Adenine (A).",

        C: "Cytosine pairs with Guanine (G).",

        G: "Guanine pairs with Cytosine (C)."

    };


    document
        .querySelectorAll("[data-dna]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const base =
                        card.dataset.dna;

                    document.getElementById(
                        "dnaInfo"
                    ).textContent =
                        `🧬 ${partners[base]}`;

                }
            );

        });

}


/* =========================================================
   25. ANCIENT CIVILIZATIONS
========================================================= */

function renderCivilizations() {

    const timeline = [

        {
            year: "c. 3100 BCE",
            name: "🏺 Ancient Egypt",
            text: "Ancient Egyptian civilization developed along the Nile River."
        },

        {
            year: "c. 3000 BCE",
            name: "🏛️ Mesopotamia",
            text: "Cities and writing developed in the region between major rivers."
        },

        {
            year: "c. 800 BCE",
            name: "🏺 Ancient Greece",
            text: "Greek civilization made major contributions to philosophy, art, science, and politics."
        },

        {
            year: "c. 509 BCE",
            name: "🦅 Ancient Rome",
            text: "Rome developed from a city-state into a powerful Mediterranean civilization."
        }

    ];


    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🏺 Travel through history
            </h3>

            <p>
                Click a civilization on the timeline.
            </p>

        </div>

        ${timeline.map(
            item => `

            <div class="timeline-item">

                <strong>
                    ${item.year}
                </strong>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.text}
                </p>

            </div>

        `).join("")}

    `;

}


/* =========================================================
   26. GRAVITY
========================================================= */

function renderGravity() {

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🌎 Explore gravity
            </h3>

            <p>
                Change the planet and see how gravitational acceleration changes.
            </p>

        </div>

        <div class="explorer-box-grid">

            <div
                class="explorer-box"
                data-gravity="Earth"
            >

                <div class="icon">
                    🌍
                </div>

                <h4>Earth</h4>

                <p>
                    About 9.8 m/s²
                </p>

            </div>

            <div
                class="explorer-box"
                data-gravity="Moon"
            >

                <div class="icon">
                    🌙
                </div>

                <h4>Moon</h4>

                <p>
                    About 1.6 m/s²
                </p>

            </div>

            <div
                class="explorer-box"
                data-gravity="Mars"
            >

                <div class="icon">
                    🔴
                </div>

                <h4>Mars</h4>

                <p>
                    About 3.7 m/s²
                </p>

            </div>

        </div>

        <div
            id="gravityInfo"
            class="interactive-info-box"
        >
            🌎 Choose a world.
        </div>

    `;


    const values = {

        Earth:
            "Earth's gravitational acceleration is about 9.8 m/s².",

        Moon:
            "The Moon's gravity is much weaker, about 1.6 m/s².",

        Mars:
            "Mars has a gravitational acceleration of about 3.7 m/s²."

    };


    document
        .querySelectorAll("[data-gravity]")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const world =
                        card.dataset.gravity;

                    document.getElementById(
                        "gravityInfo"
                    ).textContent =
                        values[world];

                }
            );

        });

}


/* =========================================================
   27. FRACTIONS
========================================================= */

function renderFractions() {

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                🍕 Build a fraction
            </h3>

            <p>
                Change the numerator and denominator.
            </p>

        </div>

        <div class="interactive-control">

            <label>
                Numerator:
                <span id="numeratorValue">3</span>
            </label>

            <input
                id="numeratorSlider"
                type="range"
                min="0"
                max="10"
                value="3"
            >

        </div>

        <div class="interactive-control">

            <label>
                Denominator:
                <span id="denominatorValue">4</span>
            </label>

            <input
                id="denominatorSlider"
                type="range"
                min="1"
                max="10"
                value="4"
            >

        </div>

        <div class="explorer-box">

            <div
                id="fractionDisplay"
                style="
                    font-size:3.5rem;
                    font-weight:900;
                    text-align:center;
                "
            >
                3/4
            </div>

            <p
                id="fractionDecimal"
                style="text-align:center"
            >
                = 0.75
            </p>

        </div>

        <div class="interactive-info-box">

            💡 The numerator tells you how many parts you have.
            The denominator tells you how many equal parts make the whole.

        </div>

    `;


    const numerator =
        document.getElementById(
            "numeratorSlider"
        );

    const denominator =
        document.getElementById(
            "denominatorSlider"
        );


    function updateFraction() {

        const n =
            Number(numerator.value);

        const d =
            Number(denominator.value);

        document.getElementById(
            "numeratorValue"
        ).textContent =
            n;

        document.getElementById(
            "denominatorValue"
        ).textContent =
            d;

        document.getElementById(
            "fractionDisplay"
        ).textContent =
            `${n}/${d}`;

        document.getElementById(
            "fractionDecimal"
        ).textContent =
            `= ${(n / d).toFixed(2)}`;

    }


    numerator.addEventListener(
        "input",
        updateFraction
    );

    denominator.addEventListener(
        "input",
        updateFraction
    );

}


/* =========================================================
   28. GENERIC EXPLORER
========================================================= */

function renderGeneric(topic) {

    interactiveContent.innerHTML = `

        <div class="interactive-heading-box">

            <h3>
                ${topic.icon}
                ${escapeHTML(topic.title)}
            </h3>

            <p>
                ${escapeHTML(topic.description)}
            </p>

        </div>

        <div class="explorer-box-grid">

            ${topic.essentials.map(
                (item, index) => `

                <div class="explorer-box">

                    <div class="big-number">
                        ${index + 1}
                    </div>

                    <p>
                        ${escapeHTML(item)}
                    </p>

                </div>

            `).join("")}

        </div>

        <div class="cute-box example-box">

            <strong>
                🌟 Example
            </strong>

            <p>
                ${escapeHTML(topic.example)}
            </p>

        </div>

    `;

}


/* =========================================================
   29. QUIZ SYSTEM
========================================================= */

const quizQuestions = {

    atom: {
        question: "Which particle has a negative charge?",
        options: [
            "Proton",
            "Neutron",
            "Electron",
            "Nucleus"
        ],
        answer: 2
    },

    photosynthesis: {
        question: "What provides the main energy for photosynthesis?",
        options: [
            "Moonlight",
            "Sunlight",
            "Sound",
            "Gravity"
        ],
        answer: 1
    },

    heart: {
        question: "What does the heart do?",
        options: [
            "Pumps blood",
            "Makes bones",
            "Digests food",
            "Stores oxygen"
        ],
        answer: 0
    },

    circuits: {
        question: "What must a circuit have for current to flow?",
        options: [
            "A broken path",
            "A complete path",
            "No battery",
            "Only a switch"
        ],
        answer: 1
    },

    earth: {
        question: "Which layer is Earth's outermost major layer?",
        options: [
            "Inner core",
            "Outer core",
            "Mantle",
            "Crust"
        ],
        answer: 3
    },

    forces: {
        question: "What is force?",
        options: [
            "A push or pull",
            "A type of mass",
            "A unit of time",
            "A type of energy only"
        ],
        answer: 0
    },

    gravity: {
        question: "What does Earth's gravity do?",
        options: [
            "Repels all objects",
            "Attracts objects toward Earth",
            "Stops time",
            "Creates light"
        ],
        answer: 1
    }

};


function showQuiz(id) {

    const quiz =
        quizQuestions[id];

    if (!quiz) {

        alert(
            "A quiz for this topic is coming soon! 🧠"
        );

        return;

    }


    interactiveContent.innerHTML = `

        <div class="interactive-quiz">

            <h3>
                🧠 Quick Challenge
            </h3>

            <p>
                ${quiz.question}
            </p>

            <div id="quizOptions">

                ${quiz.options.map(
                    (option, index) => `

                    <button
                        class="quiz-option"
                        data-answer="${index}"
                        type="button"
                    >
                        ${escapeHTML(option)}
                    </button>

                `).join("")}

            </div>

            <div
                id="quizResult"
                class="interactive-info-box"
            >
                Choose an answer!
            </div>

        </div>

    `;


    document
        .querySelectorAll("[data-answer]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const selected =
                        Number(
                            button.dataset.answer
                        );

                    const quizResult =
                        document.getElementById(
                            "quizResult"
                        );


                    if (
                        selected ===
                        quiz.answer
                    ) {

                        quizResult.textContent =
                            "🎉 Correct! Great job!";

                    } else {

                        quizResult.textContent =
                            `Not quite! The correct answer is "${quiz.options[quiz.answer]}".`;

                    }

                }
            );

        });

}


/* =========================================================
   30. MUSIC
========================================================= */

let musicStarted = false;

let musicButton = null;

let musicAudio = null;


function setupMusic() {

    musicAudio =
        document.createElement("audio");

    musicAudio.id =
        "backgroundMusic";

    musicAudio.loop =
        true;

    musicAudio.preload =
        "auto";

    musicAudio.src =
        "music.mp3";

    document.body.appendChild(
        musicAudio
    );


    musicButton =
        document.createElement("button");

    musicButton.className =
        "music-button";

    musicButton.type =
        "button";

    musicButton.textContent =
        "🎵 Play Music";

    musicButton.addEventListener(
        "click",
        toggleMusic
    );

    document.body.appendChild(
        musicButton
    );

}


function toggleMusic() {

    if (!musicAudio) return;


    if (!musicStarted) {

        musicAudio
            .play()
            .then(() => {

                musicStarted = true;

                musicButton.textContent =
                    "⏸️ Pause Music";

            })
            .catch(() => {

                musicButton.textContent =
                    "🎵 Click to Play";

            });

    } else {

        musicAudio.pause();

        musicStarted = false;

        musicButton.textContent =
            "🎵 Play Music";

    }

}


/* =========================================================
   31. LANGUAGE SWITCH
========================================================= */

function setupLanguage() {

    if (!languageButton) return;

    languageButton.addEventListener(
        "click",
        () => {

            currentLanguage =
                currentLanguage === "en"
                    ? "ar"
                    : "en";


            if (
                currentLanguage === "ar"
            ) {

                document.documentElement
                    .setAttribute(
                        "lang",
                        "ar"
                    );

                document.body
                    .setAttribute(
                        "dir",
                        "rtl"
                    );

                languageButton.textContent =
                    "English 🇬🇧";

            } else {

                document.documentElement
                    .setAttribute(
                        "lang",
                        "en"
                    );

                document.body
                    .setAttribute(
                        "dir",
                        "ltr"
                    );

                languageButton.textContent =
                    "العربية 🇪🇬";

            }


            if (searchBox) {

                searchBox.placeholder =
                    currentLanguage === "ar"
                        ? "جرّب: الذرة، الجاذبية، البناء الضوئي..."
                        : "Try: Photosynthesis, fractions, gravity...";

            }


            showAllTopics();

        }
    );

}


/* =========================================================
   32. SEARCH EVENTS
========================================================= */

if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchTopics
    );

}


if (searchBox) {

    searchBox.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                searchTopics();

            }

        }
    );


    searchBox.addEventListener(
        "input",
        () => {

            if (
                searchBox.value.trim() === ""
            ) {

                showAllTopics();

            }

        }
    );

}


/* =========================================================
   33. INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        addDynamicStyles();

        showAllTopics();

        setupMusic();

        setupLanguage();

    }
);


/* =========================================================
   34. MAKE FUNCTIONS AVAILABLE
   TO BUTTONS CREATED IN HTML
========================================================= */

window.openTopic =
    openTopic;

window.showSimpleExplanation =
    showSimpleExplanation;

window.showEssentials =
    showEssentials;

window.openVideo =
    openVideo;

window.showQuiz =
    showQuiz;

window.searchTopics =
    searchTopics;


/* =========================================================
   END OF EXPLORER'S GUIDE SCRIPT
========================================================= */