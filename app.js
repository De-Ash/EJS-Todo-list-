// jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    var date= new Date();
    var today= date.getDay();
    var weekDays=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"];
    var day= weekDays[today]+"day";
    res.render("list",{kindaDay:day});
});
app.listen(3000,()=>{
    console.log("Ash kun.. new server started at post 3000");
});