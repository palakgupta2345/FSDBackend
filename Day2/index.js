const express=require('express');
const app=express();
const data=require('./data.json');
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/data',(req,res)=>{
    res.status(200).json(data);
})

app.get('/data/:id',(req,res)=>{
    const id=req.params.id;
    const Id=Number(id)
    //res.status(200).json(data[Id].name                      );
    res.render('user.ejs',{users:data[Id]})
})

app.listen(3000,()=>{
    console.log("listening on",port);
})