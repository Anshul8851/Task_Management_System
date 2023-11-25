const express = require("express");
const router = express.Router();

// Import controller
const {createTask} =require("../Controllers/createTask")
const {getTasks,getTaskById} = require("../Controllers/getTasks")
const {updateTask} = require("../Controllers/updateTask")
const {deleteTask} = require("../Controllers/deleteTask")
// Define API routes
router.post("/createTask",createTask);
router.get("/getAllTasks",getTasks);
router.get("/getTaskById/:id",getTaskById);
router.put("/updateTask/:id",updateTask);
router.delete("/deleteTask/:id",deleteTask);
module.exports = router;