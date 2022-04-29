const express = require("express");
const router = express.Router();
const {
  createBlog,
  readBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog");

router.post("/blog", createBlog);

router.get("/blog", readBlog);

router.put("/blog/:blogId", updateBlog);

router.delete("/blog/:blogId", deleteBlog);

module.exports = router;
