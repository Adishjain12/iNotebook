const connectToMongo=require('./db');
const express = require('express');
const cors = require('cors')
const path = require('path');
connectToMongo();

const app = express()
//const port = process.env.PORT || 5000;
const port=5000;

//app.use(express.static(path.resolve(__dirname,'../build')))

app.use(cors())

app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'))

//app.use('*',(req,res)=>{
  //res.sendFile(path.resolve(__dirname,'../build/index.html'));
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
