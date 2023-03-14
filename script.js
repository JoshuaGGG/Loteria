function selectCPUBoard(selectedBoard) {
  const allBoards = [1, 2, 3, 4, 5, 6];
  const cpuBoards = allBoards.filter((board) => board !== selectedBoard);
  return [cpuBoards[0], cpuBoards[1]];
}

let [cpu1Board, cpu2Board] = selectCPUBoard(selectedBoard)

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
 for (let k = 0; k < boards.length; k++) {
  const element = boards[k];
    for (var j = 0; j < 25; j++) {
      var num = Math.floor(Math.random() * 49) + 1;
      let img = `card${num}.png`
      boards[k].innerHTML += "<img src='images/" + img + "'>";
    }
 }
  
}
generateBoards()

 
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

const deck = document.getElementById("deck");
const timer = document.getElementById("timer");

const timerDuration = 5000; 

let cardIndex = 0;
let timerId = setInterval(() => {
  cards.src = deck[cardIndex].name;
  timerBar.style.width = '100%';
  setTimeout(() => {
    timerBar.style.width = '0%';
  }, timerDuration);
  cardIndex = (cardIndex + 1) % deck.length;
}, timerDuration);
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



  












