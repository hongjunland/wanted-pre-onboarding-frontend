import styled from "@emotion/styled";
import { Todo } from "../../types/Todo";
import { Dispatch, SetStateAction, useState } from "react";
import { todoAPI } from "../../apis/todoAPI";

interface TodoItemProps {
  todo: Todo;
  setTodoListchanged: Dispatch<SetStateAction<boolean>>;
}
function TodoItem({ todo, setTodoListchanged }: TodoItemProps) {
  const [isModifying, setIsModifying] = useState(false);
  const [todoContent, setTodoContent] = useState(todo.todo);
  const handleTodoDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await todoAPI.deleteTodo(e.currentTarget.name);
    setTodoListchanged(true);
  };
  const handleTodoUpdateWithCheck = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.checked);
    const newTodo = { ...todo, isCompleted: e.currentTarget.checked };
    console.log(newTodo);
    await todoAPI.updateTodo(newTodo);
    setTodoListchanged(true);
  };
  const handleTodoUpdateWithTodo = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newTodo = { ...todo, todo: todoContent };
    console.log(newTodo);
    await todoAPI.updateTodo(newTodo);
    setIsModifying(false);
    setTodoListchanged(true);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.isCompleted}
          onChange={handleTodoUpdateWithCheck}
        />
      </label>
      {isModifying ? (
        <>
          <input
            type="text"
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          />
          <TodoButton
            data-testid="submit-button"
            onClick={handleTodoUpdateWithTodo}
          >
            제출
          </TodoButton>
          <TodoButton
            data-testid="cancel-button"
            onClick={() => setIsModifying(false)}
          >
            취소
          </TodoButton>
        </>
      ) : (
        <>
          <span>{todo.todo}</span>
          <TodoButton
            data-testid="modify-button"
            onClick={() => setIsModifying(true)}
          >
            수정
          </TodoButton>
        </>
      )}
      <TodoButton
        data-testid="delete-button"
        name={`${todo.id}`}
        onClick={handleTodoDelete}
      >
        삭제
      </TodoButton>
    </li>
  );
}
const TodoButton = styled.button`
  margin-right: 1rem;
  margin-left: 1rem;
`;

export default TodoItem;