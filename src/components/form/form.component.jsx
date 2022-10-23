import { useState } from "react";
import CATEGORIES_OPTIONS from "../../constants/data.js";
import "./form.css";

const Form = (props) => {
  const { onAddItem } = props;
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      isDone:false,
      title: task,
      category: category,
      urgent: isUrgent,
    };

    onAddItem(newItem);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your task "
          name="taskTest"
          type="text"
          value={task}
          required
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <select
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" disabled>
            select
          </option>
          {CATEGORIES_OPTIONS.map((ele) => {
            return (
              <option value={ele.value} key={ele.value}>
                {ele.label}
              </option>
            );
          })}
        </select>
        <input
          name="urgent"
          type="checkbox"
          checked={isUrgent}
          onChange={(e) => {
            setIsUrgent(e.target.checked);
          }}
        ></input>
        <label>Urgent</label>
        <input type="submit" value="add to list"></input>
      </form>
    </>
  );
};

export default Form;
