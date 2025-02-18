import { MouseEvent } from "react";

function ListGroup() {
  //const fruits = ["orange", "apple", "pear"];
  let fruits = ["orange", "apple", "pear"];

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Fruit List</h1>
      {fruits.length === 0 && <p>No fruit found</p>}
      <ul className="list-group">
        {fruits.map((fruit, index) => (
          <li className="list-group-item" key={fruit} onClick={handleClick}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
