import mariadb from 'mariadb';

export interface DatabaseStatus {
  isConnected: boolean;
  error?: string;
  details?: {
    version?: string;
    threadId?: number;
    serverStatus?: number;
  };
}

const dbConfig = {
  host: '91.108.125.149',
  database: 'asteriskcdrdb',
  user: 'asteriskuser',
  password: '35981517',
  connectTimeout: 5000
};

let pool: mariadb.Pool;

export function getPool() {
  if (!pool) {
    pool = mariadb.createPool({
      ...dbConfig,
      connectionLimit: 5,
      trace: true
    });
  }
  return pool;
}

export async function checkDatabaseConnection(): Promise<DatabaseStatus> {
  let connection;
  try {
    connection = await getPool().getConnection();
    
    // Test the connection with a simple query
    const [{ version }] = await connection.query('SELECT VERSION() as version');
    
    // Get connection details
    const details = {
      version,
      threadId: connection.threadId,
      serverStatus: connection.serverStatus
    };

    return {
      isConnected: true,
      details
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown database error';
    console.error('Database connection error:', errorMessage);
    
    return {
      isConnected: false,
      error: errorMessage
    };
  } finally {
    if (connection) {
      try {
        await connection.release();
      } catch (releaseError) {
        console.error('Error releasing connection:', releaseError);
      }
    }
  }
}

export async function closePool() {
  if (pool) {
    try {
      await pool.end();
    } catch (error) {
      console.error('Error closing connection pool:', error);
    }
  }
}