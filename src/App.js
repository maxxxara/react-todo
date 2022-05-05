import {useState, useEffect, useRef} from 'react';
import Input from './Input';
import Item from './Item';


function App() {

  let info = []
  const isMounted = useRef(false)

  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [skipCount, setSkipCount] = useState(true);


  useEffect(() => {
    if(localStorage.getItem("info")) {
      setItems(JSON.parse(localStorage.getItem("info")))
    } else {
      setItems([])
    }
    console.log(items)
  }, [])

  let itemChecked = (e, id) => {
    setItems( items.map((item) => {
      if(item.id == id) {
        item.checked = e.target.checked;
        return item;
      } else {
        return item;
      }
    }))
  }

  let deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  let insertItem = () => {
    let lastId = items.length ? items[items.length - 1].id + 1 : 1;
    let item = {
      id: lastId,
      title: inputValue,
      checked: false
    }
    setItems([...items, item])
    setInputValue('');
  }

  useEffect(() => {
    if(!skipCount) {
      localStorage.setItem("info", JSON.stringify(items));
    }
    if(skipCount) {
      setSkipCount(false)
    }

  }, [items])




  return (
    <div className="App">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">


                  {/* Add new element input */}
                  <Input
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    insertItem={insertItem}
                  />
                  {/* ::Add new element input */}

                  {/* List */}
                  <div className="tab-content" id="ex1-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {items.length ?
                          items.map((item) =>
                            <Item
                              key={item.id}
                              id={item.id}
                              title={item.title}
                              checked={item.checked}
                              itemChecked={itemChecked}
                              deleteItem={deleteItem}
                            />
                          )
                          : <p className="mgt10">There is no items</p>
                        }
                      </ul>
                    </div>
                  </div>
                  {/* ::List */}




                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
