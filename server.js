const Express = require('express');
const path = require('path');
const fs = require('fs');
const app = Express();

const port = 5000;
app.listen(port, ()=>console.log(`Listening to port ${port}`));



app.use('/Resourses',Express.static('Resourses'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const newsRouter = require('./script');
const adminRouter = require('./admin_router');

app.use(Express.urlencoded({extended: false}));

newsRouter.get('/', (req, res)=>{
    
})



app.use('/', newsRouter);
app.use('/admin', adminRouter);