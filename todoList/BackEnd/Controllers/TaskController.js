const JTask = require("../Models/TaskModel");

exports.TaskAdd = async (req, res) => {
    try {
        console.log("user ", req.user)
        const { userId } = req.user
        const { FirstName, LastName, Task, } = req.body
        const Taskcheck = await JTask.findOne({ where: { Task } });
        if (!Taskcheck) {
            const task = await JTask.create({
                FirstName,
                LastName,
                Task,
                userId
            })
            return res.json({ success: true, msg: "Task Assign Successfully" })
        }
        return res.json({ success: false, msg: " Already task assign" })

    } catch (error) {
        console.log(error)

    }
}
exports.GetTask = async (req, res) => {
    try {
        const getall = await JTask.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.status(200).json({ success: true, msg: "Your all Task", getall: getall })
    } catch (error) {
        console.log(error)

    }
}