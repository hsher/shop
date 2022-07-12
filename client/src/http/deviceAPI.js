import {$authHost, $host} from './index';
import jwt from 'jsonwebtoken'

export const createType = async (type) => {
  const {data} = await $authHost.post('http://localhost:5000/api/type', type)

  return data
}

export const fetchTypes = async () => {
  const {data} = await $host.get('http://localhost:5000/api/type')

  return data
}

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('http://localhost:5000/api/brand', brand)

  return data
}

export const fetchBrands = async () => {
  const {data} = await $host.get('http://localhost:5000/api/brand')

  return data
}

export const createDevice = async (device) => {
  const {data} = await $authHost.post('http://localhost:5000/api/device', device)

  return data
}

export const fetchDevices = async () => {
  const {data} = await $host.get('http://localhost:5000/api/device')

  return data
}

export const fetchOneDevice = async (id) => {
  const {data} = await $host.get('http://localhost:5000/api/device/' + id)

  return data
}
