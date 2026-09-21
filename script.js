let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>  {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offest = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if( top >=offest && top < offest + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// LANGUAGE SELECTOR
document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("language-select");
    const selected = document.querySelector(".selected-language");
    const list = document.querySelector(".language-list");
    const items = document.querySelectorAll(".language-item");

    const savedLang = localStorage.getItem("language") || "en";

    function applyLanguage(lang) {

        select.value = lang;

        const activeItem = document.querySelector(
            `.language-item[data-value="${lang}"]`
        );

        if (activeItem) {
            selected.innerHTML = activeItem.innerHTML;
        }

        // Close dropdown
        list.style.display = "none";

        // Apply translation
        setLanguage(lang);
    }

    // Open / close
    selected.addEventListener("click", function (e) {

        e.stopPropagation();

        list.style.display =
            list.style.display === "block" ? "none" : "block";
    });

    // Choose language
    items.forEach(function (item) {

        item.addEventListener("click", function (e) {

            e.stopPropagation();

            const lang = this.dataset.value;

            localStorage.setItem("language", lang);

            applyLanguage(lang);
        });

    });

    // Close when clicking outside
    document.addEventListener("click", function () {
        list.style.display = "none";
    });

    // Load saved language LAST
    applyLanguage(savedLang);

});

//translate function
function translate(id, text, html = false) {

    const el = document.getElementById(id);

    if (!el) return;

    if (html) {
        el.innerHTML = text;
    } else {
        el.innerText = text;
    }
}

