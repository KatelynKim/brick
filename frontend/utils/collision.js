import Ball from '../classes/Ball.js'
import Player from '../classes/Player.js'
import { playerCanvas } from './canvas.js'

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
    const anglePerUnitDistance = 45 / (player.length / 2)
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
}

export { handleCollisions }