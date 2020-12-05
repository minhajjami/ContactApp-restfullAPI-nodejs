const { json } = require('express')
const express = require('express')
const app =express()
const contactRouter = require('./ContactRoute')


app.use(express.urlencoded({extended:true}))
app.use(json())
app.use('/contacts',contactRouter)

app.get('*',(req,res)=>{
    res.send('<h1>404 Error!! Page is not found </h1>')
 })

app.listen(8080,()=>{
    console.log('server is running')
})