const Input = ({inputValue, setInputValue, insertItem}) => {
  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="form-control"
          onKeyDown={(e) => {
            if(e.which == "13") { insertItem() }
          }}
        />
        <label className="form-label">New task...</label>
      </div>
      <button className="btn btn-info ms-2" onClick={() => {insertItem()}}>Add</button>
    </div>
  )
}

export default Input;
