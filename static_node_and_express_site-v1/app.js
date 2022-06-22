const express = require('express');
// const router = express.Router();
const { data } = require("./data/projectData.json");
const { projects } = data


const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));




app.get('/', (req,res) => {
    res.locals = data.projects;
   res.render('index');
    // next();
});
app.get('/about', (req,res) => {
    res.render('about');
    // next();
});

app.get('/projects/:id', (req,res) => {
    res.locals.projects = data.projects;
    const { id } = req.params;

    res.render('project', { projects, id });
    // next();
});


app.use((req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  
  app.use((err,req,res,next) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600)
        res.status(err.status);
    else
    res.status(500);
  res.render('error');
  });

  app.listen(3000, () => {
    console.log('test');
});

//   app.use((err,req,res,next) => {
//       res.status(500);
//       res.render('error', { error: err})
//   });

// module.exports = router;