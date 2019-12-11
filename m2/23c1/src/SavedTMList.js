import React from 'react';
import { Link } from 'react-router-dom';

const SavedTMList = props => (
  <div className="saved-list">
    <h3>Saved Team Members List:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {console.log("SavedTMList " + [props])}
    <div className="home-button"><Link className="home-button" to="/">Home</Link></div>
  </div>
);

export default SavedTMList;
