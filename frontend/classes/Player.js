import { playerCanvas } from '../utils/canvas.js'

class Player {
  constructor(ctx) {
    this.x = playerCanvas.clientWidth / 2 - 30
    this.y = 800
    this.ctx = ctx
    this.thickness = 20
    this.length = 60
    this.dx = 10
    this.isCursorOutOfLeftBound = false
    this.isCursorOutOfRightBound = false
    this.isDirectionChanged = false
    this.top = this.y - this.thickness / 2
    document.addEventListener('mousemove', this.handleMouseMove.bind(this))
  }

  handleMouseMove(event) {
    const cursorPos =
      event.clientX - playerCanvas.getBoundingClientRect().x - this.length / 2
    if (cursorPos <= 0) {
      this.x = 0
    } else if (cursorPos >= playerCanvas.clientWidth - this.length) {
      this.x = playerCanvas.clientWidth - this.length
    } else {
      this.x = cursorPos
    }
  }

  draw() {
    this.ctx.lineWidth = this.thickness
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.x, this.y)
    this.ctx.lineTo(this.x + this.length, this.y)
    this.ctx.stroke()
  }
}

export default Player
