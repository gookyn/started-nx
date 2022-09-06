import { useEffect, useState } from 'react';
import { Todo } from '@react-org/data';
import { Todos } from '@react-org/ui';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos}></Todos>
      <button id="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
