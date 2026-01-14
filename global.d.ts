interface StandardServerResponse<T> {
  error: boolean;
  data: T;
  message: string;
}