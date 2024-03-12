import { playerCanvas } from '../utils/canvas.js'

class Player {
  constructor(ctx) {
    this.x = 200
    this.y = 750
    this.ctx = ctx
    this.thickness = 20
    this.length = 60
    this.dx = 5
  }

  draw() {
    this.ctx.lineWidth = this.thickness
    this.ctx.strokeStyle = 'red'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)
    this.ctx.stroke()
  }

  update(offsetX) {
    const boundary = playerCanvas.width / 2
    if (offsetX < boundary && this.x >= 0) {
      this.x -= this.dx
    } else if (this.x <= playerCanvas.width - this.length) {
      this.x += this.dx
    }

    this.draw()
  }
}

export default Player
