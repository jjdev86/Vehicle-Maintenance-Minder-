const express = require('express');
const router = require('express').Router();
const controller = require('../controller/index');

router.post('/newCar', controller.newCar.post);
router.get('/userCars', controller.userCars.get); // gets all cars for 1 user
router.post('/newUser', controller.createUser.post);
router.get('/last6', controller.getlast6.get);
router.get('/getMakes', controller.getMakes.get);
router.get('/getModels', controller.getModels.get);
router.get('/getTrims', controller.getTrims.get);

module.exports = router;