// 1. Select DOM Elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultMessageEl = document.getElementById('result-message');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

// 2. Initial State & Data Lookups
let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

const choiceEmojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
};

// Winning logic mapping: key beats value
const winRules = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

// 3. Core Game Logic
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  // Draw Condition
  if (playerChoice === computerChoice) {
    resultMessageEl.textContent = `It's a tie! Both chose ${choiceEmojis[playerChoice]} ${capitalize(playerChoice)}.`;
    resultMessageEl.style.color = '#e2e8f0'; // Neutral white/gray
    return;
  }

  // Player Win Condition
  if (winRules[playerChoice] === computerChoice) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    resultMessageEl.textContent = `You win! ${choiceEmojis[playerChoice]} ${capitalize(playerChoice)} beats ${choiceEmojis[computerChoice]} ${capitalize(computerChoice)}.`;
    resultMessageEl.style.color = '#4ade80'; // Emerald Green
  } 
  // Computer Win Condition
  else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    resultMessageEl.textContent = `You lose! ${choiceEmojis[computerChoice]} ${capitalize(computerChoice)} beats ${choiceEmojis[playerChoice]} ${capitalize(playerChoice)}.`;
    resultMessageEl.style.color = '#f87171'; // Coral Red
  }
}

// Helper function to capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Reset Game State
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  resultMessageEl.textContent = 'Choose your weapon to start!';
  resultMessageEl.style.color = '#ffffff';
}

// 4. Attach Event Listeners
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const choice = button.getAttribute('data-choice');
    playRound(choice);
  });
});

resetBtn.addEventListener('click', resetGame);