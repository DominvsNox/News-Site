const express = require('express');
const adminRouter = express.Router();
const methodOverride = require('method-override');
const jsonArticles = require('./articles.json');
const fs = require('fs');

adminRouter.use(methodOverride('_method'));

adminRouter.get('/new', (req, res)=>{
    res.render('new_article');
})

adminRouter.get('/', (req, res)=>{
    try{
      
      res.render('admin', {articles: jsonArticles});
    }
    catch(err){
      console.log(err);
    }
    //sdugsu
  })
  
adminRouter.post('/', (req, res)=>{
    let articles = jsonArticles
    
    let article = ({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
        createdAt: new Date().toLocaleDateString()
    })
    articles.push(article);
    try{
        
        fs.writeFileSync('articles.json', JSON.stringify(articles))
        res.redirect('admin');
    }
    catch(err){
        console.log(err);
        res.render('new_article');
    }
   
})

adminRouter.delete('/:id', (req, res)=>{
    let indexDelete = req.params.id
    console.log(req.params.id)
    let articles = jsonArticles
    let deleted = articles.splice(indexDelete, 1)

    try{
        
        fs.writeFileSync('articles.json', JSON.stringify(articles))
        res.redirect('/admin');
    }
    catch(err){
        console.log(err);
        res.render('admin');
    }
})



module.exports = adminRouter