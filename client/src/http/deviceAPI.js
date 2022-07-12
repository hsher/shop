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
