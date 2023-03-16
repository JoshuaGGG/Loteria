function selectBoard(selectedBoard) {
  let allBoards = [1, 2, 3, 4, 5, 6];
  allBoards.splice(selectedBoard-1, 1);
  selectComputerBoards(selectedBoard -1)

  const board = document.getElementById("player-board");

  board.addEventListener("dragover", function(e) {
    e.preventDefault();
  });

  board.addEventListener("drop", function(e) {
    e.preventDefault();
    const token = document.getElementById("selected-token");
    token.parentNode.removeChild(token);
    board.appendChild(token);
  });

  const tokens = document.querySelectorAll("#bean-placement-token img");
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    token.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/plain", "");
      e.dataTransfer.setDragImage(e.target, 0, 0);
      token.setAttribute("id", "selected-token");
    });
  }
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
}

function generateBoards() {
  const boardSize = 25;
  const totalCards = 49;
  const similarCardSets = [    [1, 2],
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

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var bean = document.getElementById(data);
  event.target.appendChild(bean);
}

const spaces = document.querySelectorAll('.board-space');
spaces.forEach(space => {
  space.addEventListener('click', () => {
    const spaceIndex = Array.from(spaces).indexOf(space);
    const boardIndex = currentPlayer;
    if (currentCard.name === loteria[spaceIndex].name) {
      updateBoard(boards[boardIndex], currentCard, spaceIndex);
      if (checkWin(boards[boardIndex])) {
        winner = currentPlayer;
        endGame();
      }
      currentPlayer = (currentPlayer + 1) % numPlayers;
      showCurrentPlayer();
    }
  });
});

function handleWildcard() {
  for (let i = 0; i < numPlayers; i++) {
    const board = boards[i];
    for (let j = 0; j < board.length; j++) {
      if (board[j] === 0) {
        board[j] = 1;
        const space = spaces[j];
        const bean = document.createElement('img');
        bean.src = 'img/bean.png';
        space.appendChild(bean);
      }
    }
  }
}

function handleTakeaway() {
  for (let i = 0; i < numPlayers; i++) {
    const board = boards[i];
    for (let j = 0; j < board.length; j++) {
      if (board[j] === 1) {
        board[j] = 0;
        const space = spaces[j];
        space.innerHTML = '';
      }
    }
  }
}

function updateBoard(board, card, spaceIndex) {
  board[spaceIndex] = 1;
  const space = spaces[spaceIndex];
  const bean = document.createElement('img');
  bean.src = 'img/bean.png';
  space.appendChild(bean);
}


function checkForWinner(board){
  for (let row = 0; row < 5; row++) {
  let sequence = 0;
  let player = null;
  for (let col = 0; col < 5; col++) {
    let token = board[row][col];
    if (token === null) {
      sequence = 0;
      player = null;
    } else if (player === null) {
      sequence = 1;
      player = token;
    } else if (token === player) {
      sequence++;
      if (sequence === 5) {
        return player;
      }
    } else {
      sequence = 1;
      player = token;
    }
  }
}
}





  












