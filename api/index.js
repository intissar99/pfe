const express=require ('express')
const app=express()
const mongoose=require('mongoose')
const routesUrl=require('./routes/userRoutes')
const cors=require('cors')



mongoose.connect("mongodb+srv://intisar:intisar@crud.5chsd.mongodb.net/portal?retryWrites=true&w=majority",()=>console.log("database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrl)
app.listen(3000,()=>console.log("server is running"))
