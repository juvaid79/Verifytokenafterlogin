const express = require("express");
const app = express();
const cors = require('cors')
const userRouter = require('./Router/UserRoute')
const TaskRouter = require('./Router/TaskRouter')
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))




app.use(cors())
app.use("/",userRouter)
app.use("/",TaskRouter)

app.listen(PORT, () => console.log("Server running on port " + PORT));