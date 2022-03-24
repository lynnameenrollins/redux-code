import './App.css';
import {useSelector} from  'react-redux';
import {increment} from './action/CounterAction';
import {decrement} from './action/CounterAction';
import { useDispatch } from 'react-redux';
import {red} from './action/ColorAction'
import {blue} from './action/ColorAction'
import {green} from './action/ColorAction'
import {purple} from './action/ColorAction'
import {pink} from './action/ColorAction'
import {yellow} from './action/ColorAction'
import {black} from './action/ColorAction'


function App() {
  // const counter = useSelector(state => state);
  // console.log({counter})
  const color = useSelector(color =>color);
  const dispatch = useDispatch();
  console.log("In App")
  
  console.log({color})
  return (
    <div className="App">
      {/* <h1> Counter : {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>  
      <button onClick={()=>dispatch(decrement())}>-</button>  */}
      <h1>My favorite color is {color}! </h1>
    
      <button style= {{color: "red"}} type= "radio" onClick={()=>dispatch(red())}>Red</button> 
      <button style={{color: "#4287f5"}} type= "radio" onClick={()=>dispatch(blue())}>Blue</button> 
      <button  style={{color: "green"}} type= "radio" onClick={()=>dispatch(green())}>Green</button> 
      <button style={{color: "purple"}} type= "radio" onClick={()=>dispatch(purple())}>Purple</button> 
      <button style= {{color: "pink"}} type= "radio" onClick={()=>dispatch(pink())}>Pink</button> 
      <button style={{color: "#fcba03"}} type= "radio" onClick={()=>dispatch(yellow())}>Yellow</button> 
      <button style={{color: "black"}} type= "radio" onClick={()=>dispatch(black())}>Black</button> 
    </div>
  );
}

export default App;
