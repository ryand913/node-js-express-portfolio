const express = require('express');
// const data = require("../data/projectData.json");

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('<h1>Future site of really cool stuff</h1>');
});

app.get('/', (req,res) => {
   const data = res.locals.data.projects;
   res.render(data)
});

app.listen(3000, () => {
    console.log('app is running on 3000');
});