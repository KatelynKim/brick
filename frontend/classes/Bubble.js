class Bubble {
  constructor() {
    this.image = new Image()
    this.image.src = 'images/sphere40.png'
    this.image.onload = () => {
      this.isLoaded = true
    }
  }

  draw(ctx, x, y) {
    this.isLoaded && ctx.drawImage(this.image, x, y)
    // ctx.drawImage(this.image, x, y)
  }
}

export default Bubble
