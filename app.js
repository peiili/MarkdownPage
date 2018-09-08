const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const Router = express.Router();





//集成路由,使用路由的方法;
const infoRouter = require(path.join(__dirname,"./router/router.js"));
//使用路由中的方法;


//开启web服务
app.listen(8080,"127.0.0.1",(err)=>{
    if(err) console.log(err)
    console.log("start OK");
})