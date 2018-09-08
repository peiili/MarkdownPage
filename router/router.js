const path = require("path");
const express =require("express");
const infoRouter = express.Router(); 
//导入
const markdown = require( "markdown" ).markdown;

infoRouter.get("/",(req,res)=>{
    //异步获取md文件;
    fs.readFile(path.join(__dirname,"test.md"),(err,data)=>{
    //将原始的数据进行解析,
     const md = data.toString();
     //将数据进行解析为html,并返回给浏览器
     res.send( markdown.toHTML(md));
    });
 });