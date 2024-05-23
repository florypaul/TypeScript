import React from 'react';
import TypeTodoClass from './models/TypeTodoClass';
import Todos from "./components/Todos";

function App() {
  const todos = [
    new TypeTodoClass('Learn React'),
    new TypeTodoClass('Learn Typescript')
  ]
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
