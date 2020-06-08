#!/usr/bin/env node

const express = require("express")
const path = require("path")

const port = process.env.PORT || 8000
const server = express()

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, "build")))
server.get('/ping', function (req, res) {
	return res.send('pong')
})
server.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
server.listen(port, () => {
	console.log("Application served at " + port)
})

module.exports = server
