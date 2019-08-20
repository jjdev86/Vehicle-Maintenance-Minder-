const { createUser, createCarRecord, userCars, last6Months } = require('../model/index');
const axios = require('axios');
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
  },
  getMakes: {
    get: async (req, res) => {
      console.log(req.query, `from getMakes`)
      let { year } = req.params;
      await axios.get(`https://www.carqueryapi.com/api/0.3/?array=?&cmd=getMakes&year=${year}&sold_in_us=1`, {
        headers: {
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          res.send(response.data)
        })
        .catch(err => res.send(err));
    }
  },

  getModels: {
    get: async (req, res) => {
      console.log(req.query, `getModels`)
      let { year, make } = req.query;
      await axios.get(`https://www.carqueryapi.com/api/0.3/?array=?&cmd=getModels&make=${make}&year=${year}&sold_in_us=1`, {
        headers: {
          "Content-Type": 'application/json'
        }
      })
        .then(response => {
          res.send(response.data)
        })
        .catch(err => res.send(err));
    }
  },
  getTrims: {
    get: async (req, res) => {
      let { year, make, model } = req.query;
      await axios.get(`https://www.carqueryapi.com/api/0.3/?array=?&cmd=getTrims&year=${year}&make=${make}&model=${model}&sold_in_us=1`)
        .then(response => {
          res.send(response.data);
        })
        .catch(err => res.send(err));
    }
  }
};