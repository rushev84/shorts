import Game from './game' // импорт класса игры

const gameInfo = document.querySelector('#game-info')
const board = document.querySelector('#game-board')
const restartButton = document.querySelector('#game-restart')

const game = new Game(board, gameInfo, restartButton) // создаине экземпляра игры

console.log('index.js')
