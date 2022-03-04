const express = require('express');
const router = express.Router();


router.get('/:id',function(req,res){
  res.send('get 방식 입니다 param'+req.params.id);
});
 


router.post('/',function(req,res){
  console.log(JSON.stringify(req.body,null,2));
  console.log('post in ');
  res.json({
            success:true,
           user:req.body.username
           });
  res.send('postt 방식 입니다 param');
});
module.exports = router;