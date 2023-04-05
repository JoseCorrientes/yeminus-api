const {Pool} = require('pg');

const config = {
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "crudprueba",
    port: 5432,
  };
  const newPool = new Pool(config);
  
  module.exports = newPool;
  