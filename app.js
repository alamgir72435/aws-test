const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
let uri = process.env.mongo_uri
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(() => {
    console.log('Mongodb Connected')
}).catch(()=> console.log('Not Connected'))

const todoSchema = new mongoose.Schema({
    todo:{type:String},
    isDone:{type:Boolean, default:false}
})

let Todo = mongoose.model('todos', todoSchema)

const addTodo = async() => {
    try {
        await Todo.deleteMany()
        await Todo.insertMany([
            {todo:'todo one'},
            {todo:'todo Two'},
            {todo:'todo Three'},
        ])
    } catch (error) {
        console.log('Not Posible')
    }
}
addTodo()

app.get('/', async(req, res) => {
   
    try {
        
        let todos = await Todo.find()
        res.json(todos)

    } catch (error) {
        res.send(`<h1 style='text-align:center;font-size:45px;color:coral;font-family:Arial, Helvetica, sans-serif;'>Hello baby =>  Cant do this</h1>`)
    }
})


const port = process.env.port || 5000


app.listen(port, console.log('Server Running on port '+port))