import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

export const useAxios = <T>(config: AxiosRequestConfig) =>
  useQuery<AxiosResponse<T>, AxiosError<T>>([config.url, config.params].filter(Boolean), () =>
    axios.request<T>(config)
  );
