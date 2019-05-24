import React, { Component } from 'react';

export default function Jokes(props) {
  const { question, answer } = props.data;
  return (
    <div className="contact-card">
      <h3>Question: {question}</h3>
      <h3>Answer: {answer}</h3>
    </div>
  );
}

// const Testing = () => (
//     <div className="container">
//       <Jokes data={{ question: 'Whats up?', answer: 'The sky.' }} />
//       <Jokes data={{ question: 'Bad Joke.', answer: 'Agreed.' }} />
//       <Jokes data={{ question: 'Wow.', answer: 'Low Point.' }} />
//     </div>
//   );

//   export default Testing;
