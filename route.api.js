var express = require('express');
var router = express.Router();

/** GET users lists */
router.get('/users',function(req,res,next){
  res.setEncoding('respond with a resource');
});

/** GET posts lists */
router.get('/posts',function(req,res,next){
  res.json({postsList:['文章1','文章2','文章3']});
});

/** POST posts */
router.post('/posts/create',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  res.send({title,content});//收到数据后，把数据返回给请求方
});

module.exports = router;