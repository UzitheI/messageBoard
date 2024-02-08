// const express = require('express')
import express from 'express'
const router = express.Router()

// const messages= require('../routes/index')
import {messages} from '../routes/index.js'
import {format} from 'date-fns'

router.get('/',(req,res)=>{
    res.render('new',{title:"Add a new message", info:"message"})
})

router.post ('/',(req,res)=>{
    const name= req.body.name;
    const message= req.body.message;
    const date = new Date();
    messages.push({
        name:name,
        text:message,
        added:date
});
    res.redirect('/');
});

// module.exports=router;
export default router;