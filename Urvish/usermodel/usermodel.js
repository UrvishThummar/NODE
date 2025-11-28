const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    username:{
        type:String
        
    },
    password:{
        type:String
    },
    image:{
        type:String
    }
})
 
const user=mongoose.model('zzzz',userschema)
module.exports=user