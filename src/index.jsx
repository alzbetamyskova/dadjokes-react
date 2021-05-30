import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Joke from './Joke';
import './joke.js';

const App = () => (
  <div className="container">
    <Joke />
  </div>
);

render(<App />, document.querySelector('#app'));