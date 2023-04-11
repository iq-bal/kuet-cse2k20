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
        // index 98
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
        // index 103
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

