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
   console.log(projects[0].image_urls[0]);

});
app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/projects/:id', (req,res) => {

    const { id } = req.params;

    res.render('project', { projects, id });
});
app.listen(3000, () => {
    console.log('test');
});

module.exports = router;