import { useDispatch } from "react-redux"
import store from "./Store/UserStore"
import { useEffect, useState } from "react"
import { getAllProducts,login } from "./Store/UserSlice";
import axios from "axios";


function App() {
  const [products,setProducts] = useState(store.getState().user.data);
  const [userInformation,setUserInformation] = useState(store.getState().user.userInformation); 
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getAllProducts());
  },[])

  store.subscribe(()=>{
    setProducts(store.getState().user.data)
    setUserInformation(store.getState().user.userInformation)
  })

  const checkAuth = async ()=>{
    const responce = await axios.get('http://localhost:3000/users/token',{withCredentials:true});
    console.log(await responce.data);
  }

  const checkForXss = ()=>{
        alert(document.cookie);

  }
  const handleLogin = ()=>{

    dispatch(login({username:'vajeed@gmail.com',password:'1234'}))
  }

  return (

    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={checkAuth}>Check auth</button>
      <button onClick={checkForXss}>checkForXSS</button>
    </>
  )
}

export default App
