const express = require("express");

const weirdFile = __dirname + "/../models/weirdProjects.json";

const projects = require(weirdFile);

const router = express.Router();

router
    .get("/", (req, res) => {
        res.send(projects);
    })
    .get("/:id", (req, res) => {
        const requestProject = projects.some(project => project.id === req.params.id);
        if (requestProject) {
            res.json(project.filter(project => project.id === req.params.id));
        } else {
            res.status(400).json({
                errorMessage: `Can not find any video with the Id: ${req.params.id}`
            });
        }
    })
    ;

module.exports = router;