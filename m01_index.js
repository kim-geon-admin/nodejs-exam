const index_test = require('express');
const bodyParser = require('body-parser');
const app = index_test();
const user = require('./user');

app.listen(3001,function(){
    console.log('listning 3001');

});
const myLogger = function(req,res,next){
  console.log(req.url);
   console.log('dddd');
  next();
}

app.use(index_test.static('public'));
app.use(bodyParser.json());

 
app.use(myLogger);
app.use('/api',user);
app.get('/',function(request,response){
    response.send('home 입니다');
});

/*
app.get('/login',function(request,response){
    response.send('login 창 입니다'+request.query.id);
    //console.log(__dirname);
    //response.sendFile(__dirname+'/index.html');
});
*/