import React, {useState} from 'react';
import {Button, Container, Form, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {NavLink, useLocation} from 'react-router-dom';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import {login, registration} from "../http/userAPI"

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const click = async () => {
    if (isLogin) {
      const responce = await login()
    } else {
      const responce = await registration(email, password)
      console.log(responce)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            valuse={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            valuse={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />

          <div className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              ) : (
              <div>
                Есть аккаунта?{" "}
                <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}

            <Button
              variant={"outline-success"}
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth;
