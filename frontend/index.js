import Ball from './classes/Ball.js'
import Player from './classes/Player.js'
import { playerCanvas, playerCanvasCtx } from './utils/canvas.js'

let offsetX
playerCanvas.addEventListener('mousemove', (event) => {
  offsetX = event.offsetX
})

const player = new Player(playerCanvasCtx)
const playerBall = new Ball(playerCanvasCtx)

socket.on('connect', () => {
  socket.on('updateConnections', (players) => {
    // Do something when a new player has joined
    player.draw()
  })
})

function render() {
  playerCanvasCtx.clearRect(0, 0, playerCanvas.width, 800)
  playerBall.update()
  player.update(offsetX)

  window.requestAnimationFrame(render)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.requestAnimationFrame(render)
  }
})
