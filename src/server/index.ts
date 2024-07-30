import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

export class Http {
  // axios 实例
  public instance: AxiosInstance
  // axios 基础配置
  public baseConfig: AxiosRequestConfig = { baseURL: process.env.BASE_URL, timeout: 50000 }

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))
  }
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }
}
