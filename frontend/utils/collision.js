import Ball from '../classes/Ball.js'
import Player from '../classes/Player.js'
import { map } from '../maps.js'
import { playerCanvas } from './canvas.js'
import { MAX_BALL_ANGLE } from './constants.js'

/**
 * @param {Platform[]} platforms
 * A function to handle collisions
 */

function collisionLoop(platforms) {
  handlePlayerCollision()
  handleWallCollision()
  handleBubbleCollision()
  handlePlatformCollision(platforms)
}

function handlePlayerCollision() {
  if (
    Ball.y + Ball.radius == Player.top &&
    Ball.x >= Player.x &&
    Ball.x <= Player.x + Player.length
  ) {
    const anglePerUnitDistance = MAX_BALL_ANGLE / (Player.length / 2)
    const BallDistanceFromBarMidpoint = Ball.x - (Player.x + Player.length / 2)
    const angle = 90 - anglePerUnitDistance * BallDistanceFromBarMidpoint
    Ball.dx = Ball.dy / Math.tan((Math.PI * angle) / 180)
    Ball.dy = Math.sqrt(Ball.speed ** 2 - Ball.dx ** 2) * -1
  }
}
function handleWallCollision() {
  if (
    Ball.x - Ball.radius <= 0 ||
    Ball.x + Ball.radius >= playerCanvas.clientWidth
  ) {
    Ball.dx *= -1
  }
  if (Ball.y - Ball.radius <= 0) {
    Ball.dy *= -1
  }
}

function handleBubbleCollision() {
  Object.entries(map.coordinates).forEach(([bubbleId, bubble]) => {
    const distance = Math.sqrt(
      Math.abs(bubble.centerX - Ball.x) ** 2 +
        Math.abs(bubble.centerY - Ball.y) ** 2
    )
    if (bubble.hp > 0 && distance <= bubble.radius + Ball.radius) {
      delete map.coordinates[bubbleId]
      const quadrant = getQuadrant(bubble)
      updateBallDirection(quadrant)
      new Audio('sounds/pop.mp3').play()
    }
  })
}

function handlePlatformCollision(platforms) {
  platforms.forEach((platform) => {
    if (
      platform.hp > 0 &&
      Ball.y + Ball.radius >= platform.y &&
      Ball.x + Ball.radius >= platform.x &&
      Ball.x + Ball.radius <= platform.x + platform.width
    ) {
      platform.hp -= 1
      Ball.dy *= -1
      map.shiftDown()
    }
  })
}

/**
 * Updates the direction of the Ball based on the bubble quadrant it's come into contact with.
 *
 * @param {'UpperLeft' | 'UpperRight' | 'LowerLeft' | 'LowerRight'} quadrant - The Ball quadrant in which the collision has occurred
 */
function updateBallDirection(quadrant) {
  const isBallMovingDownward = Ball.dy > 0

  switch (quadrant) {
    case 'UpperLeft':
      if (isBallMovingDownward) Ball.dy *= -1
      break
    case 'UpperRight':
      if (isBallMovingDownward) Ball.dy *= -1
      break
    case 'LowerLeft':
      if (!isBallMovingDownward) Ball.dy *= -1
      break
    case 'LowerRight':
      if (!isBallMovingDownward) Ball.dy *= -1
      break
    default:
      return
  }
}

function getQuadrant(bubble) {
  if (Ball.y <= bubble.centerY) {
    return Ball.x <= bubble.centerX ? 'UpperLeft' : 'UpperRight'
  } else {
    return Ball.x <= bubble.centerY ? 'LowerLeft' : 'LowerRight'
  }
}

export { collisionLoop }
