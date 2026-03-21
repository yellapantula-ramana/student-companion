require('dotenv').config({ path: '.env' });
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.DATABASE_URL ? true : false,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    const fs = require('fs');
    const path = require('path');
    const schemaSql = fs.readFileSync(path.join(__dirname, 'server', 'schema.sql'), 'utf8');
    await client.query(schemaSql);
    const tablesAfter = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';");
    console.log('Tables in database after schema:', tablesAfter.rows.map(r => r.table_name).join(', '));
    client.release();
  } catch (err) {
    console.error('Error connecting to PostgreSQL:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

testConnection();
