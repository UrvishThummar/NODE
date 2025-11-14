const express=require('express')
const app=express()
const db=require('./config/db')

app.listen(3100,()=>{
    console.log('server Listen')
})