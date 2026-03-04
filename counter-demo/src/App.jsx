import { useState } from "react";
import House from "./components/House";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>

      <hr />

      <House name="paradise" />
    </div>
  );
}
