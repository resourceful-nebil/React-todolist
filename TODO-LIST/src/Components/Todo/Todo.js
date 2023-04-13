import React, { useState } from "react";
import TodoForm from "../InputField/TodoForm";
import "./Todo.css";

function Todo(probs) {
  const [itemList, updateItemList] = probs.itemList;
  // const [opacity, setOpacity] = useState("1");
  let date = new Date();
  let temp = itemList.values();
  console.log(...temp);
  const deleteItemList = (key) => {
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList);
  };
  // let isBlur = false;
  // const checkBoxHandler = () =>{
  //   isBlur ? setOpacity("1"): setOpacity(".4");
  //   isBlur =! isBlur;
  // }
  return (
    <div>
      {itemList.map((itemObj) => {
        return (
          <div className="todo-item" key={Math.random()}>
            <div className="todo-descripton"  
            //sty/le={{opacity:opacity}}
            >
              <div className="checkDesc">
                <input
                  type="checkbox"
                  // onClick={checkBoxHandler}/>
                />
                <p className="desc">
                  <span className="todoText">{itemObj.items} </span>
                  <span className="todoDate">
                    Date: {date.toISOString().slice(0, 10)}
                  </span>
                </p>
              </div>
              <button
                onClick={() => deleteItemList(itemObj.key)}
                className="remove-button"
              >
                <i className="fa-sharp fa-solid fa-trash"></i> Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;

// Import the necessary style file here

// Create your the component funtion and
// Don't forget to export it!
