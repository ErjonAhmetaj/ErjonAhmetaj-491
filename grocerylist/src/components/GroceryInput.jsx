import { useState } from "react";

const GroceryInput = (props) => {
    const [item, setItem] = useState("");

    const handleChange = (event) => {
        setItem(event.target.value)
    }

    const handleAdd = () => {
        props.onAddItem(item)
        setItem("");
    }

    return (
        <div className="inputRow">
            <input
                className="input"
                value={item}
                onChange={handleChange}
            />
            <button className="btn" onClick={handleAdd}>+</button>
        </div>
    );
}

export default GroceryInput;
