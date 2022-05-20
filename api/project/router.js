const router = require("express").Router();
const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Project.createProject(req.body)
    .then((project) => {
      project.project_completed === 0
        ? (project.project_completed = false)
        : (project.project_completed = true);
      res.json(project);
    })
    .catch(next);
});

module.exports = router;
