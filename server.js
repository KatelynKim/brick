// packages
import express from 'express'
import http from 'http'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Server } from 'socket.io'

// Instances
const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Serving HTML File
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(join(__dirname, 'index.html')))

const connectedPlayers = {}

io.on('connection', (socket) => {
  if (Object.keys(connectedPlayers).length === 0) {
    console.log('First player joined', socket.id)
    connectedPlayers.id = socket.id
  } else if (Object.keys(connectedPlayers).length === 1) {
    console.log('Second player joined', socket.id)
    connectedPlayers.id = socket.id
  }
  io.emit('updateConnections', connectedPlayers)
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
