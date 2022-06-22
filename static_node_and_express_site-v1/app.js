const express = require('express');
const router = express.Router();
const { data } = require("./data/projectData.json");
const { projects } = data


const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));



app.get('/', (req,res) => {
    res.locals = projects;
   res.render('index', projects);
    // next();
});
app.get('/about', (req,res) => {
    res.render('about');
    // next();
});

app.get('/projects/:id', (req,res) => {

    const { id } = req.params;

    res.render('project', { projects, id });
    // next();
});
app.listen(3000, () => {
    console.log('test');
});


app.use((req, res, next) => {
    const err = new Error('Not Found slut');
    err.status = 'helpppp';
    next(err);
  });

  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status)
    res.render('error', {err});
  });

//   app.use((err,req,res,next) => {
//       res.status(500);
//       res.render('error', { error: err})
//   });

module.exports = router;