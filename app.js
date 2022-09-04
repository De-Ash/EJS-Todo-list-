// jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const newItems=[];
const workItems=[];
app.use(express.static("Public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    let today=date.getMyDate();
    res.render("list",{listTitle:today,newListItems:newItems});
});
app.post("/",(req,res)=>{
    let item=req.body.item;
    let btn = req.body.submit;
    if (btn=="Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        newItems.push(item);
        res.redirect("/");
    }
});
app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",newListItems:workItems});
});
app.listen(3000,()=>{
    console.log("Ash kun.. new server started at port 3000");
});