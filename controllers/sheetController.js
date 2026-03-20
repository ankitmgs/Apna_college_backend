const dsaSheet = require('../data/dsaSheet');

const getSheet = (req, res) => {
  res.json(dsaSheet);
};

module.exports = { getSheet };
