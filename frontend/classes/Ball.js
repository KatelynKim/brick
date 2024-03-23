class Ball {
  constructor(ctx) {
    this.ctx = ctx
    this.x = 240
    this.y = 500
    this.dx = 0
    this.dy = 1
    this.angle = 90
    this.speed = this.dy
    this.radius = 10
    ctx.fillStyle = 'blue'
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  update() {
    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}

export default Ball
