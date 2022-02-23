const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 5000;
const dStructure = require("./src/model/schema");
const registration = require("./src/model/regschema");
require("./src/db/conn");
const router = require("./src/routers/route");




// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './src/upload');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     }
// });


// const upload = multer({ storage: storage });

app.use(express.json());
app.use(router);


app.get("/", async (req,res) => {
    res.send("hello practise 2");
});

app.get("/login", async (req,res) => {
    res.send(" Login here");
});


app.get("/dashboard", async (req,res) => {
    res.send("Congrats! You Are Login");
});


app.get("/", async (req,res) => {
    res.send("hello practise 2");
});


app.listen(port, () => {
    console.log(`connection Successfully at port no ${port}`);
})

module.exports = app;