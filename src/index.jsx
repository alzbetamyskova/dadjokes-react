import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Joke from './Joke';
import {jokes} from './jokes.js';


const App = () => {
  return (
  <div className="container">
    {jokes.map((j) => (
      <Joke 
        key={j.id}
        userAvatar={j.avatar} 
        userName={j.name}
        text={j.text}
        likes={j.likes}
        dislikes={j.dislikes}
      />
    ))}
  </div>
  );
};

render(<App />, document.querySelector('#app'));