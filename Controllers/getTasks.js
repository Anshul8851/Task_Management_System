const Task = require("../Models/Task-Schema");

exports.getTasks = async(req,res)=>{
    try{
        const allTasks = await Task.find({});

        res.status(200)
        .json({
            success:true,
            data:allTasks,
            message:"All tasks are fetched successfully",
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        });
    }
}


exports.getTaskById = async(req,res) => {
    try{
        const id = req.params.id;
        const task = await Task.findById({_id:id});

        // If id not found
        if(!task){
            return res.status(200).json({
                success:false,
                message:"No data found with given id",
            })
        }

        // If data found 
        res.status(200).json({
            success:true,
            data:task,
            message:`Task ${id} successfully fetched`,

        })
    }
    catch{
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        });
    }
}