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

