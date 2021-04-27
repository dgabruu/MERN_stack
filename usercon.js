const express=require('express')
const User=require('../models/user.model')



const router=express.Router()
router.route('/').get((req,res)=>{
    User.find().then((users)=>{
        res.json(users)
        console.log(users)
    })
          

})

router.route('/add').post((req,res)=>{
    const name=req.body.uname;
    const avg=req.body.avg;
    const strike=req.body.strike;
    const  best=req.body.best
    // res.json("my sample data"+users)
    const user1=new User({name,avg,strike,best});
    user1.save()
    .then(()=>{
        console.log("user added");
        res.json("Data added")
    })
    .catch((e)=>{
        res.json("user not added"); 
    })

})

// router.route('/:id').delete((req,res)=>{
//     User.findByIdAndDelete(req.params.id)
//     .then(()=>res.json("deleted")
//     )
//     .catch((e)=>{
//         console.log(e)

//         res.json(e)
//     })

// })

router.route('/:id').get((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json("found")
    )
    .catch((e)=>{
        console.log(e)

        res.json(e)
    })

})




module.exports=router;
