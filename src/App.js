import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const nayoks = ['Salman',"Shahrukh", "Amir", "Saif"]
  const products = [
    {name : "Photoshop", price :"$30"},
    {name: "Illustrator", price:"$69"},
    {name: "PDF Reader", price:"$4.5"}
  ]



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>

        <Counter></Counter>
        <Todos></Todos>


        <Person name="Prerona" job="Programmer"></Person>
        <Person name="Nibir" job="Football"></Person>

      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount(count -1) }>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      </div>
  )
  
}

function Todos() { 
  const [todos, setTodo] = useState([]);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodo(data));
  } , [ ])


  return(
    <div>
      <h3>Dynamic todos : {todos.length}</h3>
      <ul>
        {
          todos.map(todo => <li> {todo.id}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: "5px",
    backgroundColor: "gray", 
    height: "200px",
    width: "200px",
    float : "left"
  }
  
  return (
    <div style={productStyle}>
      <h3> {props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}



function Person(props){
  return(
    <div style = {{border : "2px solid yellow", width : "400px", margin : "10px"}}>
      <h3>My Name : {props.name}</h3>
      <p>My Profession : {props.job} </p>
    </div>
  )
}

export default App;
