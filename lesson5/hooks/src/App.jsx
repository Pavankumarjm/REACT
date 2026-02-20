import { useRef, useState } from "react";


function App() {

  let count3 = useRef(0);
  const addCount3 = ()=>{
    count3.current = count3.current+1;
    console.log(count);
    const ele = document.getElementById("countNums");
    ele.innerText = count3.current;
  }

  const [count,setCount] = useState(0);

  const addCount = ()=>{
    setCount(count+1);
  }
  return (
    <>
      <h1>{count}</h1>

      <button onClick={addCount}>ADD</button>

      <h1 id="countNums">{count3.current}</h1>
      
      <button onClick={addCount3}>ADD</button>
    </>
  );
}

export default App
