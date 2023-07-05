const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');


//middleWares
//cors
app.use(cors());

//req content-type encode
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes

app.use()

//listening
app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`);
})