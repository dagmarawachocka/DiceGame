//////// FIRST DICE ////////

var randomNumber1 = Math.ceil(Math.random() * 6);
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

//////// SECOND DICE ////////

var randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


//////// PĘTLA WHO WON / DRAW ////////

if (randomNumber1 > randomNumber2) {
  document.querySelector("div h1").textContent = "🏆 Player 1 Won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("div h1").textContent = "Player 2 Won 🏆";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("div h1").textContent = "It is a DRAW!";
}
