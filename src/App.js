import React, { useState } from "react";
import "./App.css";


function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const add = () => {
    if (task !== "") {
      const updatedList = [...list, task];
      setList(updatedList);
      setTask("");
    }
  };

  const remove = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const edit = (index) => {
    setEditIndex(index);
    setTask(list[index]); 
  };

  const save = () => {
    const updatedList = [...list];
    updatedList[editIndex] = task;
    setList(updatedList);
    setTask("");
    setEditIndex(null);
  };

  let button;
  if (editIndex === null) {
    button = <button onClick={add}>Add</button>;
  } else {
    button = <button onClick={save}>Save</button>;
  }

  return (
    <div className="main">
      <h2>To-Do App</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      {button}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remove(index)}>Delete</button>
            <button onClick={() => edit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
