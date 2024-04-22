import Ball from '../classes/Ball.js'
import { map } from '../maps.js'
import { playerCanvas } from './canvas.js'
import { STATUS } from './constants.js'

/**
 * A function to terminate the game when the player loses or wins.
 * @returns
 */
function checkGameoverStatus() {
  if (Object.keys(map.coordinates).length === 0) {
    console.log('You win! All bubbles clear :)')
    Ball.dy = 0
    return STATUS.VICTORY
  }
  if (Ball.y + Ball.radius >= playerCanvas.clientHeight) {
    console.log('You lose! The ball hit the ground')
    Ball.dy = 0
    return STATUS.LOSS
  }

  for (const bubble of Object.values(map.coordinates)) {
    if (bubble.y + bubble.radius * 2 >= playerCanvas.clientHeight - 40) {
      Ball.update()
      Object.values(map.coordinates).forEach((bubble) => {
        bubble.draw()
      })
      Ball.dy = 0
      console.log('You lose! Bubble hit the platform')
      return STATUS.LOSS
    }
  }
}

export default checkGameoverStatus
