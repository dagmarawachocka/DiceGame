function rollDice() {
  const randomNumber1 = Math.ceil(Math.random() * 6);
  document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  const randomNumber2 = Math.ceil(Math.random() * 6);
  document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    return document.querySelector("div h1").textContent = "🏆 Player 1 Won";
  } else if (randomNumber2 > randomNumber1) {
    return document.querySelector("div h1").textContent = "Player 2 Won 🏆";
  } else if (randomNumber1 === randomNumber2) {
    return document.querySelector("div h1").textContent = "It is a DRAW!";
  }
}

const rollButton = document.querySelector(".roll-button");
rollButton.addEventListener('click', rollDice);

