const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    taskTitle:{
        type:String,
        required:true,
        maxLength:50,
    },
    taskDescription:{
        type : String,
        required : true,
        maxLength : 90,
    },
    user:{
        type : String,
        required : true,
        maxLength : 30,
    },
    taskStatus:{
        type:Boolean,
        completed:false,
    },
    dueDate:{
        type:Date,
        required:true,
    }
    

});
module.exports = mongoose.model("Task",taskSchema);