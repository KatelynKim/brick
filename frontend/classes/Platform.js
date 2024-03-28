import { playerCanvasCtx } from '../utils/canvas.js'

class Platform {
  constructor(x) {
    this.hp = 2
    this.image = new Image()
    this.image.src = 'images/platform.png'
    this.image.onload = () => {
      this.isLoaded = true
    }
    this.x = x
    this.y = 832
    this.width = 80
    this.weakPlatformImage = new Image()
    this.weakPlatformImage.src = 'images/platform-weak.png'
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
