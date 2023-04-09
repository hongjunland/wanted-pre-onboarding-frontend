import styled from "@emotion/styled";
import Todo from "../types/Todo";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AuthContext from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { todoAPI } from "../apis/todoAPI";
import { TodoCreateFormData } from "../apis/types";
import { getAccessToken } from "../utils/authUtils";

function TodoListPage() {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const [todoListchanged, setTodoListchanged] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoCreateForm, setTodoCreateForm] = useState<TodoCreateFormData>({
    todo: "",
  });
  const navigate = useNavigate();
  const getTodos = useCallback(async () => {
    const newTodoList = await todoAPI.getTodos();
    setTodoList(newTodoList);
    setTodoListchanged(false);
  }, []);
  const handleCreateTodo = useCallback(async () => {
    const response = await todoAPI.createTodo(todoCreateForm);
    console.log(response);
    setTodoCreateForm({ todo: "" });
    setTodoListchanged(true);
  }, [todoCreateForm]);

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      if (getAccessToken()) {
        setLoggedIn(true);
      } else {
        alert("로그인후 사용가능합니다.");
        navigate("/signin");
      }
    } else {
      getTodos();
    }
  }, [todoListchanged, isLoggedIn, navigate, setLoggedIn, getTodos]);

  return (
    <Container>
      <HeadLine>To-Do List</HeadLine>
      <div>
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
      </div>
      <TodoList todoList={todoList} setTodoListchanged={setTodoListchanged} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 800px;
  margin: auto;
`;
const HeadLine = styled.h1`
  text-align: center;
`;
const TodoInput = styled.input``;
const TodoCreateButton = styled.button``;
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
interface TodoItemProps {
  todo: Todo;
  setTodoListchanged: Dispatch<SetStateAction<boolean>>;
}
function TodoItem({ todo, setTodoListchanged }: TodoItemProps) {
  const handleTodoDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    todoAPI.deleteTodo(e.currentTarget.name);
    setTodoListchanged(true);
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} />
        <span>{todo.todo}</span>
        <TodoButton data-testid="modify-button">수정</TodoButton>
        <TodoButton
          data-testid="delete-button"
          name={`${todo.id}`}
          onClick={handleTodoDelete}
        >
          삭제
        </TodoButton>
      </label>
    </li>
  );
}
const TodoButton = styled.button``;

export default TodoListPage;
