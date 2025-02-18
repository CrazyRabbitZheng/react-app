import ListGroup from "./components/ListGroup";
import Message from "./components/ListGroup";

function App() {
  let fruits = ["orange", "apple", "pear"];

  return (
    <div>
      <ListGroup items={fruits} heading="Fruits" />
    </div>
  );
}

export default App;
