import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: Todo[];
  setTodoListchanged: Dispatch<SetStateAction<boolean>>;
}
function TodoList({ todoList, setTodoListchanged }: TodoListProps) {
  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          setTodoListchanged={setTodoListchanged}
        />
      ))}
    </ul>
  );
}

export default TodoList;
