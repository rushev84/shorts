export default class Game {
  constructor(board, gameInfo, restartButton) {
    this.board = board
    this.gameInfo = gameInfo
    this.restartButton = restartButton
    this.xIsNext = null
    this.squares = null
    this.boardHandler = null
    this.resetHandler = null
    this.isGameFinished = null

    this.winnerMatrix = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ]
    this.initListeners()
    this.startNewGame()
  }
}
