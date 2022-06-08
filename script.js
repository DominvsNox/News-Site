const express = require('express');
const newsRouter = express.Router();
const NewsApi = require('newsapi');
const apiKey = '3398bba7bf044dbba502e110c0de1ebf';
const newsapi = new NewsApi(apiKey);
const jsonArticles = require('./articles.json');

newsRouter.get('/', (req, res)=>{
    try{
        res.render('blog_page', {articles: jsonArticles});
  
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
})

newsRouter.get('/general', (req, res)=>{
    try{
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            category: 'general',
            country: 'ua'
          }).then(data => {
            
            newsDataArr = data.articles;
            
            res.render('news', {articles: newsDataArr});
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
})

newsRouter.get('/business', (req, res)=>{
    try{
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            category: 'business',
            country: 'ua'
          }).then(data => {
            
            newsDataArr = data.articles;
            
            res.render('news', {articles: newsDataArr});
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
})

newsRouter.get('/sports', (req, res)=>{
    try{
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            category: 'sports',
            country: 'ua'
          }).then(data => {
            
            newsDataArr = data.articles;
            
            res.render('news', {articles: newsDataArr});
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
})

newsRouter.get('/tech', (req, res)=>{
    try{
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            category: 'technology',
            country: 'ua'
          }).then(data => {
            
            newsDataArr = data.articles;
            
            res.render('news', {articles: newsDataArr});
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
})

newsRouter.get('/fun', (req, res)=>{
    try{
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            category: 'entertainment',
            country: 'ua'
          }).then(data => {
            
            newsDataArr = data.articles;
            
            res.render('news', {articles: newsDataArr});
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
    
})

newsRouter.get('/search', (req, res)=>{
    try{
        let query = req.query.q;
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            q: query,
            country: 'ua'
          }).then(data => {
            
                newsDataArr = data.articles;
           
                res.render('news', {articles: newsDataArr});
           
            
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
            
        } else if(err.request){
            
            console.log(err.request)
        }
        else{
            
            console.error('Error: ', err.message);
        }
    }
})

newsRouter.get('/science', (req, res)=>{
    try{
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            category: 'science',
            country: 'ua'
          }).then(data => {
            
            newsDataArr = data.articles;
            
            res.render('news', {articles: newsDataArr});
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
    
})

newsRouter.get('/health', (req, res)=>{
    try{
        let newsDataArr = [];
        newsapi.v2.topHeadlines({
            category: 'health',
            country: 'ua'
          }).then(data => {
           
            newsDataArr = data.articles;
            
            res.render('news', {articles: newsDataArr});
          });
        
          
    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
    
})

newsRouter.get('/read/:id', (req, res)=>{
    try{
            let indexRead = req.params.id
            let article = jsonArticles[indexRead]
            console.log(indexRead);
            res.render('read_blog', {article : article});

    }
    catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request){
            console.log(err.request)
        }
        else{
            console.error('Error: ', err.message);
        }
    }
})

module.exports = newsRouter;

