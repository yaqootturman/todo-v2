import Item from "./item.componemt";
import "./list.css";
const List = (props) => {
  const { items, onDelete } = props;
  return (
    <div className="items-list">
      <ul>
        {items.map((ele) => {
          return <Item item={ele} key={ele.id} deleteItem={onDelete} />;
        })}
      </ul>
    </div>
  );
};

export default List;
