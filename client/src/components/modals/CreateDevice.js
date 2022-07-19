import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import {fetchBrands, fetchTypes} from '../../http/deviceAPI';

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [brand, setBrand] = useState(null)
  const [type, setType] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile = e => {
    setFile(e.target.files[0]);
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
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название устройства"
          />

          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />

          <Form.Control
            className="mt-3"
            type="file"
            onChange={selectFile}
          />

          <hr />

          <Button
            variant={"outline-dark"}
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>

          {info.map(i =>
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите название свойства"
                />
              </Col>

              <Col md={4}>
                <Form.Control
                  placeholder="Введите описание свойства"
                />
              </Col>

              <Col md={4}>
                <Button
                  variant={"outline-danger"}
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          )}
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
});

export default CreateDevice;
