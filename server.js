const express=require("express");
const app=express();

app.get('/',function(req,resp){
resp.sendFile(__dirname+'/index.html');

});

app.listen(4000,function(){
console.log("server is running on port 4000");

});