require('dotenv').config();

const accountSid = process.env.SID_KEY;

const authToken = process.env.TOKEN;
const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Nayeli, this is your hubby. Are you almost done with food?',
//     from: '+19163183202',
//     to: '+19165959321'
//   })
//   .then(message => console.log(message.sid))
//   .catch(err => console.log(err));

module.exports = {
  client
}