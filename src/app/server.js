const express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'crud'
  });

var cors =require('cors') 
   
app=express()
app.use(express.json())
app.use(cors())
connection.connect();

app.get('/getall',(req,res)=>{
    connection.query('Select * from users', function(error,results){
       if(error){
           console.log(error);
       }
       console.log('The solution is:',results);
       res.json(results);
    })
   })

   app.post('/insert',(req,res)=>{
    connection.query('insert into users (username,designation,salary,experience) values(?,?,?,?)',[req.body.username,req.body.designation,req.body.salary,req.body.experience],function(error,results){
       if(error){
        console.log(error);
       }
       console.log('The solution is:', results);
       res.json(results);
    }
    )
    })

    app.get('/edit/:id',(req,res)=>{
        connection.query('select * from users where id=?',[req.params.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log('The solution is:', results);
           res.json(results);
        })
     })

     app.put('/update',(req,res)=>{
        connection.query('update users set username=?,designation=?,salary=?,experience=? where id=?',[req.body.username,req.body.designation,req.body.salary,req.body.experience,req.body.id],function(error,results){
           if(error){
              console.log(error);
           }
           console.log(results);
           res.json(results);
        })
     })



   app.listen(3000,()=>{
    console.log('listening on port 3000');
   })