const users_model = require('../models/users_mdl');
const validator = require('./validator');

const getAll = async (req, res, next) => {
  let { payload } = req.body;
  // const isValid = validator.getAll(payload);
  // if (!isValid) return next();

  const users = await users_model.getAll();

  res.status(200).json({ results: users.length, data: users });
};

module.exports = {
  getAll,
};
