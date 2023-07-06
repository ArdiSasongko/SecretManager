const httpStatus = require("http-status")
const book = require("../model/bookmodel")
const Response = require("../model/Response")

const GetBooks = async (req,res) =>{
    try {
        const Books = await book.findAll();

        if(!Books){
            const response = new Response.Error(true, "Cant find any data")
            return res.status(httpStatus.NOT_FOUND).json(response)
        }

        const response = new Response.Success(false, "Find data", Books)
        return res.status(httpStatus.NOT_FOUND).json(response)

    } catch (error) {
        const response = new Response.Error(true, error.message)
        return res.status(httpStatus.NOT_FOUND).json(response)
    }
}

module.exports = { GetBooks }