const mysql = require('mysql');
const util = require('util'); // enable async
const moment = require('moment');
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
                  VALUES('${body.username}', '${body.phone}')`;
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

const createCarRecord = async (body) => {
  const date = moment().format('YYYY-MM-DD');
  console.log(date, `date`)
  const query = `INSERT INTO cars
  (userId, car_year, car_make, car_model, car_model_trim, car_mileage, lastUpdated)
  VALUES(${body.user_id}, ${body["car-year"]}, '${body["car-make"]}', '${body["car-model"]}', '${body["car-model-trim"]}', ${body["car-mileage"]}, '${date}');`

  let insertcar = await pool.query(query)
  try {
    console.log(insertcar, `car insertCar`)
    let carId = insertcar.insertId;
    let userId = body.user_id;
    // create a maintenace record for vehicle
    const query = `INSERT INTO maintenance
      (userId, carId, maintenance_type, months_schedule)
    VALUES (${userId}, ${carId}, "Change Engine Oil and Filter", 3),
    (${userId}, ${carId}, "Rotate Tires, Inspect Tire Wear, $ Adjust Tire Pressure", 6)
    `;
    await pool.query(query)

    // Get car informtion by userId
    let car = await pool.query(`SELECT * FROM cars WHERE userId = ${userId}`)

    return car;
  } catch (err) {
    return err;
  }
}


module.exports = {
  createUser,
  createCarRecord
}