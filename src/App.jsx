import './App.css';
import { useState } from 'react';
import Form from './components/form/form.component';


function App() {
  const  [items, setItems] = useState([])

  const addItem=(item)=>{
    setItems([...items, item])
  }

  return (
    <div className="App">
      <Form onAddItem={addItem}/>
      {console.log("add item, ", items)}
    </div>
  );
}

export default App;
