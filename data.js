/* =====================================================
   EXPLORER'S GUIDE | OFFLINE TOPIC DATABASE
   Keep this file before script.js in index.html.
   Existing topic content is preserved from the saved project.
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
        titleAr: "التواصل",
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
,

{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Scientific Method",
    "titleAr": "المنهج العلمي",
    "description": "Scientific Method is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المنهج العلمي من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore scientific method is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المنهج العلمي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-scientific-method",
    "subcategory": "Science & Nature",
    "shortDescription": "Scientific Method is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Scientific Method is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Elements and Compounds",
    "titleAr": "العناصر والمركبات",
    "description": "Elements and Compounds is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع العناصر والمركبات من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore elements and compounds is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم العناصر والمركبات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-elements-and-compounds",
    "subcategory": "Science & Nature",
    "shortDescription": "Elements and Compounds is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Elements and Compounds is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Mixtures and Solutions",
    "titleAr": "المخاليط والمحاليل",
    "description": "Mixtures and Solutions is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المخاليط والمحاليل من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore mixtures and solutions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المخاليط والمحاليل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-mixtures-and-solutions",
    "subcategory": "Science & Nature",
    "shortDescription": "Mixtures and Solutions is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Mixtures and Solutions is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Acids and Bases",
    "titleAr": "الأحماض والقواعد",
    "description": "Acids and Bases is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأحماض والقواعد من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore acids and bases is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأحماض والقواعد ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-acids-and-bases",
    "subcategory": "Science & Nature",
    "shortDescription": "Acids and Bases is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Acids and Bases is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "The Periodic Table",
    "titleAr": "الجدول الدوري",
    "description": "The Periodic Table is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجدول الدوري من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the periodic table is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجدول الدوري ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-the-periodic-table",
    "subcategory": "Science & Nature",
    "shortDescription": "The Periodic Table is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Periodic Table is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Cell Membrane",
    "titleAr": "غشاء الخلية",
    "description": "Cell Membrane is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع غشاء الخلية من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore cell membrane is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم غشاء الخلية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-cell-membrane",
    "subcategory": "Science & Nature",
    "shortDescription": "Cell Membrane is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Cell Membrane is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Nucleus",
    "titleAr": "النواة",
    "description": "Nucleus is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النواة من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore nucleus is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النواة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-nucleus",
    "subcategory": "Science & Nature",
    "shortDescription": "Nucleus is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Nucleus is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Mitochondria",
    "titleAr": "الميتوكوندريا",
    "description": "Mitochondria is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الميتوكوندريا من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore mitochondria is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الميتوكوندريا ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-mitochondria",
    "subcategory": "Science & Nature",
    "shortDescription": "Mitochondria is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Mitochondria is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Cellular Respiration",
    "titleAr": "التنفس الخلوي",
    "description": "Cellular Respiration is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التنفس الخلوي من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore cellular respiration is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التنفس الخلوي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-cellular-respiration",
    "subcategory": "Science & Nature",
    "shortDescription": "Cellular Respiration is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Cellular Respiration is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Genes and Heredity",
    "titleAr": "الجينات والوراثة",
    "description": "Genes and Heredity is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجينات والوراثة من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore genes and heredity is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجينات والوراثة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-genes-and-heredity",
    "subcategory": "Science & Nature",
    "shortDescription": "Genes and Heredity is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Genes and Heredity is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Evolution",
    "titleAr": "التطور",
    "description": "Evolution is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التطور من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore evolution is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التطور ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-evolution",
    "subcategory": "Science & Nature",
    "shortDescription": "Evolution is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Evolution is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Food Webs",
    "titleAr": "الشبكات الغذائية",
    "description": "Food Webs is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الشبكات الغذائية من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore food webs is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الشبكات الغذائية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-food-webs",
    "subcategory": "Science & Nature",
    "shortDescription": "Food Webs is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Food Webs is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Biodiversity",
    "titleAr": "التنوع الحيوي",
    "description": "Biodiversity is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التنوع الحيوي من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore biodiversity is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التنوع الحيوي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-biodiversity",
    "subcategory": "Science & Nature",
    "shortDescription": "Biodiversity is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Biodiversity is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Adaptation",
    "titleAr": "التكيف",
    "description": "Adaptation is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التكيف من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore adaptation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التكيف ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-adaptation",
    "subcategory": "Science & Nature",
    "shortDescription": "Adaptation is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Adaptation is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Classification of Living Things",
    "titleAr": "تصنيف الكائنات الحية",
    "description": "Classification of Living Things is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تصنيف الكائنات الحية من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore classification of living things is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تصنيف الكائنات الحية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-classification-of-living-things",
    "subcategory": "Science & Nature",
    "shortDescription": "Classification of Living Things is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Classification of Living Things is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Microorganisms",
    "titleAr": "الكائنات الحية الدقيقة",
    "description": "Microorganisms is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكائنات الحية الدقيقة من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore microorganisms is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكائنات الحية الدقيقة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-microorganisms",
    "subcategory": "Science & Nature",
    "shortDescription": "Microorganisms is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Microorganisms is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Plant Parts",
    "titleAr": "أجزاء النبات",
    "description": "Plant Parts is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أجزاء النبات من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore plant parts is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أجزاء النبات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-plant-parts",
    "subcategory": "Science & Nature",
    "shortDescription": "Plant Parts is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Plant Parts is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Pollination",
    "titleAr": "التلقيح",
    "description": "Pollination is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التلقيح من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore pollination is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التلقيح ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-pollination",
    "subcategory": "Science & Nature",
    "shortDescription": "Pollination is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Pollination is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Seed Dispersal",
    "titleAr": "انتشار البذور",
    "description": "Seed Dispersal is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع انتشار البذور من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore seed dispersal is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم انتشار البذور ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-seed-dispersal",
    "subcategory": "Science & Nature",
    "shortDescription": "Seed Dispersal is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Seed Dispersal is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Animal Adaptations",
    "titleAr": "تكيف الحيوانات",
    "description": "Animal Adaptations is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تكيف الحيوانات من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore animal adaptations is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تكيف الحيوانات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-animal-adaptations",
    "subcategory": "Science & Nature",
    "shortDescription": "Animal Adaptations is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Animal Adaptations is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Habitats",
    "titleAr": "الموائل",
    "description": "Habitats is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الموائل من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore habitats is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الموائل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-habitats",
    "subcategory": "Science & Nature",
    "shortDescription": "Habitats is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Habitats is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "The Water Cycle",
    "titleAr": "دورة الماء",
    "description": "The Water Cycle is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع دورة الماء من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the water cycle is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم دورة الماء ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-the-water-cycle",
    "subcategory": "Science & Nature",
    "shortDescription": "The Water Cycle is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Water Cycle is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "The Rock Cycle",
    "titleAr": "دورة الصخور",
    "description": "The Rock Cycle is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع دورة الصخور من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the rock cycle is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم دورة الصخور ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-the-rock-cycle",
    "subcategory": "Science & Nature",
    "shortDescription": "The Rock Cycle is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Rock Cycle is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Fossils",
    "titleAr": "الأحافير",
    "description": "Fossils is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأحافير من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore fossils is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأحافير ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-fossils",
    "subcategory": "Science & Nature",
    "shortDescription": "Fossils is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Fossils is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Plate Tectonics",
    "titleAr": "تكتونية الصفائح",
    "description": "Plate Tectonics is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تكتونية الصفائح من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore plate tectonics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تكتونية الصفائح ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-plate-tectonics",
    "subcategory": "Science & Nature",
    "shortDescription": "Plate Tectonics is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Plate Tectonics is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Earthquakes",
    "titleAr": "الزلازل",
    "description": "Earthquakes is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الزلازل من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore earthquakes is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الزلازل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-earthquakes",
    "subcategory": "Science & Nature",
    "shortDescription": "Earthquakes is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Earthquakes is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Weathering and Erosion",
    "titleAr": "التجوية والتعرية",
    "description": "Weathering and Erosion is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التجوية والتعرية من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore weathering and erosion is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التجوية والتعرية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-weathering-and-erosion",
    "subcategory": "Science & Nature",
    "shortDescription": "Weathering and Erosion is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Weathering and Erosion is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Soil Formation",
    "titleAr": "تكوّن التربة",
    "description": "Soil Formation is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تكوّن التربة من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore soil formation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تكوّن التربة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-soil-formation",
    "subcategory": "Science & Nature",
    "shortDescription": "Soil Formation is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Soil Formation is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Coral Reefs",
    "titleAr": "الشعاب المرجانية",
    "description": "Coral Reefs is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الشعاب المرجانية من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore coral reefs is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الشعاب المرجانية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-coral-reefs",
    "subcategory": "Science & Nature",
    "shortDescription": "Coral Reefs is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Coral Reefs is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "The Atmosphere",
    "titleAr": "الغلاف الجوي",
    "description": "The Atmosphere is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الغلاف الجوي من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the atmosphere is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الغلاف الجوي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-the-atmosphere",
    "subcategory": "Science & Nature",
    "shortDescription": "The Atmosphere is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Atmosphere is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Seasons",
    "titleAr": "الفصول",
    "description": "Seasons is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الفصول من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore seasons is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الفصول ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-seasons",
    "subcategory": "Science & Nature",
    "shortDescription": "Seasons is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Seasons is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Eclipses",
    "titleAr": "الكسوف والخسوف",
    "description": "Eclipses is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكسوف والخسوف من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore eclipses is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكسوف والخسوف ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-eclipses",
    "subcategory": "Science & Nature",
    "shortDescription": "Eclipses is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Eclipses is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Science & Nature",
    "categoryAr": "العلوم والطبيعة",
    "icon": "🔬",
    "title": "Galaxies",
    "titleAr": "المجرات",
    "description": "Galaxies is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المجرات من الموضوعات المهمة في مجال العلوم والطبيعة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore galaxies is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المجرات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Science & Nature",
    "id": "topic-galaxies",
    "subcategory": "Science & Nature",
    "shortDescription": "Galaxies is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Careful observations help build reliable explanations.",
        "Evidence can support, refine, or challenge an explanation.",
        "Scientists compare results and communicate what they discover."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Galaxies is an important topic in science & nature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Careful observations help build reliable explanations. Evidence can support, refine, or challenge an explanation. Scientists compare results and communicate what they discover."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Force and Motion",
    "titleAr": "القوة والحركة",
    "description": "Force and Motion is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع القوة والحركة من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore force and motion is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم القوة والحركة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-force-and-motion",
    "subcategory": "Physics",
    "shortDescription": "Force and Motion is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Force and Motion is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Newton’s First Law",
    "titleAr": "قانون نيوتن الأول",
    "description": "Newton’s First Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع قانون نيوتن الأول من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore newton’s first law is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم قانون نيوتن الأول ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-newton-s-first-law",
    "subcategory": "Physics",
    "shortDescription": "Newton’s First Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Newton’s First Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Newton’s Second Law",
    "titleAr": "قانون نيوتن الثاني",
    "description": "Newton’s Second Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع قانون نيوتن الثاني من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore newton’s second law is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم قانون نيوتن الثاني ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-newton-s-second-law",
    "subcategory": "Physics",
    "shortDescription": "Newton’s Second Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Newton’s Second Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Newton’s Third Law",
    "titleAr": "قانون نيوتن الثالث",
    "description": "Newton’s Third Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع قانون نيوتن الثالث من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore newton’s third law is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم قانون نيوتن الثالث ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-newton-s-third-law",
    "subcategory": "Physics",
    "shortDescription": "Newton’s Third Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Newton’s Third Law is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Speed and Velocity",
    "titleAr": "السرعة والسرعة المتجهة",
    "description": "Speed and Velocity is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع السرعة والسرعة المتجهة من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore speed and velocity is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم السرعة والسرعة المتجهة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-speed-and-velocity",
    "subcategory": "Physics",
    "shortDescription": "Speed and Velocity is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Speed and Velocity is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Acceleration",
    "titleAr": "التسارع",
    "description": "Acceleration is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التسارع من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore acceleration is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التسارع ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-acceleration",
    "subcategory": "Physics",
    "shortDescription": "Acceleration is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Acceleration is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Friction",
    "titleAr": "الاحتكاك",
    "description": "Friction is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الاحتكاك من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore friction is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الاحتكاك ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-friction",
    "subcategory": "Physics",
    "shortDescription": "Friction is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Friction is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Momentum",
    "titleAr": "الزخم",
    "description": "Momentum is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الزخم من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore momentum is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الزخم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-momentum",
    "subcategory": "Physics",
    "shortDescription": "Momentum is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Momentum is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Work and Power",
    "titleAr": "الشغل والقدرة",
    "description": "Work and Power is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الشغل والقدرة من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore work and power is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الشغل والقدرة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-work-and-power",
    "subcategory": "Physics",
    "shortDescription": "Work and Power is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Work and Power is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Kinetic Energy",
    "titleAr": "الطاقة الحركية",
    "description": "Kinetic Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الطاقة الحركية من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore kinetic energy is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الطاقة الحركية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-kinetic-energy",
    "subcategory": "Physics",
    "shortDescription": "Kinetic Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Kinetic Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Potential Energy",
    "titleAr": "طاقة الوضع",
    "description": "Potential Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع طاقة الوضع من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore potential energy is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم طاقة الوضع ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-potential-energy",
    "subcategory": "Physics",
    "shortDescription": "Potential Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Potential Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Conservation of Energy",
    "titleAr": "حفظ الطاقة",
    "description": "Conservation of Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع حفظ الطاقة من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore conservation of energy is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم حفظ الطاقة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-conservation-of-energy",
    "subcategory": "Physics",
    "shortDescription": "Conservation of Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Conservation of Energy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Heat Transfer",
    "titleAr": "انتقال الحرارة",
    "description": "Heat Transfer is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع انتقال الحرارة من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore heat transfer is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم انتقال الحرارة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-heat-transfer",
    "subcategory": "Physics",
    "shortDescription": "Heat Transfer is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Heat Transfer is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Thermal Expansion",
    "titleAr": "التمدد الحراري",
    "description": "Thermal Expansion is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التمدد الحراري من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore thermal expansion is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التمدد الحراري ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-thermal-expansion",
    "subcategory": "Physics",
    "shortDescription": "Thermal Expansion is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Thermal Expansion is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Waves",
    "titleAr": "الموجات",
    "description": "Waves is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الموجات من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore waves is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الموجات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-waves",
    "subcategory": "Physics",
    "shortDescription": "Waves is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Waves is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Reflection",
    "titleAr": "الانعكاس",
    "description": "Reflection is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الانعكاس من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore reflection is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الانعكاس ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-reflection",
    "subcategory": "Physics",
    "shortDescription": "Reflection is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Reflection is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Refraction",
    "titleAr": "الانكسار",
    "description": "Refraction is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الانكسار من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore refraction is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الانكسار ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-refraction",
    "subcategory": "Physics",
    "shortDescription": "Refraction is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Refraction is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Lenses",
    "titleAr": "العدسات",
    "description": "Lenses is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع العدسات من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore lenses is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم العدسات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-lenses",
    "subcategory": "Physics",
    "shortDescription": "Lenses is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Lenses is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Color and Light",
    "titleAr": "اللون والضوء",
    "description": "Color and Light is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع اللون والضوء من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore color and light is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم اللون والضوء ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-color-and-light",
    "subcategory": "Physics",
    "shortDescription": "Color and Light is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Color and Light is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Electric Charge",
    "titleAr": "الشحنة الكهربائية",
    "description": "Electric Charge is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الشحنة الكهربائية من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore electric charge is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الشحنة الكهربائية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-electric-charge",
    "subcategory": "Physics",
    "shortDescription": "Electric Charge is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Electric Charge is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Electric Circuits",
    "titleAr": "الدوائر الكهربائية",
    "description": "Electric Circuits is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الدوائر الكهربائية من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore electric circuits is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الدوائر الكهربائية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-electric-circuits",
    "subcategory": "Physics",
    "shortDescription": "Electric Circuits is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Electric Circuits is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Current and Voltage",
    "titleAr": "التيار والجهد",
    "description": "Current and Voltage is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التيار والجهد من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore current and voltage is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التيار والجهد ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-current-and-voltage",
    "subcategory": "Physics",
    "shortDescription": "Current and Voltage is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Current and Voltage is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Resistance",
    "titleAr": "المقاومة الكهربائية",
    "description": "Resistance is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المقاومة الكهربائية من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore resistance is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المقاومة الكهربائية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-resistance",
    "subcategory": "Physics",
    "shortDescription": "Resistance is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Resistance is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Electromagnets",
    "titleAr": "المغناطيسات الكهربائية",
    "description": "Electromagnets is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المغناطيسات الكهربائية من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore electromagnets is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المغناطيسات الكهربائية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-electromagnets",
    "subcategory": "Physics",
    "shortDescription": "Electromagnets is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Electromagnets is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Pressure",
    "titleAr": "الضغط",
    "description": "Pressure is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الضغط من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore pressure is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الضغط ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-pressure",
    "subcategory": "Physics",
    "shortDescription": "Pressure is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Pressure is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Density",
    "titleAr": "الكثافة",
    "description": "Density is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكثافة من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore density is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكثافة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-density",
    "subcategory": "Physics",
    "shortDescription": "Density is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Density is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Buoyancy",
    "titleAr": "قوة الطفو",
    "description": "Buoyancy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع قوة الطفو من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore buoyancy is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم قوة الطفو ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-buoyancy",
    "subcategory": "Physics",
    "shortDescription": "Buoyancy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Buoyancy is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Simple Machines",
    "titleAr": "الآلات البسيطة",
    "description": "Simple Machines is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الآلات البسيطة من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore simple machines is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الآلات البسيطة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-simple-machines",
    "subcategory": "Physics",
    "shortDescription": "Simple Machines is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Simple Machines is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Levers and Pulleys",
    "titleAr": "الروافع والبكرات",
    "description": "Levers and Pulleys is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الروافع والبكرات من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore levers and pulleys is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الروافع والبكرات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-levers-and-pulleys",
    "subcategory": "Physics",
    "shortDescription": "Levers and Pulleys is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Levers and Pulleys is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Measurement and Units",
    "titleAr": "القياس والوحدات",
    "description": "Measurement and Units is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع القياس والوحدات من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore measurement and units is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم القياس والوحدات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-measurement-and-units",
    "subcategory": "Physics",
    "shortDescription": "Measurement and Units is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Measurement and Units is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Physics",
    "categoryAr": "الفيزياء",
    "icon": "⚛️",
    "title": "Scientific Models",
    "titleAr": "النماذج العلمية",
    "description": "Scientific Models is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النماذج العلمية من الموضوعات المهمة في مجال الفيزياء. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore scientific models is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النماذج العلمية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Physics",
    "id": "topic-scientific-models",
    "subcategory": "Physics",
    "shortDescription": "Scientific Models is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Models help explain patterns that can be measured.",
        "Experiments test predictions about how physical systems behave.",
        "Units and careful measurements make comparisons meaningful."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Scientific Models is an important topic in physics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Models help explain patterns that can be measured. Experiments test predictions about how physical systems behave. Units and careful measurements make comparisons meaningful."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Place Value",
    "titleAr": "القيمة المكانية",
    "description": "Place Value is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع القيمة المكانية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore place value is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم القيمة المكانية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-place-value",
    "subcategory": "Mathematics",
    "shortDescription": "Place Value is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Place Value is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Rounding Numbers",
    "titleAr": "تقريب الأعداد",
    "description": "Rounding Numbers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تقريب الأعداد من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore rounding numbers is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تقريب الأعداد ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-rounding-numbers",
    "subcategory": "Mathematics",
    "shortDescription": "Rounding Numbers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Rounding Numbers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Factors and Multiples",
    "titleAr": "العوامل والمضاعفات",
    "description": "Factors and Multiples is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع العوامل والمضاعفات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore factors and multiples is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم العوامل والمضاعفات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-factors-and-multiples",
    "subcategory": "Mathematics",
    "shortDescription": "Factors and Multiples is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Factors and Multiples is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Prime Numbers",
    "titleAr": "الأعداد الأولية",
    "description": "Prime Numbers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأعداد الأولية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore prime numbers is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأعداد الأولية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-prime-numbers",
    "subcategory": "Mathematics",
    "shortDescription": "Prime Numbers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Prime Numbers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Equivalent Fractions",
    "titleAr": "الكسور المتكافئة",
    "description": "Equivalent Fractions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكسور المتكافئة من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore equivalent fractions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكسور المتكافئة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-equivalent-fractions",
    "subcategory": "Mathematics",
    "shortDescription": "Equivalent Fractions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Equivalent Fractions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Decimals",
    "titleAr": "الأعداد العشرية",
    "description": "Decimals is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأعداد العشرية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore decimals is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأعداد العشرية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-decimals",
    "subcategory": "Mathematics",
    "shortDescription": "Decimals is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Decimals is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Ratios",
    "titleAr": "النسب",
    "description": "Ratios is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النسب من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore ratios is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النسب ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-ratios",
    "subcategory": "Mathematics",
    "shortDescription": "Ratios is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Ratios is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Proportions",
    "titleAr": "التناسب",
    "description": "Proportions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التناسب من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore proportions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التناسب ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-proportions",
    "subcategory": "Mathematics",
    "shortDescription": "Proportions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Proportions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Integers",
    "titleAr": "الأعداد الصحيحة",
    "description": "Integers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأعداد الصحيحة من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore integers is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأعداد الصحيحة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-integers",
    "subcategory": "Mathematics",
    "shortDescription": "Integers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Integers is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Order of Operations",
    "titleAr": "ترتيب العمليات",
    "description": "Order of Operations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع ترتيب العمليات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore order of operations is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم ترتيب العمليات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-order-of-operations",
    "subcategory": "Mathematics",
    "shortDescription": "Order of Operations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Order of Operations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Powers and Exponents",
    "titleAr": "القوى والأسس",
    "description": "Powers and Exponents is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع القوى والأسس من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore powers and exponents is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم القوى والأسس ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-powers-and-exponents",
    "subcategory": "Mathematics",
    "shortDescription": "Powers and Exponents is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Powers and Exponents is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Square Roots",
    "titleAr": "الجذور التربيعية",
    "description": "Square Roots is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجذور التربيعية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore square roots is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجذور التربيعية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-square-roots",
    "subcategory": "Mathematics",
    "shortDescription": "Square Roots is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Square Roots is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Algebraic Expressions",
    "titleAr": "المقادير الجبرية",
    "description": "Algebraic Expressions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المقادير الجبرية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore algebraic expressions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المقادير الجبرية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-algebraic-expressions",
    "subcategory": "Mathematics",
    "shortDescription": "Algebraic Expressions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Algebraic Expressions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Solving Equations",
    "titleAr": "حل المعادلات",
    "description": "Solving Equations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع حل المعادلات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore solving equations is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم حل المعادلات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-solving-equations",
    "subcategory": "Mathematics",
    "shortDescription": "Solving Equations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Solving Equations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Inequalities",
    "titleAr": "المتباينات",
    "description": "Inequalities is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المتباينات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore inequalities is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المتباينات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-inequalities",
    "subcategory": "Mathematics",
    "shortDescription": "Inequalities is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Inequalities is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Coordinates",
    "titleAr": "الإحداثيات",
    "description": "Coordinates is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الإحداثيات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore coordinates is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الإحداثيات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-coordinates",
    "subcategory": "Mathematics",
    "shortDescription": "Coordinates is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Coordinates is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Linear Graphs",
    "titleAr": "الرسوم البيانية الخطية",
    "description": "Linear Graphs is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الرسوم البيانية الخطية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore linear graphs is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الرسوم البيانية الخطية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-linear-graphs",
    "subcategory": "Mathematics",
    "shortDescription": "Linear Graphs is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Linear Graphs is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Patterns and Sequences",
    "titleAr": "الأنماط والمتتابعات",
    "description": "Patterns and Sequences is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأنماط والمتتابعات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore patterns and sequences is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأنماط والمتتابعات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-patterns-and-sequences",
    "subcategory": "Mathematics",
    "shortDescription": "Patterns and Sequences is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Patterns and Sequences is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Polygons",
    "titleAr": "المضلعات",
    "description": "Polygons is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المضلعات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore polygons is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المضلعات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-polygons",
    "subcategory": "Mathematics",
    "shortDescription": "Polygons is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Polygons is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Angles",
    "titleAr": "الزوايا",
    "description": "Angles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الزوايا من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore angles is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الزوايا ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-angles",
    "subcategory": "Mathematics",
    "shortDescription": "Angles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Angles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Parallel and Perpendicular Lines",
    "titleAr": "المستقيمات المتوازية والمتعامدة",
    "description": "Parallel and Perpendicular Lines is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المستقيمات المتوازية والمتعامدة من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore parallel and perpendicular lines is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المستقيمات المتوازية والمتعامدة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-parallel-and-perpendicular-lines",
    "subcategory": "Mathematics",
    "shortDescription": "Parallel and Perpendicular Lines is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Parallel and Perpendicular Lines is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Triangles",
    "titleAr": "المثلثات",
    "description": "Triangles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المثلثات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore triangles is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المثلثات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-triangles",
    "subcategory": "Mathematics",
    "shortDescription": "Triangles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Triangles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Quadrilaterals",
    "titleAr": "الأشكال الرباعية",
    "description": "Quadrilaterals is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأشكال الرباعية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore quadrilaterals is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأشكال الرباعية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-quadrilaterals",
    "subcategory": "Mathematics",
    "shortDescription": "Quadrilaterals is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Quadrilaterals is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Circles",
    "titleAr": "الدوائر",
    "description": "Circles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الدوائر من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore circles is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الدوائر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-circles",
    "subcategory": "Mathematics",
    "shortDescription": "Circles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Circles is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Perimeter",
    "titleAr": "المحيط",
    "description": "Perimeter is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المحيط من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore perimeter is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المحيط ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-perimeter",
    "subcategory": "Mathematics",
    "shortDescription": "Perimeter is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Perimeter is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Area",
    "titleAr": "المساحة",
    "description": "Area is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المساحة من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore area is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المساحة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-area",
    "subcategory": "Mathematics",
    "shortDescription": "Area is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Area is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Surface Area",
    "titleAr": "المساحة السطحية",
    "description": "Surface Area is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المساحة السطحية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore surface area is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المساحة السطحية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-surface-area",
    "subcategory": "Mathematics",
    "shortDescription": "Surface Area is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Surface Area is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Volume",
    "titleAr": "الحجم",
    "description": "Volume is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحجم من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore volume is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحجم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-volume",
    "subcategory": "Mathematics",
    "shortDescription": "Volume is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Volume is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Transformations in Geometry",
    "titleAr": "التحويلات الهندسية",
    "description": "Transformations in Geometry is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التحويلات الهندسية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore transformations in geometry is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التحويلات الهندسية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-transformations-in-geometry",
    "subcategory": "Mathematics",
    "shortDescription": "Transformations in Geometry is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Transformations in Geometry is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Symmetry",
    "titleAr": "التماثل",
    "description": "Symmetry is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التماثل من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore symmetry is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التماثل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-symmetry",
    "subcategory": "Mathematics",
    "shortDescription": "Symmetry is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Symmetry is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Mean Median and Mode",
    "titleAr": "المتوسط والوسيط والمنوال",
    "description": "Mean Median and Mode is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المتوسط والوسيط والمنوال من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore mean median and mode is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المتوسط والوسيط والمنوال ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-mean-median-and-mode",
    "subcategory": "Mathematics",
    "shortDescription": "Mean Median and Mode is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Mean Median and Mode is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Data Representation",
    "titleAr": "تمثيل البيانات",
    "description": "Data Representation is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تمثيل البيانات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore data representation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تمثيل البيانات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-data-representation",
    "subcategory": "Mathematics",
    "shortDescription": "Data Representation is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Data Representation is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Venn Diagrams",
    "titleAr": "مخططات فن",
    "description": "Venn Diagrams is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع مخططات فن من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore venn diagrams is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم مخططات فن ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-venn-diagrams",
    "subcategory": "Mathematics",
    "shortDescription": "Venn Diagrams is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Venn Diagrams is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Sets",
    "titleAr": "المجموعات",
    "description": "Sets is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المجموعات من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore sets is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المجموعات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-sets",
    "subcategory": "Mathematics",
    "shortDescription": "Sets is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Sets is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Functions",
    "titleAr": "الدوال",
    "description": "Functions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الدوال من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore functions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الدوال ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-functions",
    "subcategory": "Mathematics",
    "shortDescription": "Functions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Functions is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Mathematics",
    "categoryAr": "الرياضيات",
    "icon": "📐",
    "title": "Quadratic Equations",
    "titleAr": "المعادلات التربيعية",
    "description": "Quadratic Equations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المعادلات التربيعية من الموضوعات المهمة في مجال الرياضيات. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore quadratic equations is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المعادلات التربيعية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Mathematics",
    "id": "topic-quadratic-equations",
    "subcategory": "Mathematics",
    "shortDescription": "Quadratic Equations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Define the quantities and relationships before choosing a method.",
        "Show each step so the reasoning can be checked.",
        "A result can often be verified using another method."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Quadratic Equations is an important topic in mathematics. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Define the quantities and relationships before choosing a method. Show each step so the reasoning can be checked. A result can often be verified using another method."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Computer Hardware",
    "titleAr": "مكونات الحاسوب",
    "description": "Computer Hardware is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع مكونات الحاسوب من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore computer hardware is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم مكونات الحاسوب ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-computer-hardware",
    "subcategory": "Technology & Computing",
    "shortDescription": "Computer Hardware is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Computer Hardware is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Computer Software",
    "titleAr": "برمجيات الحاسوب",
    "description": "Computer Software is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع برمجيات الحاسوب من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore computer software is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم برمجيات الحاسوب ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-computer-software",
    "subcategory": "Technology & Computing",
    "shortDescription": "Computer Software is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Computer Software is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Operating Systems",
    "titleAr": "أنظمة التشغيل",
    "description": "Operating Systems is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أنظمة التشغيل من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore operating systems is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أنظمة التشغيل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-operating-systems",
    "subcategory": "Technology & Computing",
    "shortDescription": "Operating Systems is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Operating Systems is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "File Management",
    "titleAr": "إدارة الملفات",
    "description": "File Management is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع إدارة الملفات من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore file management is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم إدارة الملفات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-file-management",
    "subcategory": "Technology & Computing",
    "shortDescription": "File Management is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "File Management is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Computer Networks",
    "titleAr": "شبكات الحاسوب",
    "description": "Computer Networks is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع شبكات الحاسوب من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore computer networks is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم شبكات الحاسوب ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-computer-networks",
    "subcategory": "Technology & Computing",
    "shortDescription": "Computer Networks is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Computer Networks is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Websites and Browsers",
    "titleAr": "المواقع والمتصفحات",
    "description": "Websites and Browsers is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المواقع والمتصفحات من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore websites and browsers is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المواقع والمتصفحات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-websites-and-browsers",
    "subcategory": "Technology & Computing",
    "shortDescription": "Websites and Browsers is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Websites and Browsers is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "HTML Basics",
    "titleAr": "أساسيات HTML",
    "description": "HTML Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أساسيات HTML من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore html basics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أساسيات HTML ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-html-basics",
    "subcategory": "Technology & Computing",
    "shortDescription": "HTML Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "HTML Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "CSS Basics",
    "titleAr": "أساسيات CSS",
    "description": "CSS Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أساسيات CSS من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore css basics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أساسيات CSS ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-css-basics",
    "subcategory": "Technology & Computing",
    "shortDescription": "CSS Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "CSS Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "JavaScript Basics",
    "titleAr": "أساسيات JavaScript",
    "description": "JavaScript Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أساسيات JavaScript من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore javascript basics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أساسيات JavaScript ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-javascript-basics",
    "subcategory": "Technology & Computing",
    "shortDescription": "JavaScript Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "JavaScript Basics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Algorithms",
    "titleAr": "الخوارزميات",
    "description": "Algorithms is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الخوارزميات من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore algorithms is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الخوارزميات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-algorithms",
    "subcategory": "Technology & Computing",
    "shortDescription": "Algorithms is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Algorithms is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Programming Languages",
    "titleAr": "لغات البرمجة",
    "description": "Programming Languages is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع لغات البرمجة من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore programming languages is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم لغات البرمجة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-programming-languages",
    "subcategory": "Technology & Computing",
    "shortDescription": "Programming Languages is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Programming Languages is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Debugging",
    "titleAr": "تصحيح الأخطاء البرمجية",
    "description": "Debugging is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تصحيح الأخطاء البرمجية من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore debugging is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تصحيح الأخطاء البرمجية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-debugging",
    "subcategory": "Technology & Computing",
    "shortDescription": "Debugging is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Debugging is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Data and Databases",
    "titleAr": "البيانات وقواعد البيانات",
    "description": "Data and Databases is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع البيانات وقواعد البيانات من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore data and databases is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم البيانات وقواعد البيانات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-data-and-databases",
    "subcategory": "Technology & Computing",
    "shortDescription": "Data and Databases is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Data and Databases is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Strong Passwords",
    "titleAr": "كلمات المرور القوية",
    "description": "Strong Passwords is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع كلمات المرور القوية من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore strong passwords is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم كلمات المرور القوية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-strong-passwords",
    "subcategory": "Technology & Computing",
    "shortDescription": "Strong Passwords is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Strong Passwords is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Phishing Awareness",
    "titleAr": "التوعية بالتصيد الإلكتروني",
    "description": "Phishing Awareness is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التوعية بالتصيد الإلكتروني من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore phishing awareness is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التوعية بالتصيد الإلكتروني ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-phishing-awareness",
    "subcategory": "Technology & Computing",
    "shortDescription": "Phishing Awareness is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Phishing Awareness is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Digital Privacy",
    "titleAr": "الخصوصية الرقمية",
    "description": "Digital Privacy is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الخصوصية الرقمية من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore digital privacy is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الخصوصية الرقمية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-digital-privacy",
    "subcategory": "Technology & Computing",
    "shortDescription": "Digital Privacy is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Digital Privacy is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Machine Learning",
    "titleAr": "تعلم الآلة",
    "description": "Machine Learning is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تعلم الآلة من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore machine learning is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تعلم الآلة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-machine-learning",
    "subcategory": "Technology & Computing",
    "shortDescription": "Machine Learning is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Machine Learning is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Sensors",
    "titleAr": "المستشعرات",
    "description": "Sensors is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المستشعرات من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore sensors is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المستشعرات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-sensors",
    "subcategory": "Technology & Computing",
    "shortDescription": "Sensors is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Sensors is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Open-Source Software",
    "titleAr": "البرمجيات مفتوحة المصدر",
    "description": "Open-Source Software is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع البرمجيات مفتوحة المصدر من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore open-source software is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم البرمجيات مفتوحة المصدر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-open-source-software",
    "subcategory": "Technology & Computing",
    "shortDescription": "Open-Source Software is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Open-Source Software is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Digital Citizenship",
    "titleAr": "المواطنة الرقمية",
    "description": "Digital Citizenship is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المواطنة الرقمية من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore digital citizenship is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المواطنة الرقمية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-digital-citizenship",
    "subcategory": "Technology & Computing",
    "shortDescription": "Digital Citizenship is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Digital Citizenship is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Assistive Technology",
    "titleAr": "التكنولوجيا المساعدة",
    "description": "Assistive Technology is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التكنولوجيا المساعدة من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore assistive technology is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التكنولوجيا المساعدة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-assistive-technology",
    "subcategory": "Technology & Computing",
    "shortDescription": "Assistive Technology is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Assistive Technology is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Virtual Reality",
    "titleAr": "الواقع الافتراضي",
    "description": "Virtual Reality is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الواقع الافتراضي من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore virtual reality is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الواقع الافتراضي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-virtual-reality",
    "subcategory": "Technology & Computing",
    "shortDescription": "Virtual Reality is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Virtual Reality is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Augmented Reality",
    "titleAr": "الواقع المعزز",
    "description": "Augmented Reality is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الواقع المعزز من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore augmented reality is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الواقع المعزز ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-augmented-reality",
    "subcategory": "Technology & Computing",
    "shortDescription": "Augmented Reality is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Augmented Reality is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "3D Printing",
    "titleAr": "الطباعة ثلاثية الأبعاد",
    "description": "3D Printing is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الطباعة ثلاثية الأبعاد من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore 3d printing is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الطباعة ثلاثية الأبعاد ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-3d-printing",
    "subcategory": "Technology & Computing",
    "shortDescription": "3D Printing is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "3D Printing is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Computer Graphics",
    "titleAr": "رسوم الحاسوب",
    "description": "Computer Graphics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع رسوم الحاسوب من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore computer graphics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم رسوم الحاسوب ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-computer-graphics",
    "subcategory": "Technology & Computing",
    "shortDescription": "Computer Graphics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Computer Graphics is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Search Engines",
    "titleAr": "محركات البحث",
    "description": "Search Engines is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع محركات البحث من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore search engines is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم محركات البحث ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-search-engines",
    "subcategory": "Technology & Computing",
    "shortDescription": "Search Engines is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Search Engines is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "Technology & Computing",
    "categoryAr": "التكنولوجيا والحوسبة",
    "icon": "💻",
    "title": "Digital Maps",
    "titleAr": "الخرائط الرقمية",
    "description": "Digital Maps is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الخرائط الرقمية من الموضوعات المهمة في مجال التكنولوجيا والحوسبة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore digital maps is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الخرائط الرقمية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Technology & Computing",
    "id": "topic-digital-maps",
    "subcategory": "Technology & Computing",
    "shortDescription": "Digital Maps is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Break complex tasks into smaller steps.",
        "Test systems with different inputs and check the results.",
        "Safety, accessibility, and privacy matter when technology is designed."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Digital Maps is an important topic in technology & computing. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Break complex tasks into smaller steps. Test systems with different inputs and check the results. Safety, accessibility, and privacy matter when technology is designed."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The Nile River and Egyptian Civilization",
    "titleAr": "نهر النيل والحضارة المصرية",
    "description": "The Nile River and Egyptian Civilization is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع نهر النيل والحضارة المصرية من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the nile river and egyptian civilization is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم نهر النيل والحضارة المصرية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-nile-river-and-egyptian-civilization",
    "subcategory": "History & Civilization",
    "shortDescription": "The Nile River and Egyptian Civilization is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Nile River and Egyptian Civilization is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The Pyramids of Giza",
    "titleAr": "أهرامات الجيزة",
    "description": "The Pyramids of Giza is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أهرامات الجيزة من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the pyramids of giza is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أهرامات الجيزة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-pyramids-of-giza",
    "subcategory": "History & Civilization",
    "shortDescription": "The Pyramids of Giza is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Pyramids of Giza is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Hieroglyphics",
    "titleAr": "الكتابة الهيروغليفية",
    "description": "Hieroglyphics is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكتابة الهيروغليفية من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore hieroglyphics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكتابة الهيروغليفية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-hieroglyphics",
    "subcategory": "History & Civilization",
    "shortDescription": "Hieroglyphics is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Hieroglyphics is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Ancient Egyptian Daily Life",
    "titleAr": "الحياة اليومية في مصر القديمة",
    "description": "Ancient Egyptian Daily Life is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحياة اليومية في مصر القديمة من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore ancient egyptian daily life is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحياة اليومية في مصر القديمة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-ancient-egyptian-daily-life",
    "subcategory": "History & Civilization",
    "shortDescription": "Ancient Egyptian Daily Life is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Ancient Egyptian Daily Life is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The Indus Valley Civilization",
    "titleAr": "حضارة وادي السند",
    "description": "The Indus Valley Civilization is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع حضارة وادي السند من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the indus valley civilization is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم حضارة وادي السند ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-indus-valley-civilization",
    "subcategory": "History & Civilization",
    "shortDescription": "The Indus Valley Civilization is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Indus Valley Civilization is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Ancient China",
    "titleAr": "الصين القديمة",
    "description": "Ancient China is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الصين القديمة من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore ancient china is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الصين القديمة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-ancient-china",
    "subcategory": "History & Civilization",
    "shortDescription": "Ancient China is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Ancient China is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The Silk Road",
    "titleAr": "طريق الحرير",
    "description": "The Silk Road is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع طريق الحرير من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the silk road is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم طريق الحرير ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-silk-road",
    "subcategory": "History & Civilization",
    "shortDescription": "The Silk Road is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Silk Road is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The Age of Exploration",
    "titleAr": "عصر الاستكشاف",
    "description": "The Age of Exploration is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع عصر الاستكشاف من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the age of exploration is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم عصر الاستكشاف ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-age-of-exploration",
    "subcategory": "History & Civilization",
    "shortDescription": "The Age of Exploration is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Age of Exploration is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The Scientific Revolution",
    "titleAr": "الثورة العلمية",
    "description": "The Scientific Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الثورة العلمية من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the scientific revolution is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الثورة العلمية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-scientific-revolution",
    "subcategory": "History & Civilization",
    "shortDescription": "The Scientific Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Scientific Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The French Revolution",
    "titleAr": "الثورة الفرنسية",
    "description": "The French Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الثورة الفرنسية من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the french revolution is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الثورة الفرنسية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-french-revolution",
    "subcategory": "History & Civilization",
    "shortDescription": "The French Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The French Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The American Revolution",
    "titleAr": "الثورة الأمريكية",
    "description": "The American Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الثورة الأمريكية من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the american revolution is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الثورة الأمريكية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-american-revolution",
    "subcategory": "History & Civilization",
    "shortDescription": "The American Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The American Revolution is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "The United Nations",
    "titleAr": "الأمم المتحدة",
    "description": "The United Nations is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأمم المتحدة من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the united nations is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأمم المتحدة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-the-united-nations",
    "subcategory": "History & Civilization",
    "shortDescription": "The United Nations is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The United Nations is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Archaeology",
    "titleAr": "علم الآثار",
    "description": "Archaeology is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع علم الآثار من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore archaeology is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم علم الآثار ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-archaeology",
    "subcategory": "History & Civilization",
    "shortDescription": "Archaeology is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Archaeology is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Historical Sources",
    "titleAr": "المصادر التاريخية",
    "description": "Historical Sources is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المصادر التاريخية من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore historical sources is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المصادر التاريخية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-historical-sources",
    "subcategory": "History & Civilization",
    "shortDescription": "Historical Sources is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Historical Sources is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Timelines",
    "titleAr": "الخطوط الزمنية",
    "description": "Timelines is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الخطوط الزمنية من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore timelines is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الخطوط الزمنية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-timelines",
    "subcategory": "History & Civilization",
    "shortDescription": "Timelines is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Timelines is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Trade in History",
    "titleAr": "التجارة عبر التاريخ",
    "description": "Trade in History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التجارة عبر التاريخ من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore trade in history is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التجارة عبر التاريخ ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-trade-in-history",
    "subcategory": "History & Civilization",
    "shortDescription": "Trade in History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Trade in History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Inventions That Changed History",
    "titleAr": "اختراعات غيّرت التاريخ",
    "description": "Inventions That Changed History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع اختراعات غيّرت التاريخ من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore inventions that changed history is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم اختراعات غيّرت التاريخ ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-inventions-that-changed-history",
    "subcategory": "History & Civilization",
    "shortDescription": "Inventions That Changed History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Inventions That Changed History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Migration Through History",
    "titleAr": "الهجرة عبر التاريخ",
    "description": "Migration Through History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الهجرة عبر التاريخ من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore migration through history is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الهجرة عبر التاريخ ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-migration-through-history",
    "subcategory": "History & Civilization",
    "shortDescription": "Migration Through History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Migration Through History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Cultural Heritage",
    "titleAr": "التراث الثقافي",
    "description": "Cultural Heritage is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التراث الثقافي من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore cultural heritage is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التراث الثقافي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-cultural-heritage",
    "subcategory": "History & Civilization",
    "shortDescription": "Cultural Heritage is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Cultural Heritage is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Museums",
    "titleAr": "المتاحف",
    "description": "Museums is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المتاحف من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore museums is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المتاحف ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-museums",
    "subcategory": "History & Civilization",
    "shortDescription": "Museums is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Museums is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "History & Civilization",
    "categoryAr": "التاريخ والحضارة",
    "icon": "🏛️",
    "title": "Maps in History",
    "titleAr": "الخرائط في التاريخ",
    "description": "Maps in History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الخرائط في التاريخ من الموضوعات المهمة في مجال التاريخ والحضارة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore maps in history is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الخرائط في التاريخ ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "History & Civilization",
    "id": "topic-maps-in-history",
    "subcategory": "History & Civilization",
    "shortDescription": "Maps in History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Ask who created a source, when, and for what purpose.",
        "Compare accounts instead of relying on a single perspective.",
        "Historical events are shaped by multiple causes and consequences."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Maps in History is an important topic in history & civilization. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Ask who created a source, when, and for what purpose. Compare accounts instead of relying on a single perspective. Historical events are shaped by multiple causes and consequences."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Countries and Borders",
    "titleAr": "الدول والحدود",
    "description": "Countries and Borders is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الدول والحدود من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore countries and borders is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الدول والحدود ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-countries-and-borders",
    "subcategory": "Geography",
    "shortDescription": "Countries and Borders is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Countries and Borders is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Map Scales",
    "titleAr": "مقياس الرسم",
    "description": "Map Scales is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع مقياس الرسم من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore map scales is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم مقياس الرسم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-map-scales",
    "subcategory": "Geography",
    "shortDescription": "Map Scales is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Map Scales is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Map Symbols",
    "titleAr": "رموز الخرائط",
    "description": "Map Symbols is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع رموز الخرائط من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore map symbols is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم رموز الخرائط ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-map-symbols",
    "subcategory": "Geography",
    "shortDescription": "Map Symbols is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Map Symbols is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Landforms",
    "titleAr": "التضاريس",
    "description": "Landforms is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التضاريس من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore landforms is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التضاريس ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-landforms",
    "subcategory": "Geography",
    "shortDescription": "Landforms is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Landforms is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Plains and Plateaus",
    "titleAr": "السهول والهضاب",
    "description": "Plains and Plateaus is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع السهول والهضاب من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore plains and plateaus is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم السهول والهضاب ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-plains-and-plateaus",
    "subcategory": "Geography",
    "shortDescription": "Plains and Plateaus is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Plains and Plateaus is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Rivers and Lakes",
    "titleAr": "الأنهار والبحيرات",
    "description": "Rivers and Lakes is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأنهار والبحيرات من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore rivers and lakes is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأنهار والبحيرات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-rivers-and-lakes",
    "subcategory": "Geography",
    "shortDescription": "Rivers and Lakes is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Rivers and Lakes is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Rainforests",
    "titleAr": "الغابات المطيرة",
    "description": "Rainforests is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الغابات المطيرة من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore rainforests is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الغابات المطيرة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-rainforests",
    "subcategory": "Geography",
    "shortDescription": "Rainforests is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Rainforests is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Grasslands",
    "titleAr": "الأراضي العشبية",
    "description": "Grasslands is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأراضي العشبية من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore grasslands is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأراضي العشبية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-grasslands",
    "subcategory": "Geography",
    "shortDescription": "Grasslands is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Grasslands is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Polar Regions",
    "titleAr": "المناطق القطبية",
    "description": "Polar Regions is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المناطق القطبية من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore polar regions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المناطق القطبية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-polar-regions",
    "subcategory": "Geography",
    "shortDescription": "Polar Regions is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Polar Regions is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Population Density",
    "titleAr": "الكثافة السكانية",
    "description": "Population Density is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكثافة السكانية من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore population density is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكثافة السكانية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-population-density",
    "subcategory": "Geography",
    "shortDescription": "Population Density is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Population Density is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Urbanization",
    "titleAr": "التحضر",
    "description": "Urbanization is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التحضر من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore urbanization is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التحضر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-urbanization",
    "subcategory": "Geography",
    "shortDescription": "Urbanization is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Urbanization is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Rural and Urban Settlements",
    "titleAr": "المستوطنات الريفية والحضرية",
    "description": "Rural and Urban Settlements is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المستوطنات الريفية والحضرية من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore rural and urban settlements is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المستوطنات الريفية والحضرية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-rural-and-urban-settlements",
    "subcategory": "Geography",
    "shortDescription": "Rural and Urban Settlements is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Rural and Urban Settlements is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Natural Resources",
    "titleAr": "الموارد الطبيعية",
    "description": "Natural Resources is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الموارد الطبيعية من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore natural resources is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الموارد الطبيعية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-natural-resources",
    "subcategory": "Geography",
    "shortDescription": "Natural Resources is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Natural Resources is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Agriculture and Land Use",
    "titleAr": "الزراعة واستخدام الأراضي",
    "description": "Agriculture and Land Use is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الزراعة واستخدام الأراضي من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore agriculture and land use is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الزراعة واستخدام الأراضي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-agriculture-and-land-use",
    "subcategory": "Geography",
    "shortDescription": "Agriculture and Land Use is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Agriculture and Land Use is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Transportation Networks",
    "titleAr": "شبكات النقل",
    "description": "Transportation Networks is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع شبكات النقل من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore transportation networks is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم شبكات النقل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-transportation-networks",
    "subcategory": "Geography",
    "shortDescription": "Transportation Networks is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Transportation Networks is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Human-Environment Interaction",
    "titleAr": "تفاعل الإنسان والبيئة",
    "description": "Human-Environment Interaction is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تفاعل الإنسان والبيئة من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore human-environment interaction is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تفاعل الإنسان والبيئة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-human-environment-interaction",
    "subcategory": "Geography",
    "shortDescription": "Human-Environment Interaction is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Human-Environment Interaction is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Geographic Information Systems",
    "titleAr": "نظم المعلومات الجغرافية",
    "description": "Geographic Information Systems is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع نظم المعلومات الجغرافية من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore geographic information systems is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم نظم المعلومات الجغرافية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-geographic-information-systems",
    "subcategory": "Geography",
    "shortDescription": "Geographic Information Systems is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Geographic Information Systems is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "The Mediterranean Sea",
    "titleAr": "البحر المتوسط",
    "description": "The Mediterranean Sea is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع البحر المتوسط من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the mediterranean sea is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم البحر المتوسط ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-the-mediterranean-sea",
    "subcategory": "Geography",
    "shortDescription": "The Mediterranean Sea is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Mediterranean Sea is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "The Suez Canal",
    "titleAr": "قناة السويس",
    "description": "The Suez Canal is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع قناة السويس من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the suez canal is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم قناة السويس ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-the-suez-canal",
    "subcategory": "Geography",
    "shortDescription": "The Suez Canal is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Suez Canal is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "The Sahara Desert",
    "titleAr": "الصحراء الكبرى",
    "description": "The Sahara Desert is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الصحراء الكبرى من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the sahara desert is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الصحراء الكبرى ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-the-sahara-desert",
    "subcategory": "Geography",
    "shortDescription": "The Sahara Desert is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Sahara Desert is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "The Amazon River",
    "titleAr": "نهر الأمازون",
    "description": "The Amazon River is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع نهر الأمازون من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the amazon river is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم نهر الأمازون ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-the-amazon-river",
    "subcategory": "Geography",
    "shortDescription": "The Amazon River is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Amazon River is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "The Himalayas",
    "titleAr": "جبال الهيمالايا",
    "description": "The Himalayas is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع جبال الهيمالايا من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the himalayas is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم جبال الهيمالايا ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-the-himalayas",
    "subcategory": "Geography",
    "shortDescription": "The Himalayas is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Himalayas is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "The Equator",
    "titleAr": "خط الاستواء",
    "description": "The Equator is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع خط الاستواء من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the equator is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم خط الاستواء ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-the-equator",
    "subcategory": "Geography",
    "shortDescription": "The Equator is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Equator is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Natural Disasters",
    "titleAr": "الكوارث الطبيعية",
    "description": "Natural Disasters is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكوارث الطبيعية من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore natural disasters is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكوارث الطبيعية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-natural-disasters",
    "subcategory": "Geography",
    "shortDescription": "Natural Disasters is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Natural Disasters is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Geography",
    "categoryAr": "الجغرافيا",
    "icon": "🌍",
    "title": "Regional Climate",
    "titleAr": "المناخ الإقليمي",
    "description": "Regional Climate is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المناخ الإقليمي من الموضوعات المهمة في مجال الجغرافيا. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore regional climate is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المناخ الإقليمي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Geography",
    "id": "topic-regional-climate",
    "subcategory": "Geography",
    "shortDescription": "Regional Climate is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Location and scale affect how a place is understood.",
        "Maps and data reveal spatial patterns.",
        "Physical and human processes often influence one another."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Regional Climate is an important topic in geography. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Location and scale affect how a place is understood. Maps and data reveal spatial patterns. Physical and human processes often influence one another."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Climate Change",
    "titleAr": "تغير المناخ",
    "description": "Climate Change is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تغير المناخ من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore climate change is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تغير المناخ ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-climate-change",
    "subcategory": "Environment",
    "shortDescription": "Climate Change is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Climate Change is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Global Warming",
    "titleAr": "الاحتباس الحراري",
    "description": "Global Warming is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الاحتباس الحراري من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore global warming is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الاحتباس الحراري ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-global-warming",
    "subcategory": "Environment",
    "shortDescription": "Global Warming is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Global Warming is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Greenhouse Effect",
    "titleAr": "تأثير الاحتباس الحراري",
    "description": "Greenhouse Effect is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تأثير الاحتباس الحراري من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore greenhouse effect is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تأثير الاحتباس الحراري ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-greenhouse-effect",
    "subcategory": "Environment",
    "shortDescription": "Greenhouse Effect is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Greenhouse Effect is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Air Pollution",
    "titleAr": "تلوث الهواء",
    "description": "Air Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تلوث الهواء من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore air pollution is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تلوث الهواء ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-air-pollution",
    "subcategory": "Environment",
    "shortDescription": "Air Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Air Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Water Pollution",
    "titleAr": "تلوث المياه",
    "description": "Water Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تلوث المياه من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore water pollution is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تلوث المياه ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-water-pollution",
    "subcategory": "Environment",
    "shortDescription": "Water Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Water Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Plastic Pollution",
    "titleAr": "التلوث البلاستيكي",
    "description": "Plastic Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التلوث البلاستيكي من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore plastic pollution is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التلوث البلاستيكي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-plastic-pollution",
    "subcategory": "Environment",
    "shortDescription": "Plastic Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Plastic Pollution is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Recycling",
    "titleAr": "إعادة التدوير",
    "description": "Recycling is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع إعادة التدوير من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore recycling is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم إعادة التدوير ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-recycling",
    "subcategory": "Environment",
    "shortDescription": "Recycling is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Recycling is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Composting",
    "titleAr": "تحويل المخلفات إلى سماد",
    "description": "Composting is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تحويل المخلفات إلى سماد من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore composting is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تحويل المخلفات إلى سماد ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-composting",
    "subcategory": "Environment",
    "shortDescription": "Composting is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Composting is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Waste Reduction",
    "titleAr": "تقليل النفايات",
    "description": "Waste Reduction is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تقليل النفايات من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore waste reduction is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تقليل النفايات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-waste-reduction",
    "subcategory": "Environment",
    "shortDescription": "Waste Reduction is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Waste Reduction is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Water Conservation",
    "titleAr": "الحفاظ على المياه",
    "description": "Water Conservation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحفاظ على المياه من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore water conservation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحفاظ على المياه ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-water-conservation",
    "subcategory": "Environment",
    "shortDescription": "Water Conservation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Water Conservation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Deforestation",
    "titleAr": "إزالة الغابات",
    "description": "Deforestation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع إزالة الغابات من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore deforestation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم إزالة الغابات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-deforestation",
    "subcategory": "Environment",
    "shortDescription": "Deforestation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Deforestation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Desertification",
    "titleAr": "التصحر",
    "description": "Desertification is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التصحر من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore desertification is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التصحر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-desertification",
    "subcategory": "Environment",
    "shortDescription": "Desertification is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Desertification is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Endangered Species",
    "titleAr": "الأنواع المهددة بالانقراض",
    "description": "Endangered Species is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأنواع المهددة بالانقراض من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore endangered species is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأنواع المهددة بالانقراض ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-endangered-species",
    "subcategory": "Environment",
    "shortDescription": "Endangered Species is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Endangered Species is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Conservation",
    "titleAr": "الحفاظ على الطبيعة",
    "description": "Conservation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحفاظ على الطبيعة من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore conservation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحفاظ على الطبيعة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-conservation",
    "subcategory": "Environment",
    "shortDescription": "Conservation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Conservation is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "National Parks",
    "titleAr": "المتنزهات الوطنية",
    "description": "National Parks is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المتنزهات الوطنية من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore national parks is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المتنزهات الوطنية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-national-parks",
    "subcategory": "Environment",
    "shortDescription": "National Parks is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "National Parks is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Renewable Resources",
    "titleAr": "الموارد المتجددة",
    "description": "Renewable Resources is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الموارد المتجددة من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore renewable resources is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الموارد المتجددة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-renewable-resources",
    "subcategory": "Environment",
    "shortDescription": "Renewable Resources is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Renewable Resources is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Nonrenewable Resources",
    "titleAr": "الموارد غير المتجددة",
    "description": "Nonrenewable Resources is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الموارد غير المتجددة من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore nonrenewable resources is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الموارد غير المتجددة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-nonrenewable-resources",
    "subcategory": "Environment",
    "shortDescription": "Nonrenewable Resources is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Nonrenewable Resources is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Solar Power",
    "titleAr": "الطاقة الشمسية",
    "description": "Solar Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الطاقة الشمسية من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore solar power is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الطاقة الشمسية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-solar-power",
    "subcategory": "Environment",
    "shortDescription": "Solar Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Solar Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Wind Power",
    "titleAr": "طاقة الرياح",
    "description": "Wind Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع طاقة الرياح من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore wind power is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم طاقة الرياح ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-wind-power",
    "subcategory": "Environment",
    "shortDescription": "Wind Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Wind Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Hydroelectric Power",
    "titleAr": "الطاقة الكهرومائية",
    "description": "Hydroelectric Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الطاقة الكهرومائية من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore hydroelectric power is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الطاقة الكهرومائية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-hydroelectric-power",
    "subcategory": "Environment",
    "shortDescription": "Hydroelectric Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Hydroelectric Power is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Geothermal Energy",
    "titleAr": "الطاقة الحرارية الأرضية",
    "description": "Geothermal Energy is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الطاقة الحرارية الأرضية من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore geothermal energy is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الطاقة الحرارية الأرضية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-geothermal-energy",
    "subcategory": "Environment",
    "shortDescription": "Geothermal Energy is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Geothermal Energy is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Energy Efficiency",
    "titleAr": "كفاءة الطاقة",
    "description": "Energy Efficiency is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع كفاءة الطاقة من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore energy efficiency is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم كفاءة الطاقة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-energy-efficiency",
    "subcategory": "Environment",
    "shortDescription": "Energy Efficiency is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Energy Efficiency is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Carbon Footprint",
    "titleAr": "البصمة الكربونية",
    "description": "Carbon Footprint is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع البصمة الكربونية من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore carbon footprint is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم البصمة الكربونية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-carbon-footprint",
    "subcategory": "Environment",
    "shortDescription": "Carbon Footprint is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Carbon Footprint is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Sustainable Cities",
    "titleAr": "المدن المستدامة",
    "description": "Sustainable Cities is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المدن المستدامة من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore sustainable cities is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المدن المستدامة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-sustainable-cities",
    "subcategory": "Environment",
    "shortDescription": "Sustainable Cities is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Sustainable Cities is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Environmental Monitoring",
    "titleAr": "الرصد البيئي",
    "description": "Environmental Monitoring is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الرصد البيئي من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore environmental monitoring is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الرصد البيئي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-environmental-monitoring",
    "subcategory": "Environment",
    "shortDescription": "Environmental Monitoring is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Environmental Monitoring is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Ocean Acidification",
    "titleAr": "تحمّض المحيطات",
    "description": "Ocean Acidification is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تحمّض المحيطات من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore ocean acidification is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تحمّض المحيطات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-ocean-acidification",
    "subcategory": "Environment",
    "shortDescription": "Ocean Acidification is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Ocean Acidification is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Wetlands",
    "titleAr": "الأراضي الرطبة",
    "description": "Wetlands is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأراضي الرطبة من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore wetlands is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأراضي الرطبة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-wetlands",
    "subcategory": "Environment",
    "shortDescription": "Wetlands is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Wetlands is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Invasive Species",
    "titleAr": "الأنواع الدخيلة",
    "description": "Invasive Species is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأنواع الدخيلة من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore invasive species is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأنواع الدخيلة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-invasive-species",
    "subcategory": "Environment",
    "shortDescription": "Invasive Species is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Invasive Species is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Pollinators and Ecosystems",
    "titleAr": "الملقحات والأنظمة البيئية",
    "description": "Pollinators and Ecosystems is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الملقحات والأنظمة البيئية من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore pollinators and ecosystems is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الملقحات والأنظمة البيئية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-pollinators-and-ecosystems",
    "subcategory": "Environment",
    "shortDescription": "Pollinators and Ecosystems is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Pollinators and Ecosystems is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Environment",
    "categoryAr": "البيئة",
    "icon": "🌱",
    "title": "Environmental Ethics",
    "titleAr": "الأخلاقيات البيئية",
    "description": "Environmental Ethics is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأخلاقيات البيئية من الموضوعات المهمة في مجال البيئة. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore environmental ethics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأخلاقيات البيئية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Environment",
    "id": "topic-environmental-ethics",
    "subcategory": "Environment",
    "shortDescription": "Environmental Ethics is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Natural systems are connected, so one change can affect many others.",
        "Use resources thoughtfully and reduce avoidable waste.",
        "Solutions work best when ecological and community needs are considered."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Environmental Ethics is an important topic in environment. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Natural systems are connected, so one change can affect many others. Use resources thoughtfully and reduce avoidable waste. Solutions work best when ecological and community needs are considered."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Nervous System",
    "titleAr": "الجهاز العصبي",
    "description": "The Nervous System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجهاز العصبي من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the nervous system is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجهاز العصبي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-nervous-system",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Nervous System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Nervous System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Blood and Circulation",
    "titleAr": "الدم والدورة الدموية",
    "description": "Blood and Circulation is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الدم والدورة الدموية من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore blood and circulation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الدم والدورة الدموية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-blood-and-circulation",
    "subcategory": "Health & Human Body",
    "shortDescription": "Blood and Circulation is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Blood and Circulation is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Respiratory System",
    "titleAr": "الجهاز التنفسي",
    "description": "The Respiratory System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجهاز التنفسي من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the respiratory system is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجهاز التنفسي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-respiratory-system",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Respiratory System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Respiratory System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Digestive System",
    "titleAr": "الجهاز الهضمي",
    "description": "The Digestive System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجهاز الهضمي من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the digestive system is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجهاز الهضمي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-digestive-system",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Digestive System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Digestive System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Excretory System",
    "titleAr": "الجهاز الإخراجي",
    "description": "The Excretory System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجهاز الإخراجي من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the excretory system is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجهاز الإخراجي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-excretory-system",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Excretory System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Excretory System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Immune System",
    "titleAr": "الجهاز المناعي",
    "description": "The Immune System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجهاز المناعي من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the immune system is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجهاز المناعي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-immune-system",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Immune System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Immune System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Endocrine System",
    "titleAr": "جهاز الغدد الصماء",
    "description": "The Endocrine System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع جهاز الغدد الصماء من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the endocrine system is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم جهاز الغدد الصماء ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-endocrine-system",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Endocrine System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Endocrine System is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Five Senses",
    "titleAr": "الحواس الخمس",
    "description": "The Five Senses is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحواس الخمس من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the five senses is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحواس الخمس ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-five-senses",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Five Senses is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Five Senses is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Eye and Vision",
    "titleAr": "العين والإبصار",
    "description": "The Eye and Vision is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع العين والإبصار من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the eye and vision is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم العين والإبصار ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-eye-and-vision",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Eye and Vision is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Eye and Vision is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "The Ear and Hearing",
    "titleAr": "الأذن والسمع",
    "description": "The Ear and Hearing is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأذن والسمع من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the ear and hearing is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأذن والسمع ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-the-ear-and-hearing",
    "subcategory": "Health & Human Body",
    "shortDescription": "The Ear and Hearing is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Ear and Hearing is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Carbohydrates Proteins and Fats",
    "titleAr": "الكربوهيدرات والبروتينات والدهون",
    "description": "Carbohydrates Proteins and Fats is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكربوهيدرات والبروتينات والدهون من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore carbohydrates proteins and fats is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكربوهيدرات والبروتينات والدهون ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-carbohydrates-proteins-and-fats",
    "subcategory": "Health & Human Body",
    "shortDescription": "Carbohydrates Proteins and Fats is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Carbohydrates Proteins and Fats is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Vitamins and Minerals",
    "titleAr": "الفيتامينات والمعادن",
    "description": "Vitamins and Minerals is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الفيتامينات والمعادن من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore vitamins and minerals is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الفيتامينات والمعادن ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-vitamins-and-minerals",
    "subcategory": "Health & Human Body",
    "shortDescription": "Vitamins and Minerals is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Vitamins and Minerals is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Hydration",
    "titleAr": "ترطيب الجسم",
    "description": "Hydration is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع ترطيب الجسم من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore hydration is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم ترطيب الجسم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-hydration",
    "subcategory": "Health & Human Body",
    "shortDescription": "Hydration is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Hydration is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Sleep and Learning",
    "titleAr": "النوم والتعلم",
    "description": "Sleep and Learning is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النوم والتعلم من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore sleep and learning is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النوم والتعلم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-sleep-and-learning",
    "subcategory": "Health & Human Body",
    "shortDescription": "Sleep and Learning is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Sleep and Learning is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Physical Activity",
    "titleAr": "النشاط البدني",
    "description": "Physical Activity is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النشاط البدني من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore physical activity is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النشاط البدني ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-physical-activity",
    "subcategory": "Health & Human Body",
    "shortDescription": "Physical Activity is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Physical Activity is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Germs and Hygiene",
    "titleAr": "الجراثيم والنظافة",
    "description": "Germs and Hygiene is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجراثيم والنظافة من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore germs and hygiene is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجراثيم والنظافة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-germs-and-hygiene",
    "subcategory": "Health & Human Body",
    "shortDescription": "Germs and Hygiene is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Germs and Hygiene is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Vaccines",
    "titleAr": "اللقاحات",
    "description": "Vaccines is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع اللقاحات من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore vaccines is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم اللقاحات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-vaccines",
    "subcategory": "Health & Human Body",
    "shortDescription": "Vaccines is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Vaccines is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "First Aid Basics",
    "titleAr": "أساسيات الإسعافات الأولية",
    "description": "First Aid Basics is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أساسيات الإسعافات الأولية من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore first aid basics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أساسيات الإسعافات الأولية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-first-aid-basics",
    "subcategory": "Health & Human Body",
    "shortDescription": "First Aid Basics is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "First Aid Basics is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Food Safety",
    "titleAr": "سلامة الغذاء",
    "description": "Food Safety is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع سلامة الغذاء من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore food safety is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم سلامة الغذاء ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-food-safety",
    "subcategory": "Health & Human Body",
    "shortDescription": "Food Safety is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Food Safety is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Dental Health",
    "titleAr": "صحة الأسنان",
    "description": "Dental Health is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع صحة الأسنان من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore dental health is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم صحة الأسنان ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-dental-health",
    "subcategory": "Health & Human Body",
    "shortDescription": "Dental Health is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Dental Health is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Posture and Ergonomics",
    "titleAr": "وضعية الجسم وبيئة العمل",
    "description": "Posture and Ergonomics is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع وضعية الجسم وبيئة العمل من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore posture and ergonomics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم وضعية الجسم وبيئة العمل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-posture-and-ergonomics",
    "subcategory": "Health & Human Body",
    "shortDescription": "Posture and Ergonomics is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Posture and Ergonomics is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Stress and the Body",
    "titleAr": "التوتر والجسم",
    "description": "Stress and the Body is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التوتر والجسم من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore stress and the body is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التوتر والجسم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-stress-and-the-body",
    "subcategory": "Health & Human Body",
    "shortDescription": "Stress and the Body is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Stress and the Body is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Growth and Development",
    "titleAr": "النمو والتطور",
    "description": "Growth and Development is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النمو والتطور من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore growth and development is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النمو والتطور ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-growth-and-development",
    "subcategory": "Health & Human Body",
    "shortDescription": "Growth and Development is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Growth and Development is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Puberty and Development",
    "titleAr": "البلوغ والتطور",
    "description": "Puberty and Development is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع البلوغ والتطور من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore puberty and development is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم البلوغ والتطور ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-puberty-and-development",
    "subcategory": "Health & Human Body",
    "shortDescription": "Puberty and Development is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Puberty and Development is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Health & Human Body",
    "categoryAr": "الصحة وجسم الإنسان",
    "icon": "🫀",
    "title": "Healthy Habits",
    "titleAr": "العادات الصحية",
    "description": "Healthy Habits is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع العادات الصحية من الموضوعات المهمة في مجال الصحة وجسم الإنسان. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore healthy habits is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم العادات الصحية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Health & Human Body",
    "id": "topic-healthy-habits",
    "subcategory": "Health & Human Body",
    "shortDescription": "Healthy Habits is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Body systems work together rather than acting alone.",
        "Reliable health information comes from trustworthy scientific sources.",
        "Daily habits can influence wellbeing over time."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Healthy Habits is an important topic in health & human body. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Body systems work together rather than acting alone. Reliable health information comes from trustworthy scientific sources. Daily habits can influence wellbeing over time."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Pronouns",
    "titleAr": "الضمائر",
    "description": "Pronouns is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الضمائر من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore pronouns is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الضمائر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-pronouns",
    "subcategory": "Language & Literature",
    "shortDescription": "Pronouns is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Pronouns is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Adjectives",
    "titleAr": "الصفات",
    "description": "Adjectives is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الصفات من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore adjectives is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الصفات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-adjectives",
    "subcategory": "Language & Literature",
    "shortDescription": "Adjectives is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Adjectives is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Adverbs",
    "titleAr": "الظروف",
    "description": "Adverbs is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الظروف من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore adverbs is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الظروف ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-adverbs",
    "subcategory": "Language & Literature",
    "shortDescription": "Adverbs is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Adverbs is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Prepositions",
    "titleAr": "حروف الجر",
    "description": "Prepositions is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع حروف الجر من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore prepositions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم حروف الجر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-prepositions",
    "subcategory": "Language & Literature",
    "shortDescription": "Prepositions is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Prepositions is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Subject and Predicate",
    "titleAr": "المبتدأ والخبر",
    "description": "Subject and Predicate is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المبتدأ والخبر من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore subject and predicate is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المبتدأ والخبر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-subject-and-predicate",
    "subcategory": "Language & Literature",
    "shortDescription": "Subject and Predicate is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Subject and Predicate is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Sentence Types",
    "titleAr": "أنواع الجمل",
    "description": "Sentence Types is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع أنواع الجمل من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore sentence types is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم أنواع الجمل ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-sentence-types",
    "subcategory": "Language & Literature",
    "shortDescription": "Sentence Types is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Sentence Types is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Simple and Compound Sentences",
    "titleAr": "الجمل البسيطة والمركبة",
    "description": "Simple and Compound Sentences is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجمل البسيطة والمركبة من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore simple and compound sentences is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجمل البسيطة والمركبة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-simple-and-compound-sentences",
    "subcategory": "Language & Literature",
    "shortDescription": "Simple and Compound Sentences is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Simple and Compound Sentences is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Capitalization",
    "titleAr": "استخدام الحروف الكبيرة",
    "description": "Capitalization is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع استخدام الحروف الكبيرة من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore capitalization is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم استخدام الحروف الكبيرة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-capitalization",
    "subcategory": "Language & Literature",
    "shortDescription": "Capitalization is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Capitalization is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Prefixes and Suffixes",
    "titleAr": "البادئات واللواحق",
    "description": "Prefixes and Suffixes is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع البادئات واللواحق من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore prefixes and suffixes is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم البادئات واللواحق ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-prefixes-and-suffixes",
    "subcategory": "Language & Literature",
    "shortDescription": "Prefixes and Suffixes is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Prefixes and Suffixes is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Root Words",
    "titleAr": "جذور الكلمات",
    "description": "Root Words is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع جذور الكلمات من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore root words is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم جذور الكلمات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-root-words",
    "subcategory": "Language & Literature",
    "shortDescription": "Root Words is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Root Words is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Synonyms and Antonyms",
    "titleAr": "المترادفات والمتضادات",
    "description": "Synonyms and Antonyms is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المترادفات والمتضادات من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore synonyms and antonyms is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المترادفات والمتضادات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-synonyms-and-antonyms",
    "subcategory": "Language & Literature",
    "shortDescription": "Synonyms and Antonyms is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Synonyms and Antonyms is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Context Clues",
    "titleAr": "قرائن السياق",
    "description": "Context Clues is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع قرائن السياق من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore context clues is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم قرائن السياق ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-context-clues",
    "subcategory": "Language & Literature",
    "shortDescription": "Context Clues is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Context Clues is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Figurative Language",
    "titleAr": "اللغة المجازية",
    "description": "Figurative Language is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع اللغة المجازية من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore figurative language is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم اللغة المجازية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-figurative-language",
    "subcategory": "Language & Literature",
    "shortDescription": "Figurative Language is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Figurative Language is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Metaphor and Simile",
    "titleAr": "الاستعارة والتشبيه",
    "description": "Metaphor and Simile is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الاستعارة والتشبيه من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore metaphor and simile is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الاستعارة والتشبيه ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-metaphor-and-simile",
    "subcategory": "Language & Literature",
    "shortDescription": "Metaphor and Simile is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Metaphor and Simile is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Personification",
    "titleAr": "التشخيص",
    "description": "Personification is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التشخيص من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore personification is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التشخيص ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-personification",
    "subcategory": "Language & Literature",
    "shortDescription": "Personification is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Personification is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Alliteration",
    "titleAr": "الجناس الاستهلالي",
    "description": "Alliteration is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الجناس الاستهلالي من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore alliteration is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الجناس الاستهلالي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-alliteration",
    "subcategory": "Language & Literature",
    "shortDescription": "Alliteration is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Alliteration is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Onomatopoeia",
    "titleAr": "محاكاة الأصوات",
    "description": "Onomatopoeia is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع محاكاة الأصوات من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore onomatopoeia is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم محاكاة الأصوات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-onomatopoeia",
    "subcategory": "Language & Literature",
    "shortDescription": "Onomatopoeia is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Onomatopoeia is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Theme and Main Idea",
    "titleAr": "الفكرة الرئيسية والموضوع",
    "description": "Theme and Main Idea is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الفكرة الرئيسية والموضوع من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore theme and main idea is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الفكرة الرئيسية والموضوع ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-theme-and-main-idea",
    "subcategory": "Language & Literature",
    "shortDescription": "Theme and Main Idea is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Theme and Main Idea is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Plot Structure",
    "titleAr": "بنية الحبكة",
    "description": "Plot Structure is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع بنية الحبكة من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore plot structure is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم بنية الحبكة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-plot-structure",
    "subcategory": "Language & Literature",
    "shortDescription": "Plot Structure is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Plot Structure is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Character Development",
    "titleAr": "تطور الشخصيات",
    "description": "Character Development is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تطور الشخصيات من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore character development is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تطور الشخصيات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-character-development",
    "subcategory": "Language & Literature",
    "shortDescription": "Character Development is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Character Development is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Point of View",
    "titleAr": "وجهة النظر",
    "description": "Point of View is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع وجهة النظر من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore point of view is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم وجهة النظر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-point-of-view",
    "subcategory": "Language & Literature",
    "shortDescription": "Point of View is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Point of View is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Tone and Mood",
    "titleAr": "النبرة والجو العام",
    "description": "Tone and Mood is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النبرة والجو العام من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore tone and mood is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النبرة والجو العام ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-tone-and-mood",
    "subcategory": "Language & Literature",
    "shortDescription": "Tone and Mood is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Tone and Mood is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Poetry",
    "titleAr": "الشعر",
    "description": "Poetry is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الشعر من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore poetry is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الشعر ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-poetry",
    "subcategory": "Language & Literature",
    "shortDescription": "Poetry is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Poetry is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Drama",
    "titleAr": "المسرح",
    "description": "Drama is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المسرح من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore drama is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المسرح ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-drama",
    "subcategory": "Language & Literature",
    "shortDescription": "Drama is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Drama is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Narrative Writing",
    "titleAr": "الكتابة السردية",
    "description": "Narrative Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكتابة السردية من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore narrative writing is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكتابة السردية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-narrative-writing",
    "subcategory": "Language & Literature",
    "shortDescription": "Narrative Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Narrative Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Persuasive Writing",
    "titleAr": "الكتابة الإقناعية",
    "description": "Persuasive Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكتابة الإقناعية من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore persuasive writing is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكتابة الإقناعية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-persuasive-writing",
    "subcategory": "Language & Literature",
    "shortDescription": "Persuasive Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Persuasive Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Expository Writing",
    "titleAr": "الكتابة التفسيرية",
    "description": "Expository Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الكتابة التفسيرية من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore expository writing is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الكتابة التفسيرية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-expository-writing",
    "subcategory": "Language & Literature",
    "shortDescription": "Expository Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Expository Writing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Research Skills",
    "titleAr": "مهارات البحث",
    "description": "Research Skills is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع مهارات البحث من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore research skills is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم مهارات البحث ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-research-skills",
    "subcategory": "Language & Literature",
    "shortDescription": "Research Skills is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Research Skills is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Summarizing",
    "titleAr": "التلخيص",
    "description": "Summarizing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التلخيص من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore summarizing is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التلخيص ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-summarizing",
    "subcategory": "Language & Literature",
    "shortDescription": "Summarizing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Summarizing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Language & Literature",
    "categoryAr": "اللغة والأدب",
    "icon": "📚",
    "title": "Paraphrasing",
    "titleAr": "إعادة الصياغة",
    "description": "Paraphrasing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع إعادة الصياغة من الموضوعات المهمة في مجال اللغة والأدب. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore paraphrasing is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم إعادة الصياغة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Language & Literature",
    "id": "topic-paraphrasing",
    "subcategory": "Language & Literature",
    "shortDescription": "Paraphrasing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider the audience and purpose when interpreting or writing.",
        "Specific examples make explanations clearer.",
        "Revision helps improve clarity, structure, and accuracy."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Paraphrasing is an important topic in language & literature. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider the audience and purpose when interpreting or writing. Specific examples make explanations clearer. Revision helps improve clarity, structure, and accuracy."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Elements of Art",
    "titleAr": "عناصر الفن",
    "description": "Elements of Art is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع عناصر الفن من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore elements of art is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم عناصر الفن ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-elements-of-art",
    "subcategory": "Arts & Music",
    "shortDescription": "Elements of Art is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Elements of Art is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Principles of Design",
    "titleAr": "مبادئ التصميم",
    "description": "Principles of Design is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع مبادئ التصميم من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore principles of design is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم مبادئ التصميم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-principles-of-design",
    "subcategory": "Arts & Music",
    "shortDescription": "Principles of Design is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Principles of Design is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Color Theory",
    "titleAr": "نظرية الألوان",
    "description": "Color Theory is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع نظرية الألوان من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore color theory is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم نظرية الألوان ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-color-theory",
    "subcategory": "Arts & Music",
    "shortDescription": "Color Theory is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Color Theory is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Warm and Cool Colors",
    "titleAr": "الألوان الدافئة والباردة",
    "description": "Warm and Cool Colors is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الألوان الدافئة والباردة من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore warm and cool colors is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الألوان الدافئة والباردة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-warm-and-cool-colors",
    "subcategory": "Arts & Music",
    "shortDescription": "Warm and Cool Colors is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Warm and Cool Colors is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Perspective in Art",
    "titleAr": "المنظور في الفن",
    "description": "Perspective in Art is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المنظور في الفن من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore perspective in art is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المنظور في الفن ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-perspective-in-art",
    "subcategory": "Arts & Music",
    "shortDescription": "Perspective in Art is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Perspective in Art is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Texture and Pattern",
    "titleAr": "الملمس والنمط",
    "description": "Texture and Pattern is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الملمس والنمط من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore texture and pattern is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الملمس والنمط ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-texture-and-pattern",
    "subcategory": "Arts & Music",
    "shortDescription": "Texture and Pattern is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Texture and Pattern is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Sculpture",
    "titleAr": "النحت",
    "description": "Sculpture is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع النحت من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore sculpture is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم النحت ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-sculpture",
    "subcategory": "Arts & Music",
    "shortDescription": "Sculpture is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Sculpture is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Painting Techniques",
    "titleAr": "تقنيات الرسم",
    "description": "Painting Techniques is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تقنيات الرسم من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore painting techniques is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تقنيات الرسم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-painting-techniques",
    "subcategory": "Arts & Music",
    "shortDescription": "Painting Techniques is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Painting Techniques is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Printmaking",
    "titleAr": "فن الطباعة",
    "description": "Printmaking is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع فن الطباعة من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore printmaking is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم فن الطباعة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-printmaking",
    "subcategory": "Arts & Music",
    "shortDescription": "Printmaking is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Printmaking is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Photography",
    "titleAr": "التصوير الفوتوغرافي",
    "description": "Photography is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التصوير الفوتوغرافي من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore photography is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التصوير الفوتوغرافي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-photography",
    "subcategory": "Arts & Music",
    "shortDescription": "Photography is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Photography is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Architecture",
    "titleAr": "العمارة",
    "description": "Architecture is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع العمارة من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore architecture is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم العمارة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-architecture",
    "subcategory": "Arts & Music",
    "shortDescription": "Architecture is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Architecture is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Graphic Design",
    "titleAr": "التصميم الجرافيكي",
    "description": "Graphic Design is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التصميم الجرافيكي من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore graphic design is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التصميم الجرافيكي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-graphic-design",
    "subcategory": "Arts & Music",
    "shortDescription": "Graphic Design is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Graphic Design is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Animation",
    "titleAr": "الرسوم المتحركة",
    "description": "Animation is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الرسوم المتحركة من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore animation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الرسوم المتحركة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-animation",
    "subcategory": "Arts & Music",
    "shortDescription": "Animation is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Animation is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Film Language",
    "titleAr": "لغة السينما",
    "description": "Film Language is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع لغة السينما من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore film language is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم لغة السينما ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-film-language",
    "subcategory": "Arts & Music",
    "shortDescription": "Film Language is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Film Language is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "World Music",
    "titleAr": "موسيقى العالم",
    "description": "World Music is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع موسيقى العالم من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore world music is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم موسيقى العالم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-world-music",
    "subcategory": "Arts & Music",
    "shortDescription": "World Music is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "World Music is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Rhythm and Beat",
    "titleAr": "الإيقاع والنبض",
    "description": "Rhythm and Beat is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الإيقاع والنبض من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore rhythm and beat is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الإيقاع والنبض ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-rhythm-and-beat",
    "subcategory": "Arts & Music",
    "shortDescription": "Rhythm and Beat is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Rhythm and Beat is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Melody and Harmony",
    "titleAr": "اللحن والتناغم",
    "description": "Melody and Harmony is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع اللحن والتناغم من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore melody and harmony is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم اللحن والتناغم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-melody-and-harmony",
    "subcategory": "Arts & Music",
    "shortDescription": "Melody and Harmony is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Melody and Harmony is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Musical Instruments",
    "titleAr": "الآلات الموسيقية",
    "description": "Musical Instruments is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الآلات الموسيقية من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore musical instruments is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الآلات الموسيقية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-musical-instruments",
    "subcategory": "Arts & Music",
    "shortDescription": "Musical Instruments is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Musical Instruments is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "The Orchestra",
    "titleAr": "الأوركسترا",
    "description": "The Orchestra is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الأوركسترا من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore the orchestra is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الأوركسترا ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-the-orchestra",
    "subcategory": "Arts & Music",
    "shortDescription": "The Orchestra is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "The Orchestra is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Sound Recording",
    "titleAr": "تسجيل الصوت",
    "description": "Sound Recording is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تسجيل الصوت من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore sound recording is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تسجيل الصوت ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-sound-recording",
    "subcategory": "Arts & Music",
    "shortDescription": "Sound Recording is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Sound Recording is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Theatre and Performance",
    "titleAr": "المسرح والأداء",
    "description": "Theatre and Performance is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المسرح والأداء من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore theatre and performance is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المسرح والأداء ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-theatre-and-performance",
    "subcategory": "Arts & Music",
    "shortDescription": "Theatre and Performance is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Theatre and Performance is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Dance Around the World",
    "titleAr": "الرقص حول العالم",
    "description": "Dance Around the World is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الرقص حول العالم من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore dance around the world is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الرقص حول العالم ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-dance-around-the-world",
    "subcategory": "Arts & Music",
    "shortDescription": "Dance Around the World is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Dance Around the World is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Textiles and Weaving",
    "titleAr": "المنسوجات والنسيج",
    "description": "Textiles and Weaving is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المنسوجات والنسيج من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore textiles and weaving is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المنسوجات والنسيج ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-textiles-and-weaving",
    "subcategory": "Arts & Music",
    "shortDescription": "Textiles and Weaving is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Textiles and Weaving is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Ceramics",
    "titleAr": "الخزف",
    "description": "Ceramics is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الخزف من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore ceramics is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الخزف ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-ceramics",
    "subcategory": "Arts & Music",
    "shortDescription": "Ceramics is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Ceramics is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Arts & Music",
    "categoryAr": "الفنون والموسيقى",
    "icon": "🎨",
    "title": "Art Appreciation",
    "titleAr": "تذوق الفن",
    "description": "Art Appreciation is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع تذوق الفن من الموضوعات المهمة في مجال الفنون والموسيقى. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore art appreciation is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم تذوق الفن ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Arts & Music",
    "id": "topic-art-appreciation",
    "subcategory": "Arts & Music",
    "shortDescription": "Art Appreciation is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Notice how individual elements work together.",
        "Context can influence how an artwork is understood.",
        "Experimentation and practice develop creative skills."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Art Appreciation is an important topic in arts & music. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Notice how individual elements work together. Context can influence how an artwork is understood. Experimentation and practice develop creative skills."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Communities",
    "titleAr": "المجتمعات",
    "description": "Communities is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع المجتمعات من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore communities is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم المجتمعات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-communities",
    "subcategory": "Civics & Society",
    "shortDescription": "Communities is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Communities is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Rules and Laws",
    "titleAr": "القواعد والقوانين",
    "description": "Rules and Laws is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع القواعد والقوانين من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore rules and laws is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم القواعد والقوانين ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-rules-and-laws",
    "subcategory": "Civics & Society",
    "shortDescription": "Rules and Laws is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Rules and Laws is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Rights and Responsibilities",
    "titleAr": "الحقوق والمسؤوليات",
    "description": "Rights and Responsibilities is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحقوق والمسؤوليات من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore rights and responsibilities is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحقوق والمسؤوليات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-rights-and-responsibilities",
    "subcategory": "Civics & Society",
    "shortDescription": "Rights and Responsibilities is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Rights and Responsibilities is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Democracy",
    "titleAr": "الديمقراطية",
    "description": "Democracy is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الديمقراطية من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore democracy is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الديمقراطية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-democracy",
    "subcategory": "Civics & Society",
    "shortDescription": "Democracy is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Democracy is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Local Government",
    "titleAr": "الحكم المحلي",
    "description": "Local Government is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحكم المحلي من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore local government is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحكم المحلي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-local-government",
    "subcategory": "Civics & Society",
    "shortDescription": "Local Government is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Local Government is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "National Government",
    "titleAr": "الحكومة الوطنية",
    "description": "National Government is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الحكومة الوطنية من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore national government is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الحكومة الوطنية ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-national-government",
    "subcategory": "Civics & Society",
    "shortDescription": "National Government is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "National Government is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Constitutions",
    "titleAr": "الدساتير",
    "description": "Constitutions is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الدساتير من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore constitutions is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الدساتير ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-constitutions",
    "subcategory": "Civics & Society",
    "shortDescription": "Constitutions is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Constitutions is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Elections",
    "titleAr": "الانتخابات",
    "description": "Elections is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الانتخابات من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore elections is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الانتخابات ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-elections",
    "subcategory": "Civics & Society",
    "shortDescription": "Elections is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Elections is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Public Services",
    "titleAr": "الخدمات العامة",
    "description": "Public Services is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع الخدمات العامة من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore public services is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم الخدمات العامة ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-public-services",
    "subcategory": "Civics & Society",
    "shortDescription": "Public Services is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Public Services is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Community Volunteering",
    "titleAr": "التطوع المجتمعي",
    "description": "Community Volunteering is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التطوع المجتمعي من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore community volunteering is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التطوع المجتمعي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-community-volunteering",
    "subcategory": "Civics & Society",
    "shortDescription": "Community Volunteering is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Community Volunteering is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
},
{
    "category": "Civics & Society",
    "categoryAr": "المواطنة والمجتمع",
    "icon": "🤝",
    "title": "Cultural Diversity",
    "titleAr": "التنوع الثقافي",
    "description": "Cultural Diversity is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "descriptionAr": "يُعد موضوع التنوع الثقافي من الموضوعات المهمة في مجال المواطنة والمجتمع. فهو يساعد على فهم ارتباط الأفكار بالأمثلة والأسئلة الواقعية. وتعلّمه يعني تحديد خصائصه الأساسية وفهم كيفية ترابطها واستخدام الأدلة أو الأمثلة لتفسير ما يحدث.",
    "essentials": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "essentialsAr": [
        "تساعد الملاحظات الدقيقة على بناء تفسيرات موثوقة.",
        "يمكن للأدلة أن تدعم التفسير أو تطوره أو تتحداه.",
        "تساعد المقارنة والتواصل على توضيح النتائج."
    ],
    "fact": "A useful way to explore cultural diversity is to connect the definition to a real example, then explain why the example fits.",
    "factAr": "من الطرق المفيدة لفهم التنوع الثقافي ربط تعريفه بمثال واقعي، ثم توضيح سبب انطباق الفكرة على هذا المثال.",
    "sourceCategory": "Civics & Society",
    "id": "topic-cultural-diversity",
    "subcategory": "Civics & Society",
    "shortDescription": "Cultural Diversity is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens.",
    "keyFacts": [
        "Consider how decisions affect different members of a community.",
        "Evidence and respectful discussion support better decisions.",
        "Rights and responsibilities help communities function."
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": "Cultural Diversity is an important topic in civics & society. It helps explain how related ideas connect to real-world examples, observations, and questions. Studying it means identifying its main features, understanding how they work together, and using evidence or examples to explain what happens."
        },
        {
            "heading": "Key ideas",
            "body": "Consider how decisions affect different members of a community. Evidence and respectful discussion support better decisions. Rights and responsibilities help communities function."
        }
    ]
}

];

// Ensure every topic has safe bilingual defaults.
topics.forEach(topic => {
    if (!topic.titleAr) topic.titleAr = topic.title;
    if (!topic.categoryAr) topic.categoryAr = topic.category;
    if (!topic.descriptionAr) topic.descriptionAr = topic.description;
    if (!Array.isArray(topic.essentialsAr)) topic.essentialsAr = topic.essentials || [];
    if (!topic.factAr) topic.factAr = topic.fact || "";
});

// Expose a small status object for easy checking in the browser console.
window.EXPLORERS_GUIDE_DATA = {
    topicCount: topics.length,
    languageCount: 2,
    offlineDatabase: true
};

/* =====================================================
   COMPATIBILITY LAYER
   Keeps the existing 106-topic database while supplying
   the helpers expected by the interactive Explorer's Guide.
===================================================== */

