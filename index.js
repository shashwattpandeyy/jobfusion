import 'dotenv/config'
import { configDotenv } from 'dotenv'
import app from './src/app.js'
import http from 'http'
import { WebSocketServer } from 'ws'
import logger from './src/logger.js'

configDotenv({ path: `.env.${process.env.NODE_ENV || 'staging'}` })

async function createServer() {
  const server = http.createServer(await app())

  // const wss = new WebSocketServer({ noServer: true })

  // wss.on('connection', (ws, req, socket) => {
  //   console.log('WebSocket connection established.')
  //   ws.send('WebSocket connection successfully upgraded!')

  //   // Handle messages from the client
  //   ws.on('message', (message) => {
  //     console.log('Received: %s', message)
  //     ws.send('Server received your message', message)
  //   })
  // })

  // // Handle the HTTP upgrade request (from HTTP to WebSocket)
  // server.on('upgrade', (req, socket, head) => {
  //   console.log('upgrade request recieved', req.url)
  //   // This function verifies the request and upgrades it to WebSocket
  //   if (req.url === '/interview/start/122') {
  //     wss.handleUpgrade(req, socket, head, (ws) => {
  //       wss.emit('connection', ws, req, socket)
  //     })
  //   } else {
  //     socket.destroy() // Close the socket if it's not a valid WebSocket route
  //   }
  // })

  return server
}

async function serverStart() {
  const server = await createServer()
  const port = process.env.PORT
  server.listen(port, () => logger.info(`server is running on port ${port} process id ${process.pid}`))
}

serverStart()
