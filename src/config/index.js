require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET,
    'DB_URI': process.env['DB_URI'],
};
