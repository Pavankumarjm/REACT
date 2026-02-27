import { useState } from 'react';
import './App.css'

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ele)=>{
    ele.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = regex.test(username);
    if(!validEmail){
      alert("invalid Email");
    }
    else if(username && password){
      alert("login succesfull");
    }else{
      alert("Enter username and password");
    }
  }

  const handleUserName = (e)=>{
    setUsername(e)
  }

  const handlePassword = (e)=>{
    setPassword(e);
  }
  return (

    <>
      <div className="formBox">

        <form>
          <div className="usernameBox">
            <label htmlFor="username">Username: </label>
            <input type="text" value={username} name="username" onChange={(e)=>handleUserName(e.target.value)}/>
          </div>
          <div className="passwordBox">
            <label htmlFor="password"> Password: </label>
            <input type="password" value={password} name="password" onChange={(e)=>handlePassword(e.target.value)}/>
          </div>
          <div className="submitBox">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    </>
  );

  
}

export default App
