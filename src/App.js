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
      display_name: '',
      errorMsg: '',
      lon : '',
      lat : '',
      displayData: false,
    };
  }

  

  submitForm = async (e) => {
    try {
      e.preventDefault();
      let cityName = e.target.city.value;
      const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${cityName}&format=json`;
      let response = await (axios.get(URL));

      this.setState({
        displayData: true,
        display_name : response.data[0].display_name,
        lon : response.data[0].lon,
        lat : response.data[0].lat,
        errorMsg: '',
      });
    } catch (error) {
      this.setState({
        errorMsg: error.message,
        displayData: false,
      });
      // console.log(error.message)
    }
    let mapData = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.lat},${this.state.lon}
    &markers=icon:small-gray-cutout|${this.state.lat},${this.state.lon}`);


    this.setState({
        link: mapData.config.url,
    });

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
                name='city'
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
            <img
              variant='top'
              src={this.state.link}            />

            <Card.Body>
              <Card.Title>Location information</Card.Title>
              <Card.Text>
                {this.state.displayData && (
                  <p>
                    <p>{this.state.display_name}</p>
                    <p>Longitude:{this.state.lon}</p>
                    Latitude:{this.state.lat}
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
