const dbPool = require("../config/database");

const getAll = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

module.exports = { getAll };
