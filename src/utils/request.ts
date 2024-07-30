/*
 * @Author: liut
 * @Date: 2024-07-27 22:54:39
 * @LastEditors: liut
 * @LastEditTime: 2024-07-27 23:27:20
 * 2394630102@qq.com
 * Copyright (c) 2024 by 刘涛, All Rights Reserved.
 */
import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})
// 请求拦截器
httpClient.interceptors.request.use()
// 响应拦截器
httpClient.interceptors.response.use()
export default httpClient
