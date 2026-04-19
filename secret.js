const lines = [
    "Rasmalai ❤️",

    "Aapke saath bitaye hue ye 3 saal 7 mahine...",
    "Meri zindagi ke sabse khoobsurat pal rahe hain 💖",

    "Kabhi kabhi main sochta hoon...",
    "Ki maine aisa kya accha kiya tha...",
    "Jo aap meri life mein aaye ❤️",

    "Aapki ek muskurahat...",
    "Mera pura din theek kar deti hai 😊",

    "Aur aapka saath...",
    "Mujhe ek alag hi sukoon deta hai 💫",

    "Main perfect nahi hoon...",
    "Par mera pyaar bilkul sachha hai ❤️",

    "Main har din aapko choose karta hoon...",
    "Aur hamesha karta rahunga 💖",

    "Aap sirf meri girlfriend nahi hain...",
    "Aap meri aadat hain...",
    "Meri zarurat hain...",
    "Aur meri zindagi ka sabse khoobsurat hissa hain ❤️",

    "Aur ek baat sach kahun...",
    "Main aapke bina apni life imagine hi nahi kar sakta 💔➡️❤️",

    "I Love You Rasmalai ❤️",
    "Always and Forever ♾️"
];

let index = 0;
let charIndex = 0;

function typeLine() {
    const lineEl = document.getElementById("line");

    if (index < lines.length) {

        if (charIndex < lines[index].length) {
            lineEl.innerHTML += lines[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 50);
        } 
        else {
            setTimeout(() => {
                lineEl.innerHTML = "";
                index++;
                charIndex = 0;
                typeLine();
            }, 1500);
        }

    } else {
        showFinalMessage();
    }
}

typeLine();


// 💥 Final big message (last impact)
function showFinalMessage() {
    const lineEl = document.getElementById("line");

    lineEl.innerHTML = `
        <h2 style="color:#ff4d6d;">
            Aap meri zindagi ho ❤️
        </h2>
    `;
}


// ✨ Extra background hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = "20px";
    heart.style.animation = "fall 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 300);

let bgIndex = 0;
const bgImages = document.querySelectorAll(".bg");

function changeBackground() {
    bgImages.forEach(img => img.classList.remove("active"));

    bgImages[bgIndex].classList.add("active");

    bgIndex = (bgIndex + 1) % bgImages.length;
}

// change every 4 sec
setInterval(changeBackground, 4000);

function createParticles() {
    setInterval(() => {
        const particle = document.createElement("div");
        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 4000);
    }, 200);
}

createParticles();

