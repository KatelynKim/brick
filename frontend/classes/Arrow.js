class Arrow {
  constructor(ctx) {
    this.ctx = ctx
    this.arrow = new Image()
    this.angle = 0
  }

  draw() {
    this.arrow.onload = () => {
      this.ctx.drawImage(this.arrow, 200, 500)
    }
    this.arrow.src = '/images/arrow.png'
  }

  update() {
    // this.ctx.rotate(Math.PI / 180 * (this.angle += 0.0005))
    this.ctx.drawImage(
      this.arrow,
      -this.arrow.width / 2,
      -this.arrow.height / 2
    )
  }
}

export default Arrow
