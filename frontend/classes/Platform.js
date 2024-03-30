import { playerCanvas, playerCanvasCtx } from '../utils/canvas.js'

class Platform {
  constructor(x) {
    this.hp = 2
    this.image = new Image()
    this.image.src = 'images/platform80x40.png'
    this.image.onload = () => {
      this.isLoaded = true
    }
    this.width = 80
    this.height = 40
    this.x = x
    this.y = playerCanvas.clientHeight - this.height
    this.weakPlatformImage = new Image()
    this.weakPlatformImage.src = 'images/platformWeak80x40.png'
    this.weakPlatformImage.onload = () => {
      this.isWeakPlatformLoaded = true
    }
  }

  draw() {
    if (this.isLoaded && this.hp > 1) {
      playerCanvasCtx.drawImage(this.image, this.x, this.y)
    } else if (this.isWeakPlatformLoaded && this.hp === 1) {
      playerCanvasCtx.drawImage(this.weakPlatformImage, this.x, this.y)
    }
  }
}

export default Platform
