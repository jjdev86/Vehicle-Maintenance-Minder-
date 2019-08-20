const { createUser, createCarRecord, userCars, last6Months } = require('./index');
const faker = require('faker');

// generate 100 users
const users100 = async () => {

  let user = 6;
  while (user < 106) {
    let userObj = {};
    userObj.username = faker.internet.userName();
    userObj.phone = faker.phone.phoneNumberFormat();
    await createUser(userObj)
    user++;
  }
  return;
};

// users100();
const years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002,
  2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992,
  1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982,
  1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972,
  1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961];
const makes = ["acura", "alfa-romeo", "alpina", "aston-martin",
  "audi", "austin", "auverland", "beijing", "bentley", "bmw", "bristol",
  "bugatti", "buick", "cadillac", "caterham", "chevrolet", "chrysler",
  "citroen", "daewoo", "daihatsu", "de-tomaso", "dodge", "donkervoort",
  "eagle", "ferrari", "fiat", "ford", "ginetta", "gmc", "holden", "honda",
  "hyundai", "infiniti", "isuzu", "italdesign", "jaguar", "jeep", "jensen",
  "kia", "lada", "lamborghini", "lancia", "land-rover", "lexus", "lincoln",
  "lotec", "lotus", "mahindra", "marcos", "maserati", "mazda", "mclaren",
  "mercedes-benz", "mercury", "mg", "mini", "mitsubishi", "morgan", "nissan",
  "oldsmobile", "opel", "peugeot", "plymouth", "pontiac", "porsche", "proton",
  "reliant", "renault", "rolls-royce", "rover", "saab", "seat", "skoda", "steyr",
  "subaru", "suzuki", "tata", "toyota", "tvr", "vauxhall", "venturi", "volkswagen",
  "volvo", "westfield", "xedos", "zastava", "zaz"];

const create100Cars = async () => {
  // create 100 car records
  let carId = 5;
  let userId = 5;
  while (carId < 106) {
    let car = {};
    car.user_id = userId;
    car['car-year'] = years[Math.floor(Math.random() * years.length)];
    car['car-make'] = makes[Math.floor(Math.random() * makes.length)];
    car['car-model'] = faker.random.word();
    car['car-model-trim'] = faker.random.word();
    car['car-mileage'] = faker.random.number();

    await createCarRecord(car)
    carId++;
    userId++;
  }
  return
};
// create100Cars();