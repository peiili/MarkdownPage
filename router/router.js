const path = require("path");
const express =require("express");
const infoRouter = express.Router(); 
const fs = require("fs");
//导入
const markdown = require( "markdown" ).markdown;

//获取首页
infoRouter.get("/index",(req,res)=>{
    //使用模板
    
   fs.readFile(path.join(__dirname,"../static/page/index.html"),(err,data)=>{
        res.send(data.toString());
    });

  
});
//获取Md子页面
infoRouter.get("/test",(req,res)=>{

    //异步获取md文件;
    fs.readFile(path.join(__dirname,"../static/mdFiles/test.md"),(err,data)=>{
    //将原始的数据进行解析,
   // console.log(data);
     const md = data.toString();
     //将数据进行解析为html,并返回给浏览器
     res.send( markdown.toHTML(md));
    });
 });

 //将方法暴露出去
 module.exports = infoRouter;