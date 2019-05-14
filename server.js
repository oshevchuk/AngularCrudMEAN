let express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./bakend/config/DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => {
    console.log('database connected')
  },
  err => {
    console.log('error ' + err)
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

const server = app.listen(port, function() {
  console.log('Listening on port ' + port);
});