export default function useFetch<Type>(
  url: string,
  init: RequestInit = { method: "GET" }
) {
  let isFetching = $ref(false);
  let isFinished = $ref(false);
  let data = $ref<Type | null>(null);
  let error = $ref<string | null>(null);

  async function execute(): Promise<Type> {
    isFetching = true;
    isFinished = false;
    error = null;
    const response = await fetch(url, init);
    if (!response.ok) {
      isFetching = false;
      isFinished = true;
      error = `HTTP error! status: ${response.status}`;
      throw new Error(error.value);
    }
    const result = await response.json();
    data = result;
    isFetching = false;
    isFinished = true;
    return result;
  }

  return $$({ isFetching, error, data, execute, isFinished });
}
