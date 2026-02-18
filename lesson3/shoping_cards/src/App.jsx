import axios from "axios"
import "./App.css"
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);

  

  useEffect(()=>{
    const handleLoadData = async () => {
    const response = await axios.get("https://dummyjson.com/products")

    console.log(response.data.products)
    setData([...response.data.products]);
    
  }
  handleLoadData();
  },[status]);

  
  return (
    <>
      <button onClick={()=>setStatus(status?false:true)}>Load</button>
      <div className="cardsBox">
        {
          data.map((element, index) => (
            <div className="card" key={index}>
              <div className="cardImg">
                <img src={element.thumbnail} alt="card image" />
              </div>
              <div className="cardDesc">
                <h4>{element.title}</h4>
                <p><b>RS {element.price}</b></p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
