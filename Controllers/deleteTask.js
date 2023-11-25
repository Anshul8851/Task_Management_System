// Import Model
const Task = require("../Models/Task-Schema")
// Define route handler
exports.deleteTask = async(req,res) => {
    try{
        //Extract data from request body
        const {id} = req.params;
        
        await Task.findByIdAndDelete(id);

        //Send a json response with a success flag
        res.status(200).json({
            success:true,
            message:'Task deleted successfully'
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