const translations = {

    // ================= ENGLISH =================
    en: {

        navHome: "Home",
        navEducation: "Education",
        navTimeline: "Timeline",
        navServices: "Services",
        navContact: "Contact",

        homeTitle: "My<span> World</span>",

        homeBio: `Third-year student at <b>Salahaddin University</b>,
        studying Computer Science. I finished high school at
        <b>Soran High School</b>.
        I’m new to the world of computers.
        This website is where I share my journey, projects,
        and everything I’m building as I grow in the tech world`,

         hire: "Hire",
        contact: "Contact",

        educationTitle: "Education",

        edu11Date: "2022 to 2023",
        edu11Title: "High School Grade 11",
        edu11Desc: `While I was in Grade 11, we built an "artificial hemodialysis" model as part of a "biology project" at "Festival Bonakan Hall".
                    Using simple materials like containers, tubing, and water flow systems, we created a working demonstration of how dialysis helps clean blood in patients with kidney failure. we presented this project during the event, explaining the process to visitors and helping them understand how the system works.
                    It was one of the first projects that made me excited about combining science, creativity, and hands-on building — and it inspired me to continue exploring.`,

        edu12Date: "2023 to 2024",
        edu12Title: "High School Grade 12",
        edu12Desc: `During my final year of high school, Grade 12, I didn’t fully understand computers back then, but something about them pulled me in.
                    I didn’t work on a project that year — my focus was getting a strong final score to reach university.
                    Alhamdulillah, I didn’t get the mark I dreamed of, but I still reached my goal. I got accepted into the Computer Science Department, just like I planned.
                    That year taught me that it’s not about having a perfect path, it’s about staying focused and never letting go of what you really want.`,

        eduUni1Date: "2024 to 2025",
        eduUni1Title: "University First Year",
        eduUni1Desc: `I started my journey at Salahaddin University, studying Computer Science. That year, I experienced many new things.
                    I attended a festival as a project watcher, where I observed the creative work of students from our department.
                    I learned some things about computers through the students who built projects in robotics and websites.
                    Watching their work inspired me. Even though I wasn’t presenting, we all received a reward for participating.`,

        eduUni2Date: "2025 to 2026",
        eduUni2Title: "University Second Year",
        eduUni2Desc: `In 2025, I built my first personal website and started learning web development. Alongside my Computer Science studies, I worked on an Instagram page as a personal project, experimenting with different types of posts and content to understand how views, reach, and followers grow. Through this experience,
                    I learned how social media platforms and their algorithms respond to content and audience engagement.growing the page to over 13,000 followers and achieving more than 8 million views 
                    I also started learning how to use AI as a practical tool. I learned how to work with AI for different purposes, including web development, solving problems, creating and improving content.`,

        eduUni3Date: "2026 to 2027",
        eduUni3Title: "University Third Year",
        eduUni3Desc: `In 2026, I expanded my practical experience by building a big responsive e-commerce website that supports three languages. I used this website and social media to start exploring online marketing and selling.
                    Although the results were not as successful as I expected, the experience taught me about social media marketing, selling, and the challenges of building something from scratch.
                    I also rebuilt my personal website and continued developing my web development skills, while also becoming involved in a marketing team.
                    In addition, I gained hands-on experience working alongside an engineer on the installation of solar power systems, helping with electrical panels and system setup.
                    As I enter my third year of Computer Science at Salahaddin University, I still continue.`,

        proofTitle: "TimeLine",

        proof1Title: "An Artificial Hemodialysis",
        proof1Text: "My first biology project. I demonstrated how dialysis cleans blood for patients with kidney failure, presented at the Bonakan Hall Festival.",

        proof2Title: "Grade 12 Final Score",
        proof2Text: "I received my Grade 12 final score and was accepted into the Computer Science Department.",

        proof3Title: "College Project Event",
        proof3Text: "I received a reward for helping organize and support a college project event, welcoming guests and assisting around the project displays.",

        proof4Title: "My First Website",
        proof4Text: "A simple personal website I built as a beginner.",

        proof5Title: "My E-Commerce Website",
        proof5Text: "My biggest project so far, built to start a business through social media. The results were not what I expected, but it gave me real experience in building, selling, and marketing online.",

        stat1: "Followers grown",
        stat2: "Views generated",
        stat3: "Computer Science",
        stat4: "Building since",

        servicesTitle: "Services",

        service1H: "Video Editor",
        service1P: "I offer creative and modern video editing for all kinds of content — from short-form videos to professional ads. I use tools like Adobe Premiere Pro, CapCut, and AI editing software to create smooth, engaging videos. Whether you need a clean edit for your brand, a fast-paced short for social media, or an AI-enhanced clip.",

        service2H: "Social Marketing",
        service2P: "Social media marketing based on real experience — creating content, using trends and hashtags, growing followers, and reaching more people. The goal is simple: get your product or business in front of more people and turn attention into potential customers. Results can vary, and not every post becomes a sale, but every campaign is an opportunity to learn, improve, and grow.",

        service3H: "Frontend, C++",
        service3P: "I have hands-on experience building responsive websites using HTML, CSS, and JavaScript, including an e-commerce website project. I can create and style complete web pages, make them responsive for different screen sizes, add animations and interactive features, and work with multilingual content. I also use AI tools as a development assistant to improve my code, solve problems, and achieve better results while continuing to understand the solutions I build. I also have a strong foundation in C++, with good knowledge of programming logic, problem-solving, functions, arrays, pointers, classes, and object-oriented programming. I’m continuing to improve my overall programming skills and build stronger practical experience.",
        contactTitle: "contact",
        
        fullName: "Full name",
        email: "Email",
        phone: "Phone number",
        subject: "Subject",
        message: "Your message",
        sendMessage: "Send message",

        faq: "FAQ",
        footerServices: "services",
        aboutMe: "About me",
        footerContact: "contact"

    },

    // ================= KURDISH =================
    ku: {

        navHome: "سەرەکی",
        navEducation: "خوێندن",
        navTimeline: "هێڵی کات",
        navServices: "خزمەتگوزارییەکان",
        navContact: "پەیوەندی",

        homeTitle: "جیهانی<span> من</span>",

        homeBio: `خوێندکاری ساڵی سێیەمم لە <b>زانکۆی سەلاحەددین</b>،
        لە بواری زانستی کۆمپیوتەر دەخوێنم.
        خوێندنی ئامادەییم لە <b>قوتابخانەی سۆران</b> تەواو کردووە.
        تازە دەستم بە جیهانی کۆمپیوتەر کردووە.
        ئەم ماڵپەڕە شوێنێکە کە تێیدا ڕێگاکەم، پڕۆژەکانم،
        و هەموو ئەو شتانەی کە لەگەڵ گەشەکردنم لە بواری تەکنەلۆجیا دروستیان دەکەم هاوبەشی دەکەم.`,

         hire: "لادان",
        contact: "پەیوەندی",

        educationTitle: "خوێندن",

        edu11Date: "٢٠٢٢ بۆ ٢٠٢٣",
        edu11Title: "قۆناغی ١١ی قوتابخانە",
        edu11Desc: `لە قۆناغی ١١دا، مۆدێلێکی "هێمۆدەڵایزی دەستکرد"مان دروست کرد وەک بەشێک لە "پڕۆژەی بایۆلۆجی" لە "فێستیڤاڵی هۆڵی بۆناکان".
                    بە بەکارهێنانی کەرەستەی سادە وەک دەفر، بۆری و سیستەمی ڕۆیشتنی ئاو(موزەخە)، نموونەیەکی کاراکەم دروست کرد بۆ ئەوەی پیشانی بدەم چۆن هێمۆدەڵایز یارمەتی پاککردنەوەی خوێن دەدات بۆ نەخۆشانی لەکارکەوتنی گورچیلە.
                    ئەم پڕۆژەیەم لە بۆنەکە پێشکەش کرد و پرۆسەکەمان بۆ سەردانکەران ڕوون کردەوە و یارمەتی‌مان دان بۆ ئەوەی تێبگەن سیستەمەکە چۆن کار دەکات.
                    ئەمە یەکێک بوو لە یەکەم پڕۆژەکانم کە حەزم لە تێکەڵکردنی زانست، داهێنان و دروستکردنی کارە دەستەکان کرد، و هانی دام کە لە ساڵانی دواتردا بەردەوام بم لە گەڕان  .`,

        edu12Date: "٢٠٢٣ بۆ ٢٠٢٤",
        edu12Title: "قۆناغی ١٢ی قوتابخانە",
        edu12Desc: `لە ساڵی کۆتایی خوێندنی ئامادەییدا، قۆناغی ١٢، ئەوکات بە تەواوی تێگەیشتنێکی باشم لە کۆمپیوتەر نەبوو، بەڵام شتێک لەسەری سەرنجمی ڕاکێشا.
                    لەو ساڵەدا پڕۆژەیەکم نەکرد — سەرنجم لەوە بوو کە نمرەیەکی باش بە دەستبێنم بۆ چوونە زانکۆ.
                    الحمدلله، ئەو نمرەیەی کە ئامانجم بوو نەمهێنا ! ، بەڵام هێشتا تاڕادەیەک گەیشتم بە ئامانجەکەم. وەرگیرام لە بەشی زانستی کۆمپیوتەر، وەک ئەوەی پلانم بۆ دانابوو.
                    ئەو ساڵە فێری کردم کە گرنگ نییە ڕێگاکەت هەمووی بێ‌کەموکوڕی بێت، گرنگ ئەوەیە هەر سەرنجت لەسەر ڕێگاکە بێت و هەرگیز دەست لەو شتە هەڵنەگریت کە بەڕاستی دەته‌وێت.`,

        eduUni1Date: "٢٠٢٤ بۆ ٢٠٢٥",
        eduUni1Title: "ساڵی یەکەمی زانکۆ",
        eduUni1Desc: `دەستم بە ڕێگاکەم کرد لە زانکۆی سەلاحەددین، لە بواری زانستی کۆمپیوتەر دەخوێنم. لەو ساڵەدا زۆر شتی نوێم ئەزموون کرد.
                    وە بەشداری فێستیڤاڵێکم کرد وەک چاودێریکەری پڕۆژەکان، کە کاری داهێنەرانەی خوێندکارانی بەشەکەمانم بینی.
                    هەندێک شت لەسەر کۆمپیوتەر فێربووم لە ڕێگەی ئەو خوێندکارا نەی پڕۆژەی ڕۆبۆت و ماڵپەڕیان دروست کردبوو.
                    بینینی کارەکانیان  هانی دام. هەرچەندە من پێشکەشکاری پرۆژە نەبووم، بەڵام هەموومان خەڵاتێکمان بەدەستهێنا بۆ بەشداری کردن.`,

        eduUni2Date: "٢٠٢٥ بۆ ٢٠٢٦",
        eduUni2Title: "ساڵی دووەمی زانکۆ",
        eduUni2Desc: `لە ساڵی ٢٠٢٥ یەکەم ماڵپەڕی تایبەتی خۆم دروست کرد و دەستم کرد بە فێربوونی پەرەپێدانی وێب. شانبەشانی خوێندنی زانستی کۆمپیوتەر،
                    وەک پڕۆژەیەکی کەسی لە پەیجێکی ئینستاگرام کارم کردووە، تاقیکردنەوەی جۆرە جیاوازەکانی پۆست و ناوەڕۆکم کردووە بۆ ئەوەی تێبگەم چۆن بینین و گەیشتن و فۆڵۆوەرەکان گەشە دەکەن. لە ڕێگەی ئەم ئەزموونەوە،
                    فێربووم کە چۆن پلاتفۆرمی سۆشیال میدیا و ئەلگۆریثمەکانیان وەڵامی ناوەڕۆک و بەشداریکردنی بینەر دەدەنەوە ،توانیم گەشەپێدانی لاپەڕەکە بۆ زیاتر لە 13,000 فۆڵۆوەر و زیاتر لە 8 ملیۆن بینەر بە دەست بێنم، هەروەها دەستم کرد بە فێربوونی چۆنیەتی بەکارهێنانی
                                                                 AI 
                    فێربووم چۆن کار لەگەڵ ئەی ئای بکەم بۆ مەبەستی جیاواز، لەوانە پەرەپێدانی وێب، چارەسەرکردنی کێشەکان و دروست کردنی ناوەرۆک  .`,

        eduUni3Date: "٢٠٢٦ بۆ ٢٠٢٧",
        eduUni3Title: "ساڵی سێیەمی زانکۆ",
        eduUni3Desc: `لە ساڵی ٢٠٢٦دا ئەزموونی پراکتیکیم فراوانتر کرد بە دروستکردنی ماڵپەڕێکی گەورەی بازرگانی ئەلیکترۆنی وەڵامدەرەوە کە پشتگیری سێ زمان دەکات. من ئەم ماڵپەڕە و سۆشیال میدیام بەکارهێنا بۆ دەستپێکردنی گەڕان بەدوای مارکێتینگ و فرۆشتنی ئۆنلاین
                    هەرچەندە ئەنجامەکان بەو شێوەیە سەرکەوتوو نەبوون کە چاوەڕێم دەکرد، بەڵام ئەزموونەکە فێری کردم دەربارەی مارکێتینگی سۆشیال میدیا و فرۆشتن و تەحەددیاتی دروستکردنی شتێک لە سفرەوە.
                    هەروەها ماڵپەڕی تایبەتی خۆمم دروستکردەوە دوبارە و بەردەوام بووم لە پەرەپێدانی تواناکانی وێب، لە هەمان کاتدا بەشداریم لە تیمێکی مارکێتینگدا کرد.
                    جگە لەوەش کەمێک ئەزموونی دەستیم بەدەستهێنا لە کارکردن شانبەشانی ئەندازیارێک لەسەر دانانی سیستەمی وزەی خۆر (تاقە شەمسی)، یارمەتیدانم لە پانێڵی کارەبایی و دانانی سیستەم.
                    لەگەڵ چوونە ناو ساڵی سێیەمی زانستی کۆمپیوتەر لە زانکۆی سەلاحەدین، بەردەوامم هێشتا.
                    .`,

        proofTitle: "هێڵی کاتی" ,

        proof1Title: "هێمۆدەڵایزی دەستکرد",
        proof1Text: "یەکەم پڕۆژەی بایۆلۆجی قوتابخانەم بوو. پیشانم دا کە چۆن هێمۆدەڵایز خوێن پاک دەکاتەوە بۆ نەخۆشانی کێشەی گورچیلە، کە لە فێستیڤاڵی هۆڵی بۆناکان پێشکەش کرا.",

        proof2Title: "نمرەی کۆتایی پۆلی ١٢",
        proof2Text: "نمرەی کۆتایی پۆلی ١٢م وەرگرت و لە بەشی زانستی کۆمپیوتەر وەرگیرام.",

        proof3Title: "ڤیستیڤاڵی ساڵانەی زانکۆ",
        proof3Text: "خەڵاتێکم وەرگرت بۆ یارمەتیدان لە ڕێکخستنی بۆنەی پڕۆژەیەکی کۆلێژ، بەخێرهێنانی میوانان و یارمەتیدان لە دەوروبەری شوێنی پڕۆژەکان.",

        proof4Title: "یەکەم ماڵپەڕم",
        proof4Text: "ماڵپەڕێکی سادەی کەسیم بوو کە لە سەرەتای فێربوونم دروستم کرد.",

        proof5Title: "یـەکەم ماڵپەری بازرگانیم",
        proof5Text: "گەورەترین پڕۆژەی من بووە تا ئێستا، کە دروستکرا بۆ دەستپێکردنی کاروبارێک لە ڕێگەی سۆشیال میدیا. ئەنجامەکان وەک ئەوەی چاوەڕێم دەکرد نەبوون، بەڵام ئەزموونێکی ڕاستەقینەی پێدام لە دروستکردن، فرۆشتن و مارکێتینگی ئۆنلاین.",

        stat1: "شوێنکەوتووە زیادکراوەکان",
        stat2: "بینیەرە بەدەستهاتووەکان",
        stat3: "زانستی کۆمپیوتەر",
        stat4: "دەستم کردووە لە",

        servicesTitle: "خزمەتگوزاری",

        service1H: "دەستکاریکەری ڤیدیۆ",
        service1P: "دەستکاری ڤیدیۆی نوێ و داهێنەرانە پێشکەش دەکەم بۆ هەموو جۆرە ناوەڕۆکێک — لە ڤیدیۆی کورتەوە تا ڕیکلامی پیشەیی. ئامرازەکانی وەک Adobe Premiere Pro، CapCut و بەرنامەکانی دەستکاریکردنی AI بەکاردەهێنم بۆ دروستکردنی ڤیدیۆی خاوێن و سەرنجڕاکێش. چ پێویستت بە دەستکاریکردنێکی پاک بێت بۆ براندەکەت، ڤیدیۆیەکی خێرا بۆ سۆشیال میدیا، یان کلیپێکی باشکراو بە AI.",

        service2H: "مارکێتینگی سۆشیال میدیا",
        service2P: "مارکێتینگی سۆشیال میدیا لەسەر بنەمای ئەزموونی ڕاستەقینە — دروستکردنی ناوەڕۆک، بەکارهێنانی ترێند و هاشتاک، زیادکردنی فۆڵۆوەر و گەیاندنی ناوەڕۆک بە کەسانی زیاتر. ئامانجەکە سادەیە: بەرهەم یان بیزنسەکەت بگەیەنینە بەردەم کەسانی زیاتر و ئەو سەرنجە بگۆڕین بۆ کڕیارانی ئەگەری. ئەنجامەکان دەتوانن جیاواز بن، و هەر پۆستێک نابێتە فرۆشتن، بەڵام هەر کەمپەینێک هەلێکە بۆ فێربوون، باشترکردن و گەشەکردن.",
        service3H: "Frontend، C++",
        service3P: "من ئەزموونی دەستیم هەیە لە دروستکردنی ماڵپەڕی وەڵامدەرەوە بە بەکارهێنانی زمانەکانی پەرەپێدانی پێشەوە ( زمانی کۆمپیتەر)، لەوانەش پڕۆژەیەکی ماڵپەڕی بازرگانی ئەلیکترۆنی. دەتوانم لاپەڕەی وێبی تەواو دروست و ستایل بکەم، بیکەم بە وەڵامدەرەو، و. هەروەها ئامرازەکانی ئەی ئای وەک یاریدەدەری پەرەپێدان بەکاردەهێنم بۆ باشترکردنی کۆدەکانم، چارەسەرکردنی کێشەکان، و بەدەستهێنانی ئەنجامێکی باشتر،  هەروەها بناغەیەکی بەهێزم هەیە لە سی++، لەگەڵ زانیاری باش لە لۆژیکی بەرنامەسازی، چارەسەرکردنی کێشە، فەنکشنەکان، ڕیزبەندییەکان، ئاماژەدەرەکان، پۆلەکان، و بەرنامەسازی ئاڕاستەکراوی شتەکان. من بەردەوامم لە باشترکردنی تواناکانی بەرنامەسازی گشتی",
        contactTitle: "پەیوەندی",
        

        fullName: "ناوی تەواو",
        email: "ئیمەیڵ",
        phone: "ژمارەی مۆبایل",
        subject: "بابەت",
        message: "پەیامەکەت",
        sendMessage: "ناردنی پەیام",

        faq: "پرسیار",
        footerServices: "خزمەتگوزاری",
        aboutMe: "دەربارەی من",
        footerContact: "پەیوەندی"

    },


    // ================= ARABIC =================
    ar: {

        navHome: "الرئيسية",
        navEducation: "التعليم",
        navTimeline: "الخط الزمني",
        navServices: "الخدمات",
        navContact: "اتصل بي",

        homeTitle: "عالمي<span> الخاص</span>",

        homeBio: `طالب في السنة الثالثة في <b>جامعة صلاح الدين</b>،
        أدرس علوم الحاسوب. أنهيت دراستي الثانوية في
        <b>مدرسة سوران الثانوية</b>.
        ما زلت جديدًا في عالم الحاسوب.
        هذا الموقع هو المكان الذي أشارك فيه رحلتي،
        ومشاريعي، وكل ما أبنيه وأطوره مع تقدمي في عالم التكنولوجيا.`,

         hire: "توظيف",
        contact: "اتصل بي",

        educationTitle: "التعليم",

        edu11Date: "٢٠٢٢ إلى ٢٠٢٣",
        edu11Title: "الصف الحادي عشر الثانوي",
        edu11Desc: `عندما كنت في الصف الحادي عشر، نحن قمت ببناء نموذج "غسيل الكلى الاصطناعي" كجزء من "مشروع أحياء" في "مهرجان قاعة بوناكان".
                    باستخدام مواد بسيطة مثل الحاويات والأنابيب وأنظمة تدفق المياه، نحن أنشأت نموذجًا عمليًا يوضح كيفية مساعدة غسيل الكلى في تنظيف الدم لدى مرضى الفشل الكلوي.
                    قدمت هذا المشروع خلال الفعالية، وشرحت العملية للزوار وساعدتهم على فهم كيفية عمل النظام.
                    كان هذا أحد أوائل المشاريع التي جعلتني متحمسًا للجمع بين العلوم والإبداع والعمل العملي، وشجعني على الاستمرار في استكشاف  .`,

        edu12Date: "٢٠٢٣ إلى ٢٠٢٤",
        edu12Title: "الصف الثاني عشر الثانوي",
        edu12Desc: `خلال سنتي الأخيرة في المدرسة الثانوية، الصف الثاني عشر، لم أكن أفهم أجهزة الكمبيوتر بشكل كامل في ذلك الوقت، لكن كان هناك شيء فيها يجذبني.
                    لم أعمل على مشروع في ذلك العام — كان تركيزي على الحصول على درجة نهائية جيدة للوصول إلى الجامعة.
                    الحمد لله، لم أحصل على الدرجة التي كنت أحلم بها، لكنني وصلت إلى هدفي. تم قبولي في قسم علوم الحاسوب، تمامًا كما خططت.
                    علمني ذلك العام أن الأمر لا يتعلق بأن يكون طريقك مثاليًا، بل بأن تبقى مركزًا وألا تتخلى أبدًا عن الشيء الذي تريده حقًا.`,

        eduUni1Date: "٢٠٢٤ إلى ٢٠٢٥",
        eduUni1Title: "السنة الجامعية الأولى",
        eduUni1Desc: `بدأت رحلتي في جامعة صلاح الدين، حيث أدرس علوم الحاسوب. في ذلك العام، عشت العديد من التجارب الجديدة.
                    حضرت مهرجانًا بصفتي مشاهدًا للمشاريع، حيث شاهدت الأعمال الإبداعية لطلاب قسمنا.
                    تعلمت بعض الأشياء عن الحاسوب من خلال الطلاب الذين قاموا ببناء مشاريع في مجال الروبوتات والمواقع الإلكترونية.
                    مشاهدة أعمالهم علمتني الكثير وألهمتني. وعلى الرغم من أنني لم أكن من مقدمي المشاريع، فقد حصلنا جميعًا على مكافأة للمشاركة.`,

        eduUni2Date: "٢٠٢٥ إلى ٢٠٢٦",
        eduUni2Title: "السنة الجامعية الثانية",
        eduUni2Desc: `في عام 2025، أنشأت أول موقع شخصي لي وبدأت بتعلّم تطوير الويب. وبجانب دراستي لعلوم الحاسوب،
                    عملت على صفحة في إنستغرام كمشروع شخصي، وجرّبت أنواعًا مختلفة من المنشورات والمحتوى حتى أفهم كيف تنمو المشاهدات والوصول وعدد المتابعين. ومن خلال هذه التجربة،
                    تعلّمت كيف تستجيب منصات التواصل الاجتماعي وخوارزمياتها للمحتوى وتفاعل الجمهور، وتمكنت من تطوير الصفحة إلى أكثر من 13,000 متابع وتحقيق أكثر من 7 ملايين مشاهدة. كما بدأت بتعلّم كيفية استخدام
                                                                 AI
                    وتعلّمت كيفية العمل مع الذكاء الاصطناعي لأغراض مختلفة، بما في ذلك تطوير الويب، وحلّ المشاكل، وإنشاء المحتوى.`,

        eduUni3Date: "٢٠٢٦ إلى ٢٠٢٧",
        eduUni3Title: "السنة الجامعية الثالثة",
        eduUni3Desc: `في عام 2026، وسّعت خبرتي العملية من خلال إنشاء موقع تجارة إلكترونية كبير ومتجاوب يدعم ثلاث لغات. استخدمت هذا الموقع ووسائل التواصل الاجتماعي لبدء تجربة التسويق والبيع عبر الإنترنت.
                    ورغم أن النتائج لم تكن ناجحة بالشكل الذي كنت أتوقعه، إلا أن هذه التجربة علّمتني الكثير عن التسويق عبر وسائل التواصل الاجتماعي، والمبيعات، والتحديات المرتبطة ببناء شيء من الصفر.
                    كما أعدت بناء موقعي الشخصي مرة أخرى، وواصلت تطوير مهاراتي في مجال الويب، وفي الوقت نفسه شاركت في فريق للتسويق.
                    بالإضافة إلى ذلك، اكتسبت بعض الخبرة العملية من خلال العمل إلى جانب مهندس في تركيب نظام للطاقة الشمسية، حيث ساعدت في تركيب الألواح الكهربائية وتجهيز النظام.
                    ومع دخولي السنة الثالثة من دراسة علوم الحاسوب في جامعة صلاح الدين، ما زلت مستمرًا في تطوير مهاراتي واكتساب المزيد من الخبرة.
                    .`,

        proofTitle: "الخط الزمني" , 

        proof1Title: "غسيل الكلى الاصطناعي",
        proof1Text: "كان هذا أول مشروع أحياء لي. عرضت فيه كيفية تنظيف الدم بواسطة غسيل الكلى لمرضى الفشل الكلوي، وتم تقديمه في مهرجان قاعة بوناكان.",

        proof2Title: "الدرجة النهائية للصف الثاني عشر",
        proof2Text: "حصلت على درجتي النهائية في الصف الثاني عشر وتم قبولي في قسم علوم الحاسوب.",

        proof3Title: "فعالية مشروع الكلية",
        proof3Text: "حصلت على مكافأة لمساعدتي في تنظيم ودعم فعالية لمشروع جامعي، واستقبال الضيوف والمساعدة حول أماكن عرض المشاريع.",

        proof4Title: "موقعي الأول",
        proof4Text: "موقع شخصي بسيط قمت ببنائه عندما كنت مبتدئًا.",

        proof5Title: "موقع التجارة الإلكترونية الخاص بي",
        proof5Text: "أكبر مشروع قمت ببنائه حتى الآن، وكان بهدف بدء عمل تجاري من خلال وسائل التواصل الاجتماعي. لم تكن النتائج كما توقعت، لكنه منحني خبرة حقيقية في بناء المواقع والبيع والتسويق عبر الإنترنت.",

        stat1: "المتابعون الذين تم اكتسابهم",
        stat2: "المشاهدات المحققة",
        stat3: "علوم الحاسوب",
        stat4: "بدأت البناء منذ",

        servicesTitle: "الخدمات",

        service1H: "محرر فيديو",
        service1P: "أقدم خدمات تحرير فيديو إبداعية وحديثة لمختلف أنواع المحتوى — من مقاطع الفيديو القصيرة إلى الإعلانات الاحترافية. أستخدم أدوات مثل Adobe Premiere Pro وCapCut وبرامج تحرير مدعومة بالذكاء الاصطناعي لإنشاء فيديوهات سلسة وجذابة. سواء كنت تحتاج إلى تعديل احترافي لعلامتك التجارية، أو فيديو سريع لوسائل التواصل الاجتماعي، أو مقطع محسّن بالذكاء الاصطناعي.",

        service2H: "التسويق عبر وسائل التواصل الاجتماعي",
        service2P:  "تسويق عبر السوشيال ميديا مبني على خبرة حقيقية — من صناعة المحتوى، واستخدام الترندات والهاشتاكات، وزيادة المتابعين، والوصول إلى عدد أكبر من الناس. الهدف بسيط: نخلي منتجك أو مشروعك يوصل لناس أكثر، ونحوّل هذا الاهتمام إلى زبائن محتملين. النتائج ممكن تختلف، ومو كل منشور يتحول إلى بيع، لكن كل حملة هي فرصة للتعلّم، والتطوير، والنمو.",
        service3H: "Frontend، C++",
        service3P: "عندي خبرة عملية بتطوير مواقع الويب المتجاوبة باستخدام تقنيات تطوير الواجهة الأمامية، ومنها مشروع موقع للتجارة الإلكترونية. أگدر أصمم وأطوّر صفحات ويب كاملة، أخليها متجاوبة، وأستخدم أدوات الذكاء الاصطناعي كمساعد بالتطوير لتحسين الكود، حل المشاكل، والحصول على نتائج أفضل. وعندي أيضًا أساس قوي بلغة ++س، ويا معرفة جيدة بمنطق البرمجة، حل المشاكل، الدوال، المصفوفات، المؤشرات، الكلاسات، والبرمجة الكائنية. ومستمر بتطوير مهاراتي بالبرمجة بشكل عام.",

        contactTitle: "اتصل",
        
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "الموضوع",
        message: "رسالتك",
        sendMessage: "إرسال الرسالة",

        faq: "الأسئلة الشائعة",
        footerServices: "الخدمات",
        aboutMe: "عني",
        footerContact: "اتصل بي"

    }

};

