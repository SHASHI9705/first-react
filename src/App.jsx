import { useEffect, useState } from "react"

function App() {

  return <div>
    <b>
    hi there
    </b>
    <Counter></Counter>
  </div>
}



function Counter(){
  const [count,setCount] = useState(0);

  console.log("counter");

  useEffect(function(){
    setInterval(function(){
      setCount(count => count + 1);
    },1000)
    console.log("mounted");
  },[]);

  return <div>
    <h1>{count}</h1>
  </div>
}
export default App
