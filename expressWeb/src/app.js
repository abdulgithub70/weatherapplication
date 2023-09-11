const express=require('express');
const path = require('path');
 const hbs = require('hbs');
const { error } = require('console');
const app = express();
const port = 3002

const static_path =path.join(__dirname, "../public");
const views_path =path.join(__dirname,"../views");

app.set('view engine', 'hbs');
app.set('src',views_path);
hbs.registerPartials(views_path);

app.use(express.static(static_path));

app.get("",(req, res)=>{
    res.render(__dirname+'/index')
})
app.get("/about",(req, res)=>{
    res.render(__dirname+'/about')
})
//app.get("/home",(req, res)=>{
  //  res.render(__dirname+"/index")
//})
app.get("/weather",(req, res)=>{
    res.render(__dirname+"/weather")
})
app.get("*",(req, res)=>{
    res.render(__dirname+ '/404error')
        errorMsg: 'opps!  page not found'
})
app.listen(port , ()=>{
    console.log(`listenning to the port at ${port}`)
}) 