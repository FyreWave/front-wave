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

export type WavesDataType = {
  title: string;
  goal: string;
  date: string;
  id: number;
};

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
