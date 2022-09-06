import { useEffect, useState } from 'react';
import { Todo } from '@react-org/data';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then((res) => {
        console.log(res);
        setTodos(res);
      });
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
