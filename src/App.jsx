import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/form/form.component";
import List from "./components/list/list.component";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; //

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure you want to delete te task?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const newItems = items.filter((ele) => ele.id !== id);
            setItems(newItems);
          },
        },
        {
          label: "No",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };
  const completeTask = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    ).sort((a, b) => (a.isDone ? 1 : -1));
    setItems(newItems);
  };
  return (
    <div className="App">
      <Form onAddItem={addItem} />
      <List items={items} onDelete={deleteItem} onFinish={completeTask} />
    </div>
  );
}

export default App;
