module.exports = (io) => {
  io.use((socket, next) => {
    console.log('middle ware')
    next()
  }).on('connection', (socket) => {
    console.log('connect socket success')
  })
}
