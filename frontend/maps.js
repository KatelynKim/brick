import Bubble from './classes/Bubble.js'

/**
 * Map of bubbles to pop.
 * 20 Rows * 12 Columns
 * x= 0, 40, 80, ... , 480
 * y= 0, 40, 80, ... , 800
 */

const graphicalMap = [
  '************',
  '************',
  '************',
  '************',
  '**oooooooo**',
  '**o******o**',
  '**oooooooo**',
  '**o******o**',
  '**oooooooo**',
  '************',
  '************',
  '**oooooooo**',
  '************',
  '************',
  '************',
  '************',
  '************',
  '************',
  '************',
  '************',
  '************'
]

function convertMapToCoordinates(graphicalMap) {
  const coordinates = {}
  for (let row = 0; row < graphicalMap.length; row++) {
    for (let col = 0; col < graphicalMap[row].length; col++) {
      if (graphicalMap[row][col] === 'o') {
        coordinates[`c${col}r${row}`] = new Bubble(col * 40, row * 40, 1)
      }
    }
  }
  return coordinates
}

const mapDefault = convertMapToCoordinates(graphicalMap)

export { mapDefault }
