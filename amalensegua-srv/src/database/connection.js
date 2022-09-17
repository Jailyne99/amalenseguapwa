const sql = require('mssql')

const dbSettings = {
    user: "srv_amalensegua",
    password: "989976",
    server: "SHANDELL99",
    database: "amalensegua",
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
  
const getConnection = async () => {
    try {
      const pool = await sql.connect(dbSettings);
      return pool;
    } catch (error) {
      console.error(error);
    }
  };

