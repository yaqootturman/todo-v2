import Item from "./item.componemt";
import "./list.css";
const List = (props) => {
  const { items, onDelete, onFinish } = props;
  return (
    <div className="items-list">
      <ul>
        {items.map((ele) => {
          return (
            <Item
              item={ele}
              key={ele.id}
              deleteItem={onDelete}
              onFinish={onFinish}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
