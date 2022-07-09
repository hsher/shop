import {$authHost, $host} from './index';
import jwt from 'jsonwebtoken'

export const registration = async (email, password) => {
  const {data} = await $host.post('http://localhost:5000/api/user/registration', {email, password, role: 'ADMIN'})
  localStorage.setItem('token', data.token)

  return jwt.decode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('http://localhost:5000/api/user/login', {email, password})
  localStorage.setItem('token', data.token)

  return jwt.decode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get('http://localhost:5000/api/user')
  localStorage.setItem('token', data.token)

  return jwt.decode(data.token)
}
