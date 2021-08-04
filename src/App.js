import axios from 'axios';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather';
import Movies from './Movies';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      errorMsg: '',
      displayLocation: false,
      showWeather: true,
      showMovie: true,
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    try {
      const city = e.target.cityName.value;
      const response = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${city}&format=json`
      );
      const locationIqData = response.data[0];
      const cityName = locationIqData.display_name.split(',')[0];
      const weatherResponse = await axios.get(
        `http://localhost:3043/weather?searchQuery=${cityName}&lat=${locationIqData.lat}&lon=${locationIqData.lon}`
      );

      const movieResponce = await axios.get(
        `http://localhost:3043/movies?query=${city}`
      );
      this.setState({
        locationData: locationIqData,
        errorMsg: '',
        displayLocation: true,
        weatherData: weatherResponse.data,
        movieData: movieResponce.data,
      });
    } catch (error) {
      this.setState({
        errorMsg: error.message,
        displayLocation: false,
        showWeather: false,
        showMovie: false,
        movieData: error.response,
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
          {this.state.displayLocation && (
            <div>
              <Card style={{ width: '25rem' }}>
                <Card.Img
                  variant='top'
                  src={`https://maps.locationiq.com/v3/staticmap?key=pk.b0acd25fa217904d671efabb56c53d66&q&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=15`}
                />
                <Card.Body>
                  <Card.Title>Location information</Card.Title>
                  <Card.Text>{this.state.locationData.display_name}</Card.Text>
                  <Card.Text>Longitude:{this.state.locationData.lon}</Card.Text>
                  <Card.Text>Latitude:{this.state.locationData.lon}</Card.Text>
                </Card.Body>
              </Card>

              <div>
                <Weather
                  weatherData={this.state.weatherData}
                  showWeather={this.state.showWeather}
                />
              </div>
              <div>
                {this.state.showMovie && 
                  <Movies movieData={this.state.movieData} />
                }
              </div>
            </div>
          )}
        </center>
      </div>
    );
  }
}

export default App;
