const User = require("../models/user");
var jwt = require('jsonwebtoken');

exports.userLogin = async (req, res) => {

  const { username = '', password = '' } = req.body;
  if (username.length === 0 || password.length === 0) return res.status(403).send({ msg: 'Username and Password is a required field' });

  User.readSingleByEmail(username, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }

    if (!user) return res.sstatus(403).send({ msg: 'User not found' });

    if (user.auth_password !== password) return res.status(403).send({ msg: 'Password is incorrect' });

    res.json({
      msg: 'Logged in',
      token: jwt.sign({
        id: user.id,
        email: user.email,
      }, 'salt_secret', { expiresIn: '1h' })
    });

  });
};
