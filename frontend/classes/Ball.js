import { playerCanvasCtx } from '../utils/canvas.js'

class Ball {
  static x = 240
  static y = 500
  static dx = 0
  static dy = 5
  static angle = 90
  static speed = Ball.dy
  static radius = 10

  static draw() {
    playerCanvasCtx.fillStyle = 'white'
    playerCanvasCtx.beginPath()
    playerCanvasCtx.arc(Ball.x, Ball.y, Ball.radius, 0, 2 * Math.PI)
    playerCanvasCtx.fill()
  }

  static update() {
    Ball.x += Ball.dx
    Ball.y += Ball.dy
    Ball.draw()
  }
}

export default Ball
