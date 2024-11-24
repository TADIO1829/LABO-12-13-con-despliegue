import {Router} from 'express'
import {getAllAlertController,createAlertController,updateAlertController,deleteAlertController} from '../controllers/alert_controller.js'
import { verifytoken } from '../middlewares/auth.js'

const AlertRouter=Router()
// RUTAS PUBLICAS
AlertRouter.get('/alert',getAllAlertController)

// RUTAS PRIVADAS
AlertRouter.post('/alert', verifytoken,createAlertController)
AlertRouter.put('/alert', verifytoken,updateAlertController)
AlertRouter.delete('/alert', verifytoken,deleteAlertController)


export default AlertRouter


