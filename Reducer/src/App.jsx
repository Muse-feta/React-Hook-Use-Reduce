import { useState } from 'react'
import UseReducer from './Component/UseReducer'

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <UseReducer />
    </>
  );
}

export default App
