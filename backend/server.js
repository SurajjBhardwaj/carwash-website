// backend server
const express = require("express");
const dotenv = require("dotenv");


// creating a rest api named app
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.get("/", (req, res) => {
    res.send("hello ji");
})

app.listen(PORT, () => {
    console.log(`server is running at port https://localhost:${PORT}`);
})