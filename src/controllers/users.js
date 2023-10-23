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

const create = async (req, res) => {
  const { body } = req;

  try {
    await UserModel.create(body);
    res.status(201).json({
      message: "create new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      "server message": error,
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UserModel.update(body, id);
    res.status(201).json({
      message: "update user success",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      "server message": error,
    });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.destroy(id);
    res.status(200).json({
      message: "delete user success",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      "server message": error,
    });
  }
};
module.exports = { getAll, create, update, destroy };
