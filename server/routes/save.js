const express = require("express");
const helper = require("../helpers/helper")
const savePostFile = __dirname + "/../models/savePost.json";
const savePost = require(savePostFile);
const router = express.Router();

router
    .get("/:id", (req, res) => {
        const requestPost = savePost.some(post => post.id === req.params.id)
        if (requestPost) {
            res.send(savePost.filter(post => post.id === req.params.id))
        }
    })
    .post("/:id", (req, res) => {
        const saveItem = {
            id: req.body.id,
            owner: {
                avatar_url: req.body.avatar_url,
                login: req.body.login
            },
            forks: req.body.forks,
            watchers: req.body.watchers,
            language: req.body.language,
            name: req.body.name,
            description: req.body.description,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at
        }
        for (const item of savePost) {
            if (item.id === req.params.id) {
                item.items.push(saveItem)
            }
        }
        res.send(savePost)
        helper.writeJSONFile(savePostFile, savePost)
    })

module.exports = router 