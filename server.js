import express from 'express'
import { routerUser } from './routes/userRoutes.js'
import { tryToConnect } from './database/db.js'

const server = express()
const port = 8001

server.use(express.json())
server.use(routerUser)

server.listen(port, () => {
    tryToConnect()
    console.log("Running on port: " + port)
})