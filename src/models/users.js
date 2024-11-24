import bcrypt from 'bcrypt'

const UsersModels ={

    async getAllUserModel(){
        try {
            //Obtener de la base
            const peticion = await fetch('http://localhost:4000/users')
            //Convertir a formato JSON
            const usos = await peticion.json()
            return usos
        } catch (error) {
            console.log(error);
            
        }
    },
    // Metodo en el modelo de publicas/ingresar
    async RegistUserModel(newUser){
        // Conexion de BDD
        const url = "http://localhost:4000/users";  
        // Enviar la data a la bdd
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newUser),
            headers: {"Content-Type": "application/json"}
        })
        // Obtener la respuesta de la base
        const data  = await peticion.json()
        // Mandar respuesta al controlador
        return data
    },

    async loginUserModel(Name, password){
        const url = "http://localhost:4000/users"
        const response = await fetch(url)
        const users= await response.json()

        const user=users.find(user => user.Name === Name)  // buscamos el usuario en la base 

        if (!user) {
            return {error:"Username o password erroneso"}
        }
        const passwordMatch =await bcrypt.compare(password, user.password)   //desencripatamos el password
        

        if (user && passwordMatch) {
            return user
        }else{
            return {error: "Username o password erroneos"}
        }
    },

    
 
    // Eliminar
   async deleteUserModel(Userid){
       // 1. Conexion de BDD
       const url = `http://localhost:4000/users/${Userid}`;  
       const peticion = await fetch(url,{
           method:"DELETE"
       })
       const data  = await peticion.json()
       return data
   }
}

export default UsersModels
