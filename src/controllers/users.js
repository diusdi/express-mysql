const UserModel = require("../models/users");

const getAll = async (req, res) => {
  try {
    const [data] = await UserModel.getAll();
    res.status(200).json({
      message: "get all user success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      "server message": error,
    });
  }
};

const create = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE USER",
    data: req.body,
  });
};

module.exports = { getAll, create };
