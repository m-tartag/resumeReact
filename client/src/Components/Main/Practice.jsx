import React, { Component } from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Practice() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default Practice;
