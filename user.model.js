const mongoose=require('mongoose')

const myuser=new mongoose.Schema({
        name:{
            type:String
        } ,

        avg:{
            type:String
        },
        strike:{
            type:String
        },

        best:{
            type:String
        }
    
});

const User=mongoose.model('User',myuser);

module.exports=User;