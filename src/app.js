const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res)=>{
    res.render("index",{name:"D siva kishore"});
});

app.listen(port, ()=>{
    console.log("Server started on" +port);
});

// app.get('/test',(req,res)=>{
//     console.log("hello");
// });