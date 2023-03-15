function selectBoard(selectedBoard) {
  const allBoards = [1, 2, 3, 4, 5, 6];
  const cpuBoards = allBoards.filter((board) => board !== selectedBoard);
  const cpu1Board = cpuBoards[0];
  const cpu2Board = cpuBoards[1];
}

const boards = document.getElementsByClassName("board");

console.log(boards)
for (let i = 0; i < boards.length; i++) {
  boards[i].addEventListener("click", function(e){
    console.log(e.target.parentNode)
    removeBoards(e.target.parentNode.parentNode)
  })
}
// Hides boards, logo, and text, and shows gameplay when a board is selected.
function removeBoards(clickedBoard) {
  for (let i = 0; i < boards.length; i++) {
    const element = boards[i];
    element.parentNode.style.display = "none"
    document.getElementById("logo").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("gameplay").style.display = "block";
  }
  clickedBoard.style.display = "block"
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



let selectedBoardIndex = null;
function selectBoard(boardIndex){
  selectedBoardIndex = boardIndex;
  selectComputerBoards();
}

function selectComputerBoards() {
  const allBoardIndices = [1, 2, 3, 4, 5, 6];
  const remainingBoardIndices = allBoardIndices.filter(index => index !== selectedBoardIndex);
  const cpu1BoardIndex = remainingBoardIndices[Math.floor(Math.random() * 5)];
  const cpu2BoardIndex = remainingBoardIndices.filter(index => index !== cpu1BoardIndex)[Math.floor(Math.random() * 4)];
  const cpu1Board = document.querySelector(`[data-board="${cpu1BoardIndex}"]`);
  const cpu2Board = document.querySelector(`[data-board="${cpu2BoardIndex}"]`);

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
  }, 5000); 
}, 5000);


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




  












