const express = require("express");
const PostController = require("../controllers/post");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

api.post("/add-post", [md_auth.ensureAuth], PostController.addPost);
api.get("/get-post", PostController.getPost);
api.put("/update-post/:id", [md_auth.ensureAuth], PostController.updatePost);
api.delete("/delete-post/:id", [md_auth.ensureAuth], PostController.deletePost);
api.get("/get-postu/:url", PostController.getPostU);

module.exports = api;