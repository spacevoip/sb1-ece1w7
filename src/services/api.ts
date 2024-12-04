import axios from 'axios';
import type { DatabaseStatus } from './database';

const API_URL = 'http://localhost:3001/api';

export const checkDatabaseHealth = async (): Promise<DatabaseStatus> => {
  try {
    const response = await axios.get(`${API_URL}/health`);
    return {
      isConnected: response.data.status === 'connected',
      details: response.data.details,
      error: response.data.message
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        isConnected: false,
        error: error.response?.data?.message || error.message
      };
    }
    return {
      isConnected: false,
      error: 'Failed to connect to database service'
    };
  }
};