const dbPool = require("../config/database");

const getAll = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

const create = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address)
                    VALUES ('${body.name}', '${body.email}', '${body.address}')`;

  return dbPool.execute(SQLQuery);
};

const update = (body, id) => {
  const SQLQuery = `UPDATE users 
                    SET name='${body.name}', email='${body.email}', address='${body.address}'
                    WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

const destroy = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id=${id}`;
  
  return dbPool.execute(SQLQuery);
}

module.exports = { getAll, create, update, destroy };
