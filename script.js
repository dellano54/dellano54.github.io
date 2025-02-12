let currentSection = 0;
const sections = document.querySelectorAll('.section');
const reasonsList = document.getElementById('reason-list');

function nextSection() {
    sections[currentSection].classList.remove('active');
    currentSection++;
    if (currentSection < sections.length) {
        sections[currentSection].classList.add('active');
    }
}

function showLove() {
    document.getElementById('final-message').innerText = "You just made my heart smile! 💖";
}

// Populate 100 reasons dynamically
const reasons = [
    "Your smile brightens my worst days 😊",
    "You always support my dreams ✨",
    "The way you laugh is the cutest thing ever 😍",
    "You make me a better person 💖",
    "You're my safe place 🏡",
    "You are my biggest inspiration 🚀",
    "Your hugs feel like home 🤗",
    "You understand me without words ❤️",
    "You make ordinary moments magical ✨",
    "Your kindness melts my heart 💕"
];

reasons.forEach(reason => {
    let li = document.createElement('li');
    li.textContent = reason;
    reasonsList.appendChild(li);
});
