;(() => {
  'use strict'
  const t = document.getElementById('canvasA'),
    s = t.getContext('2d')
  let i
  t.addEventListener('mousemove', (t) => {
    i = t.offsetX
  })
  const e = new (class {
      constructor(t) {
        ;(this.x = 200),
          (this.y = 750),
          (this.ctx = t),
          (this.thickness = 20),
          (this.length = 60),
          (this.dx = 8)
      }
      draw() {
        ;(this.ctx.lineWidth = this.thickness),
          (this.ctx.strokeStyle = 'red'),
          this.ctx.beginPath(),
          this.ctx.moveTo(this.x, this.y),
          this.ctx.lineTo(this.x + this.length, this.y),
          this.ctx.stroke()
      }
      update(s) {
        s < t.width / 2 && this.x >= 0
          ? (this.x -= this.dx)
          : this.x <= t.width - this.length && (this.x += this.dx),
          this.draw()
      }
    })(s),
    h = new (class {
      constructor(t) {
        ;(this.ctx = t),
          (this.x = 240),
          (this.y = 500),
          (this.dy = 1),
          (this.acceleration = 0.05),
          (this.radius = 10),
          (t.fillStyle = 'blue')
      }
      draw() {
        this.ctx.beginPath(),
          this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
          this.ctx.fill()
      }
      update() {
        ;(this.dy += this.acceleration), (this.y += this.dy), this.draw()
      }
    })(s)
  function n() {
    s.clearRect(0, 0, t.width, 800),
      h.update(),
      e.update(i),
      window.requestAnimationFrame(n)
  }
  socket.on('connect', () => {
    socket.on('updateConnections', (t) => {
      e.draw()
    })
  }),
    document.addEventListener('keydown', (t) => {
      'Enter' === t.key && window.requestAnimationFrame(n)
    })
})()
