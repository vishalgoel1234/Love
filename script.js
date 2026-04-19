const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg"
];

const text = "Rasmalai ❤️, these 3 years and 7 months with you have been the most beautiful part of my life. Every moment feels magical with you. I love you forever and ever 💖";

function startExperience() {

    document.getElementById("bgMusic").play();
    document.getElementById("gallery").classList.remove("hidden");

    let index = 0;

    function showSlide() {
        const gallery = document.getElementById("gallery");

        gallery.innerHTML = "";

        const bg = document.createElement("img");
        bg.src = images[index];
        bg.className = "bg active";

        const img = document.createElement("img");
        img.src = images[index];
        img.className = "slide active";

        gallery.appendChild(bg);
        gallery.appendChild(img);

        index++;

        if (index < images.length) {
            setTimeout(showSlide, 2000);
        } else {
            setTimeout(showMessage, 1500);
        }
    }

    showSlide();
    createHearts();
    startTimer();
    sparkle();
    showDate();
    createRoses();
}

function showMessage() {
    const msg = document.getElementById("message");
    msg.classList.remove("hidden");

    let i = 0;
    function typing() {
        if (i < text.length) {
            msg.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        } else {
            setTimeout(showPopup, 1000); // after text sho
        }
    }
    typing();
}





// 👇 YAHAN paste kar
function showPopup() {
    const popup = document.createElement("div");
    popup.className = "love-popup";

    popup.innerHTML = `
        <h2>Rasmalai ❤️</h2>
        <p>
        3 years 7 months... and still counting ♾️<br>
        Har din tere saath ek nayi story jaisa lagta hai,<br>
        aur main har story ka hero sirf tere liye banna chahta hoon 💖<br><br>
        I don’t just love you...<br>
        I live for you ❤️
        </p>
    `;

    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 10000);
}

// 💖 Hearts
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}


function startTimer() {
    const startDate = new Date("2022-09-01T00:00:00");

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        document.getElementById("timer").innerText =
            days + " days together ❤️";
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}


function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


function secret() {
    document.getElementById("secretMsg").classList.remove("hidden");
}

// FINAL SURPRISE
function finalSurprise() {
    alert("I LOVE YOU RASMALAI ❤️ FOREVER ♾️");
}

// SPARKLE
function sparkle() {
    setInterval(() => {
        const star = document.createElement("div");
        star.innerHTML = "✨";
        star.style.position = "fixed";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(star);

        setTimeout(() => star.remove(), 2000);
    }, 500);
}

function showDate() {
    const now = new Date();

    const options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };

    document.getElementById("date").innerText =
        now.toLocaleDateString('en-IN', options);
}

function createRoses() {
    setInterval(() => {
        const rose = document.createElement("div");
        rose.className = "rose";
        rose.innerHTML = "🌹";

        rose.style.left = Math.random() * 100 + "vw";
        rose.style.fontSize = (Math.random() * 10 + 20) + "px";

        document.body.appendChild(rose);

        setTimeout(() => rose.remove(), 6000);
    }, 400);
}

function openSecret() {
    window.location.href = "secret.html";
}

window.onload = function () {
    startTimer();
};