const score1 = document.querySelector("#TotalscoreP1");
const score2 = document.getElementById("TotalscoreP2");
const dice = document.querySelector(".dices");
const diceRoll = document.querySelector(".rolldice");
const letestScoreP1 = document.querySelector("#currentScore1");
const letestScoreP2 = document.querySelector("#currentScore2");
const SelectorP1 = document.querySelector(".player-1");
const SelectorP2 = document.querySelector(".player-2");
const holdNum = document.querySelector(".hold");
const newGame = document.querySelector(".newgame");
let playing = true;

const backGround = function () {
  currentScore = 0;
  letestScoreP1.textContent = 0;
  letestScoreP2.textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  if (activePlayer == 0) {
    SelectorP1.style.backgroundColor = "rgb(213, 107, 125)";
    SelectorP2.style.backgroundColor = "rgb(235, 129, 147)";
  } else {
    SelectorP2.style.backgroundColor = "rgb(213, 107, 125)";
    SelectorP1.style.backgroundColor = "rgb(235, 129, 147)";
  }
};

const winner = function () {
  const target = 100;
  if (P1holdding >= target) {
    document.querySelector(".player-1").style.backgroundColor =
      "rgb(102, 248, 102)";
    document.querySelector(".player-1").classList.remove("player--1");
    dice.classList.add("hidden");
    playing = false;
  } else if (P2holding >= target) {
    document.querySelector(".player-2").style.backgroundColor =
      "rgb(102, 248, 102)";
    document.querySelector(".player-2").classList.remove("player--2");
    dice.classList.add("hidden");
    playing = false;
  } else {
    backGround();
  }
};

let currentScore = 0;
let activePlayer = 1;
let P1holdding = 0;
let P2holding = 0;

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add("hidden");

diceRoll.addEventListener("click", function () {
  if (playing) {
    const dices = Math.trunc(Math.random() * 6) + 1;
    console.log(dices);
    dice.classList.remove("hidden");
    dice.src = `dice-${dices}.png`;
    if (dices !== 1) {
      currentScore += dices;
      activePlayer == 1
        ? (letestScoreP1.textContent = currentScore)
        : (letestScoreP2.textContent = currentScore);
    } else {
      backGround();
    }
  }
});

holdNum.addEventListener("click", function () {
  if (currentScore <= 0) {
    return;
  }
  if (playing) {
    if (activePlayer == 1) {
      P1holdding += currentScore;
      console.log(P1holdding);
      score1.textContent = P1holdding;
    } else {
      P2holding += currentScore;
      console.log(P2holding);
      score2.textContent = P2holding;
    }
    winner();
  }
  // backGround();
});

// if (score1 >= 20) {
//   document.querySelector(`.player-${currentPlayer}`).add(".winning");
//   document
//     .querySelector(`.player-${currentPlayer}`)
//     .remove(`.player-${currentPlayer}`);
// } else if (score2 >= 20) {
//   document.querySelector(`.player-${currentPlayer}`).add(".winning");
//   document
//     .querySelector(`.player-${currentPlayer}`)
//     .remove(`.player-${currentPlayer}`);
// } else {
//   backGround();
// }

newGame.addEventListener("click", function () {
  dice.classList.add("hidden");
  currentScore = 0;
  P1holdding = 0;
  P2holding = 0;
  document.getElementById("TotalscoreP1").textContent = 0;
  document.getElementById("TotalscoreP2").textContent = 0;
  document.getElementById("currentScore1").textContent = 0;
  document.getElementById("currentScore2").textContent = 0;
  SelectorP1.style.backgroundColor = "rgb(235, 129, 147)";
  SelectorP2.style.backgroundColor = "rgb(213, 107, 125)";
  playing = true;
});
