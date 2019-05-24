import React from 'react';
import Jokes from './SandBox/Jokes';

const Testing = () => (
  <div className="container">
    <Jokes data={{ question: 'Whats up?', answer: 'The sky.' }} />
    <Jokes data={{ question: 'Bad Joke.', answer: 'Agreed.' }} />
    <Jokes data={{ question: 'Wow.', answer: 'Low Point.' }} />
  </div>
);

export default Testing;
