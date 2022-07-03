import React from 'react';
import {Button, Container} from 'react-bootstrap';

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
    </Container>
  )
}

export default Admin;
