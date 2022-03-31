import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import User from './User';

function App() {
  const[counter,setCounter] = useState(0);
  
  const increment = () => {
    setCounter((val) => ++val)
  }
  const decrement = () => {
    setCounter((val) => --val)
  }
  return (
    <div>
      <h1 data-testid = "counter">{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}


export default App;
