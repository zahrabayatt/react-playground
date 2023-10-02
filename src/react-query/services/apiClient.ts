import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance.get<T[]>(this.endpoint, config).then((res) => res.data);

  post = (data: T) =>
    axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
}

export default APIClient;
