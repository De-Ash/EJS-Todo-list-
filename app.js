// jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
let newItems=["first item","second item"];
app.use(express.static("Public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    let date= new Date();
    let Options={
        weekday:"long",
        day:"numeric",
        month:"short",
    };
    let today=date.toLocaleDateString("en-US",Options);
    let day=today;
    res.render("list",{kindaDay:day,newListItems:newItems});
});
app.post("/",(req,res)=>{
    let item=req.body.item;
    newItems.push(item);
    res.redirect("/");
});
app.listen(3000,()=>{
    console.log("Ash kun.. new server started at post 3000");
});