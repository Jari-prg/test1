import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <First />
      <Sec/>
      <Th/>
      <Fo/>
      <Fi/>
    </div>
  );
}

function First(){
  return(
    <div>
      <h1>Hello Everyone</h1>
    </div>
  )
}

function Sec(){
  return(
    <div>
    <h2>My name is Jarina Hossain</h2>
    </div>
  )
}

function Th(){
  return(
    <div>
    <h2>This is my first ReactJs Program</h2>
    </div>
  )
}

function Fo(){
  return(
    <div>
    <h2>I am from Future Institute of Engineering and management</h2>
    </div>
  )
}

function Fi(){
  return(
    <div>
    <h2>I am currently in 3rd year persuing B.Tech in CSE</h2>
    </div>
  )
}

export default App;
// change detect 
