import Bubble from './classes/Bubble.js'

/**
 * Map of blocks to break.
 * 20 Rows * 12 Columns
 * x= 0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480
 * y= 0,  40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480 ... 800
 */
const coordinates = {}
const ROWS = 20
const COLS = 12

for (let i = 0; i <= COLS; i++) {
  for (let j = 0; j <= ROWS; j++) {
    coordinates[`c${i}r${j}`] = new Bubble(i * 40, j * 40, 0)
  }
}

const mapDefault = { ...coordinates }
mapDefault[`c0r0`].setHp(1)
console.log('mapDefault:', mapDefault)

export { mapDefault }
