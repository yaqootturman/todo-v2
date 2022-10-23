import "./App.css";
import { useState } from "react";
import Form from "./components/form/form.component";
import List from "./components/list/list.component";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (id) => {
    const newItems = items.filter((ele) => ele.id !== id);
    setItems(newItems);
  };

  return (
    <div className="App">
      <Form onAddItem={addItem} />
      <List items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
