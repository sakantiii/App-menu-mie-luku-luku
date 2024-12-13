const { Pool } = require("pg");
const { URL } = require("url");

// Replace this with your actual DATABASE_URL
const DATABASE_URL = "postgresql://postgres.ubsmdvanmwoagmcjhxwf:l8mqJpGYXszmUKWe@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres";

const pool = new Pool({
    connectionString: DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 2000,
});

async function checkConnection() {
  try {
      const client = await pool.connect();
      console.log('Connected to the database');
      client.release();
  } catch (err) {
      console.error('Connection error:', err.message);
      console.error('Stack trace:', err.stack);
  }
}

checkConnection();
// Export the pool object
module.exports = pool;
