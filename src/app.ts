import express, { Request, Response } from 'express'
import { main } from './db'
import router from './routes/user'
import routerpost from './routes/post'
const app =express()

const PORT=4000
app.listen(PORT,()=>{
    console.log("conectado en el puerto : " + PORT)
})

app.use('/user',router)
app.use('/post',routerpost)
main()



