class Ball {
  constructor(ctx) {
    this.ctx = ctx
    this.x = 250
    this.y = 700
    this.radius = 10
    ctx.fillStyle = 'blue'
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.fill()
  }
}


export default Ball
