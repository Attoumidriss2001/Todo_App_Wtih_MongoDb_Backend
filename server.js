var express = require('express');
var server = express();
var routes = require('./routes/routes.js');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb://127.0.0.1:27017/tododb",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr connecting")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});