import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const emailref=useRef();
  const passworref=useRef();
  const [ans,setAns]=useState(false);
  const em=useRef("");
  const ps=useRef("");


//code here 
const handle=()=>{
  if(email === ""){
    emailref.current.focus();
    setAns(false);
  }else if(password === ""){
    passworref.current.focus();
    setAns(false);
  }else{
    setAns(true);
    em.current=email;
    ps.current=password;
    setEmail("");
    setPassword("");
  }
}

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email} ref={emailref}
       onChange={(e)=>setEmail(e.target.value)}/><br/>
      Password
      <input id="inputPassword" type="text" value={password} ref={passworref} 
      onChange={(e)=>setPassword(e.target.value)}/><br/>

      <button id="submitButton" onClick={handle}>Submit</button><br/>
      <p id="emailText">Your Email :{ans &&  em.current }</p>
      <p id ="passwordText">Your Password :{ans && ps.current }</p>
      
    </div>
  )
}


export default App;
