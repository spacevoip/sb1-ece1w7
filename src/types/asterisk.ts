export interface Extension {
  number: string;
  name: string;
  status: 'online' | 'offline' | 'busy';
  tech: string;
}

export interface Queue {
  name: string;
  strategy: string;
  calls: number;
  members: number;
  completed: number;
  abandoned: number;
}

export interface Call {
  id: string;
  from: string;
  to: string;
  duration: number;
  status: 'ringing' | 'in-progress' | 'completed';
  timestamp: Date;
}

export interface SystemStatus {
  activeCalls: number;
  totalChannels: number;
  uptime: string;
  version: string;
}