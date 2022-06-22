const express = require('express');
// const router = express.Router();
const { data } = require("./data/projectData.json");
const { projects } = data


const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));




app.get('/', (req,res) => {
   res.render('index', {projects});
    // next();
});
app.get('/about', (req,res) => {
    res.render('about');
    // next();
});

app.get('/projects/:id', (req,res,next) => {
    res.locals.projects = data.projects;
    const { id } = req.params;
    const idInt = parseInt(id);
    const err = new Error('Not Found!');
    console.dir(res.locals.projects.length)
    console.dir(idInt)
    
        if (idInt < res.locals.projects.length) {
            res.render('project', { id });
        }
        else
            err.status = 404;
            next(err);
});


app.use((req,res,next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

//   app.use((err,req,res,next) => {
//     res.locals.error = err;

//   });

app.use((err,req,res,next) => {
    res.locals.error = err;
if (err.status === 404)
    res.render('page-not-found'); 
 else 
    res.status(500);
  res.render('error');
  });


 

  app.listen(3000, () => {
    console.log('test');
    console.log('heehee!');
});

//   app.use((err,req,res,next) => {
//       res.status(500);
//       res.render('error', { error: err})
//   });

// module.exports = router;