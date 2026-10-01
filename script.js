/* =====================================================
   EXPLORER'S GUIDE
   BILINGUAL EDUCATIONAL ENCYCLOPEDIA
===================================================== */


/* =====================================================
   LANGUAGE
===================================================== */

let currentLanguage = "en";


/* =====================================================
   TOPIC DATA
===================================================== */

const topics = [

    /* ================= SCIENCE ================= */

    {
        category: "Science & Nature",
        categoryAr: "العلوم والطبيعة",
        icon: "🔬",

        title: "Solar System",
        titleAr: "النظام الشمسي",

        description:
            "The Solar System is the collection of the Sun and all the objects that orbit it, including planets, moons, asteroids, and comets.",

        descriptionAr:
            "النظام الشمسي هو مجموعة الشمس وكل الأجرام التي تدور حولها، ومنها الكواكب والأقمار والكويكبات والمذنبات.",

        essentials: [
            "The Sun contains most of the Solar System's mass.",
            "There are eight officially recognized planets.",
            "Gravity keeps planets and many other objects in orbit."
        ],

        essentialsAr: [
            "تحتوي الشمس على معظم كتلة النظام الشمسي.",
            "يوجد ثمانية كواكب معترف بها رسميًا.",
            "تحافظ الجاذبية على دوران الكواكب والعديد من الأجرام في مداراتها."
        ],

        fact:
            "The Solar System is about 4.6 billion years old.",

        factAr:
            "يبلغ عمر النظام الشمسي نحو 4.6 مليار سنة."
    },


    {
        category: "Physics",
        categoryAr: "الفيزياء",
        icon: "🌍",

        title: "Gravity",
        titleAr: "الجاذبية",

        description:
            "Gravity is a force of attraction between objects that have mass. It keeps us on Earth and keeps planets moving around stars.",

        descriptionAr:
            "الجاذبية قوة تجاذب بين الأجسام التي تمتلك كتلة. وهي التي تجعلنا نبقى على الأرض وتحافظ على دوران الكواكب حول النجوم.",

        essentials: [
            "Objects with mass attract one another.",
            "Earth's gravity gives objects weight.",
            "Gravity becomes weaker as the distance between objects increases."
        ],

        essentialsAr: [
            "الأجسام التي لها كتلة تتجاذب مع بعضها.",
            "جاذبية الأرض تمنح الأجسام وزنها.",
            "تضعف الجاذبية كلما زادت المسافة بين الأجسام."
        ],

        fact:
            "Your weight would be much smaller on the Moon because the Moon has weaker gravity.",

        factAr:
            "سيكون وزنك أقل بكثير على القمر لأن جاذبية القمر أضعف من جاذبية الأرض."
    },


    {
        category: "Physics",
        categoryAr: "الفيزياء",
        icon: "💡",

        title: "Light",
        titleAr: "الضوء",

        description:
            "Light is a form of electromagnetic radiation that allows us to see the world around us.",

        descriptionAr:
            "الضوء شكل من أشكال الإشعاع الكهرومغناطيسي، وهو ما يسمح لنا برؤية العالم من حولنا.",

        essentials: [
            "Light travels extremely quickly.",
            "Light can be reflected, refracted, and absorbed.",
            "Visible light is only a small part of the electromagnetic spectrum."
        ],

        essentialsAr: [
            "ينتقل الضوء بسرعة هائلة.",
            "يمكن للضوء أن ينعكس وينكسر ويُمتص.",
            "الضوء المرئي جزء صغير فقط من الطيف الكهرومغناطيسي."
        ],

        fact:
            "Light from the Sun takes about eight minutes to reach Earth.",

        factAr:
            "يستغرق ضوء الشمس نحو ثماني دقائق للوصول إلى الأرض."
    },


    {
        category: "Physics",
        categoryAr: "الفيزياء",
        icon: "🔊",

        title: "Sound Waves",
        titleAr: "الموجات الصوتية",

        description:
            "Sound is produced by vibrations and travels through a medium such as air, water, or a solid.",

        descriptionAr:
            "ينتج الصوت عن الاهتزازات، وينتقل عبر وسط مثل الهواء أو الماء أو المواد الصلبة.",

        essentials: [
            "Sound needs a medium to travel.",
            "Frequency affects the pitch of a sound.",
            "Amplitude is related to how strong or loud a sound is."
        ],

        essentialsAr: [
            "يحتاج الصوت إلى وسط لينتقل خلاله.",
            "يؤثر التردد في حدة الصوت.",
            "ترتبط السعة بقوة الصوت أو ارتفاعه."
        ],

        fact:
            "Sound cannot travel through empty space because there are no particles to carry the vibration.",

        factAr:
            "لا يستطيع الصوت الانتقال في الفراغ لأن الفراغ لا يحتوي على جسيمات تنقل الاهتزاز."
    },


    {
        category: "Chemistry",
        categoryAr: "الكيمياء",
        icon: "⚛️",

        title: "Atoms",
        titleAr: "الذرات",

        description:
            "An atom is the basic unit of an element. It contains a nucleus surrounded by electrons.",

        descriptionAr:
            "الذرة هي الوحدة الأساسية للعنصر، وتتكون من نواة تحيط بها إلكترونات.",

        essentials: [
            "The nucleus contains protons and neutrons.",
            "Electrons occupy regions around the nucleus.",
            "The number of protons determines the element."
        ],

        essentialsAr: [
            "تحتوي النواة على البروتونات والنيوترونات.",
            "توجد الإلكترونات في مناطق حول النواة.",
            "يحدد عدد البروتونات نوع العنصر."
        ],

        fact:
            "A single human hair contains an enormous number of atoms.",

        factAr:
            "تحتوي شعرة بشرية واحدة على عدد هائل جدًا من الذرات."
    },


    {
        category: "Chemistry",
        categoryAr: "الكيمياء",
        icon: "🧪",

        title: "Chemical Reactions",
        titleAr: "التفاعلات الكيميائية",

        description:
            "A chemical reaction occurs when substances change into new substances with different properties.",

        descriptionAr:
            "يحدث التفاعل الكيميائي عندما تتحول مواد إلى مواد جديدة لها خصائص مختلفة.",

        essentials: [
            "Reactants are the substances that take part in a reaction.",
            "Products are the new substances formed.",
            "Atoms are rearranged during chemical reactions."
        ],

        essentialsAr: [
            "المتفاعلات هي المواد التي تدخل في التفاعل.",
            "النواتج هي المواد الجديدة التي تتكون.",
            "تُعاد ترتيبات الذرات أثناء التفاعلات الكيميائية."
        ],

        fact:
            "Rusting iron is an example of a chemical reaction.",

        factAr:
            "صدأ الحديد مثال على تفاعل كيميائي."
    },


    {
        category: "Science",
        categoryAr: "العلوم",
        icon: "💧",

        title: "Water Cycle",
        titleAr: "دورة الماء",

        description:
            "The water cycle describes the continuous movement of water between Earth's surface, atmosphere, and underground systems.",

        descriptionAr:
            "تصف دورة الماء الحركة المستمرة للماء بين سطح الأرض والغلاف الجوي والأنظمة الموجودة تحت سطح الأرض.",

        essentials: [
            "Evaporation changes liquid water into water vapor.",
            "Condensation forms clouds and tiny water droplets.",
            "Precipitation returns water to Earth's surface."
        ],

        essentialsAr: [
            "يحوّل التبخر الماء السائل إلى بخار ماء.",
            "يؤدي التكاثف إلى تكوّن السحب وقطرات الماء الصغيرة.",
            "يعيد الهطول الماء إلى سطح الأرض."
        ],

        fact:
            "The same water molecules can move through the water cycle again and again.",

        factAr:
            "يمكن لجزيئات الماء نفسها أن تنتقل عبر دورة الماء مرات عديدة."
    },


    {
        category: "Earth Science",
        categoryAr: "علوم الأرض",
        icon: "🌋",

        title: "Volcanoes",
        titleAr: "البراكين",

        description:
            "A volcano is an opening in Earth's crust through which molten rock, gases, and other materials can reach the surface.",

        descriptionAr:
            "البركان فتحة في قشرة الأرض يمكن أن تصل من خلالها الصخور المنصهرة والغازات ومواد أخرى إلى السطح.",

        essentials: [
            "Magma is molten rock beneath Earth's surface.",
            "Lava is magma that reaches the surface.",
            "Volcanic eruptions can change landscapes."
        ],

        essentialsAr: [
            "الصهارة هي الصخور المنصهرة الموجودة أسفل سطح الأرض.",
            "اللابة هي الصهارة التي تصل إلى سطح الأرض.",
            "يمكن للثورانات البركانية أن تغير شكل سطح الأرض."
        ],

        fact:
            "Volcanoes can create new land over time.",

        factAr:
            "يمكن للبراكين أن تكوّن أراضي جديدة مع مرور الوقت."
    },


    {
        category: "Earth Science",
        categoryAr: "علوم الأرض",
        icon: "🌪️",

        title: "Weather",
        titleAr: "الطقس",

        description:
            "Weather describes the short-term conditions of the atmosphere, including temperature, wind, clouds, and precipitation.",

        descriptionAr:
            "الطقس يصف حالة الغلاف الجوي على المدى القصير، ومنها درجة الحرارة والرياح والسحب والهطول.",

        essentials: [
            "Weather can change from hour to hour.",
            "Temperature is one important weather measurement.",
            "Meteorologists use instruments and models to study weather."
        ],

        essentialsAr: [
            "يمكن أن يتغير الطقس من ساعة إلى أخرى.",
            "درجة الحرارة أحد أهم قياسات الطقس.",
            "يستخدم خبراء الأرصاد الأجهزة والنماذج لدراسة الطقس."
        ],

        fact:
            "Weather forecasts use observations collected from many places.",

        factAr:
            "تعتمد توقعات الطقس على بيانات وملاحظات يتم جمعها من أماكن كثيرة."
    },


    {
        category: "Earth Science",
        categoryAr: "علوم الأرض",
        icon: "🌎",

        title: "Climate",
        titleAr: "المناخ",

        description:
            "Climate describes the long-term patterns of weather in a particular region.",

        descriptionAr:
            "المناخ يصف الأنماط طويلة المدى للطقس في منطقة معينة.",

        essentials: [
            "Climate is measured over long periods.",
            "Different regions have different climates.",
            "Temperature and precipitation are important climate factors."
        ],

        essentialsAr: [
            "يُدرس المناخ خلال فترات زمنية طويلة.",
            "تختلف المناخات من منطقة إلى أخرى.",
            "درجة الحرارة والهطول من أهم عوامل المناخ."
        ],

        fact:
            "A desert can be hot or cold, but deserts generally receive very little precipitation.",

        factAr:
            "قد تكون الصحراء حارة أو باردة، لكن الصحاري تحصل عمومًا على كميات قليلة جدًا من الهطول."
    },


    {
        category: "Physics",
        categoryAr: "الفيزياء",
        icon: "⚡",

        title: "Electricity",
        titleAr: "الكهرباء",

        description:
            "Electricity involves the movement or presence of electric charges and powers many devices used in everyday life.",

        descriptionAr:
            "ترتبط الكهرباء بوجود الشحنات الكهربائية أو حركتها، وهي تشغّل العديد من الأجهزة المستخدمة في حياتنا اليومية.",

        essentials: [
            "Electric current is the flow of electric charge.",
            "A circuit provides a path for current.",
            "Electrical energy can be transformed into other forms of energy."
        ],

        essentialsAr: [
            "التيار الكهربائي هو تدفق الشحنة الكهربائية.",
            "توفر الدائرة مسارًا لمرور التيار.",
            "يمكن تحويل الطاقة الكهربائية إلى أشكال أخرى من الطاقة."
        ],

        fact:
            "Lightning is a natural electrical discharge.",

        factAr:
            "البرق تفريغ كهربائي طبيعي."
    },


    {
        category: "Physics",
        categoryAr: "الفيزياء",
        icon: "🧲",

        title: "Magnetism",
        titleAr: "المغناطيسية",

        description:
            "Magnetism is a force associated with moving electric charges and magnetic materials.",

        descriptionAr:
            "المغناطيسية قوة ترتبط بالشحنات الكهربائية المتحركة وبعض المواد المغناطيسية.",

        essentials: [
            "Magnets have north and south poles.",
            "Opposite magnetic poles attract.",
            "Earth has a magnetic field."
        ],

        essentialsAr: [
            "للمغناطيس قطبان، شمالي وجنوبي.",
            "يتجاذب القطبان المختلفان.",
            "للأرض مجال مغناطيسي."
        ],

        fact:
            "A compass works by responding to Earth's magnetic field.",

        factAr:
            "تعمل البوصلة من خلال استجابتها للمجال المغناطيسي للأرض."
    },


    {
        category: "Physics",
        categoryAr: "الفيزياء",
        icon: "🏃",

        title: "Motion",
        titleAr: "الحركة",

        description:
            "Motion is a change in an object's position over time relative to a reference point.",

        descriptionAr:
            "الحركة هي تغير موضع جسم مع مرور الوقت بالنسبة إلى نقطة مرجعية.",

        essentials: [
            "Speed describes how quickly position changes.",
            "Velocity includes both speed and direction.",
            "Acceleration describes a change in velocity."
        ],

        essentialsAr: [
            "تصف السرعة مدى سرعة تغير الموضع.",
            "تتضمن السرعة المتجهة مقدار السرعة والاتجاه.",
            "يصف التسارع تغير السرعة المتجهة."
        ],

        fact:
            "An object can be moving even if its speed stays constant because its direction can change.",

        factAr:
            "يمكن لجسم أن يكون متحركًا حتى إذا ظلت سرعته ثابتة، لأن اتجاهه قد يتغير."
    },


    {
        category: "Physics",
        categoryAr: "الفيزياء",
        icon: "🧱",

        title: "Forces",
        titleAr: "القوى",

        description:
            "A force is a push or pull that can change an object's motion or shape.",

        descriptionAr:
            "القوة دفع أو سحب يمكن أن يغير حركة الجسم أو شكله.",

        essentials: [
            "Forces can change speed or direction.",
            "Forces are measured in newtons.",
            "Forces can act through contact or at a distance."
        ],

        essentialsAr: [
            "يمكن للقوى تغيير السرعة أو الاتجاه.",
            "تقاس القوى بوحدة النيوتن.",
            "يمكن أن تؤثر القوى بالتماس أو عن بُعد."
        ],

        fact:
            "Gravity is an example of a force that can act without direct contact.",

        factAr:
            "الجاذبية مثال على قوة يمكن أن تؤثر دون تلامس مباشر."
    },


    {
        category: "Science",
        categoryAr: "العلوم",
        icon: "🔥",

        title: "Heat",
        titleAr: "الحرارة",

        description:
            "Heat is energy transferred from a warmer object or region to a cooler one because of a temperature difference.",

        descriptionAr:
            "الحرارة طاقة تنتقل من جسم أو منطقة أكثر دفئًا إلى أخرى أكثر برودة بسبب اختلاف درجة الحرارة.",

        essentials: [
            "Heat naturally moves from warmer to cooler regions.",
            "Conduction transfers heat through direct contact.",
            "Radiation can transfer energy without a material medium."
        ],

        essentialsAr: [
            "تنتقل الحرارة طبيعيًا من المناطق الأكثر دفئًا إلى الأكثر برودة.",
            "ينقل التوصيل الحرارة من خلال التلامس المباشر.",
            "يمكن للإشعاع نقل الطاقة دون الحاجة إلى وسط مادي."
        ],

        fact:
            "Earth receives most of its energy from the Sun through radiation.",

        factAr:
            "تحصل الأرض على معظم طاقتها من الشمس عن طريق الإشعاع."
    },


    {
        category: "Science",
        categoryAr: "العلوم",
        icon: "🌡️",

        title: "Temperature",
        titleAr: "درجة الحرارة",

        description:
            "Temperature is a measure related to the average kinetic energy of particles in a substance.",

        descriptionAr:
            "درجة الحرارة مقياس يرتبط بمتوسط الطاقة الحركية لجسيمات المادة.",

        essentials: [
            "Temperature is different from heat.",
            "Thermometers are used to measure temperature.",
            "Temperature can be measured in Celsius, Fahrenheit, or Kelvin."
        ],

        essentialsAr: [
            "درجة الحرارة تختلف عن الحرارة.",
            "تستخدم مقاييس الحرارة لقياس درجة الحرارة.",
            "يمكن قياس درجة الحرارة بالسيلسيوس أو الفهرنهايت أو الكلفن."
        ],

        fact:
            "Kelvin is an important temperature scale in science.",

        factAr:
            "يُعد مقياس كلفن من المقاييس المهمة في العلوم."
    },


    {
        category: "Chemistry",
        categoryAr: "الكيمياء",
        icon: "🧊",

        title: "States of Matter",
        titleAr: "حالات المادة",

        description:
            "Matter commonly exists as solids, liquids, and gases, with particles arranged and moving differently in each state.",

        descriptionAr:
            "توجد المادة عادة في حالات صلبة وسائلة وغازية، وتختلف حركة الجسيمات وترتيبها في كل حالة.",

        essentials: [
            "Solids have a definite shape and volume.",
            "Liquids have a definite volume but take the shape of their container.",
            "Gases spread to fill their container."
        ],

        essentialsAr: [
            "للأجسام الصلبة شكل وحجم ثابتان.",
            "للسوائل حجم ثابت لكنها تأخذ شكل الوعاء.",
            "تنتشر الغازات لتملأ الوعاء الموجود فيه."
        ],

        fact:
            "Water can naturally exist as a solid, liquid, and gas on Earth.",

        factAr:
            "يمكن للماء أن يوجد طبيعيًا كصلب وسائل وغاز على الأرض."
    },


    {
        category: "Chemistry",
        categoryAr: "الكيمياء",
        icon: "🧬",

        title: "Molecules",
        titleAr: "الجزيئات",

        description:
            "A molecule is a group of atoms held together by chemical bonds.",

        descriptionAr:
            "الجزيء مجموعة من الذرات ترتبط معًا بروابط كيميائية.",

        essentials: [
            "Molecules can contain atoms of the same element or different elements.",
            "Chemical bonds hold atoms together.",
            "Water is made of H₂O molecules."
        ],

        essentialsAr: [
            "يمكن أن تتكون الجزيئات من ذرات العنصر نفسه أو من عناصر مختلفة.",
            "تحافظ الروابط الكيميائية على اتحاد الذرات.",
            "يتكون الماء من جزيئات H₂O."
        ],

        fact:
            "A single drop of water contains an enormous number of molecules.",

        factAr:
            "تحتوي قطرة ماء واحدة على عدد هائل من الجزيئات."
    },


    {
        category: "Science",
        categoryAr: "العلوم",
        icon: "🔭",

        title: "The Universe",
        titleAr: "الكون",

        description:
            "The universe includes all known space, time, matter, energy, galaxies, stars, planets, and other cosmic objects.",

        descriptionAr:
            "يشمل الكون كل ما نعرفه من المكان والزمان والمادة والطاقة والمجرات والنجوم والكواكب وغيرها من الأجرام الكونية.",

        essentials: [
            "The universe contains billions of galaxies.",
            "Galaxies contain stars, gas, dust, and other objects.",
            "Scientists study the universe using observations and mathematical models."
        ],

        essentialsAr: [
            "يحتوي الكون على مليارات المجرات.",
            "تحتوي المجرات على النجوم والغاز والغبار وأجرام أخرى.",
            "يدرس العلماء الكون باستخدام الرصد والنماذج الرياضية."
        ],

        fact:
            "The observable universe is vastly larger than our Solar System.",

        factAr:
            "الكون المرصود أكبر بكثير جدًا من نظامنا الشمسي."
    },


    /* ================= SPACE ================= */

    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "☀️",

        title: "The Sun",
        titleAr: "الشمس",

        description:
            "The Sun is a star at the center of our Solar System and the main source of energy for life on Earth.",

        descriptionAr:
            "الشمس نجم يقع في مركز نظامنا الشمسي، وهي المصدر الرئيسي للطاقة التي تدعم الحياة على الأرض.",

        essentials: [
            "The Sun is a star.",
            "It produces energy through nuclear fusion.",
            "Its gravity keeps the planets in orbit."
        ],

        essentialsAr: [
            "الشمس نجم.",
            "تنتج الطاقة من خلال الاندماج النووي.",
            "تحافظ جاذبيتها على دوران الكواكب في مداراتها."
        ],

        fact:
            "The Sun contains more than 99 percent of the mass of the Solar System.",

        factAr:
            "تحتوي الشمس على أكثر من 99% من كتلة النظام الشمسي."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🌙",

        title: "The Moon",
        titleAr: "القمر",

        description:
            "The Moon is Earth's natural satellite. Its gravity influences ocean tides and its phases change as it orbits Earth.",

        descriptionAr:
            "القمر هو القمر الطبيعي للأرض. تؤثر جاذبيته في المد والجزر، وتتغير أطواره أثناء دورانه حول الأرض.",

        essentials: [
            "The Moon orbits Earth.",
            "The Moon does not produce its own visible light.",
            "Its phases depend on its position relative to Earth and the Sun."
        ],

        essentialsAr: [
            "يدور القمر حول الأرض.",
            "لا ينتج القمر ضوءه المرئي بنفسه.",
            "تعتمد أطوار القمر على موقعه بالنسبة إلى الأرض والشمس."
        ],

        fact:
            "The same side of the Moon generally faces Earth because its rotation and orbit are synchronized.",

        factAr:
            "يواجه الجانب نفسه من القمر الأرض غالبًا لأن دوران القمر ودورانه حول الأرض متزامنان."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🔴",

        title: "Mars",
        titleAr: "المريخ",

        description:
            "Mars is the fourth planet from the Sun and is known for its reddish appearance caused largely by iron-rich dust.",

        descriptionAr:
            "المريخ هو الكوكب الرابع من الشمس، ويشتهر بلونه الأحمر الذي يرجع بدرجة كبيرة إلى الغبار الغني بالحديد.",

        essentials: [
            "Mars has a thin atmosphere.",
            "Mars has polar ice caps.",
            "Scientists study Mars for evidence about its past environments."
        ],

        essentialsAr: [
            "للمريخ غلاف جوي رقيق.",
            "للمريخ قمم جليدية قطبية.",
            "يدرس العلماء المريخ للبحث عن أدلة حول بيئته في الماضي."
        ],

        fact:
            "Mars has the largest known volcano in the Solar System, Olympus Mons.",

        factAr:
            "يوجد على المريخ أوليمبوس مونس، وهو أكبر بركان معروف في النظام الشمسي."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🌌",

        title: "Black Holes",
        titleAr: "الثقوب السوداء",

        description:
            "A black hole is a region of space where gravity is so strong that, beyond its event horizon, light cannot escape.",

        descriptionAr:
            "الثقب الأسود منطقة في الفضاء تكون فيها الجاذبية قوية جدًا لدرجة أن الضوء لا يستطيع الهروب بعد تجاوز أفق الحدث.",

        essentials: [
            "Black holes can form from the collapse of massive stars.",
            "The event horizon marks a boundary around a black hole.",
            "Black holes can affect nearby matter through gravity."
        ],

        essentialsAr: [
            "يمكن أن تتكون الثقوب السوداء من انهيار النجوم الضخمة.",
            "يمثل أفق الحدث حدًا مهمًا حول الثقب الأسود.",
            "يمكن للثقوب السوداء التأثير في المادة القريبة من خلال الجاذبية."
        ],

        fact:
            "Scientists can detect black holes by observing their effects on nearby matter and light.",

        factAr:
            "يمكن للعلماء اكتشاف الثقوب السوداء من خلال رصد تأثيرها في المادة والضوء القريبين منها."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "⭐",

        title: "Stars",
        titleAr: "النجوم",

        description:
            "Stars are enormous balls of hot plasma that produce energy, usually through nuclear fusion in their cores.",

        descriptionAr:
            "النجوم كرات هائلة من البلازما الساخنة تنتج الطاقة عادة من خلال الاندماج النووي في نواتها.",

        essentials: [
            "Stars vary in size, temperature, and color.",
            "Stars can form in large clouds of gas and dust.",
            "A star's life depends strongly on its mass."
        ],

        essentialsAr: [
            "تختلف النجوم في الحجم ودرجة الحرارة واللون.",
            "يمكن أن تتكون النجوم داخل سحب ضخمة من الغاز والغبار.",
            "تعتمد حياة النجم بدرجة كبيرة على كتلته."
        ],

        fact:
            "The Sun is an average-sized star compared with many other stars.",

        factAr:
            "الشمس نجم متوسط الحجم مقارنة بالعديد من النجوم الأخرى."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "☄️",

        title: "Comets",
        titleAr: "المذنبات",

        description:
            "Comets are icy objects that orbit the Sun. When they approach the Sun, heat can create a glowing coma and tail.",

        descriptionAr:
            "المذنبات أجرام جليدية تدور حول الشمس. وعندما تقترب من الشمس، يمكن أن تؤدي الحرارة إلى تكوّن هالة وذيل مضيء.",

        essentials: [
            "Comets contain ice, dust, and rocky material.",
            "Their orbits can be highly elongated.",
            "A comet's tail points generally away from the Sun."
        ],

        essentialsAr: [
            "تحتوي المذنبات على الجليد والغبار والمواد الصخرية.",
            "قد تكون مداراتها شديدة الاستطالة.",
            "يتجه ذيل المذنب عمومًا بعيدًا عن الشمس."
        ],

        fact:
            "A comet's tail is not simply a trail left behind along its orbit.",

        factAr:
            "ذيل المذنب ليس مجرد أثر يتركه خلفه أثناء حركته في مداره."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🪨",

        title: "Asteroids",
        titleAr: "الكويكبات",

        description:
            "Asteroids are rocky or metallic objects that orbit the Sun. Many are found in the asteroid belt between Mars and Jupiter.",

        descriptionAr:
            "الكويكبات أجرام صخرية أو معدنية تدور حول الشمس، ويوجد كثير منها في حزام الكويكبات بين المريخ والمشتري.",

        essentials: [
            "Asteroids vary greatly in size and shape.",
            "Many asteroids orbit in the region between Mars and Jupiter.",
            "Studying asteroids can reveal information about the early Solar System."
        ],

        essentialsAr: [
            "تختلف الكويكبات كثيرًا في الحجم والشكل.",
            "يدور كثير من الكويكبات في المنطقة بين المريخ والمشتري.",
            "يمكن أن تكشف دراسة الكويكبات معلومات عن النظام الشمسي المبكر."
        ],

        fact:
            "Some asteroids have their own small moons.",

        factAr:
            "يمتلك بعض الكويكبات أقمارًا صغيرة خاصة بها."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🌑",

        title: "Solar Eclipses",
        titleAr: "كسوف الشمس",

        description:
            "A solar eclipse occurs when the Moon moves between Earth and the Sun and blocks some or all of the Sun's light from reaching parts of Earth.",

        descriptionAr:
            "يحدث كسوف الشمس عندما يمر القمر بين الأرض والشمس، فيحجب جزءًا من ضوء الشمس أو كله عن مناطق من الأرض.",

        essentials: [
            "A solar eclipse requires a specific alignment of the Sun, Moon, and Earth.",
            "A total solar eclipse is visible only along a limited path.",
            "Special eye protection is needed to observe the Sun safely."
        ],

        essentialsAr: [
            "يحتاج كسوف الشمس إلى اصطفاف معين بين الشمس والقمر والأرض.",
            "يُرى الكسوف الكلي على مسار محدود فقط.",
            "تحتاج مشاهدة الشمس إلى وسائل حماية مناسبة للعين."
        ],

        fact:
            "The apparent sizes of the Sun and Moon in the sky can be similar enough to produce total solar eclipses.",

        factAr:
            "يمكن أن يبدو حجم الشمس والقمر متقاربًا في السماء بما يكفي لحدوث كسوف كلي للشمس."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🌒",

        title: "Lunar Eclipses",
        titleAr: "خسوف القمر",

        description:
            "A lunar eclipse occurs when Earth moves between the Sun and Moon and Earth's shadow falls on the Moon.",

        descriptionAr:
            "يحدث خسوف القمر عندما تقع الأرض بين الشمس والقمر، فيسقط ظل الأرض على القمر.",

        essentials: [
            "A lunar eclipse happens during a full Moon.",
            "Earth's shadow can make the Moon appear darker or reddish.",
            "Unlike solar eclipses, lunar eclipses can be viewed safely without special eye protection."
        ],

        essentialsAr: [
            "يحدث خسوف القمر أثناء اكتمال القمر.",
            "يمكن لظل الأرض أن يجعل القمر يبدو داكنًا أو مائلًا إلى الأحمر.",
            "يمكن مشاهدة خسوف القمر بأمان دون وسائل حماية خاصة للعين."
        ],

        fact:
            "A reddish lunar eclipse is sometimes called a blood moon.",

        factAr:
            "يُطلق أحيانًا على القمر المحمر أثناء الخسوف اسم القمر الدموي."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🛰️",

        title: "Satellites",
        titleAr: "الأقمار الصناعية",

        description:
            "Satellites are objects placed in orbit around Earth or another celestial body for scientific, communication, navigation, and observation purposes.",

        descriptionAr:
            "الأقمار الصناعية أجسام توضع في مدار حول الأرض أو جرم سماوي آخر لأغراض علمية واتصالية وملاحية ورصدية.",

        essentials: [
            "Satellites can be natural or artificial.",
            "Artificial satellites are designed for specific missions.",
            "Satellite data helps scientists study Earth and space."
        ],

        essentialsAr: [
            "يمكن أن تكون الأقمار طبيعية أو صناعية.",
            "تُصمم الأقمار الصناعية لمهام محددة.",
            "تساعد بيانات الأقمار الصناعية العلماء في دراسة الأرض والفضاء."
        ],

        fact:
            "Navigation systems depend on signals from multiple satellites.",

        factAr:
            "تعتمد أنظمة الملاحة على إشارات من عدة أقمار صناعية."
    },


    {
        category: "Space",
        categoryAr: "الفضاء والفلك",
        icon: "🚀",

        title: "Space Exploration",
        titleAr: "استكشاف الفضاء",

        description:
            "Space exploration uses spacecraft, robots, telescopes, and other technologies to study objects and environments beyond Earth.",

        descriptionAr:
            "يستخدم استكشاف الفضاء المركبات الفضائية والروبوتات والتلسكوبات وغيرها من التقنيات لدراسة الأجرام والبيئات خارج الأرض.",

        essentials: [
            "Robotic spacecraft can explore places humans cannot easily reach.",
            "Telescopes allow scientists to observe distant objects.",
            "Space missions provide data about planets, stars, and the universe."
        ],

        essentialsAr: [
            "يمكن للمركبات الروبوتية استكشاف أماكن يصعب على البشر الوصول إليها.",
            "تسمح التلسكوبات للعلماء برصد الأجرام البعيدة.",
            "توفر المهمات الفضائية بيانات عن الكواكب والنجوم والكون."
        ],

        fact:
            "Space exploration has also led to technologies and discoveries useful on Earth.",

        factAr:
            "أدى استكشاف الفضاء أيضًا إلى تقنيات واكتشافات مفيدة على الأرض."
    },


    /* ================= BIOLOGY ================= */

    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🧬",

        title: "Cells",
        titleAr: "الخلايا",

        description:
            "Cells are the basic structural and functional units of living organisms.",

        descriptionAr:
            "الخلايا هي الوحدات الأساسية التي يتكون منها الكائن الحي وتؤدي وظائفه الحيوية.",

        essentials: [
            "Some organisms consist of one cell.",
            "Many organisms are made of many specialized cells.",
            "Cells contain structures that perform different jobs."
        ],

        essentialsAr: [
            "يتكون بعض الكائنات الحية من خلية واحدة.",
            "تتكون كائنات حية كثيرة من خلايا متخصصة متعددة.",
            "تحتوي الخلايا على تراكيب تؤدي وظائف مختلفة."
        ],

        fact:
            "The human body contains trillions of cells.",

        factAr:
            "يحتوي جسم الإنسان على تريليونات من الخلايا."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🌱",

        title: "Photosynthesis",
        titleAr: "البناء الضوئي",

        description:
            "Photosynthesis is the process by which plants, algae, and some microorganisms use light energy to make chemical energy from carbon dioxide and water.",

        descriptionAr:
            "البناء الضوئي عملية تستخدم فيها النباتات والطحالب وبعض الكائنات الدقيقة طاقة الضوء لإنتاج طاقة كيميائية من ثاني أكسيد الكربون والماء.",

        essentials: [
            "Chlorophyll helps absorb light energy.",
            "Carbon dioxide and water are important inputs.",
            "Oxygen is released during the process."
        ],

        essentialsAr: [
            "يساعد الكلوروفيل على امتصاص طاقة الضوء.",
            "يُعد ثاني أكسيد الكربون والماء من المواد الداخلة المهمة.",
            "ينطلق الأكسجين أثناء العملية."
        ],

        fact:
            "Photosynthesis is one of the major processes that supplies oxygen to Earth's atmosphere.",

        factAr:
            "يُعد البناء الضوئي من أهم العمليات التي تساهم في توفير الأكسجين في الغلاف الجوي للأرض."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🦠",

        title: "Bacteria",
        titleAr: "البكتيريا",

        description:
            "Bacteria are microscopic single-celled organisms found in almost every environment on Earth.",

        descriptionAr:
            "البكتيريا كائنات مجهرية وحيدة الخلية توجد في معظم البيئات على الأرض تقريبًا.",

        essentials: [
            "Bacteria are living organisms.",
            "Many bacteria are harmless or useful.",
            "Some bacteria can cause disease."
        ],

        essentialsAr: [
            "البكتيريا كائنات حية.",
            "الكثير من البكتيريا غير ضار أو مفيد.",
            "يمكن لبعض البكتيريا أن تسبب الأمراض."
        ],

        fact:
            "Many bacteria live naturally on and inside the human body.",

        factAr:
            "تعيش أعداد كبيرة من البكتيريا طبيعيًا على جسم الإنسان وداخله."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🦠",

        title: "Viruses",
        titleAr: "الفيروسات",

        description:
            "Viruses are microscopic infectious agents that reproduce only by using the machinery of living cells.",

        descriptionAr:
            "الفيروسات عوامل معدية مجهرية لا تستطيع التكاثر إلا باستخدام آليات الخلايا الحية.",

        essentials: [
            "Viruses contain genetic material.",
            "They require host cells to reproduce.",
            "Different viruses affect different organisms."
        ],

        essentialsAr: [
            "تحتوي الفيروسات على مادة وراثية.",
            "تحتاج الفيروسات إلى خلايا مضيفة للتكاثر.",
            "تصيب الفيروسات المختلفة كائنات حية مختلفة."
        ],

        fact:
            "Viruses are much smaller than most bacteria.",

        factAr:
            "الفيروسات أصغر بكثير من معظم البكتيريا."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🌳",

        title: "Ecosystems",
        titleAr: "الأنظمة البيئية",

        description:
            "An ecosystem includes living organisms and the nonliving parts of their environment interacting with one another.",

        descriptionAr:
            "يشمل النظام البيئي الكائنات الحية والأجزاء غير الحية من بيئتها، مع تفاعلها معًا.",

        essentials: [
            "Producers make food, usually using sunlight.",
            "Consumers obtain energy by eating other organisms.",
            "Decomposers break down dead organic material."
        ],

        essentialsAr: [
            "ينتج المنتجون غذاءهم عادة باستخدام ضوء الشمس.",
            "يحصل المستهلكون على الطاقة من خلال تناول كائنات أخرى.",
            "يحلل المحللون المواد العضوية الميتة."
        ],

        fact:
            "An ecosystem can be as large as an ocean or as small as a pond.",

        factAr:
            "يمكن أن يكون النظام البيئي كبيرًا مثل المحيط أو صغيرًا مثل بركة."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🍃",

        title: "Food Chains",
        titleAr: "السلاسل الغذائية",

        description:
            "A food chain shows how energy and nutrients move from one organism to another through feeding relationships.",

        descriptionAr:
            "توضح السلسلة الغذائية كيفية انتقال الطاقة والمواد الغذائية من كائن حي إلى آخر من خلال علاقات التغذي.",

        essentials: [
            "Food chains usually begin with producers.",
            "Consumers occupy different feeding levels.",
            "Energy decreases as it moves through feeding levels."
        ],

        essentialsAr: [
            "تبدأ السلاسل الغذائية عادة بالمنتجين.",
            "يشغل المستهلكون مستويات غذائية مختلفة.",
            "تقل الطاقة كلما انتقلت عبر المستويات الغذائية."
        ],

        fact:
            "Food webs connect many food chains together.",

        factAr:
            "تربط الشبكات الغذائية بين العديد من السلاسل الغذائية."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🧬",

        title: "DNA",
        titleAr: "الحمض النووي DNA",

        description:
            "DNA is a molecule that stores genetic information used in the development and functioning of living organisms.",

        descriptionAr:
            "الحمض النووي DNA جزيء يخزن المعلومات الوراثية المستخدمة في نمو الكائنات الحية ووظائفها.",

        essentials: [
            "DNA carries genetic instructions.",
            "Genes are sections of DNA.",
            "DNA is organized into chromosomes in cells."
        ],

        essentialsAr: [
            "يحمل DNA التعليمات الوراثية.",
            "الجينات أجزاء من DNA.",
            "ينظم DNA في كروموسومات داخل الخلايا."
        ],

        fact:
            "Human DNA is extremely similar from person to person, while small differences contribute to individual variation.",

        factAr:
            "يتشابه DNA بين البشر بدرجة كبيرة، بينما تساهم اختلافات صغيرة في التنوع بين الأفراد."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🧬",

        title: "Genetics",
        titleAr: "علم الوراثة",

        description:
            "Genetics is the branch of biology that studies genes, heredity, and variation in living organisms.",

        descriptionAr:
            "علم الوراثة فرع من علم الأحياء يدرس الجينات والوراثة والاختلافات بين الكائنات الحية.",

        essentials: [
            "Genes influence many biological traits.",
            "Genetic information can be passed from parents to offspring.",
            "Variation can arise from genetic differences and environmental factors."
        ],

        essentialsAr: [
            "تؤثر الجينات في العديد من الصفات الحيوية.",
            "يمكن انتقال المعلومات الوراثية من الآباء إلى الأبناء.",
            "يمكن أن ينتج التنوع عن الاختلافات الجينية والعوامل البيئية."
        ],

        fact:
            "Modern genetics helps scientists understand how traits are inherited.",

        factAr:
            "يساعد علم الوراثة الحديث العلماء على فهم كيفية انتقال الصفات."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🍄",

        title: "Fungi",
        titleAr: "الفطريات",

        description:
            "Fungi are organisms such as mushrooms, molds, and yeasts that obtain nutrients by absorbing them from their surroundings.",

        descriptionAr:
            "الفطريات كائنات مثل عيش الغراب والعفن والخميرة، وتحصل على غذائها عن طريق امتصاص المواد الغذائية من البيئة المحيطة.",

        essentials: [
            "Fungi are not plants.",
            "Many fungi are important decomposers.",
            "Yeast is a type of fungus."
        ],

        essentialsAr: [
            "الفطريات ليست نباتات.",
            "تعد فطريات كثيرة محللات مهمة.",
            "الخميرة نوع من الفطريات."
        ],

        fact:
            "Some fungi are used to make bread and certain foods.",

        factAr:
            "تستخدم بعض الفطريات في صناعة الخبز وبعض الأطعمة."
    },


    {
        category: "Biology",
        categoryAr: "علم الأحياء",
        icon: "🐠",

        title: "Marine Life",
        titleAr: "الحياة البحرية",

        description:
            "Marine life includes the enormous variety of organisms that live in oceans and other saltwater environments.",

        descriptionAr:
            "تشمل الحياة البحرية التنوع الهائل من الكائنات التي تعيش في المحيطات والبيئات المالحة الأخرى.",

        essentials: [
            "Oceans contain many different ecosystems.",
            "Marine organisms range from microscopic plankton to enormous whales.",
            "Marine ecosystems are important to Earth's cycles."
        ],

        essentialsAr: [
            "تحتوي المحيطات على أنظمة بيئية متنوعة.",
            "تتراوح الكائنات البحرية من العوالق المجهرية إلى الحيتان الضخمة.",
            "تؤدي الأنظمة البحرية دورًا مهمًا في دورات الأرض."
        ],

        fact:
            "Much of Earth's biodiversity is found in marine environments.",

        factAr:
            "يوجد جزء كبير من التنوع الحيوي على الأرض في البيئات البحرية."
    },


    /* ================= HUMAN BODY ================= */

    {
        category: "Human Body",
        categoryAr: "جسم الإنسان",
        icon: "🧠",

        title: "The Brain",
        titleAr: "الدماغ",

        description:
            "The brain is a major organ of the nervous system that processes information and helps control many body functions.",

        descriptionAr:
            "الدماغ عضو رئيسي في الجهاز العصبي يعالج المعلومات ويساعد في التحكم في العديد من وظائف الجسم.",

        essentials: [
            "The brain contains billions of nerve cells.",
            "Different brain regions perform different functions.",
            "The brain communicates with the body through the nervous system."
        ],

        essentialsAr: [
            "يحتوي الدماغ على مليارات الخلايا العصبية.",
            "تؤدي مناطق مختلفة من الدماغ وظائف مختلفة.",
            "يتواصل الدماغ مع الجسم من خلال الجهاز العصبي."
        ],

        fact:
            "The brain uses a significant amount of the body's energy even when a person is resting.",

        factAr:
            "يستهلك الدماغ قدرًا ملحوظًا من طاقة الجسم حتى أثناء الراحة."
    },


    {
        category: "Human Body",
        categoryAr: "جسم الإنسان",
        icon: "❤️",

        title: "The Heart",
        titleAr: "القلب",

        description:
            "The heart is a muscular organ that pumps blood through the circulatory system.",

        descriptionAr:
            "القلب عضو عضلي يضخ الدم عبر الجهاز الدوري.",

        essentials: [
            "The heart has four chambers.",
            "Blood carries oxygen and nutrients around the body.",
            "The heart contracts rhythmically to pump blood."
        ],

        essentialsAr: [
            "يتكون القلب من أربع حجرات.",
            "ينقل الدم الأكسجين والمواد الغذائية في أنحاء الجسم.",
            "ينقبض القلب بإيقاع منتظم لضخ الدم."
        ],

        fact:
            "A healthy human heart beats many times throughout a person's life.",

        factAr:
            "ينبض قلب الإنسان السليم عددًا هائلًا من المرات طوال حياته."
    },


    {
        category: "Human Body",
        categoryAr: "جسم الإنسان",
        icon: "🫁",

        title: "The Lungs",
        titleAr: "الرئتان",

        description:
            "The lungs are organs of the respiratory system where oxygen enters the blood and carbon dioxide is removed.",

        descriptionAr:
            "الرئتان عضوان في الجهاز التنفسي يدخل فيهما الأكسجين إلى الدم ويُطرح منهما ثاني أكسيد الكربون.",

        essentials: [
            "The lungs contain millions of tiny air sacs.",
            "Gas exchange occurs between air and blood.",
            "The diaphragm helps drive breathing."
        ],

        essentialsAr: [
            "تحتوي الرئتان على ملايين الأكياس الهوائية الصغيرة.",
            "يحدث تبادل الغازات بين الهواء والدم.",
            "يساعد الحجاب الحاجز في عملية التنفس."
        ],

        fact:
            "The surface area available for gas exchange in the lungs is very large.",

        factAr:
            "تتميز الرئتان بمساحة سطح كبيرة جدًا متاحة لتبادل الغازات."
    },


    {
        category: "Human Body",
        categoryAr: "جسم الإنسان",
        icon: "🦴",

        title: "The Human Skeleton",
        titleAr: "الهيكل العظمي",

        description:
            "The human skeleton provides support, protects important organs, and works with muscles to produce movement.",

        descriptionAr:
            "يوفر الهيكل العظمي الدعم ويحمي الأعضاء المهمة ويعمل مع العضلات لإنتاج الحركة.",

        essentials: [
            "Bones provide structure and support.",
            "The skull protects the brain.",
            "The skeleton works together with joints and muscles."
        ],

        essentialsAr: [
            "توفر العظام البنية والدعم.",
            "تحمي الجمجمة الدماغ.",
            "يعمل الهيكل العظمي مع المفاصل والعضلات."
        ],

        fact:
            "Adults usually have 206 bones in their skeleton.",

        factAr:
            "يمتلك البالغ عادة 206 عظمات في هيكله العظمي."
    },


    {
        category: "Human Body",
        categoryAr: "جسم الإنسان",
        icon: "💪",

        title: "Muscles",
        titleAr: "العضلات",

        description:
            "Muscles are tissues that contract to produce movement and perform important functions inside the body.",

        descriptionAr:
            "العضلات أنسجة تنقبض لإنتاج الحركة وأداء وظائف مهمة داخل الجسم.",

        essentials: [
            "Skeletal muscles help move bones.",
            "Smooth muscles work inside organs.",
            "Cardiac muscle makes the heart contract."
        ],

        essentialsAr: [
            "تساعد العضلات الهيكلية على تحريك العظام.",
            "تعمل العضلات الملساء داخل الأعضاء.",
            "تسبب عضلة القلب انقباض القلب."
        ],

        fact:
            "The human body contains hundreds of muscles.",

        factAr:
            "يحتوي جسم الإنسان على مئات العضلات."
    },


    {
        category: "Human Body",
        categoryAr: "جسم الإنسان",
        icon: "🩸",

        title: "Blood",
        titleAr: "الدم",

        description:
            "Blood is a specialized body fluid that transports oxygen, nutrients, hormones, and waste products.",

        descriptionAr:
            "الدم سائل متخصص في الجسم ينقل الأكسجين والمواد الغذائية والهرمونات والفضلات.",

        essentials: [
            "Red blood cells transport oxygen.",
            "White blood cells are involved in immune defense.",
            "Platelets help with blood clotting."
        ],

        essentialsAr: [
            "تنقل خلايا الدم الحمراء الأكسجين.",
            "تشارك خلايا الدم البيضاء في الدفاع المناعي.",
            "تساعد الصفائح الدموية في تجلط الدم."
        ],

        fact:
            "Blood is made of cells suspended in a liquid called plasma.",

        factAr:
            "يتكون الدم من خلايا معلقة في سائل يسمى البلازما."
    },


    {
        category: "Human Body",
        categoryAr: "جسم الإنسان",
        icon: "🍎",

        title: "Nutrition",
        titleAr: "التغذية",

        description:
            "Nutrition is the process of obtaining and using nutrients that the body needs for energy, growth, repair, and normal functions.",

        descriptionAr:
            "التغذية هي عملية الحصول على العناصر الغذائية التي يحتاجها الجسم للطاقة والنمو والإصلاح وأداء وظائفه الطبيعية.",

        essentials: [
            "Carbohydrates, proteins, and fats provide energy and materials for the body.",
            "Vitamins and minerals support many body processes.",
            "Water is essential for normal body functions."
        ],

        essentialsAr: [
            "توفر الكربوهيدرات والبروتينات والدهون الطاقة والمواد التي يحتاجها الجسم.",
            "تدعم الفيتامينات والمعادن العديد من عمليات الجسم.",
            "الماء ضروري للوظائف الطبيعية للجسم."
        ],

        fact:
            "No single food contains every nutrient the human body needs in ideal amounts.",

        factAr:
            "لا يحتوي طعام واحد على كل العناصر الغذائية التي يحتاجها الجسم بالكميات المناسبة."
    },


    /* ================= HISTORY ================= */

    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🏺",

        title: "Ancient Egypt",
        titleAr: "مصر القديمة",

        description:
            "Ancient Egypt was a civilization that developed along the Nile River and lasted for thousands of years.",

        descriptionAr:
            "كانت مصر القديمة حضارة نشأت على ضفاف نهر النيل واستمرت آلاف السنين.",

        essentials: [
            "The Nile was central to agriculture and daily life.",
            "Egyptian society developed writing, architecture, and complex administration.",
            "Pharaohs were important rulers in ancient Egyptian society."
        ],

        essentialsAr: [
            "كان نهر النيل أساسيًا للزراعة والحياة اليومية.",
            "طورت الحضارة المصرية الكتابة والعمارة ونظامًا إداريًا متقدمًا.",
            "كان الفراعنة حكامًا مهمين في المجتمع المصري القديم."
        ],

        fact:
            "Ancient Egyptians developed one of the world's earliest writing systems.",

        factAr:
            "طور المصريون القدماء واحدًا من أقدم أنظمة الكتابة في العالم."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🔺",

        title: "The Pyramids",
        titleAr: "الأهرامات",

        description:
            "The pyramids of ancient Egypt were monumental structures, many of which were built as royal tombs.",

        descriptionAr:
            "كانت أهرامات مصر القديمة منشآت ضخمة، بُني كثير منها كمقابر ملكية.",

        essentials: [
            "The pyramids required large-scale organization and skilled labor.",
            "The Great Pyramid was built at Giza.",
            "Pyramids were connected with ancient Egyptian beliefs about death and the afterlife."
        ],

        essentialsAr: [
            "احتاج بناء الأهرامات إلى تنظيم واسع وعمالة ماهرة.",
            "بُني الهرم الأكبر في الجيزة.",
            "ارتبطت الأهرامات بمعتقدات المصريين القدماء عن الموت والحياة بعد الموت."
        ],

        fact:
            "The Great Pyramid was the tallest human-made structure for thousands of years.",

        factAr:
            "ظل الهرم الأكبر أطول بناء من صنع الإنسان لآلاف السنين."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "👑",

        title: "Pharaohs",
        titleAr: "الفراعنة",

        description:
            "Pharaoh was a title associated with the rulers of ancient Egypt.",

        descriptionAr:
            "كان الفرعون لقبًا مرتبطًا بحكام مصر القديمة.",

        essentials: [
            "Pharaohs ruled during different periods of Egyptian history.",
            "They were associated with political and religious authority.",
            "Not all pharaohs lived during the same historical period."
        ],

        essentialsAr: [
            "حكم الفراعنة خلال فترات مختلفة من تاريخ مصر.",
            "ارتبطوا بالسلطة السياسية والدينية.",
            "لم يعش جميع الفراعنة في الفترة التاريخية نفسها."
        ],

        fact:
            "Hatshepsut was one of the best-known female rulers of ancient Egypt.",

        factAr:
            "كانت حتشبسوت واحدة من أشهر الحاكمات في مصر القديمة."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🏛️",

        title: "Ancient Greece",
        titleAr: "اليونان القديمة",

        description:
            "Ancient Greece consisted of many independent city-states that shared language, culture, religion, and traditions.",

        descriptionAr:
            "تكونت اليونان القديمة من مدن ودول مستقلة عديدة اشتركت في اللغة والثقافة والدين والتقاليد.",

        essentials: [
            "Athens became known for its political and cultural development.",
            "Sparta developed a strongly military-oriented society.",
            "Greek thinkers influenced philosophy, mathematics, science, and art."
        ],

        essentialsAr: [
            "اشتهرت أثينا بتطورها السياسي والثقافي.",
            "طورت إسبرطة مجتمعًا ذا طابع عسكري قوي.",
            "أثر المفكرون اليونانيون في الفلسفة والرياضيات والعلوم والفنون."
        ],

        fact:
            "The Olympic Games originated in ancient Greece.",

        factAr:
            "نشأت الألعاب الأولمبية في اليونان القديمة."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🏛️",

        title: "Ancient Rome",
        titleAr: "روما القديمة",

        description:
            "Ancient Rome developed from a city into a large state and later an empire that influenced Europe, North Africa, and the Mediterranean.",

        descriptionAr:
            "تطورت روما القديمة من مدينة إلى دولة كبيرة ثم إلى إمبراطورية أثرت في أوروبا وشمال أفريقيا ومنطقة البحر المتوسط.",

        essentials: [
            "Roman law influenced later legal systems.",
            "Romans built roads, bridges, aqueducts, and public buildings.",
            "Latin influenced many modern languages."
        ],

        essentialsAr: [
            "أثر القانون الروماني في أنظمة قانونية لاحقة.",
            "بنى الرومان الطرق والجسور والقنوات والمنشآت العامة.",
            "أثرت اللغة اللاتينية في العديد من اللغات الحديثة."
        ],

        fact:
            "Some Roman roads remained in use for centuries after they were built.",

        factAr:
            "استُخدمت بعض الطرق الرومانية لقرون بعد بنائها."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "📜",

        title: "Mesopotamia",
        titleAr: "بلاد الرافدين",

        description:
            "Mesopotamia was a historical region between the Tigris and Euphrates rivers and was home to several early civilizations.",

        descriptionAr:
            "بلاد الرافدين منطقة تاريخية بين نهري دجلة والفرات، وكانت موطنًا لعدة حضارات مبكرة.",

        essentials: [
            "Sumerian cities developed early forms of writing.",
            "The region supported agriculture through river systems.",
            "Several civilizations rose and fell in Mesopotamia."
        ],

        essentialsAr: [
            "طورت المدن السومرية أشكالًا مبكرة من الكتابة.",
            "دعمت المنطقة الزراعة من خلال الأنهار.",
            "ظهرت حضارات عديدة وسقطت في بلاد الرافدين."
        ],

        fact:
            "Cuneiform is one of the earliest known writing systems.",

        factAr:
            "تُعد الكتابة المسمارية واحدة من أقدم أنظمة الكتابة المعروفة."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "☪️",

        title: "Islamic Civilization",
        titleAr: "الحضارة الإسلامية",

        description:
            "Islamic civilization developed across a wide geographic area and contributed to scholarship, science, medicine, mathematics, literature, architecture, and art.",

        descriptionAr:
            "تطورت الحضارة الإسلامية عبر مناطق جغرافية واسعة وأسهمت في العلوم والطب والرياضيات والأدب والعمارة والفنون.",

        essentials: [
            "Scholars translated and developed knowledge from many cultures.",
            "Major centers of learning appeared in different periods.",
            "Muslim scholars made important contributions to mathematics, astronomy, and medicine."
        ],

        essentialsAr: [
            "ترجم العلماء وطوّروا معارف من ثقافات متعددة.",
            "ظهرت مراكز علمية مهمة في فترات مختلفة.",
            "قدم العلماء المسلمون إسهامات مهمة في الرياضيات والفلك والطب."
        ],

        fact:
            "The word algebra comes from the title of a mathematical work by al-Khwarizmi.",

        factAr:
            "كلمة الجبر مرتبطة بعنوان كتاب رياضي للخوارزمي."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🏰",

        title: "The Middle Ages",
        titleAr: "العصور الوسطى",

        description:
            "The Middle Ages generally refers to a long period of European history between antiquity and the early modern era, although the exact dates vary.",

        descriptionAr:
            "يشير مصطلح العصور الوسطى عادة إلى فترة طويلة من التاريخ الأوروبي بين العصور القديمة وبدايات العصر الحديث، مع اختلاف التواريخ الدقيقة.",

        essentials: [
            "The period included many different societies and political systems.",
            "Trade and cities changed significantly over time.",
            "Learning continued in religious and educational institutions."
        ],

        essentialsAr: [
            "شملت الفترة مجتمعات وأنظمة سياسية مختلفة.",
            "تغيرت التجارة والمدن بدرجة كبيرة مع مرور الزمن.",
            "استمر التعلم في المؤسسات الدينية والتعليمية."
        ],

        fact:
            "The Middle Ages lasted for many centuries and were far from being one uniform period.",

        factAr:
            "استمرت العصور الوسطى قرونًا عديدة ولم تكن فترة واحدة متشابهة في كل مكان."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🎨",

        title: "The Renaissance",
        titleAr: "عصر النهضة",

        description:
            "The Renaissance was a period of major cultural, artistic, scientific, and intellectual development that began in parts of Europe.",

        descriptionAr:
            "كانت النهضة فترة من التطور الثقافي والفني والعلمي والفكري الكبير، وبدأت في أجزاء من أوروبا.",

        essentials: [
            "Artists developed new approaches to perspective and realism.",
            "Classical Greek and Roman ideas were studied again.",
            "Scientific and intellectual changes accompanied artistic developments."
        ],

        essentialsAr: [
            "طور الفنانون أساليب جديدة في المنظور والواقعية.",
            "أعيدت دراسة أفكار اليونان وروما القديمة.",
            "رافقت التطورات العلمية والفكرية التطورات الفنية."
        ],

        fact:
            "Leonardo da Vinci worked as an artist, engineer, inventor, and observer of nature.",

        factAr:
            "عمل ليوناردو دا فينشي فنانًا ومهندسًا ومخترعًا ومراقبًا للطبيعة."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🏭",

        title: "The Industrial Revolution",
        titleAr: "الثورة الصناعية",

        description:
            "The Industrial Revolution transformed production through machines, factories, new energy sources, transportation, and changing work systems.",

        descriptionAr:
            "غيرت الثورة الصناعية الإنتاج من خلال الآلات والمصانع ومصادر الطاقة الجديدة ووسائل النقل وأنظمة العمل المتغيرة.",

        essentials: [
            "Factories increased large-scale production.",
            "Steam power became important in early industrialization.",
            "Industrialization changed cities, transportation, and working life."
        ],

        essentialsAr: [
            "زادت المصانع من الإنتاج على نطاق واسع.",
            "أصبحت الطاقة البخارية مهمة في المراحل الأولى من التصنيع.",
            "غير التصنيع المدن ووسائل النقل وحياة العمل."
        ],

        fact:
            "The Industrial Revolution developed over a long period rather than happening in one single event.",

        factAr:
            "تطورت الثورة الصناعية على مدى فترة طويلة ولم تحدث في حدث واحد فقط."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🕊️",

        title: "World War I",
        titleAr: "الحرب العالمية الأولى",

        description:
            "World War I was a major international conflict fought mainly in Europe from 1914 to 1918 and involving many countries.",

        descriptionAr:
            "كانت الحرب العالمية الأولى صراعًا دوليًا كبيرًا وقع أساسًا في أوروبا بين عامي 1914 و1918 وشاركت فيه دول عديدة.",

        essentials: [
            "The war began in 1914.",
            "It involved major alliances and multiple fronts.",
            "The conflict ended in 1918."
        ],

        essentialsAr: [
            "بدأت الحرب عام 1914.",
            "شملت الحرب تحالفات كبرى وجبهات متعددة.",
            "انتهى الصراع عام 1918."
        ],

        fact:
            "The war led to major political and territorial changes in Europe and beyond.",

        factAr:
            "أدت الحرب إلى تغيرات سياسية وإقليمية كبيرة في أوروبا وخارجها."
    },


    {
        category: "History",
        categoryAr: "التاريخ",
        icon: "🌍",

        title: "World War II",
        titleAr: "الحرب العالمية الثانية",

        description:
            "World War II was a global conflict that lasted from 1939 to 1945 and involved many countries across multiple regions.",

        descriptionAr:
            "كانت الحرب العالمية الثانية صراعًا عالميًا استمر من عام 1939 إلى عام 1945 وشاركت فيه دول كثيرة في مناطق متعددة.",

        essentials: [
            "The war began in Europe in 1939.",
            "It involved major military alliances.",
            "The war ended in 1945 and had enormous global consequences."
        ],

        essentialsAr: [
            "بدأت الحرب في أوروبا عام 1939.",
            "شاركت فيها تحالفات عسكرية كبرى.",
            "انتهت الحرب عام 1945 وكان لها تأثير عالمي هائل."
        ],

        fact:
            "World War II involved fighting in Europe, Africa, Asia, and the Pacific.",

        factAr:
            "دارت معارك الحرب العالمية الثانية في أوروبا وأفريقيا وآسيا والمحيط الهادئ."
    },


    {
        category: "Egyptian History",
        categoryAr: "التاريخ المصري",
        icon: "🇪🇬",

        title: "October War of 1973",
        titleAr: "حرب أكتوبر 1973",

        description:
            "The October War was a major conflict in October 1973 involving Egypt, Syria, and Israel, and it became an important event in modern Middle Eastern history.",

        descriptionAr:
            "كانت حرب أكتوبر صراعًا كبيرًا في أكتوبر 1973 شاركت فيه مصر وسوريا وإسرائيل، وأصبحت حدثًا مهمًا في تاريخ الشرق الأوسط الحديث.",

        essentials: [
            "The conflict began in October 1973.",
            "Egyptian forces crossed the Suez Canal during the opening phase.",
            "The war contributed to later diplomatic developments in the region."
        ],

        essentialsAr: [
            "بدأ الصراع في أكتوبر 1973.",
            "عبرت القوات المصرية قناة السويس في المرحلة الأولى من الحرب.",
            "ساهمت الحرب في تطورات دبلوماسية لاحقة في المنطقة."
        ],

        fact:
            "The conflict is known in Egypt as the October War and is commemorated on October 6.",

        factAr:
            "تُعرف الحرب في مصر باسم حرب أكتوبر، ويُحتفل بذكرى بدايتها في السادس من أكتوبر."
    },


    /* ================= GEOGRAPHY ================= */

    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🌍",

        title: "Continents",
        titleAr: "القارات",

        description:
            "Continents are large continuous areas of land on Earth. A common model identifies seven continents.",

        descriptionAr:
            "القارات مساحات كبيرة ومتصلة من اليابسة على سطح الأرض. ويحدد النموذج الشائع سبع قارات.",

        essentials: [
            "The seven-continent model includes Africa, Asia, Europe, North America, South America, Australia, and Antarctica.",
            "Continents differ greatly in size and environment.",
            "Geographers use different models in different contexts."
        ],

        essentialsAr: [
            "يشمل نموذج القارات السبع أفريقيا وآسيا وأوروبا وأمريكا الشمالية وأمريكا الجنوبية وأستراليا والقارة القطبية الجنوبية.",
            "تختلف القارات كثيرًا في الحجم والبيئة.",
            "يستخدم الجغرافيون نماذج مختلفة في بعض السياقات."
        ],

        fact:
            "Asia is the largest continent by area and population.",

        factAr:
            "تُعد آسيا أكبر القارات من حيث المساحة وعدد السكان."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🌊",

        title: "Oceans",
        titleAr: "المحيطات",

        description:
            "Oceans are vast bodies of salt water that cover most of Earth's surface and influence climate and ecosystems.",

        descriptionAr:
            "المحيطات مسطحات هائلة من المياه المالحة تغطي معظم سطح الأرض وتؤثر في المناخ والأنظمة البيئية.",

        essentials: [
            "Oceans cover most of Earth's surface.",
            "They contain diverse ecosystems.",
            "Ocean currents move heat around the planet."
        ],

        essentialsAr: [
            "تغطي المحيطات معظم سطح الأرض.",
            "تحتوي على أنظمة بيئية متنوعة.",
            "تنقل التيارات المحيطية الحرارة حول الكوكب."
        ],

        fact:
            "The Pacific Ocean is the largest ocean on Earth.",

        factAr:
            "المحيط الهادئ هو أكبر محيط على الأرض."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🏞️",

        title: "The Nile River",
        titleAr: "نهر النيل",

        description:
            "The Nile is one of the world's major rivers and has played a central role in the geography and history of Egypt.",

        descriptionAr:
            "نهر النيل أحد الأنهار الرئيسية في العالم، وقد أدى دورًا محوريًا في جغرافيا مصر وتاريخها.",

        essentials: [
            "The Nile flows through northeastern Africa.",
            "The river supports agriculture and settlements.",
            "The Nile Delta is an important fertile region in Egypt."
        ],

        essentialsAr: [
            "يمر نهر النيل عبر شمال شرق أفريقيا.",
            "يدعم النهر الزراعة والاستقرار البشري.",
            "دلتا النيل منطقة زراعية خصبة ومهمة في مصر."
        ],

        fact:
            "Most of Egypt's population lives near the Nile Valley and Delta.",

        factAr:
            "يعيش معظم سكان مصر بالقرب من وادي النيل والدلتا."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🏜️",

        title: "Deserts",
        titleAr: "الصحاري",

        description:
            "Deserts are regions that receive very little precipitation. They can be hot, cold, rocky, sandy, or covered with other landscapes.",

        descriptionAr:
            "الصحاري مناطق تحصل على كميات قليلة جدًا من الهطول، وقد تكون حارة أو باردة أو صخرية أو رملية.",

        essentials: [
            "Low precipitation is the defining feature of deserts.",
            "Desert temperatures can vary greatly.",
            "Plants and animals have adaptations that help them survive."
        ],

        essentialsAr: [
            "قلة الهطول هي السمة الأساسية للصحاري.",
            "يمكن أن تتغير درجات الحرارة في الصحاري بدرجة كبيرة.",
            "تمتلك النباتات والحيوانات تكيفات تساعدها على البقاء."
        ],

        fact:
            "Antarctica is technically a desert because it receives very little precipitation.",

        factAr:
            "تُعد القارة القطبية الجنوبية من الناحية المناخية صحراء لأنها تحصل على هطول قليل جدًا."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "⛰️",

        title: "Mountains",
        titleAr: "الجبال",

        description:
            "Mountains are elevated areas of Earth's surface that rise significantly above their surroundings.",

        descriptionAr:
            "الجبال مناطق مرتفعة من سطح الأرض ترتفع بدرجة كبيرة عن المناطق المحيطة بها.",

        essentials: [
            "Mountains can form through tectonic activity.",
            "Some mountains are volcanic.",
            "Mountain environments change with altitude."
        ],

        essentialsAr: [
            "يمكن أن تتكون الجبال نتيجة النشاط التكتوني.",
            "بعض الجبال بركانية.",
            "تتغير البيئات الجبلية مع الارتفاع."
        ],

        fact:
            "Mount Everest is the highest point above sea level on Earth.",

        factAr:
            "يُعد جبل إيفرست أعلى نقطة على سطح الأرض فوق مستوى سطح البحر."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🗺️",

        title: "Maps",
        titleAr: "الخرائط",

        description:
            "A map is a representation of part of Earth's surface or another space, designed to communicate geographic information.",

        descriptionAr:
            "الخريطة تمثيل لجزء من سطح الأرض أو مساحة أخرى، وتُستخدم لعرض المعلومات الجغرافية.",

        essentials: [
            "Maps use symbols and labels to communicate information.",
            "A scale shows the relationship between map distance and real distance.",
            "Different maps are designed for different purposes."
        ],

        essentialsAr: [
            "تستخدم الخرائط الرموز والعلامات لعرض المعلومات.",
            "يوضح مقياس الرسم العلاقة بين المسافة على الخريطة والمسافة الحقيقية.",
            "تصمم الخرائط المختلفة لأغراض مختلفة."
        ],

        fact:
            "Some maps show physical features while others show human or political information.",

        factAr:
            "توضح بعض الخرائط التضاريس الطبيعية، بينما تعرض خرائط أخرى معلومات بشرية أو سياسية."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🧭",

        title: "Latitude and Longitude",
        titleAr: "دوائر العرض وخطوط الطول",

        description:
            "Latitude and longitude are geographic coordinate systems used to identify locations on Earth's surface.",

        descriptionAr:
            "دوائر العرض وخطوط الطول نظامان للإحداثيات الجغرافية يستخدمان لتحديد المواقع على سطح الأرض.",

        essentials: [
            "Latitude measures position north or south of the Equator.",
            "Longitude measures position east or west of the Prime Meridian.",
            "Together they can identify a precise location."
        ],

        essentialsAr: [
            "تقيس دوائر العرض الموقع شمال أو جنوب خط الاستواء.",
            "تقيس خطوط الطول الموقع شرق أو غرب خط جرينتش.",
            "يمكن استخدامهما معًا لتحديد موقع دقيق."
        ],

        fact:
            "The Equator is at 0 degrees latitude.",

        factAr:
            "يقع خط الاستواء عند دائرة عرض 0 درجة."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🌐",

        title: "Time Zones",
        titleAr: "المناطق الزمنية",

        description:
            "Time zones divide Earth into regions that use standard times related to Earth's rotation and geographic position.",

        descriptionAr:
            "تقسم المناطق الزمنية الأرض إلى مناطق تستخدم أوقاتًا قياسية مرتبطة بدوران الأرض وموقعها الجغرافي.",

        essentials: [
            "Earth rotates once approximately every 24 hours.",
            "Longitudinal position affects local solar time.",
            "Countries may choose time standards for practical reasons."
        ],

        essentialsAr: [
            "تدور الأرض دورة كاملة تقريبًا كل 24 ساعة.",
            "يؤثر الموقع بالنسبة لخطوط الطول في الوقت الشمسي المحلي.",
            "قد تختار الدول أنظمة زمنية لأسباب عملية."
        ],

        fact:
            "The International Date Line is associated with the transition between calendar dates.",

        factAr:
            "يرتبط خط التاريخ الدولي بالانتقال بين التواريخ في التقويم."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🌍",

        title: "Earth's Layers",
        titleAr: "طبقات الأرض",

        description:
            "Earth has several major internal layers, including the crust, mantle, outer core, and inner core.",

        descriptionAr:
            "للأرض عدة طبقات داخلية رئيسية، منها القشرة والوشاح واللب الخارجي واللب الداخلي.",

        essentials: [
            "The crust is Earth's outer solid layer.",
            "The mantle lies beneath the crust.",
            "Earth's core is mainly composed of iron and nickel."
        ],

        essentialsAr: [
            "القشرة هي الطبقة الصلبة الخارجية للأرض.",
            "يقع الوشاح أسفل القشرة.",
            "يتكون لب الأرض أساسًا من الحديد والنيكل."
        ],

        fact:
            "Scientists study Earth's interior using seismic waves and other evidence.",

        factAr:
            "يدرس العلماء باطن الأرض باستخدام الموجات الزلزالية وأدلة أخرى."
    },


    {
        category: "Geography",
        categoryAr: "الجغرافيا",
        icon: "🌊",

        title: "Tectonic Plates",
        titleAr: "الصفائح التكتونية",

        description:
            "Tectonic plates are large pieces of Earth's lithosphere that move slowly over the softer material beneath them.",

        descriptionAr:
            "الصفائح التكتونية أجزاء كبيرة من الغلاف الصخري للأرض تتحرك ببطء فوق المواد الأكثر ليونة الموجودة أسفلها.",

        essentials: [
            "Plates move only a few centimeters per year.",
            "Plate boundaries can produce earthquakes and volcanoes.",
            "Plate movement can build mountains."
        ],

        essentialsAr: [
            "تتحرك الصفائح بضعة سنتيمترات سنويًا فقط.",
            "يمكن لحدود الصفائح أن تسبب الزلازل والبراكين.",
            "يمكن لحركة الصفائح أن تؤدي إلى تكوّن الجبال."
        ],

        fact:
            "The movement of tectonic plates is driven by processes inside Earth.",

        factAr:
            "ترتبط حركة الصفائح التكتونية بعمليات تحدث داخل الأرض."
    },


    /* ================= TECHNOLOGY ================= */

    {
        category: "Technology",
        categoryAr: "التكنولوجيا",
        icon: "💻",

        title: "Computers",
        titleAr: "أجهزة الكمبيوتر",

        description:
            "Computers are electronic machines that process information according to instructions called programs.",

        descriptionAr:
            "أجهزة الكمبيوتر آلات إلكترونية تعالج المعلومات وفقًا لتعليمات تسمى البرامج.",

        essentials: [
            "Computers process data.",
            "Hardware refers to physical components.",
            "Software provides instructions for the computer."
        ],

        essentialsAr: [
            "تعالج أجهزة الكمبيوتر البيانات.",
            "يشير العتاد إلى المكونات المادية للجهاز.",
            "يوفر البرنامج التعليمات التي ينفذها الكمبيوتر."
        ],

        fact:
            "Modern computers can perform billions or more operations per second.",

        factAr:
            "يمكن لأجهزة الكمبيوتر الحديثة تنفيذ مليارات العمليات أو أكثر في الثانية."
    },


    {
        category: "Technology",
        categoryAr: "التكنولوجيا",
        icon: "🌐",

        title: "The Internet",
        titleAr: "الإنترنت",

        description:
            "The Internet is a global network of interconnected computer networks that exchange data using common communication protocols.",

        descriptionAr:
            "الإنترنت شبكة عالمية من شبكات الكمبيوتر المترابطة التي تتبادل البيانات باستخدام بروتوكولات اتصال مشتركة.",

        essentials: [
            "The Internet connects devices around the world.",
            "Websites are accessed through the World Wide Web.",
            "Internet communication depends on networking protocols."
        ],

        essentialsAr: [
            "يربط الإنترنت الأجهزة حول العالم.",
            "يمكن الوصول إلى مواقع الويب من خلال شبكة الويب العالمية.",
            "تعتمد اتصالات الإنترنت على بروتوكولات الشبكات."
        ],

        fact:
            "The World Wide Web is a service that operates on the Internet, not the Internet itself.",

        factAr:
            "شبكة الويب العالمية خدمة تعمل على الإنترنت وليست هي الإنترنت نفسه."
    },


    {
        category: "Technology",
        categoryAr: "التكنولوجيا",
        icon: "🤖",

        title: "Artificial Intelligence",
        titleAr: "الذكاء الاصطناعي",

        description:
            "Artificial intelligence refers to computer systems designed to perform tasks that can involve learning, reasoning, perception, or language processing.",

        descriptionAr:
            "يشير الذكاء الاصطناعي إلى أنظمة حاسوبية مصممة لتنفيذ مهام قد تتضمن التعلم أو الاستدلال أو الإدراك أو معالجة اللغة.",

        essentials: [
            "AI systems can be trained using data.",
            "Different AI systems are designed for different tasks.",
            "AI can recognize patterns and generate outputs."
        ],

        essentialsAr: [
            "يمكن تدريب أنظمة الذكاء الاصطناعي باستخدام البيانات.",
            "تصمم أنظمة الذكاء الاصطناعي المختلفة لمهام مختلفة.",
            "يمكن للذكاء الاصطناعي التعرف على الأنماط وإنشاء مخرجات."
        ],

        fact:
            "AI is used in areas such as language processing, image recognition, science, and transportation.",

        factAr:
            "يستخدم الذكاء الاصطناعي في مجالات مثل معالجة اللغة والتعرف على الصور والعلوم والنقل."
    },


    {
        category: "Technology",
        categoryAr: "التكنولوجيا",
        icon: "🦾",

        title: "Robotics",
        titleAr: "الروبوتات",

        description:
            "Robotics is the field of designing, building, programming, and using robots.",

        descriptionAr:
            "الروبوتات مجال يهتم بتصميم الروبوتات وبنائها وبرمجتها واستخدامها.",

        essentials: [
            "Robots can sense their surroundings using sensors.",
            "Programs control how robots behave.",
            "Robots can be used in factories, research, medicine, and exploration."
        ],

        essentialsAr: [
            "يمكن للروبوتات استشعار البيئة المحيطة باستخدام المستشعرات.",
            "تتحكم البرامج في طريقة عمل الروبوتات.",
            "تستخدم الروبوتات في المصانع والبحث والطب والاستكشاف."
        ],

        fact:
            "Some robots are designed to work in environments that are dangerous for humans.",

        factAr:
            "صُممت بعض الروبوتات للعمل في بيئات قد تكون خطرة على البشر."
    },


    {
        category: "Programming",
        categoryAr: "البرمجة",
        icon: "💻",

        title: "Programming",
        titleAr: "البرمجة",

        description:
            "Programming is the process of creating instructions that computers can execute to solve problems or perform tasks.",

        descriptionAr:
            "البرمجة هي عملية إنشاء تعليمات يستطيع الكمبيوتر تنفيذها لحل المشكلات أو أداء المهام.",

        essentials: [
            "Programs are written using programming languages.",
            "Algorithms describe steps for solving problems.",
            "Debugging helps programmers find and fix errors."
        ],

        essentialsAr: [
            "تكتب البرامج باستخدام لغات البرمجة.",
            "تصف الخوارزميات خطوات حل المشكلات.",
            "يساعد تصحيح الأخطاء المبرمجين على اكتشاف الأخطاء وإصلاحها."
        ],

        fact:
            "The first computer programmers worked with machines that were very different from modern computers.",

        factAr:
            "عمل أوائل مبرمجي الكمبيوتر مع آلات كانت مختلفة جدًا عن أجهزة الكمبيوتر الحديثة."
    },


    {
        category: "Web Development",
        categoryAr: "تطوير الويب",
        icon: "🌐",

        title: "HTML",
        titleAr: "HTML لغة بناء صفحات الويب",

        description:
            "HTML is the standard markup language used to structure content on web pages.",

        descriptionAr:
            "HTML هي لغة الترميز الأساسية المستخدمة لتنظيم محتوى صفحات الويب وبناء هيكلها.",

        essentials: [
            "HTML uses elements and tags to structure content.",
            "Headings, paragraphs, links, images, and buttons can be represented with HTML.",
            "HTML works together with CSS and JavaScript."
        ],

        essentialsAr: [
            "تستخدم HTML العناصر والوسوم لتنظيم المحتوى.",
            "يمكن تمثيل العناوين والفقرات والروابط والصور والأزرار باستخدام HTML.",
            "تعمل HTML مع CSS وJavaScript."
        ],

        fact:
            "HTML describes the structure of a webpage rather than its visual styling.",

        factAr:
            "تصف HTML هيكل صفحة الويب أكثر مما تصف شكلها المرئي."
    },


    {
        category: "Web Development",
        categoryAr: "تطوير الويب",
        icon: "🎨",

        title: "CSS",
        titleAr: "CSS تنسيق صفحات الويب",

        description:
            "CSS is a style sheet language used to control the appearance and layout of web pages.",

        descriptionAr:
            "CSS هي لغة تنسيق تستخدم للتحكم في مظهر صفحات الويب وتخطيطها.",

        essentials: [
            "CSS can control colors, fonts, spacing, and layout.",
            "Selectors choose which HTML elements receive styles.",
            "CSS can create animations and responsive layouts."
        ],

        essentialsAr: [
            "يمكن لـ CSS التحكم في الألوان والخطوط والمسافات والتخطيط.",
            "تحدد المحددات عناصر HTML التي ستتلقى التنسيقات.",
            "يمكن لـ CSS إنشاء الحركات والتخطيطات المتجاوبة."
        ],

        fact:
            "CSS helps separate the content of a webpage from its visual design.",

        factAr:
            "تساعد CSS على فصل محتوى صفحة الويب عن تصميمها المرئي."
    },


    {
        category: "Web Development",
        categoryAr: "تطوير الويب",
        icon: "⚡",

        title: "JavaScript",
        titleAr: "JavaScript",

        description:
            "JavaScript is a programming language widely used to make websites interactive and dynamic.",

        descriptionAr:
            "JavaScript لغة برمجة تستخدم على نطاق واسع لجعل مواقع الويب تفاعلية وديناميكية.",

        essentials: [
            "JavaScript can respond to user actions.",
            "It can change webpage content dynamically.",
            "It can communicate with web services and APIs."
        ],

        essentialsAr: [
            "يمكن لـ JavaScript الاستجابة لتفاعلات المستخدم.",
            "يمكنها تغيير محتوى صفحة الويب بشكل ديناميكي.",
            "يمكنها التواصل مع الخدمات وواجهات البرمجة على الويب."
        ],

        fact:
            "JavaScript is one of the core technologies of modern web development.",

        factAr:
            "تعد JavaScript واحدة من التقنيات الأساسية في تطوير الويب الحديث."
    },


    {
        category: "Technology",
        categoryAr: "التكنولوجيا",
        icon: "☁️",

        title: "Cloud Computing",
        titleAr: "الحوسبة السحابية",

        description:
            "Cloud computing provides computing resources such as storage, servers, and software over networks, often through the Internet.",

        descriptionAr:
            "توفر الحوسبة السحابية موارد مثل التخزين والخوادم والبرامج عبر الشبكات، وغالبًا من خلال الإنترنت.",

        essentials: [
            "Cloud services can provide storage and computing power.",
            "Users can access resources without owning all the physical hardware.",
            "Cloud systems are used by individuals and organizations."
        ],

        essentialsAr: [
            "يمكن للخدمات السحابية توفير التخزين والقدرة الحاسوبية.",
            "يمكن للمستخدمين الوصول إلى الموارد دون امتلاك كل الأجهزة المادية.",
            "تستخدم الأنظمة السحابية من قبل الأفراد والمؤسسات."
        ],

        fact:
            "Many familiar online services rely on cloud computing infrastructure.",

        factAr:
            "تعتمد العديد من الخدمات الإلكترونية المعروفة على بنية الحوسبة السحابية."
    },


    {
        category: "Technology",
        categoryAr: "التكنولوجيا",
        icon: "🔐",

        title: "Cybersecurity",
        titleAr: "الأمن السيبراني",

        description:
            "Cybersecurity involves protecting computers, networks, systems, and data from unauthorized access, damage, or disruption.",

        descriptionAr:
            "الأمن السيبراني يهتم بحماية أجهزة الكمبيوتر والشبكات والأنظمة والبيانات من الوصول غير المصرح به أو التلف أو التعطيل.",

        essentials: [
            "Strong passwords can improve account security.",
            "Software updates can fix security vulnerabilities.",
            "Phishing attempts often try to trick users into revealing information."
        ],

        essentialsAr: [
            "يمكن لكلمات المرور القوية تحسين أمان الحسابات.",
            "يمكن لتحديث البرامج إصلاح ثغرات أمنية.",
            "تحاول عمليات التصيد غالبًا خداع المستخدمين للكشف عن معلوماتهم."
        ],

        fact:
            "Cybersecurity is not only about technology; user behavior is also important.",

        factAr:
            "الأمن السيبراني لا يعتمد على التكنولوجيا فقط، بل يعتمد سلوك المستخدم أيضًا."
    },


    {
        category: "Technology",
        categoryAr: "التكنولوجيا",
        icon: "📱",

        title: "Smartphones",
        titleAr: "الهواتف الذكية",

        description:
            "Smartphones combine mobile communication with computing features such as cameras, applications, sensors, and Internet access.",

        descriptionAr:
            "تجمع الهواتف الذكية بين الاتصال المحمول ووظائف الحوسبة مثل الكاميرات والتطبيقات والمستشعرات والوصول إلى الإنترنت.",

        essentials: [
            "Smartphones contain processors and memory.",
            "Applications add different functions.",
            "Sensors allow phones to detect movement, location, and other information."
        ],

        essentialsAr: [
            "تحتوي الهواتف الذكية على معالجات وذاكرة.",
            "تضيف التطبيقات وظائف مختلفة.",
            "تسمح المستشعرات للهواتف باكتشاف الحركة والموقع ومعلومات أخرى."
        ],

        fact:
            "Modern smartphones contain many sensors in a very small device.",

        factAr:
            "تحتوي الهواتف الذكية الحديثة على العديد من المستشعرات داخل جهاز صغير جدًا."
    },


    /* ================= MATH ================= */

    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "➗",

        title: "Fractions",
        titleAr: "الكسور",

        description:
            "A fraction represents a part of a whole or a ratio between quantities. It has a numerator and a denominator.",

        descriptionAr:
            "الكسر يمثل جزءًا من كل أو نسبة بين كميتين، ويتكون من بسط ومقام.",

        essentials: [
            "The numerator is above the fraction line.",
            "The denominator is below the fraction line.",
            "Equivalent fractions have the same value."
        ],

        essentialsAr: [
            "يوجد البسط أعلى خط الكسر.",
            "يوجد المقام أسفل خط الكسر.",
            "الكسور المتكافئة لها القيمة نفسها."
        ],

        fact:
            "Fractions can represent numbers greater than one as well as numbers between zero and one.",

        factAr:
            "يمكن للكسور أن تمثل أعدادًا أكبر من الواحد، وكذلك أعدادًا بين الصفر والواحد."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "📊",

        title: "Percentages",
        titleAr: "النسب المئوية",

        description:
            "A percentage expresses a quantity as a part of 100 and is written using the percent symbol.",

        descriptionAr:
            "النسبة المئوية تعبر عن كمية باعتبارها جزءًا من 100، وتكتب باستخدام علامة النسبة المئوية.",

        essentials: [
            "100% represents the whole.",
            "50% represents one half.",
            "Percentages are useful for comparing quantities."
        ],

        essentialsAr: [
            "تمثل 100% الكل.",
            "تمثل 50% النصف.",
            "تستخدم النسب المئوية في مقارنة الكميات."
        ],

        fact:
            "The word percent comes from a Latin expression meaning per hundred.",

        factAr:
            "ترجع كلمة percent إلى تعبير لاتيني يعني لكل مئة."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "📐",

        title: "Geometry",
        titleAr: "الهندسة",

        description:
            "Geometry is the branch of mathematics that studies shapes, sizes, positions, angles, and spatial relationships.",

        descriptionAr:
            "الهندسة فرع من الرياضيات يدرس الأشكال والأحجام والمواضع والزوايا والعلاقات المكانية.",

        essentials: [
            "Geometry includes points, lines, angles, and shapes.",
            "Perimeter measures the distance around a shape.",
            "Area measures the amount of surface inside a shape."
        ],

        essentialsAr: [
            "تشمل الهندسة النقاط والخطوط والزوايا والأشكال.",
            "يقيس المحيط المسافة حول الشكل.",
            "تقيس المساحة مقدار السطح داخل الشكل."
        ],

        fact:
            "Geometry is used in architecture, engineering, design, astronomy, and many other fields.",

        factAr:
            "تستخدم الهندسة في العمارة والهندسة والتصميم والفلك ومجالات كثيرة أخرى."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "🔢",

        title: "Algebra",
        titleAr: "الجبر",

        description:
            "Algebra uses symbols and variables to represent numbers and relationships and to solve mathematical problems.",

        descriptionAr:
            "يستخدم الجبر الرموز والمتغيرات لتمثيل الأعداد والعلاقات وحل المشكلات الرياضية.",

        essentials: [
            "Variables represent unknown or changing values.",
            "Equations express relationships between quantities.",
            "Algebraic rules help transform expressions and solve equations."
        ],

        essentialsAr: [
            "تمثل المتغيرات قيمًا مجهولة أو متغيرة.",
            "تعبر المعادلات عن العلاقات بين الكميات.",
            "تساعد القواعد الجبرية على تبسيط التعبيرات وحل المعادلات."
        ],

        fact:
            "Algebra is used in science, engineering, economics, computing, and everyday problem solving.",

        factAr:
            "يستخدم الجبر في العلوم والهندسة والاقتصاد والحوسبة وحل المشكلات اليومية."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "🎲",

        title: "Probability",
        titleAr: "الاحتمالات",

        description:
            "Probability is a branch of mathematics that measures how likely an event is to occur.",

        descriptionAr:
            "الاحتمالات فرع من الرياضيات يقيس مدى إمكانية حدوث حدث معين.",

        essentials: [
            "Probability values range from 0 to 1 in many mathematical models.",
            "A probability of 0 represents an impossible event.",
            "A probability of 1 represents a certain event."
        ],

        essentialsAr: [
            "تتراوح قيم الاحتمال من 0 إلى 1 في كثير من النماذج الرياضية.",
            "يمثل الاحتمال 0 حدثًا مستحيلًا.",
            "يمثل الاحتمال 1 حدثًا مؤكدًا."
        ],

        fact:
            "Probability is used in statistics, science, games, finance, and risk analysis.",

        factAr:
            "تستخدم الاحتمالات في الإحصاء والعلوم والألعاب والمال وتحليل المخاطر."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "📈",

        title: "Statistics",
        titleAr: "الإحصاء",

        description:
            "Statistics is the study of collecting, organizing, analyzing, interpreting, and presenting data.",

        descriptionAr:
            "الإحصاء هو دراسة جمع البيانات وتنظيمها وتحليلها وتفسيرها وعرضها.",

        essentials: [
            "Data can be numerical or categorical.",
            "The mean, median, and mode summarize data in different ways.",
            "Graphs can make patterns in data easier to see."
        ],

        essentialsAr: [
            "يمكن أن تكون البيانات رقمية أو فئوية.",
            "يلخص المتوسط والوسيط والمنوال البيانات بطرق مختلفة.",
            "يمكن أن تساعد الرسوم البيانية في رؤية الأنماط داخل البيانات."
        ],

        fact:
            "Statistics helps researchers make sense of large amounts of information.",

        factAr:
            "يساعد الإحصاء الباحثين على فهم كميات كبيرة من المعلومات."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "📏",

        title: "Pythagorean Theorem",
        titleAr: "نظرية فيثاغورس",

        description:
            "The Pythagorean theorem relates the side lengths of a right triangle using the equation a² + b² = c².",

        descriptionAr:
            "تربط نظرية فيثاغورس بين أطوال أضلاع المثلث القائم باستخدام العلاقة a² + b² = c².",

        essentials: [
            "The theorem applies to right triangles.",
            "c represents the hypotenuse.",
            "The theorem can be used to find an unknown side length."
        ],

        essentialsAr: [
            "تنطبق النظرية على المثلثات القائمة الزاوية.",
            "يمثل c الوتر.",
            "يمكن استخدام النظرية لإيجاد طول ضلع مجهول."
        ],

        fact:
            "The relationship was known in mathematical traditions long before the theorem was associated with Pythagoras.",

        factAr:
            "كانت هذه العلاقة معروفة في تقاليد رياضية قديمة قبل ارتباط النظرية باسم فيثاغورس."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "📐",

        title: "Trigonometry",
        titleAr: "حساب المثلثات",

        description:
            "Trigonometry studies relationships between angles and sides of triangles and has applications in many fields.",

        descriptionAr:
            "يدرس حساب المثلثات العلاقات بين زوايا وأضلاع المثلثات، وله تطبيقات في مجالات كثيرة.",

        essentials: [
            "Sine, cosine, and tangent are fundamental trigonometric functions.",
            "Trigonometry can help find unknown sides or angles.",
            "It is used in physics, engineering, navigation, and astronomy."
        ],

        essentialsAr: [
            "الجيب وجيب التمام والظل من الدوال المثلثية الأساسية.",
            "يمكن استخدام حساب المثلثات لإيجاد أضلاع أو زوايا مجهولة.",
            "يستخدم في الفيزياء والهندسة والملاحة والفلك."
        ],

        fact:
            "Trigonometry can be used to calculate heights and distances that are difficult to measure directly.",

        factAr:
            "يمكن استخدام حساب المثلثات لحساب ارتفاعات ومسافات يصعب قياسها مباشرة."
    },


    {
        category: "Mathematics",
        categoryAr: "الرياضيات",
        icon: "∫",

        title: "Calculus",
        titleAr: "التفاضل والتكامل",

        description:
            "Calculus is a branch of mathematics focused on change, rates of change, accumulation, limits, derivatives, and integrals.",

        descriptionAr:
            "التفاضل والتكامل فرع من الرياضيات يركز على التغير ومعدلات التغير والتراكم والنهايات والمشتقات والتكاملات.",

        essentials: [
            "Derivatives describe rates of change.",
            "Integrals can describe accumulation or area.",
            "Limits are an important foundation of calculus."
        ],

        essentialsAr: [
            "تصف المشتقات معدلات التغير.",
            "يمكن للتكاملات وصف التراكم أو المساحة.",
            "تعد النهايات أساسًا مهمًا في التفاضل والتكامل."
        ],

        fact:
            "Calculus is widely used in physics, engineering, economics, and computer science.",

        factAr:
            "يستخدم التفاضل والتكامل على نطاق واسع في الفيزياء والهندسة والاقتصاد وعلوم الكمبيوتر."
    },


    /* ================= ENGLISH GRAMMAR ================= */

    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "🔤",

        title: "Parts of Speech",
        titleAr: "أقسام الكلام في الإنجليزية",

        description:
            "Parts of speech classify words according to the roles they play in sentences, such as nouns, verbs, adjectives, and adverbs.",

        descriptionAr:
            "تصنف أقسام الكلام الكلمات وفقًا للوظائف التي تؤديها في الجمل، مثل الأسماء والأفعال والصفات والظروف.",

        essentials: [
            "Nouns name people, places, things, or ideas.",
            "Verbs express actions or states.",
            "Adjectives describe nouns."
        ],

        essentialsAr: [
            "تسمي الأسماء الأشخاص أو الأماكن أو الأشياء أو الأفكار.",
            "تعبر الأفعال عن أفعال أو حالات.",
            "تصف الصفات الأسماء."
        ],

        fact:
            "A word's grammatical role can sometimes change depending on how it is used.",

        factAr:
            "قد يتغير الدور النحوي للكلمة أحيانًا حسب طريقة استخدامها."
    },


    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "📝",

        title: "Nouns",
        titleAr: "الأسماء",

        description:
            "Nouns are words used to name people, places, objects, animals, ideas, or other things.",

        descriptionAr:
            "الأسماء كلمات تستخدم لتسمية الأشخاص والأماكن والأشياء والحيوانات والأفكار وغيرها.",

        essentials: [
            "Common nouns name general things.",
            "Proper nouns name specific people, places, or organizations.",
            "Nouns can be singular or plural."
        ],

        essentialsAr: [
            "تشير الأسماء العامة إلى أشياء بشكل عام.",
            "تشير أسماء العلم إلى أشخاص أو أماكن أو مؤسسات محددة.",
            "يمكن أن تكون الأسماء مفردة أو جمعًا."
        ],

        fact:
            "English proper nouns normally begin with capital letters.",

        factAr:
            "تبدأ أسماء العلم في الإنجليزية عادة بحروف كبيرة."
    },


    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "🏃",

        title: "Verbs",
        titleAr: "الأفعال",

        description:
            "Verbs express actions, events, or states of being and are central to English sentences.",

        descriptionAr:
            "تعبر الأفعال عن الأحداث أو الأفعال أو الحالات، وهي عنصر أساسي في الجمل الإنجليزية.",

        essentials: [
            "Action verbs describe actions.",
            "Linking verbs connect the subject with information about it.",
            "Verb forms can change to show tense."
        ],

        essentialsAr: [
            "تصف أفعال الحركة الأفعال التي تحدث.",
            "تربط أفعال الربط بين الفاعل والمعلومات المتعلقة به.",
            "يمكن أن تتغير صيغ الأفعال للتعبير عن الزمن."
        ],

        fact:
            "English has irregular verbs whose past forms do not follow the usual -ed pattern.",

        factAr:
            "توجد في الإنجليزية أفعال شاذة لا تتبع صيغة -ed المعتادة في الماضي."
    },


    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "⏰",

        title: "English Tenses",
        titleAr: "الأزمنة في اللغة الإنجليزية",

        description:
            "English verb tenses help express when actions or states happen and how they relate to time.",

        descriptionAr:
            "تساعد أزمنة الأفعال في الإنجليزية على التعبير عن وقت حدوث الأفعال أو الحالات وعلاقتها بالزمن.",

        essentials: [
            "English commonly teaches present, past, and future time.",
            "Different tense forms communicate different time relationships.",
            "Context helps determine the most suitable tense."
        ],

        essentialsAr: [
            "تدرس الإنجليزية عادة الحاضر والماضي والمستقبل.",
            "تعبر صيغ الأزمنة المختلفة عن علاقات زمنية مختلفة.",
            "يساعد السياق في تحديد الزمن المناسب."
        ],

        fact:
            "English tense and aspect work together to express detailed relationships with time.",

        factAr:
            "تعمل الأزمنة والجوانب في الإنجليزية معًا للتعبير عن علاقات دقيقة بالزمن."
    },


    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "🔄",

        title: "Active and Passive Voice",
        titleAr: "المبني للمعلوم والمبني للمجهول",

        description:
            "Active voice emphasizes the doer of an action, while passive voice emphasizes the receiver or result of the action.",

        descriptionAr:
            "يركز المبني للمعلوم على من يقوم بالفعل، بينما يركز المبني للمجهول على من يقع عليه الفعل أو على نتيجة الفعل.",

        essentials: [
            "In active voice, the subject usually performs the action.",
            "Passive constructions commonly use a form of be plus a past participle.",
            "Passive voice can be useful when the doer is unknown or unimportant."
        ],

        essentialsAr: [
            "في المبني للمعلوم يقوم الفاعل عادة بالفعل.",
            "تستخدم صيغة المبني للمجهول عادة شكلًا من فعل be مع التصريف الثالث.",
            "قد يكون المبني للمجهول مفيدًا عندما يكون الفاعل غير معروف أو غير مهم."
        ],

        fact:
            "Scientific and formal writing sometimes uses passive constructions to focus on processes or results.",

        factAr:
            "يستخدم الأسلوب العلمي والرسمي أحيانًا المبني للمجهول للتركيز على العمليات أو النتائج."
    },


    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "❓",

        title: "Conditionals",
        titleAr: "الجمل الشرطية",

        description:
            "Conditional sentences describe relationships between a condition and a possible or imagined result.",

        descriptionAr:
            "تصف الجمل الشرطية العلاقة بين شرط ونتيجة محتملة أو متخيلة.",

        essentials: [
            "Zero conditional is often used for general truths.",
            "First conditional commonly discusses possible future situations.",
            "Other conditional patterns can describe unlikely or hypothetical situations."
        ],

        essentialsAr: [
            "يستخدم الشرط الصفري غالبًا للحقائق العامة.",
            "يستخدم الشرط الأول عادة للمواقف المستقبلية المحتملة.",
            "تستخدم أنماط شرطية أخرى للمواقف غير المحتملة أو الافتراضية."
        ],

        fact:
            "The word if is common in conditional sentences, but some conditional structures use other expressions.",

        factAr:
            "تستخدم كلمة if كثيرًا في الجمل الشرطية، لكن بعض التراكيب الشرطية تستخدم تعبيرات أخرى."
    },


    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "✍️",

        title: "Punctuation",
        titleAr: "علامات الترقيم",

        description:
            "Punctuation marks help organize written language and clarify meaning.",

        descriptionAr:
            "تساعد علامات الترقيم على تنظيم اللغة المكتوبة وتوضيح المعنى.",

        essentials: [
            "Periods normally mark the end of statements.",
            "Question marks are used for direct questions.",
            "Commas can separate elements or clarify sentence structure."
        ],

        essentialsAr: [
            "تستخدم النقطة عادة في نهاية الجمل الخبرية.",
            "تستخدم علامة الاستفهام في الأسئلة المباشرة.",
            "يمكن أن تفصل الفواصل بين العناصر أو توضح تركيب الجملة."
        ],

        fact:
            "Punctuation can sometimes change the meaning or interpretation of a sentence.",

        factAr:
            "يمكن لعلامات الترقيم أحيانًا أن تغير معنى الجملة أو طريقة تفسيرها."
    },


    {
        category: "English Grammar",
        categoryAr: "قواعد اللغة الإنجليزية",
        icon: "🔗",

        title: "Conjunctions",
        titleAr: "أدوات الربط",

        description:
            "Conjunctions are words that connect words, phrases, or clauses.",

        descriptionAr:
            "أدوات الربط كلمات تصل بين الكلمات أو العبارات أو الجمل.",

        essentials: [
            "Coordinating conjunctions connect elements of equal grammatical importance.",
            "Subordinating conjunctions introduce dependent clauses.",
            "Conjunctions help create more connected writing."
        ],

        essentialsAr: [
            "تربط أدوات الربط التنسيقية بين عناصر متساوية نحويًا.",
            "تقدم أدوات الربط التابعة الجمل التابعة.",
            "تساعد أدوات الربط على جعل الكتابة أكثر ترابطًا."
        ],

        fact:
            "Common coordinating conjunctions include and, but, and or.",

        factAr:
            "من أدوات الربط التنسيقية الشائعة في الإنجليزية: and وbut وor."
    },


    /* ================= GENERAL KNOWLEDGE ================= */

    {
        category: "Scientific Thinking",
        categoryAr: "التفكير العلمي",
        icon: "🔎",

        title: "The Scientific Method",
        titleAr: "المنهج العلمي",

        description:
            "The scientific method is a general approach scientists use to investigate questions through observation, testing, evidence, and reasoning.",

        descriptionAr:
            "المنهج العلمي أسلوب عام يستخدمه العلماء لدراسة الأسئلة من خلال الملاحظة والاختبار والأدلة والاستدلال.",

        essentials: [
            "Scientists ask questions based on observations.",
            "Hypotheses can be tested using evidence.",
            "Results are evaluated and communicated."
        ],

        essentialsAr: [
            "يطرح العلماء أسئلة بناءً على الملاحظات.",
            "يمكن اختبار الفرضيات باستخدام الأدلة.",
            "تُقيّم النتائج وتُنقل إلى الآخرين."
        ],

        fact:
            "Scientific investigations do not always follow one identical sequence of steps.",

        factAr:
            "لا تتبع التحقيقات العلمية دائمًا ترتيبًا واحدًا متطابقًا من الخطوات."
    },


    {
        category: "Communication",
        categoryAr: "التواصل",

        title: "Communication",
        icon: "💬",

        description:
            "Communication is the process of sharing information, ideas, feelings, or messages between people or systems.",

        descriptionAr:
            "التواصل هو عملية مشاركة المعلومات والأفكار والمشاعر أو الرسائل بين الأشخاص أو الأنظمة.",

        essentials: [
            "Communication can be verbal or nonverbal.",
            "Listening is an important part of effective communication.",
            "Clear communication reduces misunderstanding."
        ],

        essentialsAr: [
            "يمكن أن يكون التواصل لفظيًا أو غير لفظي.",
            "الاستماع جزء مهم من التواصل الفعال.",
            "يساعد التواصل الواضح على تقليل سوء الفهم."
        ],

        fact:
            "Body language and facial expressions can communicate information without spoken words.",

        factAr:
            "يمكن للغة الجسد وتعبيرات الوجه نقل معلومات دون كلمات منطوقة."
    },


    {
        category: "Art",
        categoryAr: "الفن",
        icon: "🎨",

        title: "Art",
        titleAr: "الفن",

        description:
            "Art includes creative forms of expression such as painting, sculpture, drawing, photography, performance, and design.",

        descriptionAr:
            "يشمل الفن أشكال التعبير الإبداعي مثل الرسم والنحت والتصوير والتصميم والأداء.",

        essentials: [
            "Art can communicate ideas and emotions.",
            "Different cultures have developed different artistic traditions.",
            "Art can be both visual and performing."
        ],

        essentialsAr: [
            "يمكن للفن التعبير عن الأفكار والمشاعر.",
            "طورت الثقافات المختلفة تقاليد فنية متنوعة.",
            "يمكن أن يكون الفن بصريًا أو أدائيًا."
        ],

        fact:
            "Some of the oldest known human artworks were created thousands of years ago.",

        factAr:
            "أنشئت بعض أقدم الأعمال الفنية المعروفة للبشر منذ آلاف السنين."
    },


    {
        category: "Music",
        categoryAr: "الموسيقى",
        icon: "🎵",

        title: "Music",
        titleAr: "الموسيقى",

        description:
            "Music is an organized form of sound that can use rhythm, melody, harmony, dynamics, and other elements.",

        descriptionAr:
            "الموسيقى شكل منظم من الصوت يمكن أن يستخدم الإيقاع واللحن والتناغم والديناميكيات وعناصر أخرى.",

        essentials: [
            "Rhythm organizes sounds and silences in time.",
            "Melody is a sequence of musical pitches.",
            "Different cultures have developed many musical traditions."
        ],

        essentialsAr: [
            "ينظم الإيقاع الأصوات والصمت عبر الزمن.",
            "اللحن تسلسل من النغمات الموسيقية.",
            "طورت الثقافات المختلفة تقاليد موسيقية عديدة."
        ],

        fact:
            "Music can affect how people perceive time, movement, and emotion.",

        factAr:
            "يمكن للموسيقى أن تؤثر في إدراك الإنسان للوقت والحركة والمشاعر."
    },


    {
        category: "Literature",
        categoryAr: "الأدب",
        icon: "📚",

        title: "Literature",
        titleAr: "الأدب",

        description:
            "Literature is creative writing that includes forms such as novels, short stories, poetry, drama, and essays.",

        descriptionAr:
            "الأدب كتابة إبداعية تشمل أشكالًا مثل الروايات والقصص القصيرة والشعر والمسرحيات والمقالات.",

        essentials: [
            "Literature can explore ideas, cultures, and human experiences.",
            "Characters and plots are important in many narrative works.",
            "Poetry often uses rhythm, imagery, and carefully chosen language."
        ],

        essentialsAr: [
            "يمكن للأدب استكشاف الأفكار والثقافات والتجارب الإنسانية.",
            "تعد الشخصيات والحبكات مهمة في كثير من الأعمال السردية.",
            "يستخدم الشعر غالبًا الإيقاع والصور اللغوية واللغة المختارة بعناية."
        ],

        fact:
            "Literature can preserve perspectives and experiences from different historical periods.",

        factAr:
            "يمكن للأدب حفظ وجهات النظر والتجارب من فترات تاريخية مختلفة."
    },


    {
        category: "Engineering",
        categoryAr: "الهندسة",
        icon: "⚙️",

        title: "Engineering",
        titleAr: "الهندسة التطبيقية",

        description:
            "Engineering applies scientific and mathematical knowledge to design and build solutions to practical problems.",

        descriptionAr:
            "تطبق الهندسة المعرفة العلمية والرياضية لتصميم وبناء حلول للمشكلات العملية.",

        essentials: [
            "Engineers design, test, and improve systems.",
            "Different engineering fields focus on different types of problems.",
            "Engineering often involves balancing safety, cost, materials, and performance."
        ],

        essentialsAr: [
            "يصمم المهندسون الأنظمة ويختبرونها ويحسنونها.",
            "تركز مجالات الهندسة المختلفة على أنواع مختلفة من المشكلات.",
            "تتطلب الهندسة غالبًا تحقيق توازن بين الأمان والتكلفة والمواد والأداء."
        ],

        fact:
            "Engineering is involved in everything from bridges and machines to software and spacecraft.",

        factAr:
            "تشارك الهندسة في تصميم كل شيء تقريبًا، من الجسور والآلات إلى البرامج والمركبات الفضائية."
    },


    {
        category: "Environment",
        categoryAr: "البيئة",
        icon: "🌱",

        title: "Renewable Energy",
        titleAr: "الطاقة المتجددة",

        description:
            "Renewable energy comes from sources that are naturally replenished, such as sunlight, wind, moving water, and geothermal heat.",

        descriptionAr:
            "الطاقة المتجددة تأتي من مصادر تتجدد طبيعيًا مثل ضوء الشمس والرياح والمياه المتحركة والحرارة الجوفية.",

        essentials: [
            "Solar energy uses sunlight.",
            "Wind turbines convert wind energy into electrical energy.",
            "Hydropower uses moving water to generate energy."
        ],

        essentialsAr: [
            "تستخدم الطاقة الشمسية ضوء الشمس.",
            "تحول توربينات الرياح طاقة الرياح إلى طاقة كهربائية.",
            "تستخدم الطاقة الكهرومائية حركة الماء لتوليد الطاقة."
        ],

        fact:
            "The amount of sunlight reaching Earth in a short period is enormous compared with human energy use.",

        factAr:
            "تصل إلى الأرض كميات هائلة من الطاقة الشمسية خلال فترات قصيرة مقارنة باستهلاك البشر للطاقة."
    },


    {
        category: "Environment",
        categoryAr: "البيئة",
        icon: "♻️",

        title: "Sustainable Development",
        titleAr: "التنمية المستدامة",

        description:
            "Sustainable development aims to meet present needs while considering the ability of future generations to meet their own needs.",

        descriptionAr:
            "تهدف التنمية المستدامة إلى تلبية احتياجات الحاضر مع مراعاة قدرة الأجيال القادمة على تلبية احتياجاتها.",

        essentials: [
            "Sustainability involves environmental, social, and economic considerations.",
            "Efficient use of resources is important.",
            "Long-term planning is a key part of sustainability."
        ],

        essentialsAr: [
            "تشمل الاستدامة الجوانب البيئية والاجتماعية والاقتصادية.",
            "يعد الاستخدام الفعال للموارد أمرًا مهمًا.",
            "يعد التخطيط طويل المدى جزءًا أساسيًا من الاستدامة."
        ],

        fact:
            "Sustainability is not only about the environment; it also involves people and economies.",

        factAr:
            "لا تتعلق الاستدامة بالبيئة فقط، بل تشمل الناس والاقتصادات أيضًا."
    }

];


