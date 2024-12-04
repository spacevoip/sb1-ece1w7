import { create } from 'zustand';
import { DatabaseStatus } from '../services/database';

interface ServiceStore {
  databaseStatus: DatabaseStatus | null;
  setDatabaseStatus: (status: DatabaseStatus) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  databaseStatus: null,
  setDatabaseStatus: (status) => set({ databaseStatus: status }),
}));