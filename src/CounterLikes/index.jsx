import React, { useState } from 'react';
import './style.css';

const CounterLikes = ({like, dislike}) => {
  const [upLikes, setUpLikes] = useState(like);
  const [downLikes, setDownLikes] = useState(dislike);

  return (
    <div className="joke__likes">
      <button 
        id="btn-up" 
        className="btn-like btn-like--up"
        onClick={() => {setUpLikes(upLikes + 1)}}>
      </button>
      <span 
        id="likes-up" 
        className="likes-count likes-count--up">
          {upLikes}
      </span>
      <button 
        id="btn-down" 
        className="btn-like btn-like--down"
        onClick={() => {setDownLikes(downLikes + 1)}}>
      </button>
      <span 
        id="likes-down" 
        className="likes-count likes-count--down">
          {downLikes}
        </span>
    </div>
  );
};

export default CounterLikes;