const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

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


app.listen(PORT, () => console.log(`Listening at port ${PORT}`));