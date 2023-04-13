import React, { useState } from "react";
import "./TodoForm.css";
import Todo from "../Todo/Todo";

function TodoForm() {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);
  
  
  console.log("ItemList -> " + itemList);
  const onChangeHandler = (e) => {
    
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
      // updateItemList([...itemList,{items:currentItem , key: Date.now()}]);
      updateItemList((prev) => {
          return [{items:currentItem , key: Date.now()}, ...itemList];
      });
    setCurrentItem("");
  };

  return (
    <div>
      <div className="todo-form">
        <input
          className="todo-input"
          type="text"
          name="item"
          value={currentItem}
          onChange={onChangeHandler}
        ></input>

        <button className="todo-button" onClick={addItemToList}>
          <i className="fa-sharp fa-solid fa-circle-plus"></i> ADD
        </button>
      </div>
         <Todo itemList = {[itemList, updateItemList]}/>
      </div>
    
  );
}

export default TodoForm;
