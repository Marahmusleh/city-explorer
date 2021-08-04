import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        {this.props.movieData.map((movie) =>
          <Card className='movies' style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={movie.poster_path}
              alt={movie.title}
              style={{ height: '20rem' }}
            />

            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Avg Votes: {movie.vote_average}</Card.Text>
              <Card.Text>Total Votes: {movie.vote_count}</Card.Text>
              <Card.Text>Popularity: {movie.popularity}</Card.Text>
              <Card.Text>Released on: {movie.release_date}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}
export default Movies;
