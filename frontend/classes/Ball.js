class Ball {
  constructor(ctx) {
    this.ctx = ctx
    this.x = 240
    this.y = 500
    this.dy = 1
    this.acceleration = 0.05

    this.radius = 10
    ctx.fillStyle = 'blue'
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  update() {
    this.dy += this.acceleration
    this.y += this.dy
    this.draw()
  }
}

export default Ball
