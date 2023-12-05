import { useState } from "react"

const CountComponent = () => {
    const [count, setCount] = useState(1)
    const handleAddCount = () =>{
        setCount(count + 1);
    }
  return (
    <div>
        <button onClick={handleAddCount}>+</button>
        <div>{count}</div>
        <button>-</button>
    </div>
  )
}

export default CountComponent