import './list.css'
const Item = (props) => {
  const { item } = props;
  return (
    <li className='item'>
      <div className="title">
        <h1>{item.title}</h1>
      </div>
    </li>
  );
};
export default Item;
