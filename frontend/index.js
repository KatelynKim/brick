import Ball from './classes/Ball.js'
import Bubble from './classes/Bubble.js'
import Player from './classes/Player.js'
import { mapDefault } from './maps.js'
import { playerCanvas, playerCanvasCtx } from './utils/canvas.js'
import { handleCollisions } from './utils/collision.js'

const player = new Player(playerCanvasCtx)
const ball = new Ball(playerCanvasCtx)

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
  ball.update()
  player.draw()
  for (const bubble of Object.values(mapDefault)) {
    bubble.draw()
  }
  handleCollisions(ball, player)
  window.requestAnimationFrame(render)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.requestAnimationFrame(render)
  }
})
