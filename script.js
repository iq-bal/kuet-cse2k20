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
        github:"",
        dp: "pola.png"
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
        github:"", 
        dp: 'meye.png'
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
        github:"",
        dp: 'meye.png'
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
        github:"",
        dp: 'meye.png'
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
        github:"https://github.com/taut0logy",
        dp: 'meye.png'
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
        github:"https://github.com/",
        dp: 'meye.png'
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
        github:"http://github.com/Mashu-wq",
        dp: 'meye.png'
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
        github:"http://github.com/",
        dp: 'meye.png'
    },
    {
        // index 78
        name: "Tasfia zaman samiha",
        roll: "2007078",
        mobile: "01879-770088",
        dob: "1/23/2012",
        blood: "B+",
        address: "Farmgate,Dhaka  ",
        nickname: "সাম্বা",
        personality: "পাস্তা যারা বানায়।",
        pov: "আমি যে বোকাঠাকুর এটা যাতে কেও না বোঝে ।",
        candle: "আমার সাথে কেও যেতে চাইবে না। আমি সবার খাবার খেয়ে ফেলি।",
        moment: "যখন ক্যাম্পাস থেকে বের হয়ে পাস্তা খেতে যাই।",
        qoute: '"পাস্তা পাস্তা"',
        facebook:"https://www.facebook.com/Tasfia.007",
        instagram:"https://instagram.com/samihatasfiazaman?igshid=YmMyMTA2M2Y=",
        github:"http://github.com/",
        dp: 'meye.png'
    },
    {
        // index 13 
        name: "Muhitul Islam",
        roll: "2007013",
        mobile: "01983694125",
        dob: "",
        blood: "AB +ve",
        address: "Dhaka",
        nickname: "মুইত্তা/চ্যাংড়া",
        personality: "Kaguya Shinomiya, Komi Shouko, Tohru etc.",
        pov: "Chill একটা মানুষ, Easy going and low maintenence friend.",
        candle: "একলা করব",
        moment: "ইফতার মাহফিলে সবাই যখন ডেকে ডেকে খাওয়ায় দিচ্ছিলো।",
        qoute: ' "After all this time". "Always". "😭" ',
        facebook:"https://www.facebook.com/muhitul1?mibextid=ZbWKwL",
        instagram:"https://instagram.com/",
        github:"http://github.com/"
    },
    {
        // index 72 
        name: "Syeda Hafsa Tazrian",
        roll: "2007072",
        mobile: "01767147307",
        dob: "1/13/2002",
        blood: "A+ (ve)",
        address: "Gazipur ",
        nickname: "Tarzan",
        personality: "Keu na",
        pov: "Onner chokhe kibhabe dekhbo?",
        candle: "Sambuuu",
        moment: "Rag concert",
        qoute: ' "আমি সৃষ্টি তাই স্রষ্টায় ভালোবাসি" "One could not count the moons that shimmer on her roofs,Or the thousand splendid suns that hide behind her walls."',
        facebook:"https://www.facebook.com/hafsa.tazrian?mibextid=ZbWKwL",
        instagram:"https://instagram.com/taz_rian_?igshid=ZDdkNTZiNTM=",
        github:"http://github.com/",
        dp: 'meye.png'
    },
    {
        // index 48
        name: "Tanzir Mannan Turzo",
        roll: "2007048",
        mobile: "01721158079",
        dob: "3/22/2001",
        blood: "O+ve",
        address: "Dummur Golami, Sirajganj",
        nickname: "Turzo",
        personality: "Myself 10 years from now",
        pov: "Very Humble, Confident, A good person in heart, Talented",
        candle: "Efty Hasan Antou and Kazi Tashrif <3 ",
        moment: "Bday Celebrations.",
        qoute: '"You fear death, would you rather be immortal? Live life in totality, though you may die life will Continue forever" - Schiller',
        facebook:"http://facebook.com/tanzirmannan.turzo",
        instagram:"https://www.instagram.com/alex.mturzo/",
        github:"http://github.com/"
    },
    {
        // index 73 
        name: "Abu Loman Hossain Shuvo",
        roll: "2007073",
        mobile: "'01796902790",
        dob: "4/3/2002",
        blood: "O+",
        address: "Gaibandha ",
        nickname: "Babu Loman",
        personality: "Mishu Baidya",
        pov: "Humble,Gentle and someone whom people can believe.",
        candle: "Bishal Roy",
        moment: "Adda nights at Sadia",
        qoute: '"এটা চিন্তা না করা যে আমি মানুষকে সময় দিচ্ছি বরং এটা ভাবার চেষ্টা করা যে আমার যেটা ঐ পার্টিকুলার মোমেন্টে ভাল্লাগতেসে সেটাই কিন্তু করতেসি।"',
        facebook:"https://www.facebook.com/itz.alh.shuvo?mibextid=ZbWKwL",
        instagram:"https://instagram.com/alh_shuvo?igshid=ZDdkNTZiNTM=",
        github:"http://github.com/"
    },
    {
        // index 62 
        name: "Ahsanul Haque Hasib",
        roll: "2007020",
        mobile: "01580-343203",
        dob: "2/2/2002",
        blood: "A(+)ve",
        address: "সৌর পরিবারের তৃতীয় গ্রহ",
        nickname: "দোচন বাবা",
        personality: "Dr. Sk. Mohammad Masudul Ahsan Sir 🥹",
        pov: "আয়না থাকতে চোখে দেখব কি জন্যে?! আমি কি সাকিব নাকি?",
        candle: "01001110 01101111 00100000 01101111 01101110 01100101",
        moment: "স্ট্রিট পেইন্টিং এর রাতজাগা",
        qoute: '"তোমার কি দোজখের ভয় নাই পহেলিকা?"',
        facebook:"https://www.facebook.com/ahsanul.haque.hasib.188?mibextid=ZbWKwL",
        instagram:"https://instagram.com/",
        github:"http://github.com/"
    },
    {
        // index 113  
        name: "HANIUM MARIA JOLI",
        roll: "2007113",
        mobile: "'01952347593",
        dob: "12/31/2002",
        blood: "AB(+)ve",
        address: "Kanchenjunga,rupgonj,narayongonj",
        nickname: "Hani",
        personality: "Raufun",
        pov: "Normal",
        candle: "Masud sir",
        moment: "Johon auto newa hoy",
        qoute: '"Allah amare job dao"',
        facebook:"https://www.facebook.com/",
        instagram:"https://instagram.com/",
        github:"http://github.com/",
        dp: 'meye.png'
    },
    {
        // index 86 
        name: "Niloy Das",
        roll: "2007086",
        mobile: "01869696969",
        dob: "3/6/2002",
        blood: "N+",
        address: "ক্লাসের সবচেয়ে পেছনের বেঞ্চ",
        nickname: "নীলু",
        personality: "Lana Rhoades",
        pov: "চোডার",
        candle: "মোফাজ্জল হোসেন গাজীপুরী & অমিত কৈরি",
        moment: "সাম্বাকে ট্রল করা",
        qoute: '"কাটে না সময় যখন আর কিছুতে,সরিষার তেল মেখে....."',
        facebook:"https://www.facebook.com/000oy",
        instagram:"https://instagram.com/",
        github:"http://github.com/"
    },
    {
        // index 62  
        name: "Swapnil Kundu Argha",
        roll: "2007062",
        mobile: "01871078907",
        dob: "1/16/2003",
        blood: "A+",
        address: "13/1, Boundary Road,Mymensingh",
        nickname: "Dada",
        personality: "Big fan of being me ",
        pov: "a friend to a friend, a lover to a lover, brother to a brother , a Child to parents 💖",
        candle: "If I can afford that much candle whole KUET CSE -20 batch",
        moment: "I enjoy my campus except the Labs after lunch ",
        qoute: '"Go on;Burn a while.Do not hide who you are."',
        facebook:"https://www.facebook.com/swapnil.kundu.90?mibextid=ZbWKwL",
        instagram:"https://instagram.com/",
        github:"http://github.com/"
    },
    {
        // index 64 
        name: "ফারহান মিরাজ সিহাব",
        roll: "2007064",
        mobile: "01767777470",
        dob: "9/22/2000",
        blood: "A+",
        address: "বাসা/হোল্ডিং: 0645-01, গ্রাম/রাস্তা: কোদালিয়া, ডাকঘর : টাঙ্গাইল সদর - ১৯০০, টাঙ্গাইল সদর, টাঙ্গাইল পৌরসভা,  টাঙ্গাইল",
        nickname: "মিরু",
        personality: "প্রিয় ব্যাক্তিত্ত্ব কেউ নাই কিছু কিছু মানুষের কথা হয়ত ভাললাগে।",
        pov: "আস্থাবান",
        candle: "মেহেরু এবং  ইটালিয়ান আন্টোয়ান",
        moment: "কন্সার্ট,  বিশেষত মেঘদলের অংশ",
        qoute: '"Go Beyond Plus Ultra", "আমি ভরা-তরী করি ভরা-ডুবি, আমি টর্পেডো আমি ভীম ভাসমান মাইন!"',
        facebook:"https://www.facebook.com/creedofarhan?mibextid=ZbWKwL",
        instagram:"https://instagram.com/farhanmirazshihab?igshid=ZDdkNTZiNTM=",
        github:"https://github.com/N8-Hawk"
    },
    {
        // index 85  
        name: "Sayaka Alam",
        roll: "2007085",
        mobile: "'01759548107",
        dob: "9/26/2001",
        blood: "B+",
        address: "স্যার হতে দূরে, শীতল ফ্যান এর নিচে",
        nickname: "সাইকাস",
        personality: "Tom Cruise ",
        pov: "ট্রিট এবং সালামী আমার মত গরিবেরই প্রাপ্য!",
        candle: "Shayka Islam and Laboni Rahman ",
        moment: "প্রথম যেদিন সফলভাবে পেছনের দরজা দিয়ে পালিয়েছি ",
        qoute: '"লেখাপড়া করে যে, গাড়িঘোড়ায় চড়ে সে!"',
        facebook:"https://www.facebook.com/",
        instagram:"https://instagram.com/sayaka_alam",
        github:"https://github.com/",
        dp: 'meye.png'
    },
    {
        // index 55 
        name: "Abdullah Al Shafi",
        roll: "2007055",
        mobile: "01716138104",
        dob: "6/2/2003",
        blood: "A+",
        address: "Earth(Flat)",
        nickname: "কেউ ডাকে না!",
        personality: "আমার বিড়াল",
        pov: "যেকোনো বিড়ালের মত করে",
        candle: "আমি মেবি রাতকানা",
        moment: "যখন ক্যাম্পাস থেকে বের হই",
        qoute: '"জানি এসেছিলাম একা , যেতে হবে একা; তাও মাঝখানে কুয়েটে কেন এলাম একা একা!"',
        facebook:"https://www.facebook.com/AB.Shafi0.9?mibextid=LQQJ4d",
        instagram:"https://instagram.com/shafi__abdullah",
        github:"https://github.com/C-loud-Nine"
    },
    {
        // index 105 
        name: "মারুফা আক্তার মীম",
        roll: "2007105",
        mobile: "01575606177",
        dob: "4/20/2002",
        blood: "A+",
        address: "ব্রাহ্মণবাড়িয়া ",
        nickname: "প্রিয় মীম",
        personality: "নিজে",
        pov: "আমি সত্যিকার অর্থেই যেমন ",
        candle: "আজহার",
        moment: "বৃষ্টির আগ মুহুর্তে প্রিয়জনের সাথে ক্যাম্পাসের রাস্তায় হাটা",
        qoute: '"গতে শোকো ন কর্তব্যো ভবিষ্যৎ নৈব চিন্তয়েত বর্তমানেন কালেন প্রবর্ত্তন্তে বিচক্ষণা"',
        facebook:"https://www.facebook.com/heymarufa",
        instagram:"https://instagram.com/",
        github:"https://github.com/",
        dp: 'meye.png'
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
        // console.log(persons[buttonValue].dp); 
        if(typeof persons[buttonValue].dp!=='undefined'){
            document.getElementById('dp').src=persons[buttonValue].dp; 
        }
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

