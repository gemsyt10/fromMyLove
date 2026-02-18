/*=================
DOM ELEMENTS
=================*/                                           
const heart = document.querySelector(".heart");
const TIMER = document.querySelector(".timer");
const letterFromMyLove = document.querySelector(".letter");
const letterActivateBtn = document.querySelector(".letter-btn")
const thisDate = new Date();
const date = new Date(2026, 0, 25, 12, 0, 0);

function dataTimer() {
    const thisDate = new Date(); // Оновлюємо дату кожного разу
    let diff = Math.abs(thisDate - date); // різниця в мс
     
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInWeek = msInDay * 7;
    const msInMonth = msInDay * 30; // умовно, місяць = 30 днів
    
    const months = Math.floor(diff / msInMonth);
    diff -= months * msInMonth;
    
    const weeks = Math.floor(diff / msInWeek);
    diff -= weeks * msInWeek;
    
    const days = Math.floor(diff / msInDay);
    diff -= days * msInDay;
    
    const hours = Math.floor(diff / msInHour);
    diff -= hours * msInHour;
    
    const minutes = Math.floor(diff / msInMinute);
    diff -= minutes * msInMinute;
    
    const seconds = Math.floor(diff / msInSecond);
    return `${months} міс., ${weeks} тиж., ${days} дн., ${hours} год., ${minutes} хв., ${seconds} сек.`;
}

setInterval(function() {
    TIMER.textContent = dataTimer();
    TIMER.style.animationIterationCount = 1
}, 1000);
setInterval(function() {
    TIMER.textContent = dataTimer()
}, 1000);

if(localStorage.getItem("letterOpened") != true) {
    letterActivateBtn.addEventListener("click", () => {
        letterActivateBtn.setAttribute("disabled", "true");
        localStorage.setItem("letterOpened", true)
        const LIST =`<div style="max-width: 600px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(5px); padding: 30px 25px; border-radius: 40px 40px 40px 40px; box-shadow: 0 20px 40px rgba(233, 176, 184, 0.4), 0 0 0 2px #ffd9df inset; text-align: center; margin: 20px; border: 3px solid #ffe2b3; font-family: 'Segoe UI', 'Arial', sans-serif;">

    <div style="font-size: 70px; line-height: 1; margin-bottom: 10px; filter: drop-shadow(0 6px 6px #ffce84);">
        ☀️
    </div>

    <h1 style="color: #b3455b; font-size: 38px; margin: 5px 0 0 0; font-weight: 800; text-shadow: 2px 2px 0 #ffe2b3;">
        Привет, любимая ❤️
    </h1>
    <p style="font-size: 22px; color: #d4696e; margin: 0 0 25px 0; font-style: italic;">
        это тебе мой подарочек
    </p>

    <div style="background: #fffefc; border-radius: 35px; padding: 25px 20px; box-shadow: 0 8px 0 #dbb8b0; border: 2px dashed #ffb6b6; text-align: left;">

        <p style="font-size: 18px; line-height: 1.6; color: #3f2d2d; margin: 0 0 15px 0;">
            Хочу сказать <strong style="color:#c14a5a;">большое спасибо</strong>, что ты вместе со мной. 
            Я хочу <strong style="color:#c14a5a;">бить с тобой до конца своей жизни</strong> 🤍
        </p>

        <p style="font-size: 18px; line-height: 1.6; color: #3f2d2d; margin: 0 0 15px 0;">
            Ты радуешь <em>кожен день</em>, твоё присутствие, та даже в месенджерах для меня 
            <span style="background: #fff0b5; padding: 3px 8px; border-radius: 20px; font-weight: bold;">ценное</span>.
        </p>

        <p style="font-size: 18px; line-height: 1.6; color: #3f2d2d; margin: 0 0 15px 0;">
            Ты моё <span style="color: #f17e3a; font-size: 22px;">☀️ сонце</span>, которое даёт мне лучик надежды.
        </p>

        <p style="font-size: 18px; line-height: 1.6; color: #3f2d2d; margin: 0 0 15px 0;">
            Я хочу <span style="background: #ffe1e4; border-radius: 25px; padding: 3px 12px;">обнять тебя нежно</span> и приятно для тебя, 
            поцеловать тебя, чтобы ты не забыла этого даже через 10 лет, 
            хочу тебя <span style="font-weight: 800; color:#aa4e5c;">носить на ручках</span>, чтобы ты не уставала.
        </p>
        <p style="font-size: 18px; line-height: 1.6; color: #3f2d2d; margin: 0 0 15px 0;">
            Ти можешь мне доверять, я не хочу тебе плохого и желаю тебе только лутшего.
        </p>

        <p style="font-size: 22px; line-height: 1.5; color: #a52f3c; margin: 25px 0 10px 0; font-weight: bold; text-align: center;">
            Соничка я тебя действительно люблю и без тебя мне сложно....
        </p>
    </div>

    <div style="font-size: 28px; margin-top: 20px; color: #b3455b;">
        ❤️ Твой Русик ❤️
    </div>
</div>`
        letterFromMyLove.insertAdjacentHTML("beforeend", LIST)
    })
}
