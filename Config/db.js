const express = require("express");
const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", false);


const dbconnect = () => {
    try {
        const conn = mongoose.connect(process.env.IG);
        console.log("Done");
    } catch (error) {
        console.log("Error")
    }
}
module.exports = dbconnect;