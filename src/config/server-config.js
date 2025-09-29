const dontenv = require('dotenv')

dontenv.config();

module.exports = {
    PORT: process.env.PORT
}