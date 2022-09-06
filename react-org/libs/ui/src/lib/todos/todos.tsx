import { Todo } from '@react-org/data';
import './todos.module.css';

export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((item, index) => (
        <li className="todo" key={index}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
