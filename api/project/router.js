const router = require("express").Router()
const Project = require("./model")

router.get("/", (req, res, next) => {
    Project.getProjects()
        .then( projects=> {
            res.json(projects)
        })
        .catch(next)
})

router.post("/", (req, res, next) => {
    Project.createProject(req.body)
        .then( () => {
            res.status(201).json(req.body)
        })
        .catch(next)
})


module.exports = router;