const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const congratsMessage = document.getElementById("congratsMessage");
const heading = document.querySelector("h1");
const body = document.body;

// Create a message container for "No" responses
const noMessage = document.createElement("h2");
Object.assign(noMessage.style, {
  color: "#ffffff",
  fontSize: "1.5rem",
  position: "absolute",
  left: "50%",
  top: "80%",
  transform: "translateX(-50%)",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center",
});
document.body.appendChild(noMessage);

let noClickCount = 0;
const messages = [
  "Are you sure? 😢",
  "Think again...! 😊",
  "You can't resist my love! 💖",
  "C'mon! Don't break my heart! 😭",
  "Fine! You win... but No is NOT an option!! 😘💖",
];

// 🔥 No Button Moves Away, Shrinks, and Shakes at the End
noButton.addEventListener("click", () => {
  noClickCount++;

  const maxX = window.innerWidth - noButton.offsetWidth - 50;
  const maxY = window.innerHeight - noButton.offsetHeight - 50;

  noButton.style.position = "absolute";
  noButton.style.transition = "left 0.2s, top 0.2s, transform 0.3s";
  noButton.style.left = Math.random() * maxX + "px";
  noButton.style.top = Math.random() * maxY + "px";
  noButton.style.transform = `scale(${1 - noClickCount * 0.1}) rotate(${noClickCount * 10}deg)`;

  noMessage.innerHTML = messages[Math.min(noClickCount - 1, messages.length - 1)];

  if (noClickCount === messages.length) {
    noButton.style.animation = "shake 0.3s infinite";
    setTimeout(() => noButton.remove(), 1000);
  }
});

// 🎉 "Yes" Button Click Magic
yesButton.addEventListener("click", () => {
  heading.innerHTML = "Happy Valentine’s Day 💖";
  document.querySelector(".buttons").classList.add("hidden");
  congratsMessage.classList.remove("hidden");
  noMessage.classList.add("hidden");

  // 🌈 Romantic Background Change
  body.style.transition = "background 2s ease-in-out";
  body.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)";
  body.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.7)";

  // 💕 Heart Rain Effect
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      Object.assign(heart.style, {
        left: Math.random() * 100 + "vw",
        animation: `fall ${Math.random() * 3 + 3}s linear`,
        position: "absolute",
        fontSize: Math.random() * 20 + 20 + "px",
        opacity: Math.random(),
      });
      body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, i * 80);
  }

  // 🎇 Fireworks Effect
  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      Object.assign(firework.style, {
        left: Math.random() * 100 + "vw",
        top: Math.random() * 80 + "vh",
      });
      body.appendChild(firework);
      setTimeout(() => firework.remove(), 1000);
    }, i * 500);
  }

  // 🎊 Confetti Explosion
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      Object.assign(confetti.style, {
        left: Math.random() * 100 + "vw",
        top: "-10px",
        width: "10px",
        height: "10px",
        backgroundColor: ["#ff0", "#f00", "#0f0", "#00f", "#f0f", "#0ff"][Math.floor(Math.random() * 6)],
        position: "absolute",
        opacity: Math.random(),
        transform: `rotate(${Math.random() * 360}deg)`,
        animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
      });
      body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }, i * 50);
  }
});

// 🏀 Animations Keyframes
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }

  @keyframes shake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
  }
`;
document.head.appendChild(styleSheet);
