const path = require('path');
module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'rojin',
    password: 'rojin',
    database: 'alumnieventmanagementsystem'
  },
  migrations: {
    tableName: 'migrations',
    directory: path.resolve(__dirname, './migrations'),
  },
  useNullAsDefault: false
}; 