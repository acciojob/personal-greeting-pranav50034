
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  let [name, setName] = useState("")

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input type="text" onChange = {()=>setName(e.target.value)} />

        {
          name &&
          <p>Hello {name}!</p>
        }
    </div>
  )
}

export default App
