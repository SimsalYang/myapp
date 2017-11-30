var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/** GET home page */
router.get('/',function(req,res,next){
  res.render('index', { title: 'Simon Yang' });
});

/** GET posts page */
router.get('/posts',function(req,res,next){
  res.render('posts',{title:'文章列表'});
});

/** GET posts show page */
router.get('/posts/show', function (req, res, next) {
  var id = req.query.id;

  PostModel.findOne({ _id: id }, function (err, post) {
    res.render('show', { post });
  });
});

/** GET about page */
router.get('/about',function(req,res,next){
  res.render('about',{title:'about me'});
});

/** GET posts edit page */
router.get('/posts/create',function(req,res,next){
  res.render('create');
});

module.exports = router;