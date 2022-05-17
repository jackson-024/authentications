const User = require("../models/users")
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const { MongoClient } = require("mongodb")
const connectDb = require("../db/connect")

const login = async (req, res) => {
    // const { email, password } = req.body

    try {
        const user = await User.find({})
        res.send(user)
    } catch (error) {
        console.log(error)
    }

}

const register = async (req, res) => {
    try {
        const { email, username, password } = req.body || ""

        if ((email && password) == "") {
            res.status(400).send({
                Success : "False",
                Message : "Cannot send an empty field"
            })
        } else {
            const user = await User.findOne({email})

            if (user) {
                res.status(202).send({
                    status : false,
                    message : `User with email "${email}" already exists`
                })
            } else {
                users = new User({
                    email,
                    username,
                    password
                })

                users.password = await bcrypt.hash(password, saltRounds)

                await users.save()

                res.status(200).send({
                    status : true,
                    message : `User created succesfuly`
                })
            }
            // res.send({user})
        }
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    login,
    register
}