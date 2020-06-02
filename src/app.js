const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, '../templates');
const publicDirectoryPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');
const getRecipeIds = require('./test');
//comment to test git

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));
app.set('views', viewsPath);

app.get('/', (req, res)=>{
    
        res.render("index",{name:"D siva kishore"});

    });
    


app.get('/recipe', (req, res)=>{
    console.log(req.query.item);
    getRecipeIds(req.query.item).then((result)=>{
        //console.log(result);
        res.send(result[0]);
        //res.render("index",{name:"D siva kishore"});

    });
    
});

app.listen(port, ()=>{
    console.log("Server started on" +port);
});

hbs.registerPartials(partialsPath);
// app.get('/test',(req,res)=>{
//     console.log("hello");
// });