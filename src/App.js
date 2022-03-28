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

import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

function App(props) {
  // const counter = useSelector(state => state);
  // console.log({counter})
  // const color = useSelector(color =>color);
  // const dispatch = useDispatch();
  // console.log("In App")
  

  // const [color, setColor] = useState(null);
  let dispatch = useDispatch();
  const colVal = useSelector(state => state.color)
  
  useEffect(() =>{
    console.log("in useEffect, colval: " + colVal);
  })

  console.log("ColorVal (outside handleChange) " + colVal)
  const handleChange = (e) =>{
      // setColor(e.target.value);
      // console.log("Color value:" + e.target.value);
      // console.log("Is Checked " + e.target.checked)
      
      if (e.target.checked){
        dispatch({
          type: "ADD_COLOR",
          payload: e.target.value,
      })
      // console.log("ColorVal (in add) " + colVal)
      
    }
      else{
        dispatch({
          type: "REMOVE_COLOR",
          payload: e.target.value,
      })
      // console.log("ColorVal (in remove) " + colVal)
    }
    console.log("After if/else: ColorVal  " + colVal) 
  }

  return (
    <div className="App">
      {/* <h1> Counter : {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>  
      <button onClick={()=>dispatch(decrement())}>-</button>  */}
      
      <h1>My favorite color is: </h1>
      <h1>{colVal}</h1>
      <ol>
            {colVal.map((value => <li key = {value}>{value}</li>))}     
      </ol>   
      
      {/* <button style= {{color: "red"}} type= "radio" onClick={()=>dispatch(red())}>Red</button> 
      <button style={{color: "#4287f5"}} type= "radio" onClick={()=>dispatch(blue())}>Blue</button> 
      <button  style={{color: "green"}} type= "radio" onClick={()=>dispatch(green())}>Green</button> 
      <button style={{color: "purple"}} type= "radio" onClick={()=>dispatch(purple())}>Purple</button> 
      <button style= {{color: "pink"}} type= "radio" onClick={()=>dispatch(pink())}>Pink</button> 
      <button style={{color: "#fcba03"}} type= "radio" onClick={()=>dispatch(yellow())}>Yellow</button> 
      <button style={{color: "black"}} type= "radio" onClick={()=>dispatch(black())}>Black</button>  */}

      <input type = "checkbox" name = "color" value = 'red'  onClick={handleChange}/>Red
      <input type = "checkbox" name = "color" value = 'blue' onClick={handleChange}/>Blue
      <input type = "checkbox" name = "color" value = 'green' onClick={handleChange}/>Green
      <input type = "checkbox" name = "color" value = 'yellow' onClick={handleChange}/>Yellow
    </div>
  );
}

//This will subscribe to redux store changes
//Anytime store is updated
// const mapStateToProps = state =>{
//   return{
//     data: state
//   }
// }
 
// //Used to dispatch action(s) to the store
// const mapDispatchToProps = dispatch => {
//   return{
//     changeColor: (color) => dispatch({
//       type: "CHANGE_COLOR", payload:color
//     }
//   )
// }
// }
//This will connect a react component to a redux store
// export default  connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
