var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// script for modal

const persons = [
    {
        // index : 0
        name: "ইকবাল মাহমুদ মুন",
        roll: "২০০৭০৯৩",
        mobile: "01705450779",
        dob: "04-19-2001",
        blood: "O+(ve)",
        address: "দাড়িদহ, শিবগঞ্জ, বগুড়া -৫৮১০",
        nickname: "বাল ব্রো",
        personality: "নাই, মহান ব্যক্তিদের এড়িয়ে চলি",
        pov: "ইকবাল তুমি এত্তো চিল, মাই গড!", 
        candle: "Apan, My Room mate",
        moment: "1-1 এ হ্যাংআউট",
        qoute: '"কাল সিটি ক্যান্সেল"- সি আর', 
        facebook:"",
        instagram:"",
        github:""
    },
    {
    //    index 112 
        name: "আজহার উদ্দিন",
        roll: "২০০৭১১২",
        mobile: "01885375802",
        dob: "12/31/2000",
        blood: "A+",
        address: "Feni Sadar,Feni",
        nickname: "প্রিয়",
        personality: "আজহার",
        pov: "নিরহংকারী", 
        candle: "মারুফা",
        moment: "CSE Department এর সবাই মিলে যখন ইফতার করি",
        qoute: '"Let Infinity be your Limit.Learn from yesterday, make present better for the future."', 
        facebook:"",
        instagram:"",
        github:""
    },
    {
        //    index 68 
        name: "ফয়সাল মাহমুদ",
        roll: "২০০৭০৬৮",
        mobile: "01797363491",
        dob: "3/14/2001",
        blood: "B+",
        address: "Barguna,Barishal",
        nickname: "Fosul",
        personality: "Richard Feynman",
        pov: "Helpful", 
        candle: "Elizabeth Olsen",
        moment: "SGIPC এর 1st ক্লাস নেওয়া",
        qoute: '"If you can’t explain something to a first-year student, then you haven’t really understood."', 
        facebook:"",
        instagram:"",
        github:""
    },
    {
        //    index 71
        name: "একরামুল আলম",
        roll: "২০০৭০৭১",
        mobile: "01752729605",
        dob: "8/21/2003",
        blood: "A(+ve)",
        address: "Mirpur-14,Dhaka",
        nickname: "Papon",
        personality: "Andrew Tate",
        pov: "Top G", 
        candle: "সরি টাইম নাই",
        moment: "স্বপ্তাশ্ব' ১৭ র‍্যাগ কনসার্ট",
        qoute: '"আজকে ঘুমিয়ে যাই,কাল থেকে পড়তে বসবো।"', 
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 109
        name: "সৌরভ দেবনাথ",
        roll: "২০০৭১০৯",
        mobile: "01614981899",
        dob: "11/1/2002",
        blood: "O+",
        address: "tangail",
        nickname: "sourav",
        personality: "",
        pov: "", 
        candle: "",
        moment: "",
        qoute: '""', 
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 52
        name: "ইফতি হাসান",
        roll: "২০০৭০৫২",
        mobile: "01749289438",
        dob: "1/1/2002",
        blood: "O+",
        address: "Gazipur",
        nickname: "Efty",
        personality: "Shakib Al Hasan",
        pov: "Decent", 
        candle: "Tanzir Mannan Turzo",
        moment: "Rag concert of 2k17 batch",
        qoute: '"Jack of all trades master of none. "', 
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 95
        name: "নাফিউল ইসলাম",
        roll: "২০০৭০৯৫",
        mobile: "01521729170",
        dob: "9/16/2002",
        blood: "O+",
        address: "Rajshahi",
        nickname: "Naiffa",
        personality: "হযরত মোহাম্মদ (সঃ)",
        pov: "Reliable, Responsible", 
        candle: "Taylor Swift",
        moment: "Anytime with friends except class hour",
        qoute: '"You do not know what you have got Until it is gone."',
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 94
        name: "অনির্বাণ ঘোষ অর্ঘ্য",
        roll: "২০০৭০৯৪",
        mobile: "01746547259",
        dob: "3/19/2002",
        blood: "O+",
        address: "Padma Residential Area, Rajshahi ",
        nickname: "Bara",
        personality: "Not specific ",
        pov: "Being myself", 
        candle: "None",
        moment: "Rag concert",
        qoute: '"Tell them the North remembers. Tell them winter came for House Frey."',
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 61
        name: "সানজিদা তিথী",
        roll: "2007061",
        mobile: "01740745352",
        dob: "8/27/2023",
        blood: "A+",
        address: "Satkhira",
        nickname: "Tithi",
        personality: "Shakib Al Hasan",
        pov: "An honest woman", 
        candle: "Farzana Rahman ani",
        moment: "",
        qoute: '""',
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 108
        name: "লাবণী রহমান",
        roll: "2007108",
        mobile: "01749493715",
        dob: "7/17/2002",
        blood: "O+",
        address: "Barishal",
        nickname: "Laboni",
        personality: "Ammu",
        pov: "I don't care for others", 
        candle: "Labonno",
        moment: "When i get to know CT is cancelled ",
        qoute: '"Pera nai,Chill."',
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 98
        name: "বিশাল রায়",
        roll: "2007098",
        mobile: "01616028907",
        dob: "2/10/2023",
        blood: "B+",
        address: "বোয়ালমারী,ফরিদপুর",
        nickname: "গদা",
        personality: "বাবা",
        pov: '"ও একজন ভালো মানুষ,ওর দ্বারা কারো উপকার ব্যতীত ক্ষতি হয়নাই"',
        candle: "সাবেকুন্নাহার নবনী(ওর সাথে আলাপচারিতার দরকার)",
        moment: "এনিথিং(অর্গানাইজার হিসেবে থাকলে)",
        qoute: '"যা হয়েছে তা ভালোই হয়েছে,যা হচ্ছে তা ভালোই হচ্ছে,যা হবে তা ভালোই হবে।যেমন কর্ম,তেমন ফল।"',
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 103 
        name: "ফাইয়াজ মাহমুদ",
        roll: "2007103",
        mobile: "01968828663",
        dob: "2/27/2002",
        blood: "A+",
        address: "Lakshmipur, Chattogram, Bangladesh",
        nickname: "Fairuz",
        personality: "My maternal Grandfather",
        pov: "Doesn't matter",
        candle: "Got nobody",
        moment: "Doing anything with my friends",
        qoute: '"2 green lines appearing on my Oneplus phone"',
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 24 
        name: "ফারিহা সানজানা",
        roll: "2007024",
        mobile: "01575633177",
        dob: "9/13/2002",
        blood: "B+",
        address: "Village -Shahgoda, Thana- Muradnagar, District- Cumilla, Division - Chattogram",
        nickname: "",
        personality: "",
        pov: "",
        candle: "",
        moment: "Pocket gate r adda",
        qoute: '""',
        facebook:"",
        instagram:"",
        github:""
    },
    {
        // index 74  
        name: "মোফাজ্জল হোসেন",
        roll: "2007074",
        mobile: "01735059979",
        dob: "11/15/2001",
        blood: "B+",
        address: "Gazipur",
        nickname: "মাওলানা মোফা",
        personality: "ঠিক করা হয়নি ",
        pov: "ভালো মানুষ",
        candle: "Saad uddin",
        moment: "Street painting",
        qoute: '"আমিও মানুষ, তুমিও মানুষ,তফাত শুধু শিরদাড়ায়।"',
        facebook:"https://www.facebook.com/mofazzal874",
        instagram:"",
        github:"http://github.com/Mofazzal874"
    },
    {
        // index 60 
        name: "Al Shahriar Rokon ",
        roll: "2007060",
        mobile: "01738039267",
        dob: "12/30/2002",
        blood: "A+",
        address: "Nachole,Chapainawabganj, Rajshahi",
        nickname: "Rokon",
        personality: "Elon Reeve Musk",
        pov: "বিশ্বস্ত",
        candle: "যার মাথায় প্রশ্নটা এসেছে",
        moment: "ফুটবলে চ্যাম্পিয়ন হওয়া",
        qoute: '"Anger and love have no limits. The choice is yours!"',
        facebook:"https://www.facebook.com/as.rokon.35?mibextid=ZbWKwL",
        instagram:"",
        github:""
    },
    {
        // index 53
        name: "Kazi Tasrif",
        roll: "2007053",
        mobile: "01732507717",
        dob: "12/21/2000",
        blood: "B+",
        address: "12/8, Road no: 01, Kallayanpur, Dhaka",
        nickname: "Kazi",
        personality: "I lack in this. Promise I will make myself truly search for this.",
        pov: "A man they can trust I guess.",
        candle: "Mofazzal and Apan are men with humour. Rest of them are just too tall :((",
        moment: "The day shall come I believe. But for now many memorable moments are scattered all through from the beginning to up until now.",
        qoute: '"1. It is the courage to continue that counts - W. Churchill 2. Life is short and live it to the fullest is such a vague idea - (my own actualisation)"',
        facebook:"https://www.facebook.com/profile.php?id=100010042549280&mibextid=ZbWKwL",
        instagram:"https://www.instagram.com/_kaizen____",
        github:""
    },
    {
        // index 26
        name: "Md Abir Rahman",
        roll: "2007026",
        mobile: "01712270663",
        dob: "1/19/2002",
        blood: "O+",
        address: "Banasree, Dhaka",
        nickname: "গাবির",
        personality: "Cristiano Ronaldo",
        pov: "I don't care how people see me",
        candle: "আমার প্রেয়সী",
        moment: "Rag concert of সপ্তাশ্ব '১৭",
        qoute: '"So what life is not perfect?This is not heaven."',
        facebook:"https://www.facebook.com/abirzishan32?mibextid=ZbWKwL",
        instagram:"https://www.instagram.com/abir.zishan",
        github:"https://github.com/abirzishan32"
    },
    {
        // index 26
        name: "Mosabbir Hossen",
        roll: "2007032",
        mobile: "01870890572",
        dob: "5/13/2002",
        blood: "B+",
        address: "Narail",
        nickname: "Daddy",
        personality: "Rifat",
        pov: "দেখতেই চায় না",
        candle: "",
        moment: "Rag Concert",
        qoute: '"আমরা সবাই পাপী,আপন পাপের বাটখারা দিয়ে অন্যের পাপ মাপি"',
        facebook:"https://www.facebook.com/Mosabbir.Hossen08",
        instagram:"https://www.instagram.com/Mosabbir08",
        github:"https://github.com/"
    },
    {
        // index 26
        name: "Raufun Ahsan",
        roll: "2007030",
        mobile: "'01533865121",
        dob: "10/12/2002",
        blood: "B+",
        address: "Mirpur, Dkhaka",
        nickname: "Jolly boy 🥹",
        personality: "Richard Feynman",
        pov: "Capable yet caring",
        candle: "Hanium Maria Joli",
        moment: "Campfire-2022",
        qoute: '"There is always some madness in love. But there is also always some reason in madness."',
        facebook:"https://www.facebook.com/raufun.ahsan",
        instagram:"https://www.instagram.com/",
        github:"https://github.com/taut0logy"
    },
    {
        // index 26
        name: "Shaeer Musarrat Swapnil",
        roll: "2007116",
        mobile: "'01533865121",
        dob: "'9/25/2003",
        blood: "B+",
        address: "Sector#12, Uttara,Dhaka-1230",
        nickname: "Sepnil",
        personality: "Abbu",
        pov: "Most trustable one",
        candle: "Mim-87, Mayesha-88",
        moment: "Ramadam-2k23",
        qoute: '""',
        facebook:"https://www.facebook.com/shaeer.musarrat",
        instagram:"https://www.instagram.com/musarrat_swapnil",
        github:"https://github.com/taut0logy"
    },
    {
        // index 39
        name: "মেহেরু জান্নাত",
        roll: "2007039",
        mobile: "01405953515",
        dob: "10/20/2001",
        blood: "B+",
        address: "Dhaka",
        nickname: "Meheru",
        personality: "আমি নিজে",
        pov: "hot",
        candle: "No one",
        moment: "None",
        qoute: '"None"',
        facebook:"https://www.facebook.com/",
        instagram:"https://www.instagram.com/",
        github:"https://github.com/"
    },
    {
        // index 16
        name: "Md.Umar Faruk",
        roll: "2007016",
        mobile: "01740976043",
        dob: "2/2/2002",
        blood: "B+",
        address: "Natore",
        nickname: "Faruk",
        personality: "",
        pov: "",
        candle: "",
        moment: "",
        qoute: '""',
        facebook:"https://www.facebook.com/",
        instagram:"https://www.instagram.com/",
        github:"https://github.com/"
    },
    {
        // index 16
        name: "Mayesha Marzia Zaman",
        roll: "2007088",
        mobile: "01763120707",
        dob: "11/15/2001",
        blood: "B+",
        address: "Bogura",
        nickname: "Picchi Mashu",
        personality: "Itself 🤍",
        pov: "Gutu_gutu_nabbo! As a very much simple & confident girl",
        candle: "Sepunil × shanzu",
        moment: "Shoptasso'17 Rag Concert × RIAD",
        qoute: '"Chad mama aj boddo aka ..Boro hoyechi ami"',
        facebook:"https://www.facebook.com/mayeshamarzia.zaman.3",
        instagram:"http://www.instagram.com/boom_chikchik.boom_",
        github:"http://github.com/Mashu-wq"
    },
    {
        // index 16
        name: "Shanzida Rahman Mim ",
        roll: "2007087",
        mobile: "01301561542",
        dob: "7/27/2000",
        blood: "O+",
        address: "Kushtia ",
        nickname: "Mim",
        personality: "Amr boro apu",
        pov: "Confident ",
        candle: "Swapnil r mayeshar sathe boshe jboni🙂",
        moment: "Hangout 2.0",
        qoute: '"Jnina🙂"',
        facebook:"https://www.facebook.com/mayeshamarzia.zaman.3",
        instagram:"http://www.instagram.com/shanzida_mim33",
        github:"http://github.com/"
    }
]; 

