import { playerCanvas, playerCanvasCtx } from '../utils/canvas.js'

class Player {
  static thickness = 20
  static length = 60
  static x = playerCanvas.clientWidth / 2 - 30
  static y = playerCanvas.clientHeight - 80 + Player.thickness / 2
  static dx = 10
  static isCursorOutOfLeftBound = false
  static isCursorOutOfRightBound = false
  static isDirectionChanged = false
  static top = Player.y - Player.thickness / 2

  static init() {
    playerCanvas.addEventListener('mousemove', Player.handleMouseMove)
  }

  static handleMouseMove(event) {
    const cursorPos =
      event.clientX - playerCanvas.getBoundingClientRect().x - Player.length / 2
    if (cursorPos <= 0) {
      Player.x = 0
    } else if (cursorPos >= playerCanvas.clientWidth - Player.length) {
      Player.x = playerCanvas.clientWidth - Player.length
    } else {
      Player.x = cursorPos
    }
  }

  static draw() {
    playerCanvasCtx.lineWidth = Player.thickness
    playerCanvasCtx.strokeStyle = 'white'
    playerCanvasCtx.beginPath()
    playerCanvasCtx.moveTo(Player.x, Player.y)
    playerCanvasCtx.lineTo(Player.x + Player.length, Player.y)
    playerCanvasCtx.stroke()
  }
}

export default Player
