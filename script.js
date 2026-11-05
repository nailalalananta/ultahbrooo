
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const openBtn = document.getElementById("openBtn");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

const letterBtn = document.getElementById("letterBtn");
const letterContent = document.getElementById("letterContent");


// OPEN WEBSITE

openBtn.addEventListener("click", () => {

    opening.classList.add("hidden");
    mainContent.classList.remove("hidden");

    bgMusic.play().then(() => {
        musicBtn.textContent = "♫";
    }).catch(() => {
        musicBtn.textContent = "♪";
    });

    window.scrollTo(0, 0);

});


// MUSIC BUTTON

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();
        musicBtn.textContent = "♫";

    } else {

        bgMusic.pause();
        musicBtn.textContent = "♪";

    }

});


// GIFT INTERACTION

giftBox.addEventListener("click", () => {

    giftMessage.classList.toggle("hidden");

    if (!giftMessage.classList.contains("hidden")) {
        giftBox.style.transform = "scale(1.2) rotate(10deg)";
    } else {
        giftBox.style.transform = "";
    }

});


// LETTER INTERACTION

letterBtn.addEventListener("click", () => {

    letterContent.classList.toggle("hidden");

    if (letterContent.classList.contains("hidden")) {
        letterBtn.textContent = "Open My Letter ♡";
    } else {
        letterBtn.textContent = "Close My Letter ✕";
    }

});


// SCROLL

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


// RANDOM STARS

const stars = document.getElementById("stars");

for (let i = 0; i < 65; i++) {

    const star = document.createElement("span");

    star.className = "star";
    star.textContent = Math.random() > 0.5 ? "✦" : "·";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.fontSize = (Math.random() * 12 + 5) + "px";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);

}
