import logo from './logo.svg';
import './App.css'; 
import Counter from './counter/Counter';
import { useState } from 'react';
import Employees from './counter/Employees';
import Employee from './counter/Employee';
function App() {
  const [count,setCount]=useState(0)
  const incrFunction=(a)=>{
    setCount(count+parseInt(a))
  }
  return (
    <div>
      the  common count is {count}

      <Counter name='first' incr="1" incrFunction={incrFunction} />
      <Employees />
    </div>
    
  );
}

export default App;
