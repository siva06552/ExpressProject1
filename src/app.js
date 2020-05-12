const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res)=>{
    res.render("index",{name:"D siva kishore"});
});

app.listen(3000, ()=>{
    console.log("Server started");
});

// app.get('/test',(req,res)=>{
//     console.log("hello");
// });