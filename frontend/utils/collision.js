import Ball from '../classes/Ball.js'
import Player from '../classes/Player.js'
import { mapDefault } from '../maps.js'
import { playerCanvas } from './canvas.js'
import { MAX_BALL_ANGLE } from './constants.js'

/**
 *
 * @param {Ball} ball
 * @param {Player} player
 * A function to handle collisions
 */

function handleCollisions(ball, player) {
  // Ball has hit the player
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

  // Ball has hit the left or right wall
  if (
    ball.x - ball.radius <= 0 ||
    ball.x + ball.radius >= playerCanvas.clientWidth
  ) {
    ball.dx *= -1
  }

  // Ball has hit the upper wall
  if (ball.y - ball.radius <= 0) {
    ball.dy *= -1
  }

  // Ball has hit a bubble
  for (const bubble of Object.values(mapDefault)) {
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

/**
 * Updates the direction of the ball based on the quadrant on which it has collided with the bubble.
 *
 * @param {'UpperLeft' | 'UpperRight' | 'LowerLeft' | 'LowerRight'} quadrant - The ball quadrant in which the collision has occurred
 */
function updateBallDirection(quadrant, ball) {
  const isBallMovingDownward = ball.dy > 0
  const isBallMovingRight = ball.dx > 0

  switch (quadrant) {
    case 'UpperLeft':
      if (isBallMovingRight) ball.dx *= -1
      if (isBallMovingDownward) ball.dy *= -1
      break
    case 'UpperRight':
      if (!isBallMovingRight) ball.dx *= -1
      if (isBallMovingDownward) ball.dy *= -1
      break
    case 'LowerLeft':
      if (isBallMovingRight) ball.dx *= -1
      if (!isBallMovingDownward) ball.dy *= -1
      break
    case 'LowerRight':
      if (!isBallMovingRight) ball.dx *= -1
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
