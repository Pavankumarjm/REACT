import { useMemo, useReducer, useState } from "react"


function handleCount(state,action){
  switch(action){
    case "add":
      return state+1;
    case "minus":
      return state-1;
    case "reset":
      return 0;
  }
}

function squreOfNum(num){
  return num*num;
}

function App() {
  const [count,setCount] = useReducer(handleCount,0);
  const squreOfCount = useMemo(()=>squreOfNum(count),[count])
  // const handleAddd = ()=>{
  //   setCount(count+1);
  // }
  // const  handleMinus = ()=>{
  //   setCount(count-1);
  // }

  // const handleReset = ()=>{
  //   setCount(0);
  // }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount('add')}>ADD</button>
      <button onClick={()=>setCount('minus')}>Minus</button>
      <button onClick={()=>setCount('reset')}>Reset</button>

      <h1>Squire of count</h1>
      <h3>{squreOfCount}</h3>

    </>
  )
}

export default App
