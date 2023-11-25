// Import Model
const Task = require("../Models/Task-Schema")
// Define route handler
exports.updateTask = async(req,res) => {
    try{
        const {id} = req.params;
        const {taskStatus} = req.body;

        const task = await Task.findByIdAndUpdate(
            {_id:id},
            {taskStatus},
        ) 
        res.status(200).json({
            success:true,
            data:task,
            message:'Updated successfully'
        })
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