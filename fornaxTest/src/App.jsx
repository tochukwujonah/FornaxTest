import { useState } from 'react'
import fornaxAxios from './axios/fornaxAxios';
import './App.css'
// import { useNavigate } from 'react-router-dom'

function App() {
  
  
  const visitPage = () =>{
    window.location.href = "https://fornaxcloud.com/";
  } 


  // Attempt to login

  const login = async () => {


    const userData = {
      userName: 'latte@sakalgb.com',
      password: 'Pass1234',
    };

    // console.log(userData);
    const response = await fornaxAxios.post("/api/auth/login", userData); 
    
    if(response.data){
        sessionStorage.setItem('authToken', JSON.stringify(response.data.data.token));
    }
    return response.data;
    }

  return (
    <div className="App" >
      
      <iframe src="https://fornaxcloud.com/login" onLoad={login} frameborder="2" width={'1200px'} height='400px'></iframe>
      <div className="card">
        <button onClick={visitPage}>
          Click me to navigate
        </button>
       
      </div>
      
    </div>
  )
}

export default App





// function postCrossDomainMessage(msg) {
//   var win = document.getElementById('cookieValue').contentWindow; 
//   win.postMessage(msg, "http://dev.lagoseppps.com.ng/");
// } 
//   var edCookie = document.cookie="sessionId=s%32AkSPun1jMN2Yx655DttwtQSN75D1cvWCP.tKA1v7Ap0z3vYicGjtn7DfV3L5e2EjsPlllzxHDZts0; SameSite=None;Secure; Path=/;";  
//   var postMsg = edCookie; 
  
//   console.log (postMsg); 
  
//   localStorage.setItem("cookie", postMsg)

  

