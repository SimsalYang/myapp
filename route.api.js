var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/** GET users lists */
router.get('/users',function(req,res,next){
  res.setEncoding('respond with a resource');
});

/** GET posts lists */
router.get('/posts',function(req,res,next){
  PostModel.find({}, {}, function (err, posts) {
    if (err) {
      res.json({ success: false });
      return;
    }

    res.json({ success: true, postsList: posts });
  });
});

/** POST posts */
router.post('/posts/create',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  res.send({title,content});//收到数据后，把数据返回给请求方
});

/** POST create post */
router.post('/posts/create', function (req, res, next) {
  var title = req.body.title;
  var content = req.body.content;

  var post = new PostModel();
  post.title = title;
  post.content = content;
  post.save(function (err, doc) {
    res.json({ success: true });
  });
});

module.exports = router;