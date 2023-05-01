const User = require("../Model/usermodel");
const asynchandler = require("express-async-handler");

//create
const createuser = asynchandler(async (req, resp) => {
    try {
        const newuser = await User.create(req.body);
        resp.json(newuser);
    } catch (error) {
        throw new Error("error")
    }
});

//get all user
const getalluser = asynchandler(async (req, resp) => {
    try {
        const getalluser = await User.find();
        resp.json(getalluser);
    } catch (error) {
        throw new Error("error")
    }
});

//get single user
const getsingleuser = asynchandler(async (req, resp) => {
    const { id } = req.params;
    try {
        const getsingleuser = await User.findById(id);
        resp.json(getsingleuser)
    } catch (error) {
        throw new Error("error")
    }
});

//login user
const LoginUserCtrl = asynchandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if (!findUser) {
            res.status(404).send({
                success: false,
                message: "Wrong user details..!"
            });
        }
        else {
            if (findUser.password === password) {
                res.status(200).send({
                    success: true,
                    // user: true,
                    auth: findUser,
                    message: "Logged In Successfully..!",
                    // data: {
                    //     token: Math.random()
                    // },

                });
            }
            else {
                res.status(401).send({
                    success: false,
                    message: "Invalid Password..!",
                });
            }
        }
    } catch (error) {
        res
            .status(500)
            .send({ message: "Error retrieving user with email=" + req.body.email });
        // throw new Error("error");
    }

});
module.exports = { createuser, getalluser, getsingleuser, LoginUserCtrl }