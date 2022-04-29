"user strict";

const Blog = function (user) {
  this.title = user.firstName;
  this.contet = user.lastName;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

Blog.create = function (user, result) {
  connection.query("INSERT INTO blogs set ?", user, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Blog.read = function (result) {
  connection.query("SELECT * FROM blogs", (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Blog.update = function (id, user, result) {
  connection.query("UPDATE blogs SET ? WHERE id = ?", [user, id], function (
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Blog.delete = function (id, result) {
  connection.query("DELETE FROM blogs WHERE id = ?", [id], function (
    err,
    res
  ) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Blog;
