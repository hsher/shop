import {$authHost, $host} from './index';
import jwt from 'jsonwebtoken'

export const registration = async (email, password) => {
  const {data} = await $host.post('http://localhost:5000/api/user/registration', {email, password, role: 'ADMIN'})

  return jwt.decode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('http://localhost:5000/api/user/login', {email, password})

  return jwt.decode(data.token)
}

export const check = async () => {
  const responce = await $host.post('http://localhost:5000/api/auth/registration')

  return responce
}
