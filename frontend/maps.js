import Bubble from './classes/Bubble.js'
import Item from './classes/Item.js'
import { ITEM_TYPES } from './utils/constants.js'

/**
 * Map of bubbles to pop.
 * 20 Rows * 12 Columns
 * x= 0, 40, 80, ... , 480
 * y= 0, 40, 80, ... , 800
 */

const graphicalMap = [
  '$***********',
  '************',
  '************',
  '************',
  '**oooooooo**',
  '**o******o**',
  '**oooooooo**',
  '**o**$$**o**',
  '**oooooooo**',
  '************',
  '************',
  '**ooo$$$oo**',
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
  const itemCoordinates = {}
  for (let row = 0; row < graphicalMap.length; row++) {
    for (let col = 0; col < graphicalMap[row].length; col++) {
      const symbol = graphicalMap[row][col]
      if (symbol === 'o') {
        coordinates[`c${col}r${row}`] = new Bubble(col * 40, row * 40, 1)
      } else if (symbol === '$') {
        coordinates[`c${col}r${row}`] = new Bubble(col * 40, row * 40, 1)
        itemCoordinates[`c${col}r${row}`] = new Item(
          col * 40 + 4,
          row * 40 + 4,
          ITEM_TYPES.ORANGE
        )
      }
    }
  }
  return { coordinates, itemCoordinates }
}

class Map {
  constructor() {
    const { coordinates, itemCoordinates } =
      convertMapToCoordinates(graphicalMap)
    this.map = graphicalMap
    this.coordinates = coordinates
    this.itemCoordinates = itemCoordinates
  }

  shiftDown() {
    for (let bubbleId in this.coordinates) {
      const bubble = this.coordinates[bubbleId]
      bubble.updateYpos(bubble.y + 40)
    }
    for (let itemId in this.itemCoordinates) {
      const item = this.itemCoordinates[itemId]
      item.y += 40
    }
  }
}

const map = new Map()
export { map }
