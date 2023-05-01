const express = require("express")
const bodyparser = require("body-parser");
const cors = require('cors');
const dbconnect = require('./Config/db');
const userrouter = require("./Router/userrouter");



const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000

dbconnect();

app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/api/user", userrouter);

app.listen(PORT, () => {
    console.log(`server is running successfully at ${PORT}`)
});