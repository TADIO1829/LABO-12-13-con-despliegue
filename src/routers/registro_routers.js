import {Router} from 'express'
import {getAllUsosController, createUsosController,updateUsosController,deleteUsosController} from '../controllers/registro_controller.js'
import { verifytoken } from '../middlewares/auth.js'
const UsosRouter = Router()

// RUTAS PUBLICAS 
UsosRouter.get('/regist',getAllUsosController)

// RUTAS PRIVADAS
UsosRouter.post('/regist',verifytoken ,createUsosController)
UsosRouter.put('/regist', verifytoken,updateUsosController)
UsosRouter.delete('/regist', verifytoken, deleteUsosController)


export default UsosRouter

