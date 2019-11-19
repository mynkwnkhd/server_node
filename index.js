
var express = require("express");
var mysql=require("mysql");

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

const connection=mysql.createConnection({
    host: "192.168.43.25",
    user: "root",
    password: "root",
    port: "3307",
    database: "app_db"
});

connection.connect();

app.get("/",function(request,response){
    response.send("welcome");
});

app.get("/student",function(request,response){
    var query=`select * from student`;
    connection.query(query,function(err,result){
        response.send(result);
    });

});



app.listen(4000, function(){
    console.log("Server Started on port  " + 4000 );
})

