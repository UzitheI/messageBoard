var express = require('express');
const { format } = require('morgan');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('/form',{title:'LEAVE A MESSAGE', app:"mini message board"})
});

router.post('/',(req,res)=>{
  const author= req.body.author;
  const message =req.body.message;
  const date= format(new Date(),'dd MMM YYYY, HH:mm');

  message.push({
    text:message,
    author:author,
    added:date,
  });
  res.redirect('/');
});

module.exports = router;
