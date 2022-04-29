const Blog = require("../models/blog");

exports.createBlog = async (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res.status(422).json({
      title: "Title is required",
      body: "Body is required",
    });
  }
  const blog = new Blog(req.body);
  Blog.create(blog, function (err, blog) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(blog);
  });
};

exports.readBlog = async (req, res) => {
  Blog.read(function (err, blog) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(blog);
  });
};

exports.updateBlog = async (req, res) => {
  const id = req.params.blogId;
  Blog.update(id, new Blog(req.body), function (err, blog) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(blog);
  });
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.blogId;
  Blog.delete(id, function (err, blog) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(blog);
  });
};
