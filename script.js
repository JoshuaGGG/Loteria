function selectBoard(selectedBoard) {
  const allBoards = [1, 2, 3, 4, 5, 6];
  const cpuBoards = allBoards.filter((board) => board !== selectedBoard);
  const cpu1Board = cpuBoards[0];
  const cpu2Board = cpuBoards[1];
}

const boards = document.getElementsByClassName("board");

for (let i = 0; i < boards.length; i++) {
  boards[i].addEventListener("click", function () {
    const selectedBoard = this.getAttribute("data-board");
    const boardSelection = document.getElementById("board-selection");
    const gameplay = document.getElementById("gameplay");
    const playerBoard = document.getElementById("player-board");
    const cpu1Board = document.getElementById("cpu1-board");
    const cpu2Board = document.getElementById("cpu2-board");
    const score = document.getElementById("score");
    const deck = document.getElementById("deck");
    const beanPlacementToken = document.getElementById("bean-placement-token");
    boardSelection.classList.add("hidden", "fadeOut");
    gameplay.classList.remove("hidden");
    gameplay.classList.add("fadeIn");

    const selectedBoardElement = document.getElementById(selectedBoard);
    if (selectedBoardElement) {
      selectedBoardElement.classList.remove("hidden");
      selectedBoardElement.classList.add("fadeIn");
      playerBoard.appendChild(selectedBoardElement.cloneNode(true));
    }

    const cpu1BoardElement = document.getElementById("cpu" + cpu1Board + "-board");
    if (cpu1BoardElement) {
      cpu1BoardElement.appendChild(cpu1BoardElement.cloneNode(true));
    }

    const cpu2BoardElement = document.getElementById("cpu" + cpu2Board + "-board");
    if (cpu2BoardElement) {
      cpu2BoardElement.appendChild(cpu2BoardElement.cloneNode(true));
    }

    score.classList.remove("hidden");
    score.classList.add("fadeIn");
    deck.classList.remove("hidden");
    deck.classList.add("fadeIn");

    beanPlacementToken.classList.remove("hidden");
    beanPlacementToken.classList.add("fadeIn");
  });
}







