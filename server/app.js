const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const cron = require('node-cron');
const { sendMessage } = require('./sms.js');
const { last6Months } = require('./model/index');
const moment = require('moment');

const PORT = process.env.PORT || 3000;
const app = express();
// Router
const routes = require('./routes/routes');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


app.use(express.static(path.join(__dirname + "/../client/dist")));
app.use('/', routes);

// execute schedule by X interval to send txt messages with maintenance reminder
// execute schedule every day
// send messages to users who have maintenance within 1 week from their last maintenance.
// after message is sent
// update the car record lastUpdated to current Date

cron.schedule('00 */1 * * * * ', () => {
  console.log('--------');

  const oil = 'Change Engine Oil and Filter';
  const tireRotation = 'Rotate Tires, Inspect Tire Wear, $ Adjust Tire Pressure';

  last6Months()
    .then(data => {
      data.forEach(car => {
        let lastUpdate = moment(`${car.lastUpdated}`).format('YYYY-MM-DD HH:mm:ss');
        let now = moment();
        let add3Months = moment(`${lastUpdate}`).add(3, 'months').isSame(now, 'week');
        let add6Months = moment(`${lastUpdate}`).add(6, 'months').isSame(now, 'week');
        let message = {};
        message.body = `Hi ${car.username}, Your vehicle is due for maintenance: ${car.maintenance_type}`;
        message.from = '+19163183202';
        message.to = '+19166040819';

        if (car.maintenance_type === oil) {
          if (add3Months) {
            sendMessage(message);
          }
        }
        if (car.maintenance_type === tireRotation) {
          if (add6Months) {
            sendMessage(message);
          }
        }
      });
    })
    .catch(err => console.log(err));
});



app.listen(PORT, () => console.log(`Listening at port ${PORT}`));