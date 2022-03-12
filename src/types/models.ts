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
