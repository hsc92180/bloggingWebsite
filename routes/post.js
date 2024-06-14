const express = require("express");

const router = express.Router();
const postcontrollers = require("../controller/post");

router.get("/",postcontrollers.getAllposts) //retrieve all posts

router.get("/:id",postcontrollers.getSpecificpost)//retrieve a specific post by id

router.post("/",postcontrollers.createnewpost) //create a new post

router.put("/:id",postcontrollers.updateapost) //update an existing post

router.delete("/:id", postcontrollers.deletepost)// delete a specific post

//commenting routes

router.post("/comments/:postId", postcontrollers.postComments);

router.delete("/comments/:id", postcontrollers.deleteComment);
module.exports = router;