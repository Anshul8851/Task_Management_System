const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const routes = require("./Routes/taskRoutes");

app.use("/api/v1",routes);

app.listen(PORT,() => {
    console.log(`Server started successfully at ${PORT}`);
})
const dbConnect = require("./Config/Database")
dbConnect();
app.get("/",(req,res)=>{
    res.send("<h1>this is home page 102</h1>")
})
