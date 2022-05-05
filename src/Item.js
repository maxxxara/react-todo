const Item = ({title, checked, id, itemChecked, deleteItem }) => {
  return (
    <li
      className={`list-group-item d-flex align-items-center border-0 rounded ${checked ? "item__checked" : ""}`}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={checked}
        onChange={(e) => { itemChecked(e, id) }}
      />
      {title}
      <i
        className="fa-solid fa-circle-minus delete__icon"
        onClick={() => {deleteItem(id)}}
      ></i>
    </li>
  )
}

export default Item;
