import { playerCanvas } from "../utils/canvas.js"

class Ball {
  constructor(ctx) {
    this.ctx = ctx
    this.x = 240
    this.y = 500
    this.dy = 5
    this.angle = 90
    this.dx = 0

    this.radius = 10
    ctx.fillStyle = 'blue'
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  update() {
    // if (this.x - this.radius <= playerCanvas.getBoundingClientRect().x)

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}

export default Ball
