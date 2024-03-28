import Ball from './classes/Ball.js'
import Platform from './classes/Platform.js'
import Player from './classes/Player.js'
import { map } from './maps.js'
import { playerCanvas, playerCanvasCtx } from './utils/canvas.js'
import { handleCollisions } from './utils/collision.js'

const player = new Player(playerCanvasCtx)
const ball = new Ball(playerCanvasCtx)
const platforms = []
for (let i = 0; i < 6; i++) {
  platforms.push(new Platform(i * 80))
}

function drawLoop() {
  ball.update()
  player.draw()
  platforms.forEach((platform) => platform.draw())
}

setTimeout(() => {
  for (const bubble of Object.values(map.coordinates)) {
    bubble.draw()
    platforms.forEach((platform) => platform.draw())
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
  handleCollisions(ball, player, platforms)
  window.requestAnimationFrame(render)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.requestAnimationFrame(render)
  }
})
