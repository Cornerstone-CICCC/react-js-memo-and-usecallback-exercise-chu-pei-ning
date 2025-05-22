import { useState } from "react"
import Profile from "./components/Profile"
import ProductList from "./components/ProductList"

const App = () => {
  const [count, setCount] = useState<number>(0)
  const firstname = "Julia"
  const lastname = "Chu"

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount( pre => pre + 1)}> + </button>
      <button onClick={() => setCount( pre => pre - 1)}> - </button>
      <Profile firstname={firstname} lastname={lastname}/>
      <ProductList />
    </div>
  )
}

export default App