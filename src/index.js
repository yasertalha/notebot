const express = require('express')
const sequelize = require('sequelize')    
const app = express()
const port = 5000
const db = {};

const sequel = new sequelize('workplace', 'postgres', '8015',{ //db_name, user_name, password
    host:"localhost",
    dialect:"postgres"
})

db.sequelize = sequelize 
db.sequel = sequel 

app.listen(port,()=>{
    console.log("hi");
})

// db.sequel.define("Aramco",{
//     user_name:{type:sequelize.INTEGER, primaryKey: true},
// })

// db.sequel.sync().then(()=> console.log("sync"))

sequelize.close().then(() =>{
    console.log("Connection closed.");
});