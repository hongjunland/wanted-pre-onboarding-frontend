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
    const newTodo = { ...todo, isCompleted: e.currentTarget.checked };
    await todoAPI.updateTodo(newTodo);
    setTodoListchanged(true);
  };

  const handleTodoUpdateWithTodo = async () => {
    const newTodo = { ...todo, todo: todoContent };
    await todoAPI.updateTodo(newTodo);
    setIsModifying(false);
    setTodoListchanged(true);
  };

  return (
    <Item>
      <label>
        <Checkbox
          type="checkbox"
          defaultChecked={todo.isCompleted}
          onChange={handleTodoUpdateWithCheck}
        />
      </label>
      {isModifying ? (
        <>
          <TodoInput
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
          <TodoText>{todo.todo}</TodoText>
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
    </Item>
  );
}
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const TodoText = styled.span`
  flex-grow: 1;
`;

const TodoInput = styled.input`
  flex-grow: 1;
  margin-right: 0.5rem;
`;

const TodoButton = styled.button`
  margin-left: 0.5rem;
`;

export default TodoItem;
