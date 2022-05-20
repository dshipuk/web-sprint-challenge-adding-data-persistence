const express = require("express")


const server = express()


server.use(express.json())



server.use("*", (req, res) => {
    res.json({
        status: 500,
        message: "Server.JS Error Routing"
    })
})


module.exports = server;