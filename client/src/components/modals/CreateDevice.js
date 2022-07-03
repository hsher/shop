import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const CreateDevice = ({show, onHide}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Введите название типа"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={onHide}
          variant={"outline-danger"}
        >
          Закрыть
        </Button>
        <Button
          onClick={onHide}
          variant={"outline-success"}
        >
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice;
