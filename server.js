const express = require("express")
const server = express()
const cors = require("cors")
const port = process.env.PORT || 3333
const file = __filename

const log = console.log
const logs = true

// Pages
// Pages
// Pages

const getListOfProducts = require("./handlers/getListOfProducts.js")

server.use(cors())
server.use(express.json({limit: 2048}))
server.use(express.urlencoded({limit: 2048, extended: false}))
server.use(express.static('public'))

// Routes
// Routes
// Routes

// Get list of products
server.get("/products", getListOfProducts)

if (process.env.NODE_ENV !=="test") {
	let liveServer
	if(process.env.HTTPS){
		logs && log({level: "info", msg: `Starting HTTPS server on port ${port}`, file})
		const https = require("https")
		const options = {
			key: fs.readFileSync(process.env.SECURE_KEY_PATH),
			cert: fs.readFileSync(process.env.SECURE_CERT_PATH)
		}
		liveServer = https.createServer(options, server).listen(port)
		logs && log({level: "info", msg: "HTTPS server started", file})
	} else {
		logs && log({level: "info", msg: `Starting HTTP server on port ${port}`, file})
		liveServer = server.listen(port)
		logs && log({level: "info", msg: "HTTP server started", file})
	}
	console.log("Server up.")
}

module.exports = server