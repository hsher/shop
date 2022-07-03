import React from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
  return (
    <Container>
      <div className="d-flex flex-column">
        <Button variant={"outline-dark"} className="mt-4 p-2">
          Добавить тип
        </Button>
        <Button variant={"outline-dark"} className="mt-4 p-2">
          Добавить бренд
        </Button>
        <Button variant={"outline-dark"} className="mt-4 p-2">
          Добавить устрйство
        </Button>
      </div>
      <CreateBrand />
      <CreateType />
      <CreateDevice />
    </Container>
  )
}

export default Admin;
