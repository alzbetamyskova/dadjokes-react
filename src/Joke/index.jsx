import React, { useState } from 'react';
import './style.css';

import CounterLikes from './../CounterLikes';

const Joke = ({userAvatar, userName, text, likes, dislikes}) => {
  return(
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">
          {text}
        </p>
        <CounterLikes like={likes} dislike={dislikes}/>
      </div>
    </div>
  );
};

export default Joke;