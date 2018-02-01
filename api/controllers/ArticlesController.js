/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:(req,res)=>{
        Articles.find({
            sort:"title"
        }).exec((err,articles)=>{
            if(err){
                res.send(500,{err:'Database Error'});
            }
            res.view('list',{articles:articles});
        })
    },
    add:(req,res)=>{
        res.view('add')
    },
    create:(req,res)=>{
        var title = req.body.title;
        var body = req.body.body;
        Articles.create({title:title,body:body}).exec((err)=>{
            if(err){
                res.send(500,{err:'Database Error'});
            }
            res.redirect('/articles/list')
        });
    },
    delete:(req,res)=>{
        Articles.destroy({id:req.params.id}).exec((err)=>{
            if(err){
                res.send(500,{err:'Database Error'});
            }
            res.redirect('/articles/list')
        })
        return false;
    },
    edit:(req,res)=>{
        Articles.findOne({id:req.params.id}).exec((err,article)=>{
            if(err){
                res.send(500,{err:'Database Error'});
            }
            res.view('edit',{article:article});
        })
    },
    update:(req,res)=>{
        var title = req.body.title;
        var body = req.body.body;
        Articles.update({id:req.params.id},{title:title,body:body}).exec((err)=>{
            if(err){
                res.send(500,{err:'Database Error'});
            }
            res.redirect('/articles/list')
        });

        return false;
    }
};

