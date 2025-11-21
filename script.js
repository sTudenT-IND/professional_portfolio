window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

//=================== one-liner ==============================
const buzzwords = [
    "Full Stack Developer",
    "coder",
    "Finance Enthusiast",
    "Gen-Z",
    "Singer",
    "Dancer",
    "Painter",
    "Story Teller",
    "Traveler",
    "Upcoming Entrepreneur"
];

let index = 0;
let goingDown = true; // alternates animation direction

const buzzwordSpan = document.querySelector(".buzzword");

function changeBuzzword() {
    // set text
    buzzwordSpan.textContent = buzzwords[index];

    // apply animation
    buzzwordSpan.style.animation = goingDown
        ? "slideDown 0.6s ease"
        : "slideUp 0.6s ease";

    // alternate direction
    goingDown = !goingDown;

    // next index
    index = (index + 1) % buzzwords.length;
}

// first word
changeBuzzword();

// change every 3 seconds
setInterval(changeBuzzword, 2000);


//=========================img revolver===============================
// Array of image file names
const images = [
    "images/priya0.jpg",
    "images/priya1.jpg",
    "images/priya2.jpg",
    "images/priya3.jpg",
    "images/priya4.jpg",
    "images/priya5.jpg",
    "images/priya6.jpg",
    "images/priya7.jpg",
    "images/priya8.jpg",
    "images/priya9.jpg",
    "images/priya10.jpg"
];

let currentIndex = 0;
const heroImg = document.getElementById("hero-img");

function changeImage() {
    currentIndex++;                         // move to next image
    if (currentIndex >= images.length) {    // loop back to first
        currentIndex = 0;
    }
    heroImg.src = images[currentIndex];     // update image source
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 2000);
