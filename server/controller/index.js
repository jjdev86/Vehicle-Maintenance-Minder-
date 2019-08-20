const { createUser, createCarRecord, userCars, last6Months } = require('../model/index');

module.exports = {
  createUser: {
    post: (req, res) => {
      console.log(req.body, `from client`)
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
      userCars(Number(req.query.userId))
      .then(response => res.send(response))
      .catch(err => res.send(err));
    }
  },
  newCar: {
    post: (req, res) => {
      createCarRecord(req.body)
        .then(response => res.send(response))
        .catch(err => res.send(err));
    }
  },
  getlast6: {
    get: (req, res) => {
      last6Months()
      .then(response => res.send(response))
      .catch(err => res.send(err));
    }
  }
};