import { playerCanvasCtx } from '../utils/canvas.js'

class Bubble {
  constructor(x, y, hp = 0) {
    this.image = new Image()
    this.image.src = 'images/bubble40.png'
    this.image.onload = () => {
      this.isLoaded = true
    }
    this.x = x
    this.y = y
    this.hp = hp
    this.radius = 20
    this.centerX = this.x + this.radius
    this.centerY = this.y + this.radius
  }

  updateYpos(y) {
    this.y = y
    this.centerY = this.y + this.radius
  }

  setHp(hp) {
    this.hp = hp
  }

  draw() {
    if (this.isLoaded && this.hp > 0) {
      playerCanvasCtx.drawImage(this.image, this.x, this.y)
    }
  }
}

export default Bubble
