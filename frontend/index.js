import Ball from './classes/Ball.js'
import Platform from './classes/Platform.js'
import Player from './classes/Player.js'
import { map } from './maps.js'
import { playerCanvas, playerCanvasCtx } from './utils/canvas.js'
import { collisionLoop } from './utils/collision.js'
import { STATUS } from './utils/constants.js'
import checkGameoverStatus from './utils/gameover.js'

const platforms = []
for (let i = 0; i < 6; i++) {
  platforms.push(new Platform(i * 80))
}

function drawLoop() {
  Ball.update()
  Player.draw()
  platforms.forEach((platform) => platform.draw())
  Object.values(map.coordinates).forEach((bubble) => {
    bubble.draw()
  })
}

setTimeout(() => {
  Ball.draw()
  Player.init()
  for (const bubble of Object.values(map.coordinates)) {
    bubble.draw()
    platforms.forEach((platform) => platform.draw())
  }
}, 200)

socket.on('connect', () => {
  socket.on('updateConnections', (players) => {
    // Do something when a new player has joined
    Player.draw()
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
  collisionLoop(platforms)
  if (checkGameoverStatus() === STATUS.VICTORY) {
    alert('you won!')
    return
  } else if (checkGameoverStatus() === STATUS.LOSS) {
    alert('You lost')
    return
  }
  window.requestAnimationFrame(render)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.requestAnimationFrame(render)
  }
})
