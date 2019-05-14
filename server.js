let express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./bakend/config/DB');

const addUnitRoutes = require('./bakend/routes/addunit.route');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('database connected')
  },
  err => {
    console.log('error ' + err)
  }
);

app.use(bodyParser.json());
app.use(cors());

app.use('/addunits', addUnitRoutes);

const port = process.env.PORT || 4000;

const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});