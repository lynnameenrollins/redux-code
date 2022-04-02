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
import User from './User';
//clean-ed up for testing
function App(props) {
  const [user, setUser] = useState(null);
  const[error,setError] = useState('');
  const[counter, setCounter] = useState(0);

  // window.fetch = jest.fn(() =>{
  //   const user = {name:"Jack", email: 'jack@abc.com'}
  //   return Promise.resolve({
  //     json:() => Promise.resolve(user),
  //   });
  // });
  
  // useEffect(()=> {
  //   fetch('https:jsonplaceholder.typicode.com/users/1')
  //   .then((response) => response.json())
  //   .then((user)=> setUser(user))
  //   .catch((error) => setError(error.message));
  // }, [])

  // if(error){
  //   return <span>{error}</span>
  // }
  
  const increment = () => {
    setCounter((val) => ++val)
  }
  const decrement = () => {
    setCounter((val) => --val)
  }
  return (
    <div className="App">
        <h1>Hello world from React!</h1>
        <ul className = "animals">
          <li>Lion</li>
          <li>Tiger</li>
          <li>Bear</li>
          <li>Elephant</li>
          <li>Cat</li>
        </ul>
        {user ?<User user={user}/>: <span>Loading...</span>}
        <h1 data-testid="counter">{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
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
