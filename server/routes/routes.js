const express = require('express');
const router = express.Router();
const Todos = require('../Models/ToDos');



// Create Todos

router.post('/todos', async (req, res) => {
    //console.log(req.body)
    try {
        const newTodo = new Todos({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobilenumber: req.body.mobilenumber
        })
        console.log(newTodo)
        //console.log("Test Case 123")
        const saveTodo = await newTodo.save()
        res.status(200).json({result:"user is added successfully",saveTodo})
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})


//delete Todos

router.delete("/todos/:id",async(req,res)=>{
    try{
   let todoId=req.params.id
      todos= await Todos.findByIdAndDelete(todoId)
   res.status(200).json({result:"user is  deleted sucessfully"})
    }
    catch(err){
  console.log(err)
  return res.status(500).json(err)
    }
})
module.exports = router
