import Bubble from './classes/Bubble.js'

/**
 * Map of bubbles to pop.
 * 20 Rows * 12 Columns
 * x= 0, 40, 80, ... , 480
 * y= 0, 40, 80, ... , 800
 */
const coordinates = {}
const ROWS = 20
const COLS = 12

for (let i = 0; i <= COLS; i++) {
  for (let j = 0; j <= ROWS; j++) {
    coordinates[`c${i}r${j}`] = new Bubble(i * 40, j * 40)
  }
}

const mapDefault = { ...coordinates }
mapDefault[`c2r0`].setHp(1)
mapDefault[`c2r1`].setHp(1)
mapDefault[`c2r2`].setHp(1)
mapDefault[`c2r3`].setHp(1)
mapDefault[`c2r4`].setHp(1)
mapDefault[`c2r5`].setHp(1)
mapDefault[`c2r6`].setHp(1)
mapDefault[`c2r7`].setHp(1)
mapDefault[`c2r8`].setHp(1)
mapDefault[`c2r9`].setHp(1)
mapDefault[`c2r10`].setHp(1)
mapDefault[`c2r11`].setHp(1)
mapDefault[`c2r12`].setHp(1)
mapDefault[`c2r13`].setHp(1)
mapDefault[`c2r14`].setHp(1)

mapDefault[`c3r0`].setHp(1)
mapDefault[`c3r1`].setHp(1)
mapDefault[`c3r2`].setHp(1)
mapDefault[`c3r3`].setHp(1)
mapDefault[`c3r4`].setHp(1)
mapDefault[`c3r5`].setHp(1)
mapDefault[`c3r6`].setHp(1)
mapDefault[`c3r7`].setHp(1)
mapDefault[`c3r8`].setHp(1)
mapDefault[`c3r9`].setHp(1)
mapDefault[`c3r10`].setHp(1)
mapDefault[`c3r11`].setHp(1)

mapDefault[`c5r0`].setHp(1)
mapDefault[`c5r1`].setHp(1)
mapDefault[`c5r2`].setHp(1)
mapDefault[`c5r3`].setHp(1)
mapDefault[`c5r4`].setHp(1)
mapDefault[`c5r5`].setHp(1)
mapDefault[`c5r6`].setHp(1)
mapDefault[`c5r7`].setHp(1)
mapDefault[`c5r8`].setHp(1)

mapDefault[`c7r0`].setHp(1)
mapDefault[`c7r1`].setHp(1)
mapDefault[`c7r2`].setHp(1)
mapDefault[`c7r3`].setHp(1)
mapDefault[`c7r4`].setHp(1)
mapDefault[`c7r5`].setHp(1)
mapDefault[`c7r6`].setHp(1)
mapDefault[`c7r7`].setHp(1)
mapDefault[`c7r8`].setHp(1)
mapDefault[`c7r9`].setHp(1)
mapDefault[`c7r10`].setHp(1)
mapDefault[`c7r11`].setHp(1)

mapDefault[`c9r0`].setHp(1)
mapDefault[`c9r1`].setHp(1)
mapDefault[`c9r2`].setHp(1)
mapDefault[`c9r3`].setHp(1)
mapDefault[`c9r4`].setHp(1)
mapDefault[`c9r5`].setHp(1)
mapDefault[`c9r6`].setHp(1)
mapDefault[`c9r7`].setHp(1)
mapDefault[`c9r8`].setHp(1)
mapDefault[`c9r9`].setHp(1)
mapDefault[`c9r10`].setHp(1)
mapDefault[`c9r11`].setHp(1)

mapDefault[`c1r2`].setHp(1)
mapDefault[`c3r6`].setHp(1)

export { mapDefault }
