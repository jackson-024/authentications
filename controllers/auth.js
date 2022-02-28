const User = require("../models/users")
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const { MongoClient } = require("mongodb")

const login = (req, res) => {
    res.send(req.body)
}

const register =  (req, res) => {
    try {
        const { name, userName, password } = req.body || ""

        if ((name && password) == "") {
            res.status(400).send({
                Success : "False",
                Message : "Cannot send an empty field"
            })
        } else {
            // encrypt password
            ePassword =  bcrypt.hash(password, saltRounds)
    
            // check if user already exists
            const check =  User.findOne({name})
    
            console.log(check)
        }
    } catch (error) {
        res.send('cccs')
    }
}

module.exports = {
    login,
    register
}