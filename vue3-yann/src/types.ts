export interface User {
  id: number;
  name: string;
  email: string;
}

export type RequestState = "UNSENT" | "PENDING" | "ERROR" | "SUCCESS";
