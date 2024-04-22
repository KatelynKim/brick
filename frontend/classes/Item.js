import { playerCanvasCtx } from '../utils/canvas.js'
import { ITEM_TYPES } from '../utils/constants.js'

class Item {
  constructor(x, y, itemType = ITEM_TYPES.NONE) {
    this.itemType = itemType
    this.x = x
    this.y = y
    this.width = 16
    this.height = 16
    this.image = new Image()
    this.image.src = 'images/orange.png'
    this.image.onload = () => {
      this.isLoaded = true
    }
    this.currentAnimationFrame = 0
    this.animations = this.generateAnimations()
  }

  generateAnimations() {
    const animations = []
    const spriteWidth = 16
    const totalFrames = 17
    for (let i = 0; i < totalFrames; i++) {
      animations.push([i * spriteWidth, 0])
    }
    return animations
  }

  get frame() {
    return this.animations[this.currentAnimationFrame]
  }

  draw() {
    const [frameX, frameY] = this.frame
    if (this.itemType !== ITEM_TYPES.NONE) {
      playerCanvasCtx.drawImage(
        this.image,
        frameX,
        frameY,
        this.width * 2,
        this.height * 2,
        this.x,
        this.y,
        this.width * 2,
        this.height * 2
      )
    }
  }
}

export default Item
