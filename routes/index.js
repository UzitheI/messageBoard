var express = require('express');
var router = express.Router();

const messages=[
  {
    text:"hi there",
    user:"Armando",
    added:new Date()
  },
  {
    text:"Hello World",
    user:"Charles",
    added:new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:"Message Board" });
});

router.get('/new',(req,res)=>{
  res.render('form',{title:"mini message board"});
})

module.exports = router;
