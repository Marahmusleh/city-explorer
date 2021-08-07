import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurants.css';


export class Restaurants extends Component {
  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <Container>
          <br />  
          <h1>Restaurants</h1> 
          <br /> 
          <Row xs={1} md={3} className='g-4'>
            {this.props.restaurantData.map((service, i) => (
              <Col key={i}>
                <Card  style={{ width: '18rem'}} >
                  <Card.Img
                    variant='top'
                    src={service.image_url}
                    alt={service.name}
                    style={{ height: '20rem' }}
                  />

                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>Rating: {service.rating}</Card.Text>
                    <Card.Text>Price: {service.price}</Card.Text>
                    <Card.Text>url: {service.url}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Restaurants;
