import { Request, Response } from 'express'
import Usuario from '../models/usuario/User'
import Post from '../models/post/Post'

export const  getPostdb =async(req:Request, res:Response)=>{
  
   const response = await  Post.find().populate('usuario')

   res.json({posts:response})


}
export const getPostId= async(req:Request,res:Response)=>{
 

 const response = await Post.findOne({_id:'66fb162ef08fe695ad4a44e0'}).populate('usuario')

 res.json({Post:response})

}

export const savePostdb=async(req:Request, res:Response)=>{

                const descripcion='vacaciones en floridaaaaa'
                const imagen = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oceanreefresorts.com%2F&psig=AOvVaw0DWNT1dIK3nTBH9YKS8Scu&ust=1727815680067000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiCkr_E64gDFQAAAAAdAAAAABAE'
                const usuarioId  ='66fb1a1192a6a952a1f9156b'



               try{
                const findUser = Usuario.findById(usuarioId);

                if(!findUser){
                    return "user not found"
                }


                const newPost = new Post({descripcion,imagen,autor:usuarioId})
             


                const data =await newPost.save()

                await Usuario.findByIdAndUpdate(usuarioId, { $push: { posts: data._id } });



                res.json({dataguardada: data})
               }

               catch(error){
                console.log(error)

               }

}

export const updatePostdb=async(req:Request,res:Response)=>{


    const idusuario= 1237918273981723
    const idpost =12837912873
const descripcion ='vacaciones malas en la florida'

        try{
       
              const findUser = Usuario.findById(idusuario)
                const findPost = Post.findById(idpost)
              if(!findUser){
                  return "user not found"
              }  

              if(!findPost){
                return "post not found"
              }



              const result = await findPost.updateOne({descripcion:descripcion})
              
              res.json({msg:result})

        }catch(err){
            console.log(err)
        }
}