/* =====================================================
   ADD MISSING ARABIC TITLE
===================================================== */

topics.forEach(topic => {

    if (!topic.titleAr) {
        topic.titleAr = topic.title;
    }

});


/* =====================================================
   ELEMENTS
===================================================== */

const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("result");
const resultsTitle = document.getElementById("resultsTitle");
const topicCount = document.getElementById("topicCount");
const languageButton = document.getElementById("languageButton");

const heroBadge = document.getElementById("heroBadge");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroDescription = document.getElementById("heroDescription");

const searchLabel = document.getElementById("searchLabel");
const searchTitle = document.getElementById("searchTitle");
const searchDescription = document.getElementById("searchDescription");

const resultsLabel = document.getElementById("resultsLabel");
const footerText = document.getElementById("footerText");


/* =====================================================
   UI TRANSLATIONS
===================================================== */

const ui = {

    en: {
        language: "العربية 🇪🇬",

        heroBadge: "🧭 Educational Encyclopedia",
        heroTitle: "Explorer's Guide",
        heroSubtitle: "Discover. Understand. Explore.",
        heroDescription:
            "A world of knowledge made simple, interesting, and easy to explore.",

        searchLabel: "🔎 SEARCH & DISCOVER",
        searchTitle: "What do you want to learn today?",
        searchDescription:
            "Search through science, mathematics, history, geography, technology, language, and much more.",

        placeholder:
            "Try: Photosynthesis, fractions, gravity...",

        search: "Search 🔍",

        resultsLabel: "📚 EXPLORE",
        startExploring: "Start exploring",

        topics: "topics",
        topic: "topic",

        welcomeTitle: "Ready to explore?",
        welcomeText:
            "Search for a topic and start discovering something new.",

        noResultsTitle: "No results found",
        noResultsText:
            "Try another word or search for a different topic.",

        descriptive: "📖 Make it Descriptive",
        essentials: "⭐ Key Essentials",
        video: "▶️ Watch Video",
        wikipedia: "🌐 Wikipedia",
        back: "← Back to Topics",

        descriptionTitle: "📖 Description",
        essentialsTitle: "⭐ Key Essentials",
        factTitle: "💡 Did You Know?",

        footer:
            "Learn something new. Explore something amazing. 🌍"
    },

    ar: {
        language: "English 🇬🇧",

        heroBadge: "🧭 موسوعة تعليمية",
        heroTitle: "دليل المستكشف",
        heroSubtitle: "اكتشف. افهم. استكشف.",
        heroDescription:
            "عالم من المعرفة بطريقة بسيطة وممتعة وسهلة الاستكشاف.",

        searchLabel: "🔎 ابحث واكتشف",
        searchTitle: "ماذا تريد أن تتعلم اليوم؟",
        searchDescription:
            "ابحث في العلوم والرياضيات والتاريخ والجغرافيا والتكنولوجيا واللغة والمزيد.",

        placeholder:
            "جرّب: البناء الضوئي، الكسور، الجاذبية...",

        search: "بحث 🔍",

        resultsLabel: "📚 استكشف",
        startExploring: "ابدأ الاستكشاف",

        topics: "موضوعًا",
        topic: "موضوع",

        welcomeTitle: "مستعد للاستكشاف؟",
        welcomeText:
            "ابحث عن موضوع وابدأ في اكتشاف شيء جديد.",

        noResultsTitle: "لم يتم العثور على نتائج",
        noResultsText:
            "جرّب كلمة أخرى أو ابحث عن موضوع مختلف.",

        descriptive: "📖 شرح أكثر",
        essentials: "⭐ أهم النقاط",
        video: "▶️ شاهد فيديو",
        wikipedia: "🌐 ويكيبيديا",
        back: "→ العودة إلى الموضوعات",

        descriptionTitle: "📖 الوصف",
        essentialsTitle: "⭐ أهم النقاط",
        factTitle: "💡 هل تعلم؟",

        footer:
            "تعلّم شيئًا جديدًا. واكتشف شيئًا مدهشًا. 🌍"
    }

};


