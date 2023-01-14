import axios from "axios"
import { AsyncStorage } from 'react-native';

export const baseURL = 'https://backend.f4koin.cyou/api/'

export async function GetToken() {
  try {
    const value = await AsyncStorage.getItem('jwt');
    if (value !== null) {
      console.log('Token: ' + value)
      return value;
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * Lấy API bằng method Get mà không sử dụng Token
 * @param {string} url Địa chỉ của API
 * @returns Một Promise của request
 */

export let GetAPINoToken = async (url) => {
  let request = await axios(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return request;
}

/**
 * Lấy API bằng method Get có sử dụng kèm với Token
 * @param {string} url Địa chỉ của API
 * @returns Một Promise của request
 */

export let GetAPIToken = async (url) => {
  let request = await axios(url, {
    headers: {
      'Authorization': `Bearer ${await GetToken()}`,
      'Content-Type': 'application/json',
    },
  })
  return request;
}

/**
 * Lấy API bằng method Post có sử dụng Token, Body
 * @param {string} url Địa chỉ của API
 * @returns Một Promise của request
 */

export let PostAPIToken = async (url, body) => {
  let request = await axios(url, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${await GetToken()}`,
      'Content-Type': 'application/json',
    },
    data: body
  })
  return request;
}

/**
 * Lấy API bằng method Post mà không sử dụng Token, nhưng có dùng body
 * @param {string} url Địa chỉ của API
 * @returns Một Promise của request
 */

export let PostAPINoToken = async (url, body) => {
  let request = await axios(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body
  })
  return request;
}

/**
 * Lấy API bằng method Post có sử dụng Token nhưng không sử dụng Body
 * @param {string} url Địa chỉ của API
 * @returns Một Promise của request
 */

export let PostAPINoBody = async (url) => {
  let request = await axios(url, {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${await GetToken()}`,
      'Content-Type': 'application/json',
    },
  })
  return request;
}