const express=require ('express')
const app=express()
const mongoose=require('mongoose')
const userRoutes=require('./routes/userRoutes')
const adminRoutes=require('./routes/adminRoutes')
const cors=require('cors')



mongoose.connect("mongodb+srv://intisar:intisar@crud.5chsd.mongodb.net/portal?retryWrites=true&w=majority",()=>console.log("database connected"))

app.use(express.json())
app.use(cors())
app.use('/',userRoutes)
app.use('/',adminRoutes)
app.listen(5000,()=>console.log("server is running"))