/* =====================================================
   ARABIC SEARCH NORMALIZATION
===================================================== */

function normalizeText(text) {

    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u064B-\u065F\u0670]/g, "")
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ـ/g, "")
        .trim();

}


/* =====================================================
   HTML SAFETY
===================================================== */

function escapeHTML(text) {

    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =====================================================
   GET CURRENT TOPIC TEXT
===================================================== */

function getTitle(topic) {

    return currentLanguage === "ar"
        ? topic.titleAr
        : topic.title;

}

function getCategory(topic) {

    return currentLanguage === "ar"
        ? topic.categoryAr
        : topic.category;

}

function getDescription(topic) {

    return currentLanguage === "ar"
        ? topic.descriptionAr
        : topic.description;

}

function getEssentials(topic) {

    return currentLanguage === "ar"
        ? topic.essentialsAr
        : topic.essentials;

}

function getFact(topic) {

    return currentLanguage === "ar"
        ? topic.factAr
        : topic.fact;

}


/* =====================================================
   CREATE VIDEO LINK
===================================================== */

function getVideoLink(topic) {

    const title = getTitle(topic);

    const query = encodeURIComponent(
        `${title} educational explanation`
    );

    return `https://www.youtube.com/results?search_query=${query}`;

}


/* =====================================================
   CREATE WIKIPEDIA LINK
===================================================== */

function getWikipediaLink(topic) {

    const title = getTitle(topic);

    if (currentLanguage === "ar") {

        return `https://ar.wikipedia.org/wiki/${encodeURIComponent(
            title.replaceAll(" ", "_")
        )}`;

    }

    return `https://en.wikipedia.org/wiki/${encodeURIComponent(
        title.replaceAll(" ", "_")
    )}`;

}


/* =====================================================
   UPDATE LANGUAGE
===================================================== */

function updateInterface() {

    const text = ui[currentLanguage];

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar"
            ? "rtl"
            : "ltr";

    languageButton.textContent = text.language;

    heroBadge.textContent = text.heroBadge;
    heroTitle.textContent = text.heroTitle;
    heroSubtitle.textContent = text.heroSubtitle;
    heroDescription.textContent = text.heroDescription;

    searchLabel.textContent = text.searchLabel;
    searchTitle.textContent = text.searchTitle;
    searchDescription.textContent = text.searchDescription;

    searchBox.placeholder = text.placeholder;

    searchButton.textContent = text.search;

    resultsLabel.textContent = text.resultsLabel;

    footerText.textContent = text.footer;

}


/* =====================================================
   WELCOME SCREEN
===================================================== */

function showWelcome() {

    const text = ui[currentLanguage];

    resultsTitle.textContent = text.startExploring;

    topicCount.textContent =
        `${topics.length} ${text.topics}`;

    const previewTopics = topics.slice(0, 8);

    displayTopics(previewTopics);

}


/* =====================================================
   DISPLAY TOPICS
===================================================== */

function displayTopics(list) {

    if (!list.length) {

        result.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    🔎
                </div>

                <h3>
                    ${escapeHTML(ui[currentLanguage].noResultsTitle)}
                </h3>

                <p>
                    ${escapeHTML(ui[currentLanguage].noResultsText)}
                </p>

            </div>
        `;

        return;
    }


    result.innerHTML = list
        .map((topic) => {

            const originalIndex =
                topics.indexOf(topic);

            return `
                <article
                    class="topic-card"
                    style="animation-delay: ${Math.min(
                        originalIndex * 0.025,
                        0.3
                    )}s"
                >

                    <div class="topic-icon">
                        ${topic.icon}
                    </div>

                    <div class="topic-category">
                        ${escapeHTML(getCategory(topic))}
                    </div>

                    <h3>
                        ${escapeHTML(getTitle(topic))}
                    </h3>

                    <p>
                        ${escapeHTML(getDescription(topic))}
                    </p>

                    <div class="topic-buttons">

                        <button
                            type="button"
                            data-action="description"
                            data-index="${originalIndex}"
                        >
                            ${ui[currentLanguage].descriptive}
                        </button>

                        <button
                            type="button"
                            data-action="essentials"
                            data-index="${originalIndex}"
                        >
                            ${ui[currentLanguage].essentials}
                        </button>

                        <button
                            type="button"
                            data-action="video"
                            data-index="${originalIndex}"
                        >
                            ${ui[currentLanguage].video}
                        </button>

                        <button
                            type="button"
                            data-action="wikipedia"
                            data-index="${originalIndex}"
                        >
                            ${ui[currentLanguage].wikipedia}
                        </button>

                    </div>

                </article>
            `;

        })
        .join("");

}


/* =====================================================
   SEARCH
===================================================== */

function performSearch() {

    const rawQuery =
        searchBox.value.trim();

    const query =
        normalizeText(rawQuery);


    if (!query) {

        showWelcome();

        return;
    }


    const matches = topics.filter(topic => {

        const searchableText = [

            getTitle(topic),

            getCategory(topic),

            getDescription(topic),

            ...getEssentials(topic),

            getFact(topic)

        ].join(" ");


        return normalizeText(searchableText)
            .includes(query);

    });


    const resultText =
        currentLanguage === "ar"
            ? `نتائج البحث عن "${rawQuery}"`
            : `Search results for "${rawQuery}"`;

    resultsTitle.textContent = resultText;

    const countWord =
        matches.length === 1
            ? ui[currentLanguage].topic
            : ui[currentLanguage].topics;

    topicCount.textContent =
        `${matches.length} ${countWord}`;

    displayTopics(matches);

}


/* =====================================================
   SHOW DESCRIPTION
===================================================== */

function showDescription(index) {

    const topic = topics[index];

    if (!topic) return;


    resultsTitle.textContent =
        getTitle(topic);

    topicCount.textContent = "";


    result.innerHTML = `

        <article class="detail-card">

            <div class="detail-top">

                <div class="detail-icon">
                    ${topic.icon}
                </div>

                <div>

                    <div class="detail-category">
                        ${escapeHTML(getCategory(topic))}
                    </div>

                    <h2>
                        ${escapeHTML(getTitle(topic))}
                    </h2>

                </div>

            </div>


            <div class="detail-section">

                <h3>
                    ${ui[currentLanguage].descriptionTitle}
                </h3>

                <p class="detail-description">
                    ${escapeHTML(getDescription(topic))}
                </p>

            </div>


            <div class="detail-actions">

                <button
                    type="button"
                    class="back-button"
                    data-action="back"
                >
                    ${ui[currentLanguage].back}
                </button>

                <button
                    type="button"
                    data-action="video"
                    data-index="${index}"
                >
                    ${ui[currentLanguage].video}
                </button>

                <button
                    type="button"
                    data-action="wikipedia"
                    data-index="${index}"
                >
                    ${ui[currentLanguage].wikipedia}
                </button>

            </div>

        </article>
    `;

}


/* =====================================================
   SHOW ESSENTIALS
===================================================== */

function showEssentials(index) {

    const topic = topics[index];

    if (!topic) return;


    const essentials =
        getEssentials(topic);


    resultsTitle.textContent =
        getTitle(topic);

    topicCount.textContent = "";


    result.innerHTML = `

        <article class="detail-card">

            <div class="detail-top">

                <div class="detail-icon">
                    ${topic.icon}
                </div>

                <div>

                    <div class="detail-category">
                        ${escapeHTML(getCategory(topic))}
                    </div>

                    <h2>
                        ${escapeHTML(getTitle(topic))}
                    </h2>

                </div>

            </div>


            <div class="detail-section">

                <h3>
                    ${ui[currentLanguage].essentialsTitle}
                </h3>

                <ul class="essential-list">

                    ${essentials
                        .map(item => `
                            <li>
                                ${escapeHTML(item)}
                            </li>
                        `)
                        .join("")
                    }

                </ul>

            </div>


            <div class="detail-section">

                <h3>
                    ${ui[currentLanguage].factTitle}
                </h3>

                <p>
                    ${escapeHTML(getFact(topic))}
                </p>

            </div>


            <div class="detail-actions">

                <button
                    type="button"
                    class="back-button"
                    data-action="back"
                >
                    ${ui[currentLanguage].back}
                </button>

                <button
                    type="button"
                    data-action="video"
                    data-index="${index}"
                >
                    ${ui[currentLanguage].video}
                </button>

                <button
                    type="button"
                    data-action="wikipedia"
                    data-index="${index}"
                >
                    ${ui[currentLanguage].wikipedia}
                </button>

            </div>

        </article>
    `;

}


/* =====================================================
   BUTTON HANDLER
   EVENT DELEGATION
===================================================== */

result.addEventListener("click", event => {

    const button =
        event.target.closest("[data-action]");


    if (!button) return;


    const action =
        button.dataset.action;


    const index =
        Number(button.dataset.index);


    switch (action) {

        case "description":

            showDescription(index);

            break;


        case "essentials":

            showEssentials(index);

            break;


        case "video":

            if (topics[index]) {

                window.open(
                    getVideoLink(topics[index]),
                    "_blank",
                    "noopener,noreferrer"
                );

            }

            break;


        case "wikipedia":

            if (topics[index]) {

                window.open(
                    getWikipediaLink(topics[index]),
                    "_blank",
                    "noopener,noreferrer"
                );

            }

            break;


        case "back":

            showWelcome();

            break;

    }

});


/* =====================================================
   SEARCH EVENTS
===================================================== */

searchButton.addEventListener(
    "click",
    performSearch
);


searchBox.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            performSearch();

        }

    }
);


/* =====================================================
   LANGUAGE SWITCH
===================================================== */

languageButton.addEventListener(
    "click",
    () => {

        currentLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";


        updateInterface();


        /*
            Re-render the current search if one exists.
            Otherwise show the normal welcome screen.
        */

        if (searchBox.value.trim()) {

            performSearch();

        } else {

            showWelcome();

        }

    }
);


/* =====================================================
   START WEBSITE
===================================================== */

updateInterface();

showWelcome();