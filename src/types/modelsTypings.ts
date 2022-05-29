export interface RouteParamsType {
  id: string;
}

export type WaveDataState = {
  data?: {
    title: string;
    goal: string;
    date: string;
    id: number;
  };
  isError: boolean;
  isLoading: boolean;
};

export interface ActivityType {
  name: string;
  amount?: string;
  type: string;
  date: string;
  invitee?: string;
}
interface UserTypings {
  email: string;
  lastSeenAt: string;
}
interface WaveTypings {
  balance: number;
  canWithdraw: boolean;
  createdAt: string;
  dueDate: string;
  ownerId: string;
  slug: string;
  targetAmount: number;
  updatedAt: string;
  waveDescription: string;
  waveName: string;
  waveType: string;
  _id: string;
}

interface WaveTypings {
  waveName: string;
  targetAmount: number;
  balance: number;
  dueDate: string;
  canWithdraw: boolean;
  createdAt: string;
  ownerId: string;
  slug: string;
  updatedAt: string;
  waveDescription: string;
  waveType: string;
  _id: string;
}
export interface WavesMemberTypings {
  wave: any;
  waveActivities: ActivityType[];
  wavers: UserTypings[];
}

export interface transactionTypings {
  _id: string;
  updatedAt: string;
  createdAt: string;
  reference: string;
  paid: boolean;
  shortId: string;
  amount: number;
  paymentMethod: string;
  waveId: string;
  ownerId: string;
  status: string;
  wave: {
    _id: string;
    updatedAt: string;
    createdAt: string;
    waveName: string;
    waveDescription: string;
    targetAmount: number;
    dueDate: string;
    waveType: string;
    canWithdraw: boolean;
    ownerId: string;
    slug: string;
  };
  waveCreator: {
    _id: string;
    updatedAt: string;
    createdAt: string;
    email: string;
    mobile: string;
    lastSeenAt: string;
  };
}
