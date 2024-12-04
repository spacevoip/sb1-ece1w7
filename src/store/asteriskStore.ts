import { create } from 'zustand';
import type { Extension, Queue, Call, SystemStatus } from '../types/asterisk';

interface AsteriskStore {
  extensions: Extension[];
  queues: Queue[];
  activeCalls: Call[];
  systemStatus: SystemStatus | null;
  setExtensions: (extensions: Extension[]) => void;
  setQueues: (queues: Queue[]) => void;
  setActiveCalls: (calls: Call[]) => void;
  setSystemStatus: (status: SystemStatus) => void;
  addExtension: (extension: Omit<Extension, 'status'>) => void;
  updateExtension: (number: string, extension: Partial<Extension>) => void;
  deleteExtension: (number: string) => void;
}

export const useAsteriskStore = create<AsteriskStore>((set) => ({
  extensions: [],
  queues: [],
  activeCalls: [],
  systemStatus: null,
  setExtensions: (extensions) => set({ extensions }),
  setQueues: (queues) => set({ queues }),
  setActiveCalls: (calls) => set({ activeCalls }),
  setSystemStatus: (status) => set({ systemStatus }),
  addExtension: (extension) =>
    set((state) => ({
      extensions: [...state.extensions, { ...extension, status: 'offline' }],
    })),
  updateExtension: (number, extension) =>
    set((state) => ({
      extensions: state.extensions.map((ext) =>
        ext.number === number ? { ...ext, ...extension } : ext
      ),
    })),
  deleteExtension: (number) =>
    set((state) => ({
      extensions: state.extensions.filter((ext) => ext.number !== number),
    })),
}));