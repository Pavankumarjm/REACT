import { useStore } from "react-redux";
import store from "./store/CountStore";
import { useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const counterStore = useStore(store);
  const dispatch = useDispatch();
  const [count,setCount] = useState(counterStore.getState());
  const [number,setNumber] = useState(0);
  counterStore.subscribe(()=>{
    setCount(counterStore.getState());
  })
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>dispatch({type:'ADD'})}>ADD</button>
      <button onClick={()=>dispatch({type:'MINUS'})}>MINUS</button>
      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}  />
      <button onClick={()=>dispatch({type:'ADD_VALUE',payload:number})}>ADD VALUE</button>
    </>
  );
}

export default App
