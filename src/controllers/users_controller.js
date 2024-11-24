import bcrypt from 'bcrypt'
import UsersModels from '../models/users.js'
import { v4 as uuidv4 } from 'uuid';
import { createtoken } from '../middlewares/auth.js';
const saltRounds=10

const getAllUserController = async(req,res) => {
    try {
        //Por ser un objeto para llamar a un metodo 
        const user= await UsersModels.getAllUserModel()
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}

// Crear 
const RegistUserController = async (req,res) => {
    const {password, ...otherDatauser} =req.body
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Creacion del objeto
    const  newUserData={ 
        id:uuidv4(),
        password:hashedPassword, 
        ...otherDatauser
    }
    try {
        const user = UsersModels.RegistUserModel(newUserData)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const loginUserController = async (req,res) => {
    const {Name, password}=req.body

    try {
        const user = await UsersModels.loginUserModel(Name, password)
        delete user.password
        // Despues de haber hecho el middleware (JWT) se coloco el envio del token
        const token= createtoken(user)
     
        res.status(200).json({user, token})
    } catch (error) {
        res.status(500).json(error)
    }
}


//Eliminar 
const deleteUserController = async (req,res) => {
    const {id} =req.params

    try {
        await UsersModels.deleteUserModel(id)
        res.status(200).json({msg: "Usuario eliminado"})
    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    getAllUserController,
    deleteUserController,
    RegistUserController,
    loginUserController
}
