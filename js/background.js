const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const bgImageAfter = document.querySelector(".bgImageAfter");
bgImage.src = `./images/${chosenImage}`;

bgImageAfter.appendChild(bgImage);
