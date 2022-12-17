import { useState } from 'react'
import './App.css'
// import { useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  // const navigate = useNavigate();


  const visitPage = () =>{
    window.location.href = "https://fornaxcloud.com/";
  } 

  return (
    <div className="App">
      
      
      <div className="card">
        <button onClick={visitPage}>
          Click me to navigate
        </button>
       
      </div>
      
    </div>
  )
}

export default App
