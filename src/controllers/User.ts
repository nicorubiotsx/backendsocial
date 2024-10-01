import { Request, Response } from 'express'
import Usuario from '../models/usuario/User'


export const  getAllUserdb =async(req:Request, res:Response)=>{
  
   const response = await  Usuario.find().populate('posts')

   res.json({usuarios:response})


}
export const getByUserId= async(req:Request,res:Response)=>{
 

 const response = await Usuario.findOne({_id:'66fb162ef08fe695ad4a44e0'})

 res.json({usuaurio:response})

}

export const saveUserdb=async(req:Request, res:Response)=>{

                const nombre='nicolas'
                const email='nic@gmail.com'
                const contraseña='casa1234'
               
               const newUser = new Usuario({nombre,email,contraseña}) 


               try{
                const data =await newUser.save()

                res.json({dataguardada: data})
               }

               catch(error){
                console.log(error)

               }

}

export const updateUserdb=async(req:Request,res:Response)=>{
    const id = '66fae922ad2bb617fac803cb'
    const nombre='alabaaaaaaaaan'
    const email= 'nico@gmail.com'
    const contraseña = 'casa1122'

        try{
       
              const findUser = Usuario.findById(id)
      
              if(!findUser){
                  return "user not found"
              }  
              const result = await findUser.updateOne({nombre:nombre,email:email,contraseña:contraseña})
              
              res.json({msg:result})

        }catch(err){
            console.log(err)
        }
}