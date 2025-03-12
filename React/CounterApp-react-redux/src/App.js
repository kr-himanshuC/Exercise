import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber} from "./actions/index"


function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      
      <h1>Counter</h1>

      <div className='quantity'>
        <a className='quantity__minus' title='Decrement' onClick={() => dispatch(decNumber())}> <span> - </span></a>
        <input name='quantity' type='text' className='quantity_input' value={myState} />
        <a className='quantity__plus' title='Increment' onClick={() => dispatch(incNumber())}> <span> + </span></a>
      </div>

    </div>
  );
}

export default App;
