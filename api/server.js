const express = require("express");
const projectsRouter = require("./project/router");
const resourcesRouter = require("./resource/router");
const tasksRouter = require("./task/router");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);

server.use("/api/resources", resourcesRouter);

server.use("/api/tasks", tasksRouter);

server.use("*", (req, res) => {
  res.json({
    status: 500,
    message: "Server.JS Error Routing",
  });
});

module.exports = server;
