const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

require("./module/database/connect")

const book = require("./module/route/bookRoute")

app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json())

app.get("/", (req,res)=>{
    console.log("Response Success")
    res.status(200).send("Response Success")
})

app.use("/Book", book)

app.use("*", (req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(PORT, ()=>{
    console.log(`Server Running in http://localhost:${PORT}`)
})