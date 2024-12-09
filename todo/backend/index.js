const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")


const app = express()

app.use(express.json())

app.get('/todo', async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.post('/todo', async function(req, res){
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload)
        if(!parsedPayload.success){
            res.status(411).json({
                msg:"You sent wrong inputs!"
            })
            return;
        }

        //put it in mongoDB
        
        await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })

        res.json({
            msg:"To-do created"
        })

})


app.put('/completed', async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs!"
        })
        return;
    }

    await todo.findByIdAndUpdate({
        _id:req.body.id
    },
    {
        completed:true
    })

    res.json({
        msg:"To-do marked as completed"
    })

})


app.listen(3000, ()=>{
    console.log("Your server is running...")
})


