import React from 'react';


const MovieCard = (props) => (

  /*
      <div className="save-wrapper">
    <div className="movie-card">
      {console.log("MovieCard " + props)}
      {props.list.map(movie => (<h2>{movie.title}</h2>))}
      {props.list.map(movie => (<div className="movie-director">Director: <em>{movie.director}</em></div>))}
      {props.list.map(movie => (<div className="movie-metascore">Metascore: <strong>{movie.metascore}</strong></div>))}
      <h3>Actors</h3>
      {props.stars.map(
        star => (<div key={star} className="movie-star">{star}</div>)
      )};
      </div>
      <div className="save-button">Save</div>
    </div>

    */
  (
    <div className="movie-card">
      <h2>{props.title}</h2>
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )
);


export default MovieCard;
