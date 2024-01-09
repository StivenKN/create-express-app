/**
 * Content for /src/routes/user.routes.js
 * @author ConanGH-S
 */
export default `import { Router } from 'express'
import { checkUserData } from '../middlewares/user.middlewares.js'
import { getUsers } from '../controllers/user.controllers.js'

const userRoute = Router()

userRoute.get('/users', checkUserData, getUsers)

export default userRoute
`
