const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.login(newUser, err => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.redirect('/');
      }
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user || !user.checkPassword(req.body.password)) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }
    req.login(user, err => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.redirect('/');
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const logoutUser = async (req, res) => {
  try {
    req.logout();
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
};
