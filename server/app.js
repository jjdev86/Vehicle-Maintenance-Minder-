const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const cron = require('node-cron');
const {client} = require('./sms.js');
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
cron.schedule('00 */1 * * * * ', () => {
    // call last6Months() to get a list of cars lastupdated 6 months ago
      // determine if lastUpdated updated plus 6 months is within current month (change to week)
        // if so, send the 6 month maintenance reminder
      // if lastUpdated plus 3 months is within current month (change to week)
        // send 3 month maintenance reminder
        
    //   var add3Months = moment('2019-05-12').add(6, 'months').isSame(new Date(), 'month');
    //   var isWith = moment('2019-08-12').isSame(new Date(), 'month');

    console.log('--------');
    console.log('running cron schedule every minitue');

    client.messages.create({
        body: 'Nayeli, this is your hubby. Are you almost done with food?',
        from: '+19163183202',
        to: '+19166040819'
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err));
});



app.listen(PORT, () => console.log(`Listening at port ${PORT}`));