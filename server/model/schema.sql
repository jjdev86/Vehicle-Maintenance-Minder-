DROP DATABASE IF EXISTS `Carminder`;
CREATE DATABASE `Carminder`;

USE `Carminder`;

CREATE TABLE `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(120) NOT NULL,
  `phone_number` VARCHAR(20) NOT NULL,
  PRIMARY KEY (user_id)
);
INSERT INTO `users` (username, phone_number) VALUES ('Jose Valadez', '916-456-2343'); 
INSERT INTO `users` (username, phone_number) VALUES ('Nayeli Valdez', '916-503-2342'); 
INSERT INTO `users` (username, phone_number) VALUES ('Alexandra Valadez', '916-234-1232'); 
INSERT INTO `users` (username, phone_number) VALUES ('Jones Valadez', '916-124-3456'); 
INSERT INTO `users` (username, phone_number) VALUES ('Mano Valadez', '916-567-4346');

CREATE TABLE `cars` (
  car_id INT NOT NULL AUTO_INCREMENT,
  userId INT,
  car_year INT NOT NULL,
  car_make VARCHAR(50) NOT NULL,
  car_model VARCHAR(40) NOT NULL,
  car_model_trim VARCHAR(120) NOT NULL,
  car_mileage INT NOT NULL,
  lastUpdated DATE,
  PRIMARY KEY (car_id),
  FOREIGN KEY (userId)
    REFERENCES users (user_id)
);

INSERT INTO `cars` (userId, car_year, car_make, car_model, car_model_trim, car_mileage, lastUpdated)
VALUES (1, 2001, 'Honda', 'Civic', '1.8 Liter', 120000, CURDATE());
INSERT INTO `cars` (userId, car_year, car_make, car_model, car_model_trim, car_mileage, lastUpdated)
VALUES (2, 2002, 'Hyundai', 'Tiburon', '2.1 Liter', 80000, '2019-05-14');
INSERT INTO `cars` (userId, car_year, car_make, car_model, car_model_trim, car_mileage, lastUpdated)
VALUES (3, 2010, 'Chevrolet', 'Camaro', '3.4 Liter', 40000, '2019-03-14');


CREATE TABLE `maintenance` (
  `maintenance_id` INT NOT NULL AUTO_INCREMENT,
  userId INT,
  carId INT,
  maintenance_type TEXT NOT NULL,
  months_schedule INT NOT NULL,
  PRIMARY KEY (maintenance_id),
  FOREIGN KEY (userId)
    REFERENCES users (user_id),
  FOREIGN KEY (carId)
    REFERENCES cars (car_id)
);

INSERT INTO `maintenance` (userId, carId, maintenance_type, months_schedule) 
VALUES (1, 1, "Change Engine Oil and Filter", 3);
INSERT INTO `maintenance` (userId, carId, maintenance_type, months_schedule) 
VALUES (1, 1, "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure", 6);
INSERT INTO `maintenance` (userId, carId, maintenance_type, months_schedule) 
VALUES (2, 2,  "Change Engine Oil and Filter", 3);
INSERT INTO `maintenance` (userId, carId, maintenance_type, months_schedule) 
VALUES (2, 2, "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure", 6);
INSERT INTO `maintenance` (userId, carId, maintenance_type, months_schedule) 
VALUES (3, 3, "Change Engine Oil and Filter", 3);
INSERT INTO `maintenance` (userId, carId, maintenance_type, months_schedule) 
VALUES (3, 3, "Rotate Tires, Inspect Tire Wear, & Adjust Tire Pressure", 6);


