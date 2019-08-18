const { createUser } = require('../model/index');

module.exports = {
  createUser: {
    post: (req, res) => {
      createUser(req.body)
        .then((data) => {
          res.send(data);
        })
        .catch(err => {
          res.send(err);
        })
    }
  },
  userCars: {
    get: (req, res) => {

    }
  },
  newCar: {
    post: (req, res) => {

    }
  }
};