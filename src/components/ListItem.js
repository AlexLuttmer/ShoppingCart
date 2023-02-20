

function ListItem({item, clickItem}) {
    // console.log(clickItem)
  return (
        <li
        key={item.id}
        className="list-item"
        onClick={clickItem}
        value={item.title}
        >
            {item.title}
        </li>    
  );
}

export default ListItem;