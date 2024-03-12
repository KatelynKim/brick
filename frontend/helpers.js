import { mapDefault } from './maps.js'

function initializeMap(ctx) {
  const sphere = new Image()
  sphere.src = '/images/sphere40.png'
  sphere.onload = () => {
    mapDefault.forEach((coordinate) => {
      ctx.drawImage(sphere, coordinate[0], coordinate[1])
    })
  }
}

export { initializeMap }