function setLanguage(lang) {

    translate("nav-home", translations[lang].navHome);
    translate("nav-education", translations[lang].navEducation);
    translate("nav-Timeline", translations[lang].navTimeline);
    translate("nav-services", translations[lang].navServices);
    translate("nav-contact", translations[lang].navContact);

    translate("home-title", translations[lang].homeTitle, true);

    translate("home-bio", translations[lang].homeBio, true);
     // Buttons
    translate("btn-hire", translations[lang].hire);
    translate("btn-contact", translations[lang].contact);

    // Education
    translate("education-title", translations[lang].educationTitle);

    // Grade 11
    translate("edu-11-date", translations[lang].edu11Date);
    translate("edu-11-title", translations[lang].edu11Title);
    translate("edu-11-desc", translations[lang].edu11Desc);

    // Grade 12
    translate("edu-12-date", translations[lang].edu12Date);
    translate("edu-12-title", translations[lang].edu12Title);
    translate("edu-12-desc", translations[lang].edu12Desc);

    // University First Year
    translate("edu-uni1-date", translations[lang].eduUni1Date);
    translate("edu-uni1-title", translations[lang].eduUni1Title);
    translate("edu-uni1-desc", translations[lang].eduUni1Desc);

    // University Second Year
    translate("edu-uni2-date", translations[lang].eduUni2Date);
    translate("edu-uni2-title", translations[lang].eduUni2Title);
    translate("edu-uni2-desc", translations[lang].eduUni2Desc);

    // University Third Year
    translate("edu-uni3-date", translations[lang].eduUni3Date);
    translate("edu-uni3-title", translations[lang].eduUni3Title);
    translate("edu-uni3-desc", translations[lang].eduUni3Desc);

    // Timeline
    translate("proof-title", translations[lang].proofTitle);
    // Proof / Timeline
    translate("proof-1-title", translations[lang].proof1Title);
    translate("proof-1-text", translations[lang].proof1Text);

    translate("proof-2-title", translations[lang].proof2Title);
    translate("proof-2-text", translations[lang].proof2Text);

    translate("proof-3-title", translations[lang].proof3Title);
    translate("proof-3-text", translations[lang].proof3Text);

    translate("proof-4-title", translations[lang].proof4Title);
    translate("proof-4-text", translations[lang].proof4Text);

    translate("proof-5-title", translations[lang].proof5Title);
    translate("proof-5-text", translations[lang].proof5Text);

    // Statistics
    translate("stat-1", translations[lang].stat1);
    translate("stat-2", translations[lang].stat2);
    translate("stat-3", translations[lang].stat3);
    translate("stat-4", translations[lang].stat4);

    // Services
    translate("services-title", translations[lang].servicesTitle);

    translate("service-1-h", translations[lang].service1H);
    translate("service-1-p", translations[lang].service1P);

    translate("service-2-h", translations[lang].service2H);
    translate("service-2-p", translations[lang].service2P);

    translate("service-3-h", translations[lang].service3H);
    translate("service-3-p", translations[lang].service3P);

    // Contact
    translate("contact-title", translations[lang].contactTitle);

    // Form placeholders
    document.getElementById("contact-fullname").placeholder =
        translations[lang].fullName;

    document.getElementById("contact-email").placeholder =
        translations[lang].email;

    document.getElementById("contact-phone").placeholder =
        translations[lang].phone;

    document.getElementById("contact-subject").placeholder =
        translations[lang].subject;

    document.getElementById("contact-message").placeholder =
        translations[lang].message;

    // Send button
    document.getElementById("contact-send").value =
        translations[lang].sendMessage;

    // Footer
    translate("footer-faq", translations[lang].faq);
    translate("footer-services", translations[lang].footerServices);
    translate("footer-about", translations[lang].aboutMe);
    translate("footer-contact", translations[lang].footerContact);

}

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ================= PRELOADER + MUSIC =================

const preloader = document.getElementById("preloader");
const musicChoice = document.getElementById("music-choice");

const musicPlay = document.getElementById("music-play");
const musicNo = document.getElementById("music-no");

const backgroundMusic =
    document.getElementById("background-music");

preloader.style.display = "flex";


setTimeout(() => {

    preloader.style.display = "none";

    musicChoice.classList.add("active");

}, 4000);


musicPlay.addEventListener("click", async () => {
    try {
        await backgroundMusic.play();
        musicChoice.classList.remove("active");
    } catch (error) {
        console.log("Music could not play:", error);
    }
});

musicNo.addEventListener("click", () => {

    backgroundMusic.pause();

    musicChoice.classList.remove("active");

});
