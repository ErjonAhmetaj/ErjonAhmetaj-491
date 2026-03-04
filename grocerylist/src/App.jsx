import { useState } from "react";
import "./App.css";
import GroceryInput from "./components/GroceryInput";
import GroceryList from "./components/GroceryList";

function App() {
  const [items, setItems] = useState([]);

  const onAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Grocery List</h1>
        <GroceryInput onAddItem={onAddItem} />
        <GroceryList items={items} />
      </div>
    </div>
  );
}

export default App;