// Get all buttons with the same class name
const buttons = document.querySelectorAll('.aboutMe');
const modalBg = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');
const swiperPagination = document.querySelector('.swiper-pagination'); 
// const swiperPagination = document.getElementsByClassName('.swiper-pagination'); 
// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.value;
        const name = document.getElementById('name');
        const roll = document.getElementById('roll');
        const mobile = document.getElementById('mobile');
        const dob = document.getElementById('dob');
        const blood = document.getElementById('blood');
        const address = document.getElementById('address');
        const nickname = document.getElementById('nickname');
        const personality = document.getElementById('personality');
        const pov = document.getElementById('pov');
        const candle = document.getElementById('candle');
        const moment = document.getElementById('moment');
        const qoute = document.getElementById('qoute'); 


        name.innerText = persons[buttonValue].name;
        roll.innerText=persons[buttonValue].roll;
        mobile.innerText=persons[buttonValue].mobile;
        dob.innerText=persons[buttonValue].dob;
        blood.innerText=persons[buttonValue].blood;
        address.innerText = persons[buttonValue].address;
        nickname.innerText = persons[buttonValue].nickname;
        personality.innerText=persons[buttonValue].personality;
        pov.innerText = persons[buttonValue].pov;
        candle.innerText=persons[buttonValue].candle; 
        moment.innerText=persons[buttonValue].moment;
        qoute.innerText=persons[buttonValue].qoute; 


        swiperPagination.style.visibility="hidden"; 
        modalBg.classList.add('bg-active');
    });
});

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
    swiperPagination.style.visibility="visible"; 
});

