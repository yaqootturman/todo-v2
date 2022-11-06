import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/form/form.component";
import List from "./components/list/list.component";
import SearchForm from "./components/search/search.component";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; //

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items") ?? "[]")
  );
  const [serchInput, setSearchInput] = useState("");
  const [searchedArray, setSearchedArray] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setSearchedArray([]);
      setSearchInput(e.target.value);
    } else {
      setSearchInput(e.target.value);
      const newItems = items.filter((ele) => {
        return ele.title.includes(e.target.value) ? ele : "";
      });
      setSearchedArray(newItems);
    }
  };
  const addItem = (item) => {
    const newItems = [item, ...items];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
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
            localStorage.setItem("items", JSON.stringify(newItems));
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
    const newItems = items
      .map((item) => (item.id === id ? { ...item, isDone: true } : item))
      .sort((a, b) => (a.isDone ? 1 : -1));
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };
  return (
    <div className="App">
      <SearchForm
        onSearch={handleChange}
        serchInput={serchInput}
        searchedArray={searchedArray}
      />
      <Form onAddItem={addItem} />
      <List
        items={searchedArray.length <= 0 ? items : searchedArray}
        onDelete={deleteItem}
        onFinish={completeTask}
      />
    </div>
  );
}

export default App;
