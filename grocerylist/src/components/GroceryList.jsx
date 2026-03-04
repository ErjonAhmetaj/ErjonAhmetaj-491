const GroceryList = (props) => {
  return (
    <ul className="list">
      {props.items.map((item, index) => (
        <li className="listItem" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default GroceryList;
