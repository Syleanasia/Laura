const wrapper = document.getElementById("wrapper");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const finalScreen = document.getElementById("final");

let noIsFree = false;

noBtn.addEventListener("mouseenter", () => {
  if (!noIsFree) {
    const rect = noBtn.getBoundingClientRect();
    noBtn.style.position = "fixed";
    noBtn.style.left = `${rect.left}px`;
    noBtn.style.top = `${rect.top}px`;
    noIsFree = true;
  }

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
});

yesBtn.addEventListener("click", () => {
  wrapper.classList.add("card-close");
  startHearts();

  setTimeout(() => {
    wrapper.remove();
    finalScreen.classList.remove("hidden");
  }, 600);
});

// Make it rain
function startHearts() {
  const hearts = ["❤️", "💖", "💘", "💕", "💗","💙", "🖤", "💜"];

  setInterval(() => {
    for (let i = 0; i < 4; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

      const size = 14 + Math.random() * 36;
      heart.style.fontSize = `${size}px`;
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }
  }, 180);
}
