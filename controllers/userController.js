const User = require('../models/userModel');

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  // Registration logic here
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  // Authentication logic here
};

module.exports = { registerUser, authUser };
