import Ball from './classes/Ball.js'
import Player from './classes/Player.js'
import { playerCanvas, playerCanvasCtx } from './utils/canvas.js'
import { handleCollisions } from './utils/collision.js'

const player = new Player(playerCanvasCtx)
const ball = new Ball(playerCanvasCtx)

socket.on('connect', () => {
  socket.on('updateConnections', (players) => {
    // Do something when a new player has joined
    player.draw()
  })
})

function render() {
  playerCanvasCtx.clearRect(0, 0, playerCanvas.width, 800)
  ball.update()
  player.draw()
  handleCollisions(ball, player)
  window.requestAnimationFrame(render)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.requestAnimationFrame(render)
  }
})
