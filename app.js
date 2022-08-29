// jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    var day= new Date();
    var today= day.getDay;
    if ((today==6)||(today==0)) {
        res.send("its the weekend yay!");
    } else {
        res.send("its the weekday...get to work");
    }
    // app.render();
});
app.listen(3000,()=>{
    console.log("Ash kun.. new server started at post 3000");
});