import styled from "@emotion/styled";
import { TodoCreateRequest } from "../../types/Todo";
import { Dispatch, SetStateAction, useState } from "react";
import { todoAPI } from "../../apis/todoAPI";

interface TodoCreateProps {
  setTodoListchanged: Dispatch<SetStateAction<boolean>>;
}
function TodoCreate({ setTodoListchanged }: TodoCreateProps) {
  const [todoCreateForm, setTodoCreateForm] = useState<TodoCreateRequest>({
    todo: "",
  });
  const handleCreateTodo = async () => {
    const response = await todoAPI.createTodo(todoCreateForm);
    console.log(response);
    setTodoCreateForm({ todo: "" });
    setTodoListchanged(true);
  };

  return (
    <Box>
      <TodoInput
        data-testid="new-todo-input"
        value={todoCreateForm.todo}
        onChange={(e) =>
          setTodoCreateForm({ ...todoCreateForm, todo: e.target.value })
        }
      />
      <TodoCreateButton
        data-testid="new-todo-add-button"
        onClick={handleCreateTodo}
      >
        추가
      </TodoCreateButton>
    </Box>
  );
}

const Box = styled.div`
  padding: 1rem;
  display: flex;
`;
const TodoInput = styled.input`
  flex-grow: 1;
`;
const TodoCreateButton = styled.button`
  margin-left: 0.5rem;
`;
export default TodoCreate;
