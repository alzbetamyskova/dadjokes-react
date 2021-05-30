import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';


const PocitadloLiku = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

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

const App = () => (

  <>
  <PocitadloLiku />
  </>
);

render(<App />, document.querySelector('#app'));