const express = require('express')
const router = express.Router();

const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);


const messages=[
  {
    text:"hi there",
    user:"Armando",
    added:formattedDate,
  },
  {
    text:"Hello World",
    user:"Charles",
    added:formattedDate
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:"Message Board" ,
  messages:messages});
});

module.exports = router;
