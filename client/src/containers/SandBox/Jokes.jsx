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
