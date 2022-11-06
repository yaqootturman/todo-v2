import "./list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
  const { item, deleteItem, onFinish } = props;
  return (
    <li className="item">
      <div className={item.isDone ? "done-item" : "title"}>
        <h1>{item.title}</h1>
      </div>
      <div className="actions">
        <button type="button" className="button-delete" onClick={() => deleteItem(item.id)}>
          {" "}
          <FontAwesomeIcon icon={faTrash} />
          Delete
        </button>
        <button type="button" className="button-complete" onClick={() => onFinish(item.id)}>
          <FontAwesomeIcon icon={faCheck} />
          DONE
        </button>
      </div>
    </li>
  );
};
export default Item;
