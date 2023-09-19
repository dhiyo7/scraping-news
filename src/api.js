const PORT = 7777
const express = require('express')
var cors = require('cors');
const morgan = require('morgan');
const serverless = require("serverless-http")
const router = require('./routes/api.route')

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors())
app.get('/', (req, res) => {
    res.json(`🚀 server run on ${PORT}`)
})

app.use('/api', router)
app.use(`/.netlify/functions/api`, router);

app.listen(PORT, () => console.log(`RUN ON ${PORT}`))
// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);