const explorerCategoryMap = {
    "Science & Nature": "science",
    "Science": "science",
    "Physics": "science",
    "Chemistry": "science",
    "Biology": "science",
    "Human Body": "science",
    "Scientific Thinking": "science",
    "Earth Science": "earth-space",
    "Space": "earth-space",
    "History": "history",
    "Egyptian History": "history",
    "Geography": "geography",
    "Technology": "computer-science",
    "Programming": "computer-science",
    "Web Development": "computer-science",
    "Mathematics": "mathematics",
    "English Grammar": "language-literature",
    "Communication": "language-literature",
    "Literature": "language-literature",
    "Art": "general-knowledge",
    "Music": "general-knowledge",
    "Engineering": "general-knowledge",
    "Environment": "environment"
};

function explorerSlug(value) {
    return String(value || "topic")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

// Keep the original category label for reference, while adding the IDs
// and fields used by the interactive topic pages.
const explorerUsedIds = new Set();
topics.forEach((topic, index) => {
    topic.sourceCategory = topic.sourceCategory || topic.category || "General Knowledge";
    topic.categoryId = explorerCategoryMap[topic.sourceCategory] || "general-knowledge";
    topic.category = topic.categoryId;
    topic.id = topic.id || explorerSlug(topic.title);
    if (explorerUsedIds.has(topic.id)) topic.id = `${topic.id}-${index + 1}`;
    explorerUsedIds.add(topic.id);
    topic.subcategory = topic.subcategory || topic.sourceCategory;
    topic.shortDescription = topic.shortDescription || topic.description || "Explore this topic in Explorer's Guide.";
    topic.sections = Array.isArray(topic.sections) && topic.sections.length
        ? topic.sections
        : [
            { title: "Overview", text: topic.description || "This topic introduces an important idea." },
            { title: "Key Ideas", text: (topic.essentials || []).join(" ") || topic.description || "Explore the main ideas and how they connect." },
            { title: "Why It Matters", text: topic.fact || "Learning about this topic helps connect classroom knowledge to the world around us." }
        ];
    topic.keyFacts = Array.isArray(topic.keyFacts) && topic.keyFacts.length
        ? topic.keyFacts
        : [...(topic.essentials || []), ...(topic.fact ? [topic.fact] : [])];
    topic.icon = topic.icon || "📘";
});

const categories = [
    { id: "science", name: "Science & Nature", title: "Science & Nature", icon: "🔬", description: "Discover life, matter, energy, and how the natural world works." },
    { id: "mathematics", name: "Mathematics", title: "Mathematics", icon: "📐", description: "Explore numbers, patterns, shapes, logic, and mathematical thinking." },
    { id: "history", name: "History", title: "History", icon: "🏛️", description: "Explore civilizations, events, people, and the stories of the past." },
    { id: "geography", name: "Geography", title: "Geography", icon: "🌍", description: "Understand places, landscapes, people, maps, and our changing planet." },
    { id: "earth-space", name: "Earth & Space", title: "Earth & Space", icon: "🪐", description: "Explore our planet, the Solar System, and the wider universe." },
    { id: "computer-science", name: "Computing & Technology", title: "Computing & Technology", icon: "💻", description: "Learn about computers, programming, digital systems, and technology." },
    { id: "environment", name: "Environment", title: "Environment", icon: "🌱", description: "Discover ecosystems, resources, sustainability, and environmental change." },
    { id: "language-literature", name: "Language & Literature", title: "Language & Literature", icon: "📚", description: "Explore language, grammar, communication, reading, and writing." },
    { id: "general-knowledge", name: "General Knowledge", title: "General Knowledge", icon: "💡", description: "Learn about creativity, engineering, culture, and useful ideas from everyday life." }
];

// Build subcategory lists from the real topic records so topic groups won't be empty.
categories.forEach(category => {
    const names = [...new Set(topics
        .filter(topic => topic.category === category.id)
        .map(topic => topic.subcategory || topic.sourceCategory))];
    category.subcategories = names;
});

function getCategory(categoryId) {
    return categories.find(category => category.id === categoryId || category.name === categoryId || category.title === categoryId) || null;
}

function getTopic(topicId) {
    const wanted = String(topicId || "").toLowerCase();
    return topics.find(topic => topic.id === wanted || explorerSlug(topic.title) === wanted || topic.title.toLowerCase() === wanted) || null;
}

function getTopicsByCategory(categoryId) {
    const category = getCategory(categoryId);
    const id = category ? category.id : categoryId;
    return topics.filter(topic => topic.category === id || topic.sourceCategory === categoryId);
}

function getTopicsBySubcategory(categoryId, subcategory) {
    const wanted = String(subcategory || "").trim().toLowerCase();
    return getTopicsByCategory(categoryId).filter(topic =>
        String(topic.subcategory || "").trim().toLowerCase() === wanted ||
        String(topic.sourceCategory || "").trim().toLowerCase() === wanted
    );
}

function searchTopics(query) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return [];
    return topics.filter(topic => [
        topic.title, topic.titleAr, topic.description, topic.descriptionAr,
        topic.category, topic.sourceCategory, topic.subcategory,
        ...(topic.essentials || []), ...(topic.keyFacts || [])
    ].filter(Boolean).join(" ").toLowerCase().includes(q));
}

function searchTopicsInCategory(query, categoryId) {
    const q = String(query || "").trim().toLowerCase();
    if (!q) return getTopicsByCategory(categoryId);
    return getTopicsByCategory(categoryId).filter(topic => [
        topic.title, topic.titleAr, topic.description, topic.descriptionAr,
        topic.subcategory, ...(topic.essentials || []), ...(topic.keyFacts || [])
    ].filter(Boolean).join(" ").toLowerCase().includes(q));
}

function getRandomTopic() {
    return topics.length ? topics[Math.floor(Math.random() * topics.length)] : null;
}

function getFeaturedTopics(amount = 3) {
    const count = Math.max(0, Math.floor(Number(amount) || 0));
    // Rotate through the database deterministically so the homepage always has content.
    return topics.slice(0, count);
}

function getTopicCount() {
    return topics.length;
}

// Keep the status object accurate after the compatibility layer is initialized.
window.EXPLORERS_GUIDE_DATA = {
    topicCount: topics.length,
    languageCount: 2,
    offlineDatabase: true,
    compatibilityLayer: true
};
