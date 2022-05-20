const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Task.createTask(req.body)
    .then( task => {
      task.task_completed === 0 ? task.task_completed = false : task.task_completed = true
      res.json(task)
    })
    .catch(next)
})

module.exports = router;
