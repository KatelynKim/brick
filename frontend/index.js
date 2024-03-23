import Ball from './classes/Ball.js'
import Player from './classes/Player.js'
import { playerCanvas, playerCanvasCtx } from './utils/canvas.js'

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
  player.draw()

  // Handle collision between the ball and the player
  if (playerBall.y + playerBall.radius >= player.y - player.thickness / 2 &&
    playerBall.x >= player.x && playerBall.x <= player.x + player.length
  ) {
    const angle = 90- (45/(player.length/2)) * (playerBall.x - player.x - player.length/2)
    console.log("angle:", angle)
    playerBall.dx = playerBall.dy / Math.tan(Math.PI * angle / 180 )
    playerBall.dy *= -1

  }
  if(playerBall.x - playerBall.radius <= 0){
    playerBall.dx *= -1
  }
  if(playerBall.y - playerBall.radius <= 0){
    playerBall.dy *= -1
  }
  if(playerBall.x + playerBall.radius >= playerCanvas.clientWidth){
    playerBall.dx *= -1
  }




  window.requestAnimationFrame(render)
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    window.requestAnimationFrame(render)
  }
})
