import React from 'react';
import {Button, Card, Col, Container, Row, Image} from 'react-bootstrap';
import bigStar from '../assets/star.png';

const DevicePage = () => {
  const device = {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://via.placeholder.com/200x100'}
  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>

        <Col md={4}>
          <div className="d-flex align-items-center flex-column">
            <h2>
              {device.name}
            </h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {device.rating}
            </div>
          </div>
        </Col>

        <Col md={4} className="d-flex justify-content-end">
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}

          >
            <h3>
              {device.price}
            </h3>
            <Button
              variant={"outline-dark"}
            >
              Добваить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DevicePage;
