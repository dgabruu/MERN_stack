const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://gabru:fvHVdsiFPupByMtd@cluster0.eab8r.mongodb.net/cricket?retryWrites=true&w=majority',{useCreateIndex:true,useNewUrlParser:true})
.then(()=>{
    console.log("mongodb is connected")
})
.catch((e)=>{
    console.log("mongodb is not connected"+e)
})