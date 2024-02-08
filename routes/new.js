const express = require('express')

const router = express.Router()

const messages= require('../routes/index')

router.get('/',(req,res)=>{
    res.render('new',{title:"Add a new message", info:"message"})
})

router.post ('/new',(req,res)=>{
    messages.push({user:req.body.userName, text:req.body.messageText, added:format(new Date(),'dd MMMM yyy, HH:mm')});
    res.redirect('/');
})

module.exports=router;