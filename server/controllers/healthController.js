import { checkDatabaseConnection } from '../services/database.js';

export const checkHealth = async (req, res) => {
  try {
    const dbStatus = await checkDatabaseConnection();
    res.json({ 
      status: dbStatus.isConnected ? 'connected' : 'error',
      message: dbStatus.error,
      details: dbStatus.details
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
};