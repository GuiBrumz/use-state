import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ToggleText from './components/ToogleText';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Exercícios useState</h1>
      <div className="component">
        <h2>Contador</h2>
        <Counter />
      </div>
      <div className="component">
        <h2>Alternância de Texto</h2>
        <ToggleText />
      </div>
      <div className="component">
        <h2>Lista de Tarefas</h2>
        <TodoList />
      </div>
    </div>
  );
};

export default App;