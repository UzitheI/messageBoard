// const express= require('express')
import express from 'express'
var router = express.Router();

export const messages=[
  {
    name:'Ujjwal',
    text:'Hey I wanted to see you',
    added: new Date()
  },
  {
    name:'Hannah',
    text:'Yesterday i saw your cow',
    added: new Date()
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages:messages});
});


// router.post ('/new',(req,res)=>{
//   messages.push({user:req.body.userName, text:req.body.messageText, added:new Date()})
//   res.redirect('/');
// })
export default router;



