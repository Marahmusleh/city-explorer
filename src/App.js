import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Alert from 'react-bootstrap/Alert';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      errorMsg: '',
    };
  }

  submitForm = async (e) => {
    try {
      e.preventDefault();
      const city = e.target.cityName.value;
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${city}&format=json`
      );
      this.setState({
        locationData: response.data[0],
        errorMsg: '',
      });
    } catch (error) {
      this.setState({
        errorMsg: error.message,
      });
      // console.log(error.message)
    }
  };
  render() {
    return (
      <div>
        <center>
          <Form onSubmit={this.submitForm}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label style={{ padding: '12px 20px' }}>
                City Name
              </Form.Label>
              <Form.Control
                style={{ width: '50%' }}
                type='text'
                placeholder='Enter The City Name'
                name='cityName'
              />
            </Form.Group>
            <Button type='submit'>Explore!</Button>
            {this.state.errorMsg && (
              <Alert key={1} variant={'danger'}>
                {this.state.errorMsg}
              </Alert>
            )}
          </Form>
        </center>
        <center>
          <br />
          <Card style={{ width: '25rem' }}>
            <Card.Img
              variant='top'
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.b0acd25fa217904d671efabb56c53d66&q&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=15`}
            />
            <Card.Body>
              <Card.Title>Location information</Card.Title>
              <Card.Text>
                {this.state.locationData.display_name && (
                  <p>
                    <p>{this.state.locationData.display_name}</p>
                    <p>Longitude:{this.state.locationData.lon}</p>
                    Latitude:{this.state.locationData.lon}
                  </p>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </center>
      </div>
    );
  }
}

export default App;
