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
    removeBoards(e.target.parentNode.parentNode);
    selectBoard(e.target.parentNode.id.slice(-1));
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
  }
  clickedBoard.style.display = "block";
  removeEventListener("onclick",removeBoards)

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
        board.innerHTML += `<img src="images/${img}">`;
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
        board.innerHTML += `<img src="images/${img}">`;
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

let cardIndex = 0;
const cardImage = document.getElementById('card-image');
cardImage.src = 'images/' + cards[cardIndex].name;

const intervalId = setInterval(() => {
  if (cardIndex >= cards.length) {
    clearInterval(intervalId);
    return;
  }
  
  const cardImage = document.getElementById('card-image');
  cardImage.src = 'images/' + cards[cardIndex].name;
  cardIndex++;
  
  const timerBar = document.getElementById('timer-bar');
  timerBar.style.width = '100%';
  
  setTimeout(() => {
    timerBar.style.width = '0%';
  }, 2000); 
}, 3000);

//let player place token or no token keep track array cards//
let usedCards = []; // array to keep track of used cards

function displayCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  const index = usedCards.indexOf(card.name); // check if card was already used
  if (index !== -1) {
    usedCards.splice(index, 1); // remove card from usedCards if it was already used
  }
  usedCards.push(card.name); // add card to usedCards
  const cardImg = document.createElement("img");
  cardImg.src = "images/" + card.name;
  document.getElementById("card-display").appendChild(cardImg);

  // add event listener to card image to allow player to place a token on the board
  cardImg.addEventListener("click", function() {
    const selectedImg = document.querySelector(".board img[src='images/" + card.name + "']");
    if (!selectedImg) {
      alert("Error: no matching image on board");
    } else {
      const token = document.createElement("div");
      token.classList.add("token");
      selectedImg.parentElement.appendChild(token);
      checkWin(selectedImg);
    }
  });
}



//bean img show up still not working//
const bean = document.getElementById('bean');

const beanPiece = document.querySelectorAll(".bean-piece")
console.log(beanPiece)
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
  console.log(dragging)
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  console.log(event)
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  console.log(event)
}

function dragStart(e) {
  beingDragged = e.target
  console.log(dragStart)
}

function dragOver(e) {
  e.preventDefault()
  console.log(dragOver)
}

function dragDrop(e) {
  e.target.append(beingDragged)
  console.log(dragDrop)
}

function allowDrop(e) {
  e.preventDefault();
  e.target.classList.remove('drag-over');
}

//check win//
function checkWin(boardId) {
  const board = document.getElementById(boardId);
  const squares = board.getElementsByTagName("td");
  const numSquares = squares.length;
  const numRows = Math.sqrt(numSquares);
  const boardArray = Array.from(squares).map(square => square.textContent);

  // Check rows
  for (let i = 0; i < numSquares; i += numRows) {
    const row = boardArray.slice(i, i + numRows);
    if (row.every(elem => elem === "X")) {
      return "X";
    } else if (row.every(elem => elem === "O")) {
      return "O";
    }
  }

  // Check columns
  for (let i = 0; i < numRows; i++) {
    const col = [];
    for (let j = i; j < numSquares; j += numRows) {
      col.push(boardArray[j]);
    }
    if (col.every(elem => elem === "X")) {
      return "X";
    } else if (col.every(elem => elem === "O")) {
      return "O";
    }
  }

  // Check diagonal from top left to bottom right
  const diagonal1 = [];
  for (let i = 0; i < numSquares; i += numRows + 1) {
    diagonal1.push(boardArray[i]);
  }
  if (diagonal1.every(elem => elem === "X")) {
    return "X";
  } else if (diagonal1.every(elem => elem === "O")) {
    return "O";
  }

  // Check diagonal from top right to bottom left
  const diagonal2 = [];
  for (let i = numRows - 1; i < numSquares - 1; i += numRows - 1) {
    diagonal2.push(boardArray[i]);
  }
  if (diagonal2.every(elem => elem === "X")) {
    return "X";
  } else if (diagonal2.every(elem => elem === "O")) {
    return "O";
  }

  // No winner yet
  return null;
}

const winner = checkWin("myBoard");
if (winner) {
  alert(`Congratulations, player ${winner}! You won!`);
}




function takeAwayToken(board) {
  const tokens = board.querySelectorAll(".token");
  if (tokens.length > 0) {
    const tokenIndex = Math.floor(Math.random() * tokens.length);
    tokens[tokenIndex].parentNode.removeChild(tokens[tokenIndex]);
  }
}

function placeTokenAnywhere(board) {
  const cells = board.querySelectorAll(".cell");
  const emptyCells = [];
  for (let i = 0; i < cells.length; i++) {
    if (!cells[i].querySelector(".token")) {
      emptyCells.push(cells[i]);
    }
  }
  if (emptyCells.length > 0) {
    const cellIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[cellIndex].innerHTML = '<div class="token"></div>';
  }
}

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




    