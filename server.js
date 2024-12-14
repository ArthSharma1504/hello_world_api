const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send("hello this is hellow world api:)");
});

app.listen(port , ()=>{
    console.log(`the post is running on http://localhost:${port}`);
});