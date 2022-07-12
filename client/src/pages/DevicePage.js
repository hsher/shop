import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row, Image} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import bigStar from '../assets/star.png';
import {fetchOneDevice} from '../http/deviceAPI';

const DevicePage = () => {
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
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
      <div className="d-flex flex-column mt-3">
        <h1>
          Характеристики
        </h1>
        {device.info.map((info, index) =>
          <div
            key={info.id}
            style={{background: index % 2 === 0 ? "lightgray" : "transparent", padding: 10}}
          >
            {info.title}: {info.description}
          </div>
        )}
      </div>
    </Container>
  )
}

export default DevicePage;
