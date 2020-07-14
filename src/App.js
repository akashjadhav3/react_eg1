import React from 'react';
// import logo from './logo.svg';
import './App.css';

const age = (a) => {
  if(a>8){
    return <span>You are elegible</span>
  }else{
    return <span>You are not elegible</span>
  }
}

function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
      {age(19)}
    </div>
  );
}

export default App;
