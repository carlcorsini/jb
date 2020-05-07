const express = require('express')
const bp = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const port = process.env.PORT || 8000

const app = express()
app.use(cors())
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.use(
  bp.json({
    parameterLimit: 100000,
    limit: '50mb',
    extend: true,
  })
)

const usersRoutes = require('./src/routes/users_routes.js')

app.use('/users', usersRoutes)

app.use((err, req, res, next) => {
  console.warn('error in the app', err);
  return res.status(err).json(err);
});

if (process.env.NODE_ENV !== 'test') {
  
  app.listen(port, ()=> {
    console.log(`We out here on ${port}`)
  })
}

module.exports = app