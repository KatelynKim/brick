import Ball from '../classes/Ball.js'
import Player from '../classes/Player.js'
import { map } from '../maps.js'
import { playerCanvas } from './canvas.js'
import { MAX_BALL_ANGLE } from './constants.js'

/**
 *
 * @param {Ball} ball
 * @param {Player} player
 * @param platforms
 * A function to handle collisions
 */

function handleCollisions(ball, player, platforms) {
  handlePlayerCollision(ball, player)
  handleWallCollision(ball)
  handleBubbleCollision(ball)
  handlePlatformCollision(ball, platforms)
}

function handlePlayerCollision(ball, player) {
  if (
    ball.y + ball.radius == player.top &&
    ball.x >= player.x &&
    ball.x <= player.x + player.length
  ) {
    const anglePerUnitDistance = MAX_BALL_ANGLE / (player.length / 2)
    const ballDistanceFromBarMidpoint = ball.x - (player.x + player.length / 2)
    const angle = 90 - anglePerUnitDistance * ballDistanceFromBarMidpoint
    ball.dx = ball.dy / Math.tan((Math.PI * angle) / 180)
    ball.dy = Math.sqrt(ball.speed ** 2 - ball.dx ** 2) * -1
  }
}
function handleWallCollision(ball) {
  if (
    ball.x - ball.radius <= 0 ||
    ball.x + ball.radius >= playerCanvas.clientWidth
  ) {
    ball.dx *= -1
  }
  if (ball.y - ball.radius <= 0) {
    ball.dy *= -1
  }
}

function handleBubbleCollision(ball) {
  for (const bubble of Object.values(map.coordinates)) {
    const distance = Math.sqrt(
      Math.abs(bubble.centerX - ball.x) ** 2 +
        Math.abs(bubble.centerY - ball.y) ** 2
    )
    if (bubble.hp > 0 && distance <= bubble.radius + ball.radius) {
      bubble.setHp(0)
      const quadrant = getQuadrant(ball, bubble)
      updateBallDirection(quadrant, ball)
      new Audio('sounds/pop.mp3').play()
    }
    bubble.draw()
  }
}

function handlePlatformCollision(ball, platforms) {
  platforms.forEach((platform) => {
    if (
      platform.hp > 0 &&
      ball.y + ball.radius >= platform.y &&
      ball.x + ball.radius >= platform.x &&
      ball.x + ball.radius <= platform.x + platform.width
    ) {
      platform.hp -= 1
      ball.dy *= -1
      map.shiftDown()
    }
  })
}

/**
 * Updates the direction of the ball based on the bubble quadrant it's come into contact with.
 *
 * @param {'UpperLeft' | 'UpperRight' | 'LowerLeft' | 'LowerRight'} quadrant - The ball quadrant in which the collision has occurred
 */
function updateBallDirection(quadrant, ball) {
  const isBallMovingDownward = ball.dy > 0
  const isBallMovingRight = ball.dx > 0

  switch (quadrant) {
    case 'UpperLeft':
      if (isBallMovingDownward) ball.dy *= -1
      break
    case 'UpperRight':
      if (isBallMovingDownward) ball.dy *= -1
      break
    case 'LowerLeft':
      if (!isBallMovingDownward) ball.dy *= -1
      break
    case 'LowerRight':
      if (!isBallMovingDownward) ball.dy *= -1
      break
    default:
      return
  }
}

function getQuadrant(ball, bubble) {
  if (ball.y <= bubble.centerY) {
    return ball.x <= bubble.centerX ? 'UpperLeft' : 'UpperRight'
  } else {
    return ball.x <= bubble.centerY ? 'LowerLeft' : 'LowerRight'
  }
}

export { handleCollisions }
