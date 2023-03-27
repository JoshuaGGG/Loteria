let inPlay = false;
function selectBoard(selectedBoard) {
  let allBoards = [1, 2, 3, 4, 5, 6];
  allBoards.splice(selectedBoard-1, 1);
  selectComputerBoards(selectedBoard -1)

  const board = document.getElementById("player-board");
}
// creates event listener for every board
const boards = document.getElementsByClassName("board");
for (let i = 0; i < boards.length; i++) {
  boards[i].addEventListener("click", function(e){
    if (inPlay == false) {
      removeBoards(e.target.parentNode.parentNode);
      selectBoard(e.target.parentNode.id.slice(-1));
    }
  })
}

// Hides boards, logo, and text, and shows gameplay when a board is selected.
function removeBoards(clickedBoard) {
  for (let i = 0; i < boards.length; i++) {
    const element = boards[i];
    element.parentNode.style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("gameplay").style.display = "block";
    inPlay = true;
  }
  clickedBoard.style.display = "block";
  playBackgroundMusic();
}
  
//generates six random boards with no repeating cards in one board//
function generateBoards() {
  const boardSize = 25;
  const totalCards = 49;
  const similarCardSets = [    
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  
  const allCards = [];
  for (let i = 1; i <= totalCards; i++) {
    allCards.push(`card${i}.png`);
  }
  
  for (let k = 0; k < boards.length; k++) {
    const board = boards[k];
    const usedCards = [];
    
    if (k < 3) {
      const [cardA, cardB] = similarCardSets[k];
      const cards = shuffleArray([`card${cardA}.png`, `card${cardB}.png`, ...allCards]);
      
      for (let j = 0; j < boardSize; j++) {
        let img = cards.pop();
        while (usedCards.includes(img)) {
          img = cards.pop();
        }
        board.innerHTML += `<div style="background-image: url('images/${img}'); width: 290px; height: 180px;  border-radius: 10px; box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); max-width: 100px; background-size:cover;">
        <img style="display: none;" src="images/${img}">
       </div>`;
        usedCards.push(img);
      }
    } else {
      const [cardA, cardB] = similarCardSets[k - 3];
      const cards = shuffleArray([`card${cardA}.png`, `card${cardB}.png`, ...allCards]);
      
      for (let j = 0; j < boardSize; j++) {
        let img = cards.pop();
        while (usedCards.includes(img)) {
          img = cards.pop();
        }
        board.innerHTML += `<div style="background-image: url('images/${img}'); width: 290px; height: 180px;  border-radius: 10px; box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); max-width: 100px; background-size:cover;">
        <img style="display: none;" src="images/${img}">
       </div>`;
        usedCards.push(img);
      }
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

generateBoards();


// creates random numbers for the cpu selected boards
function selectComputerBoards(selectedBoardIndex) {
  console.log(selectedBoardIndex)
  const allBoardIndices = [1, 2, 3, 4, 5, 6];
  allBoardIndices.splice(selectedBoardIndex, 1);

  const cpu1BoardNum = allBoardIndices[Math.floor(Math.random() * 5)];
  const cpu1BoardIndex = allBoardIndices.indexOf(cpu1BoardNum)
  allBoardIndices.splice(cpu1BoardIndex, 1);

  const cpu2BoardNum = allBoardIndices[Math.floor(Math.random() * 4)];
  const cpu2BoardIndex = allBoardIndices.indexOf(cpu2BoardNum)
  allBoardIndices.splice(cpu2BoardIndex, 1);

  console.log("cpu1: " + cpu1BoardNum)
  console.log("cpu2: " + cpu2BoardNum)
  const cpu1Board = document.getElementById(`board${cpu1BoardNum}`).parentElement;
  const cpu2Board = document.getElementById(`board${cpu2BoardNum}`).parentElement;
  cpu1Board.style.display = 'block';
  cpu2Board.style.display = 'block'; 
}

const cards = [
  { name: 'card1.png', type: 'normal' },
  { name: 'card2.png', type: 'normal' },
  { name: 'card3.png', type: 'normal' },
  { name: 'card4.png', type: 'normal' },
  { name: 'card5.png', type: 'normal' },
  { name: 'card6.png', type: 'normal' },
  { name: 'card7.png', type: 'normal' },
  { name: 'card8.png', type: 'normal' },
  { name: 'card9.png', type: 'normal' },
  { name: 'card10.png', type: 'normal' },
  { name: 'card11.png', type: 'normal' },
  { name: 'card12.png', type: 'normal' },
  { name: 'card13.png', type: 'normal' },
  { name: 'card14.png', type: 'normal' },
  { name: 'card15.png', type: 'normal' },
  { name: 'card16.png', type: 'normal' },
  { name: 'card17.png', type: 'normal' },
  { name: 'card18.png', type: 'normal' },
  { name: 'card19.png', type: 'normal' },
  { name: 'card20.png', type: 'normal' },
  { name: 'card21.png', type: 'normal' },
  { name: 'card22.png', type: 'normal' },
  { name: 'card23.png', type: 'normal' },
  { name: 'card24.png', type: 'normal' },
  { name: 'card25.png', type: 'normal' },
  { name: 'card26.png', type: 'normal' },
  { name: 'card27.png', type: 'normal' },
  { name: 'card28.png', type: 'normal' },
  { name: 'card29.png', type: 'normal' },
  { name: 'card30.png', type: 'normal' },
  { name: 'card31.png', type: 'normal' },
  { name: 'card32.png', type: 'normal' },
  { name: 'card33.png', type: 'normal' },
  { name: 'card34.png', type: 'normal' },
  { name: 'card35.png', type: 'normal' },
  { name: 'card36.png', type: 'normal' },
  { name: 'card37.png', type: 'normal' },
  { name: 'card38.png', type: 'normal' },
  { name: 'card39.png', type: 'normal' },
  { name: 'card40.png', type: 'normal' },
  { name: 'card41.png', type: 'normal' },
  { name: 'card42.png', type: 'normal' },
  { name: 'card43.png', type: 'normal' },
  { name: 'card44.png', type: 'normal' },
  { name: 'card45.png', type: 'normal' },
  { name: 'card46.png', type: 'normal' },
  { name: 'card47.png', type: 'normal' },
  { name: 'card48.png', type: 'normal' },
  { name: 'card49.png', type: 'normal' },
  { name: 'wildcard.png', type: 'wildcard' },
  { name: 'takeaway.png', type: 'takeaway' },
  { name: 'wildcard.png', type: 'wildcard' },
  { name: 'takeaway.png', type: 'takeaway' },
  { name: 'wildcard.png', type: 'wildcard' },
  { name: 'takeaway.png', type: 'takeaway' },
];

//shuffles the cards and displays the cards with a timer// 
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  cards.forEach(card => {
    card.used = false;
  });
}

shuffleCards(cards);

let cardIndex = 0;
const boardCards = document.querySelectorAll(".card-container img")
const cardImage = document.getElementById('card-image');
cardImage.src = 'images/' + cards[cardIndex].name;
const displayCard = document.querySelector('.display-card img');
const boardCard = document.querySelector('.board img');

cardImage.style.opacity = 1;
cards[cardIndex].used = true;

const displayedCards = [];
const matchedCards = [];

function checkMatch() {
  for (let i = 0; i < boardCards.length; i++) {
    if (cardImage.src === boardCards[i].src && !matchedCards.includes(boardCards[i].parentNode)) {
      matchedCards.push(boardCards[i].parentNode);
    }
  }
}

function checkDisplayedCards() {
  const boardContainers = document.querySelectorAll('.board');
  for (let i = 0; i < displayedCards.length; i++) {
    const displayedCard = displayedCards[i];
    for (let j = 0; j < boardContainers.length; j++) {
      const boardCards = boardContainers[j].querySelectorAll('.card-container img');
      for (let k = 0; k < boardCards.length; k++) {
        const boardCard = boardCards[k];
        if (displayedCard.name === boardCard.src.split('/').pop() && !matchedCards.includes(boardCard.parentNode)) {
          matchedCards.push(boardCard.parentNode);
        }
      }
    }
  }
}
const totalTime = 5000;
const intervalId = setInterval(() => {
  if (cardIndex >= cards.length) {
    clearInterval(intervalId);
    return;
  }
  
  let nextCard;
  do {
    nextCard = cards[Math.floor(Math.random() * cards.length)];
  } while (nextCard.used);
  
  const cardImage = document.getElementById('card-image');
  cardImage.src = 'images/' + nextCard.name;
  cardImage.style.opacity = 1;
  nextCard.used = true;
  displayedCards.push(nextCard);
  cardIndex++;
  
  const timerBar = document.getElementById('timer-bar');
  let timeLeft = totalTime;
  const timerId = setInterval(() => {
    timeLeft -= 10;
    const timePercent = Math.max(0, (timeLeft / totalTime) * 100);
    timerBar.style.width = `${timePercent}%`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerBar.style.width = '0%';
      cardImage.style.opacity = 0;
    }
  }, 10);
  checkMatch();
  checkDisplayedCards();
}, totalTime + 1000);


//drag and drop img of the token and clones the token to the wholebean container for further use of the token//
const bean = document.getElementById('bean');
const beanPiece = document.querySelectorAll(".bean-piece")
const grid = document.querySelectorAll(".board")
const scoreDisplay = document.querySelector("#score")
var beingDragged;


bean.addEventListener("dragstart", dragStart)

grid.forEach(square => {
  square.addEventListener("drop", dragOver)
  square.addEventListener("drop", dragDrop)
  square.addEventListener("dragover", allowDrop)
})
function dragging(){
  scoreDisplay.textContent = "You are dragging a " + beingDragged.id
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const original = document.getElementById(data);
  const clone = original.cloneNode(true);
  clone.id = 'clone-' + clone.id;
  clone.draggable = true;
  clone.addEventListener('dragstart', dragStart);
  event.target.appendChild(clone);
}

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(e) {
  e.preventDefault()
}

function dragDrop(e) {
  e.target.append(beingDragged)
}

function allowDrop(e) {
  e.preventDefault();
  e.target.classList.remove('drag-over');
}

//win and gameover music//
let gameEnded = false; // variable to keep track of whether the game has ended

function playBackgroundMusic() {
  const bgm = document.getElementById("bgm");
  bgm.play();
}

function playGameOverMusic() {
  const gameOverMusic = document.getElementById("game-over");
  gameOverMusic.play();
}

function playVictoryMusic() {
  const victoryMusic = document.getElementById("win");
  victoryMusic.play();
}


function endGame(win) {
  gameEnded = true;
  if (win) {
    playVictoryMusic();
    document.getElementById("win-display").style.display = "block";
    document.getElementById("card-container").style.display = "none";
    document.getElementById("wholebean").style.display = "none";
  } else {
    playGameOverMusic();
    document.getElementById("lose-display").style.display = "block";
    document.getElementById("card-container").style.display = "none";
    document.getElementById("wholebean").style.display = "none";
  }
}




    