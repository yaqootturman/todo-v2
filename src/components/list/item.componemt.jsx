import "./list.css";
const Item = (props) => {
  const { item, deleteItem, onFinish } = props;
  return (
    <li className="item">
      <div className="title">
        <h1>{item.title}</h1>
      </div>
      <div className="actions">
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <button onClick={() => onFinish(item.id)}>DONE</button>
      </div>
    </li>
  );
};
export default Item;
