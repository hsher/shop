import React, {useContext} from 'react';
import {Context} from '../index';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {NavLink, useNavigate} from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/consts';
import {observer} from 'mobx-react-lite';
import Container from 'react-bootstrap/Container'
import {ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/consts';

const SiteNavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  return (
    <NavBar bg="dark" variant="dark" className="justify-content-between">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
        {user.isAuth ?
          <Nav style={{color: 'white'}}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              style={{"margin-left": "0.5rem"}}
              onClick={() => {user.setIsAuth(false); navigate(LOGIN_ROUTE)}}
            >
              Выйти
            </Button>
          </Nav>
          :
          <Nav style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </NavBar>
  )
});

export default SiteNavBar;
