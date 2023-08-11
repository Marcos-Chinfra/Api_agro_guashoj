const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;
process.env.TZ = 'America/Guatemala';

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true);
    }else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

require('./utils/auth');

app.get('/', (req, res) =>{
  res.send('Si funciona')
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
});
