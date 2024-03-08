const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

socket.on('connect', () => {
  console.log('Connected to client')
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
