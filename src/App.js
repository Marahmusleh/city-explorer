import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    const city = e.target.cityName.value;
    const response = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${city}&format=json`
    );
    this.setState({
      locationData: response.data[0],
    });
    console.log('our axios response', response.data[0]);
  };
  render() {
    return (
      <div>
        <center>
        <Form onSubmit={this.submitForm}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>City Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter The City Name'
              name='cityName'
            />
          </Form.Group>
          <Button type='submit'>Explore!</Button>
        </Form>
        </center>
        <center>
        <Card style={{ width: '25rem' }}>
          <Card.Img
            variant='top'
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.b0acd25fa217904d671efabb56c53d66&q&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=15`}
          />
          <Card.Body>
            <Card.Title>Location information</Card.Title>
            <Card.Text>
              {this.state.locationData.display_name && 
                <p>{this.state.locationData.display_name}</p>
              }
            </Card.Text>
          </Card.Body>
        </Card>
        </center>
      </div>
    );
  }
}

export default App;
