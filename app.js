const express = require('express')
const app = express()
// const logger = require('log') // logs to a file
const connectDb = require("./db/connect")
require('dotenv').config()
const auth = require('./routes/auth')
const users = require('./routes/users')
const AuthChecker = require('./middleware/AuthChecker')

// enable json
app.use(express.json())

// register routes 
app.use('/api/authentication', auth)
app.use('api/', users)

// Start server
const port = 3000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}


start()