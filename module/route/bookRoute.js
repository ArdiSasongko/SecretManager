const express = require("express")
const routes = express.Router()
const book = require("../controller/bookController")

routes.get("/", book.GetBooks)

module.exports = routes