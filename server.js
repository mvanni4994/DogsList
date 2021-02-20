const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')  

const connection = mysql.createConnection({
    port:8080,
    user:'root',
    database: "rehomers"
})

const app = express()
app.get('/', function(req, res){

})