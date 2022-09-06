import { useEffect, useState } from 'react';

interface Todo {
  title: string;
}

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
      <ul>
        {todos.map((item, index) => (
          <li className="todo" key={index}>
            {item.title}
          </li>
        ))}
      </ul>
      <button id="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;