const mssql = require('mssql');

const createTcpPool = async config => {

  const dbConfig = {
    server: "35.238.172.70", // e.g. '127.0.0.1'
    port: parseInt(process.env.DB_PORT), // e.g. 1433
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    options: {
      trustServerCertificate: true,
    },
    // ... Specify additional properties here.
    ...config,
  };
  // Establish a connection to the database.
  return await mssql.connect(dbConfig);
};

module.exports = createTcpPool;