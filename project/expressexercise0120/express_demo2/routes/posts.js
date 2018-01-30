
    var express = require('express');
     var router = express.Router();
     var models = require('../models');//加上這行
    
     // list posts

    
    
    
        


        router.get('/', function(req, res, next) {
            models.Post.findAll().then(function(posts) {
                    res.render('posts', { title: '留言列表', posts: posts });
                });
        });



        router.post('/new', function(req, res, next) {
                models.Post.create(req.body);
                res.redirect('/posts');
        });
    
  
        router.get('/new', function(req, res, next) {
             res.render('new_post', { 'title': '新增留言' });
        });

    
	




    
    module.exports = router;

