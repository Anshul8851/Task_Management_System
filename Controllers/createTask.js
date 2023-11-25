// Import Model
const Task = require("../Models/Task-Schema")
// Define route handler
exports.createTask = async(req,res) => {
    try{
        //Extract data from request body
        const {taskTitle,taskDescription,taskStatus,user,dueDate} = req.body;
        //Create a new task object and insert in database
        const response = await Task.create({taskTitle,taskDescription,taskStatus,user,dueDate});
        //Send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}