"user strict";

const User = function (user) {
  this.full_name = user.name;
  this.auth_password = user.password;
  this.email = user.email;
  this.gender = user.gender;
  this.skills = user.skill.join(',');
  this.about = user.about;
  this.created_at = new Date();
  this.updated_at = new Date();
};

User.create = function (user, result) {
  connection.query("INSERT INTO users set ?", user, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.read = function (result) {
  connection.query("SELECT *  FROM users", (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

User.readSingle = function (id, result) {
  connection.query("SELECT * FROM users where id = ?", [id], (err, res) => {
    if (err) {
      result(err, null);
    } else {
      result(null, res.length ? res[0] : {});
    }
  });
};

User.update = function (id, user, result) {
  connection.query("UPDATE users SET ? WHERE id = ?", [user, id], function (
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

User.delete = function (id, result) {
  connection.query("DELETE FROM users WHERE id = ?", [id], function (
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

module.exports = User;
