import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';

function App() {
  
  const [listTodo, setListTodo] = useState(() => {
    const storedTodoList = localStorage.getItem('todoList');
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(listTodo));
  }, [listTodo]);

  const addList = (inputText) => {
    if (inputText.trim() !== '') {
      setListTodo((prevList) => [...prevList, inputText]);
    }
  };

  const deleteListItem = (key) => {
    setListTodo((prevList) => {
      const newListTodo = [...prevList];
      newListTodo.splice(key, 1);
      return newListTodo;
    });
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TODO LIST</h1>
        <TodoInput addList={addList} />
        <hr />
        {listTodo.map((listItem, i) => {
          return <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />;
        })}
      </div>
    </div>
  );
}

export default App;