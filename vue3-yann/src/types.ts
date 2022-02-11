export interface User {
  id?: number;
  name: string;
  email: string;
}

export type RequestState = "unsent" | "pending" | "error" | "success";
