const express = require("express")
const app = express();
require('dotenv').config()
const PORT = 3000;
app.get('/', (req,res) =>{
res.send("Hello World");
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})