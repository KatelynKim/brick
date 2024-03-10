
class Player {
  constructor(ctx) {
    this.x = 200
    this.y = 750
    this.ctx = ctx
    this.thickness = 20
    this.length = 20
  }

  draw() {
    this.ctx.lineWidth = this.thickness
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = 'red'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)
    this.ctx.stroke()
    console.log('drew a line')
  }

  update() {
    this.x += this.dx
    this.draw()
  }
}

export default Player