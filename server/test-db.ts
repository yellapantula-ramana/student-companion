import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool, { query } from './db.js';

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testConnection() {
  try {
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await query(schemaSql);
    const tablesAfter = await query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';");
    console.log('--- TEST SUCCESS ---');
    console.log('Tables in database:', tablesAfter.rows.map(r => r.table_name).join(', '));
  } catch (err: any) {
    console.error('--- TEST FAILED ---');
    console.error('Error connecting to PostgreSQL:', err.message);
    process.exit(1);
  } finally {
    pool.end();
  }
}

testConnection();
