import express , { json } from 'express'
import UsosRouter from './routers/registro_routers.js'
import UsersRouter from './routers/users_routers.js'
import AlertRouter from './routers/alert_routers.js'

const app= express()

app.set('port', process.env.port || 3000)
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Problematica: Gestión del desperdicio de agua en el sector de quito")
})

app.use('/api', UsosRouter)
app.use('/api', UsersRouter)
app.use('/api', AlertRouter)


export default app


