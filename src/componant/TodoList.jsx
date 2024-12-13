import React, { useState } from 'react'



const TodoList = () => {

  const [text, setText] = useState("");
  const [listTodo, setListtodo] = useState([]);

  let addList=(text) => {
    setListtodo([...listTodo,text]);
    setText(" ");
  }
  const deleteList = (id)=>{
    let newlistTodo=[...listTodo];
    newlistTodo.splice(id,1);
    
    setListtodo([...newlistTodo]);

  }



  return (
    <>
<div className="main-container">
  <div className="center-container">
      <div className="input-container">

        <input type='text' className='input-box-todo' placeholder='Enter Your TODO....' onChange={(e) => { setText(e.target.value);}} value={text}></input>
        <button className='add-btn' onClick={() => addList(text)}>+</button>
      </div>
      <br></br>
      <h1 style={{fontSize:"40px"}}>ToDo App</h1>
      <hr></hr>
      {listTodo.map((element,index)=>{
        return (
          <div className='list-items' key={index}>
            <h2>{element}</h2>
            <button onClick={()=> deleteList()}>x</button>
          </div>
        )
      })}
      </div>
      </div>
    </>
  )
}

export default TodoList
