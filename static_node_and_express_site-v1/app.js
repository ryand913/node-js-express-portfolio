const express = require('express');
const router = express.Router();
const { data } = require("./data/projectData.json");
const { projects } = data


const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));


app.get('/', (req,res) => {
   res.render('index', projects);

});
app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/projects/:id', (req,res) => {
    res.locals.ids = projects.id
    const { id } = req.params;
})
app.listen(3000, () => {
    console.log('test');
});

module.exports = router;