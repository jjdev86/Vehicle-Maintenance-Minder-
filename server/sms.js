require('dotenv').config();

const accountSid = process.env.SID_KEY;

const authToken = process.env.TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendMessage = async (mss) => {
  client.messages.create(mss)
    .then(message => console.log(message.sid))
    .catch(err => console.log(err));
}

module.exports = {
  sendMessage
}