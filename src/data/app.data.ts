/**
 * Content for index.js
 * @author ConanGH-S
 */
export default `import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.routes.js'

const app = express()

const options = {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization', 'x-public-key']
}

app.use(cors(options))

app.use(express.json())

app.use(cookieParser())

const PREFIX = '/api/v1'

app.use(PREFIX, userRouter)

app.use((_req, res) => {
  const errorMessage = 'ROUTE_NOT_FOUND'
  return res.status(404).json({ error: errorMessage })
})

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
  console.log('Server working on port', PORT)
})
`
