import { useState } from 'react';
import './app.module.css'
function App() {
  const [rotate, setRotate] = useState<number>(0);
  const addRotateDgree = ()=>{
    setRotate(rotate+30);
  }
  return (
    <>
      <h1 onClick={addRotateDgree} style={{"transform": `rotate(${rotate}deg)`}}>Hello hyunbin's k3s practice</h1>
    </>
  )
}
export default App