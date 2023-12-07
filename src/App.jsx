import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import tarefa from './assets/tarefa.svg';

function App() {
  return (
    <>
      <div className="container">
        <div className="title">
          <img src={tarefa} />
          <h1>To Do List</h1>
        </div>
      </div>
      <ToDoList />
    </>
  );
}

export default App;
