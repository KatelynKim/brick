import { Player, Ball } from './classes.js'
import { initializeMap } from './helpers.js'

const playerCanvas = document.getElementById('canvasA')
// const opponentCanvas = document.getElementById('canvasB')
const playerCanvasCtx = playerCanvas.getContext('2d')
const dpi = window.devicePixelRatio
playerCanvas.getContext('2d').scale(dpi, dpi)

socket.on('connect', () => {
  console.log('Connected to client')
  socket.on('updateConnections', (players) => {
    console.log('Updating connections on the client')
    playerCanvasCtx.clearRect(0, 0, playerCanvas.clientWidth, playerCanvas.clientHeight)
    const playersFound = {}
    const clientBalls = {}
    for (let id in players) {
      if (clientBalls[id] === undefined && id !== socket.id) {
        clientBalls[id] = new Player(playerCanvasCtx)
        clientBalls.id.draw()
        const playerBall = new Ball(playerCanvasCtx)
        playerBall.draw()

        const arrow = new Image()
        arrow.onload = () => {
          playerCanvasCtx.drawImage(arrow, 250, 750)
        }
        arrow.src = 'images/arrow.png'
      }
      initializeMap(playerCanvasCtx)
      playersFound[id] = true
    }
    for (let id in clientBalls) {
      if (!playersFound[id]) {
        clientBalls[id].remove()
        delete clientBalls[id]
      }
    }
  })
})

const HelloBtn = document.getElementById('helloButton')
//Callback function fires on the event called 'serverToClient'
socket.on('serverToClient', (data) => {
  alert(data)
})

//Client sends a message at the moment it got connected with the server
socket.emit('clientToServer', 'Hello, server!')

//Event listener on the button element: sends a message to the server when clicked
HelloBtn.addEventListener('click', () => {
  socket.emit('clientToClient', 'Hello to the fellow clients!')
})
