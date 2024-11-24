import {Router} from 'express'
import {getAllUserController,deleteUserController, RegistUserController, loginUserController} from '../controllers/users_controller.js'
import { verifytoken } from '../middlewares/auth.js'
const UsersRouter =Router()
//Obtener todo  PUBLICAS
UsersRouter.post('/users/register', RegistUserController)
UsersRouter.post('/users/login', loginUserController)

// privadas
UsersRouter.delete('/users/delete', verifytoken ,deleteUserController)
UsersRouter.get('/users',verifytoken, getAllUserController)


export default UsersRouter