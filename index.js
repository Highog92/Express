// https://github.com/Webudvikler-TechCollege/DSI/blob/main/Guides/Backend/3.0%20-%20NODEJS%20-%20Express%20Router.md
import dotenv from 'dotenv'
import mysql from 'mysql2'
import express from "express"
import db from "./Database.config.js"


const port = process.env.PORT
const api_key = process.env.APIKEY

const app = express()

// Default start route
app.get("/", (req, res) => {
    res.send("welcome to my api")
})

// Contact route
app.get("/contact", (req, res) => {
    res.send(`<p>hej hej</p>`)
})

// Start server listening
app.listen(8081, () => {
    console.log("ser started on port 8081");
}
)

// 404 not found route
app.use((req, res) => {
    res.status(404).send("page not found")
})

db.query(`SELECT id,title FROM song`, (error, result) => {
	if(error) {
		console.error(error)
	} else {
		console.log(result)
	}
})