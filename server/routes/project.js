const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// POST /api/projects
router.post("/", (req, res) => {
  // const { title, description, tasks = [] } = req.body;
  const title = req.body.title;
  const description = req.body.description;
  const tasks = [];

  Project.create({
    title: title,
    description: description,
    tasks: tasks
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET /api/projects
router.get("/", (req, res) => {
  Project.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
