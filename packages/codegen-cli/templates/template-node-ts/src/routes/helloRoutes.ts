import { Router } from 'express'
import { sayHello } from '../controllers/helloController'

const router = Router()

router.get('/', sayHello)

export default router
