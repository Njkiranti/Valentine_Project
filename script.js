const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const congratsMessage = document.getElementById("congratsMessage");
const heading = document.querySelector("h1");
const body = document.body;

// Create a message container for "No" responses
const noMessage = document.createElement("h2");
noMessage.classList.add("hidden");
noMessage.style.color = "#ffffff";  // Changed to white
noMessage.style.fontSize = "1.5rem";
noMessage.style.position = "absolute";
noMessage.style.left = "50%";
noMessage.style.top = "80%";
noMessage.style.transform = "translateX(-50%)";
noMessage.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)"; // Optional shadow for visibility
noMessage.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent background for readability
noMessage.style.padding = "10px"; // Padding around the message
noMessage.style.borderRadius = "10px"; // Rounded corners for the container
noMessage.style.textAlign = "center"; // Center the text inside the container
document.body.appendChild(noMessage);

let noClickCount = 0;

// Define the messages array
const messages = [
    "Are you sure? 😢",
    "Think again...! 😊",
    "You can't resist my love! 💖",
    "C'mon! Don't break my heart! 😭",
    "Fine! you wins but No is NOT an option!! 😘💖",
];

// Handle "No" button clicks
noButton.addEventListener("click", () => {
  noClickCount++;

  // Move the "No" button randomly within the viewport
  const maxX = window.innerWidth - noButton.offsetWidth - 20;
  const maxY = window.innerHeight - noButton.offsetHeight - 20;

  noButton.style.position = "absolute";
  noButton.style.transition = "left 0.3s, top 0.3s";
  noButton.style.left = Math.random() * maxX + "px";
  noButton.style.top = Math.random() * maxY + "px";

  // Show and update message
  noMessage.classList.remove("hidden");
  noMessage.innerHTML = messages[Math.min(noClickCount - 1, messages.length - 1)];

  // Remove "No" button after final message
  if (noClickCount === messages.length) {
    noButton.remove();
  }
});

// Handle "Yes" button clicks
yesButton.addEventListener("click", () => {
  heading.innerHTML = "Happy Valentine’s Day 💖";
  document.querySelector(".buttons").classList.add("hidden");
  congratsMessage.classList.remove("hidden");
  noMessage.classList.add("hidden");

  // Change background to romantic theme
  body.style.transition = "background 2s ease-in-out";
  body.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)";

  // Heart rain effect
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
      heart.style.position = "absolute";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.opacity = Math.random();
      body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }, i * 100);
  }

  // Firework effect
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = Math.random() * 100 + "vw";
      firework.style.top = Math.random() * 80 + "vh";
      body.appendChild(firework);
      setTimeout(() => firework.remove(), 1000);
    }, i * 500);
  }

});
