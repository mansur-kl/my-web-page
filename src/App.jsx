import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        
          <img src="myimg.class.jpg" height="250" width="250" alt="My photo" />  
      </div>
      <h1>My page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Visitor is {count}
        </button>
        <p>
          I am FRONT END DEVELOPER
        </p>
      </div>
    </>
  )
}

export default App
