import { playerCanvas } from '../utils/canvas.js'

class Player {
  constructor(ctx) {
    this.x = 200
    this.y = 750
    this.ctx = ctx
    this.thickness = 20
    this.length = 60
    this.dx = 15
    this.prevX
    playerCanvas.addEventListener('mousemove', this.handleMouseMove.bind(this))
  }

  handleMouseMove(event) {
    const cursorPos = event.offsetX
    const isMovingLeft = event.movementX < 0
    if (isMovingLeft) {
      if (this.x > cursorPos) {
        this.x -= this.dx
      }
    } else {
      if (
        this.x <= cursorPos &&
        this.x + this.length <= playerCanvas.clientWidth
      ) {
        this.x += this.dx
      }
    }
  }

  draw() {
    this.ctx.lineWidth = this.thickness
    this.ctx.strokeStyle = 'red'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)
    this.ctx.stroke()
  }
}

export default Player
