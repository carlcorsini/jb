const db = require('../db');

const getAll = () => {
  return db('users').orderBy('created_at', 'desc');
};

module.exports ={
  getAll
}
