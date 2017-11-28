var express = require('express');
var router = express.Router();

/** GET home page */
router.get('/',function(req,res,next){
  res.render('index',{title:'Simon Yang'})
});

/** GET posts page */
router.get('/posts',function(req,res,next){
  res.render('posts',{title:'文章列表'});
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