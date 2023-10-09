const getAll = (req, res) => {
  res.json({
    message: "GET ALL USER",
  });
};

const create = (req, res) => {
  res.json({
    message: "CREATE USER",
  });
};

module.exports = { getAll, create };
