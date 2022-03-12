export interface User {
  _id?: string;
  accountId?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  gender?: string;
  dob?: string;
  currency?: string;
  postalCode: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  balance?: number;
  status?: "active" | "inactive";
  position?: "trader" | "admin";
  lastSeenAt?: string;
  createdAt?: string;
}

export type UserReference = {
  id: number;
  email: string;
};

export interface Transaction {
  publicId: string;
  channel: "transfer" | "deposit" | "withdrawal";
  type: "credit" | "debit";
  amount: number;
  transferTo?: UserReference;
  transferFrom?: UserReference;
}

export type WavesDataType = {
  title: string;
  goal: string;
  date: string;
  id: number;
};
