import Ball from './classes/Ball.js'
import Player from './classes/Player.js'
import { mapDefault } from './maps.js'
import { playerCanvas, playerCanvasCtx } from './utils/canvas.js'
import { handleCollisions } from './utils/collision.js'

const player = new Player(playerCanvasCtx)
const ball = new Ball(playerCanvasCtx)

function drawLoop() {
  ball.update()
  player.draw()
}

setTimeout(() => {
  for (const bubble of Object.values(mapDefault)) {
    bubble.draw()
  }
}, 200)

socket.on('connect', () => {
  socket.on('updateConnections', (players) => {
    // Do something when a new player has joined
    player.draw()
  })
})

function render() {
  playerCanvasCtx.clearRect(
    0,
    0,
    playerCanvas.clientWidth,
    playerCanvas.clientHeight
  )

  drawLoop()
  handleCollisions(ball, player)
  window.requestAnimationFrame(render)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.requestAnimationFrame(render)
  }
})
