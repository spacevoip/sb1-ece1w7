import mariadb from 'mariadb';

const dbConfig = {
  host: '91.108.125.149',
  database: 'asteriskcdrdb',
  user: 'asteriskuser',
  password: '35981517',
  connectTimeout: 5000
};

let pool;

export function getPool() {
  if (!pool) {
    pool = mariadb.createPool({
      ...dbConfig,
      connectionLimit: 5
    });
  }
  return pool;
}

export async function checkDatabaseConnection() {
  try {
    const connection = await getPool().getConnection();
    await connection.ping();
    connection.release();
    return { isConnected: true };
  } catch (error) {
    return {
      isConnected: false,
      error: error.message
    };
  }
}

export async function closePool() {
  if (pool) {
    await pool.end();
  }
}