require('./models/db');
const user1=require('./controllers/usercon')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const express=require('express')
var app=express();
const router=express.Router()
var cors = require('cors');


var port=process.env.port || 8000;

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))

// const myschema={
//     name:String
// }


// const Mydb=mongoose.model('Mydb',myschema)

// app.get(('/'),(req,res)=>{
   
//         res.sendFile(__dirname+'/index.html')
   
// })

// app.post(('/user'),(req,res)=>{

//     const newsch=new Mydb({

//         name:req.body.nam
//     });
//     newsch.save().then(()=>{
//          res.json('done')
//          .then(()=>{
//             res.redirect('/')
//         })
//     })
//     .catch((e)=>{
//         res.json(e)
//     })
// })

const user2=require('./controllers/usercon');
app.use('/',user2)


app.listen(port , ()=>{
    console.log('express started at' + port)
})

// app.use('/user',user1)