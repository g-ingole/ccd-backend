const express = require("express");
const { createuser, getalluser, getsingleuser, LoginUserCtrl } = require("../Controller/usercontrl");

const Router = express.Router();

Router.post('/user', createuser);
Router.post("/login", LoginUserCtrl);
Router.get('/alluser', getalluser);
Router.get("/:id", getsingleuser);
module.exports = Router;