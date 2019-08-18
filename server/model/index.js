const mysql = require('mysql');
const util = require('util'); // enable async

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Carminder'
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Dabatase connection was refused.');
    }
    if (connection) {
      connection.release();
    }
    return;
  }
});

// promisify all queries to enable async/await
pool.query = util.promisify(pool.query);

const createUser = async (body) => {
  const { user, phone } = body;
  const query = `INSERT INTO users (username, phone_number)
                  VALUES('rz28rider', '916-456-0109')`;
  let insertUser = await pool.query(query)
  try {
    const query = `SELECT * FROM users
                    WHERE user_id = ${insertUser.insertId}`;
    let user = await pool.query(query);
    return [{ "user_id": user[0].user_id, "username": user[0].username }];
  } catch (err) {
    return err;
  }
};

module.exports = {
  createUser
}