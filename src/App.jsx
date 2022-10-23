import './App.css';
import { useState } from 'react';
import Form from './components/form/form.component';
import List from './components/list/list.component';


function App() {
  const  [items, setItems] = useState([])

  const addItem=(item)=>{
    setItems([...items, item])
  }

  return (
    <div className="App">
      <Form onAddItem={addItem}/>
      <List items={items}/>
    </div>
  );
}

export default App;
