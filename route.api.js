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
      next(err);
    } else {
      res.json({ postsList: posts });
    }
  });
});

/** POST create post */
router.post('/posts', function (req, res, next) {
  var title = req.body.title;
  var content = req.body.content;

  var post = new PostModel();
  post.title = title;
  post.content = content;
  post.save(function (errm,doc) {
    if (err) {
      next(err);
    } else {
      res.json({ post:doc });
    }
  });
});

/** GET one post */
router.get('/posts/:id', function (req, res, next) {
  var id = req.params.id;

  PostModel.findOne({ _id: id }, function (err, post) {
    if (err) {
      next(err);
    } else {
      res.json({ post });
    }
  });
});

/** PATCH edit post */
router.post('/posts/:id', function (req, res, next) {
  var id = req.body.id;
  var title = req.body.title;
  var content = req.body.content;

  PostModel.findOneAndUpdate({ _id: id }, { title, content }, function (err) {
    if (err) {
      next(err);
    } else {
      res.json({});
    }
  });
});

module.exports = router;