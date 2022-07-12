import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {createBrand} from '../../http/deviceAPI';

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('');
  const addBrand = () => {
    createBrand({name: value}).then(data => setValue(''))
    onHide();
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Введите название типа"}
            value={value}
            onChange={e => setValue(e.target.value)}
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
          onClick={addBrand}
          variant={"outline-success"}
        >
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand;
