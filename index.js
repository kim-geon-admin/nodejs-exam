const index_test = require('express');
const bodyParser = require('body-parser');
const app = index_test();
const router = require('./router_exam/router');

app.listen(3001,function(){
    console.log('listning 3001');

});
const myLogger = function(req,res,next){
  //console.log(req.url);
  req.name = '김건'
   console.log('aaaa');
  next();
}

const myLogger2 = function(req,res,next){
  console.log(req.name);
   console.log('bbbb');
  next();
}

const myLogger3 = function(req,res,next){
  //console.log(req.url);
   console.log('cccc');
  next();
}

app.use(index_test.static('public'));
app.use(bodyParser.json());

 
app.use('/',myLogger,myLogger2,myLogger3);
app.use('/',router);
