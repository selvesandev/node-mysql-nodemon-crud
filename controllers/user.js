const User = require("../models/user");

exports.createUser = async (req, res) => {
  if (!req.body.name || !req.body.password || !req.body.email || !req.body.gender || !req.body.about || !req.body.skill) {
    return res.status(422).json({
      name: "name is required",
      password: "password is required",
      email: "email is required",
      about: "about is required",
      skill: "skill is required",
    });
  }


  const user = new User(req.body);
  User.create(user, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.status(201).json(user);
  });
};

exports.readUser = async (req, res) => {
  User.read(function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.readSingleUser = async (req, res) => {
  const id = req.params.userId;

  User.readSingle(id, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    if (Object.keys(user))
      res.json({
        id: user.id,
        email: user.email,
        password: user.auth_password,
        name: user.full_name,
        gender: user.gender,
        skill: user.skills.split(','),
        about: user.about,
        created_at: user.created_at,
        updated_at: user.updated_at,
      });
    else res.json({});
  });
};

exports.updateUser = async (req, res) => {
  const id = req.params.userId;
  User.update(id, new User(req.body), function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.userId;
  User.delete(id, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};
