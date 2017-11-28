var express = require('express');
var router = express.Router();

/* GET post page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'SimonYang' });
});
/* GET 获取postsList 数据 */
router.get('/list',function(req,res,next){
  res.json({postsList:['文章1','文章2','文章3']});
});
module.exports = router;