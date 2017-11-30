var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');
var marked = require('marked');

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
    post.content = marked(post.content);
    res.render('show', { post });
  });
});

/** GET about page */
router.get('/about',function(req,res,next){
  res.render('about',{title:'about me'});
});

/** GET posts create page */
router.get('/posts/create',function(req,res,next){
  res.render('create');
});

/** GET posts edit page */
router.get('/posts/edit', function (req, res, next) {
  var id = req.query.id;
  res.render('edit', { id });
});

module.exports = router;