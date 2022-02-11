import type { RequestState } from "@/types";

export default function useFetch<Type>(
  url: string,
  init: RequestInit = { method: "GET" }
) {
  let state = $ref<RequestState>("unsent");
  let data = $ref<Type | null>(null);
  let error = $ref<string | null>(null);

  async function execute(): Promise<Type> {
    state = "pending";
    error = null;
    const response = await fetch(url, init);
    if (!response.ok) {
      state = "error";
      error = `HTTP error! status: ${response.status}`;
      throw new Error(error.value);
    }
    const result = await response.json();
    data = result;
    state = "success";
    return result;
  }

  return $$({ state, error, data, execute });
}
