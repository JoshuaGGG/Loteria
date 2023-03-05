
function selectBoard(selectedBoard){
    const allBoards =[1,2,3,4,5,6];
    const cpuBoards = allBoards.filter(board => board !== selectedBoard);
    const cpu1Board = cpuBoards[0];
    const cpu2Board = cpuBoards[1];
}
const boards = document.getElementsByClassName("board");
for (let i = 0; i < boards.length; i++) {
  boards[i].addEventListener("click", function() {
    const selectedBoard = this.getAttribute("data-board");
    const boardSelection = document.getElementById("board-selection");
    const gameplay = document.getElementById("gameplay");
    // this hides the board selection section 
    boardSelection.style.display = "none";
    // Show gameplay section
    gameplay.style.display = "block";
    // TODO: Display selected board, cpu1 board, cpu2 board, score, and deck
  });
}













// const board = document.getElementsByClassName("board");
// for (let index = 0; index < board.length; index++) {
//     const element = board[index];
//     console.log(this)
//     element.addEventListener("click", selectBoard(index))
// }

