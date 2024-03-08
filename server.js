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

// Define a connection event handler
io.on('connection', (socket) => {
  console.log('User Connected To (server)')

  socket.emit('serverToClient', 'Hello, client!')

  socket.on('clientToServer', (data) => {
    console.log(data)
  })

  socket.on('clientToClient', (data) => {
    console.log('client to client', data)
    socket.broadcast.emit('serverToClient', data)
  })
})

// Start the server
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
