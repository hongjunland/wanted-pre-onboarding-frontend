import styled from "@emotion/styled";
import { Todo, TodoCreateRequest } from "../types/Todo";
import {
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import AuthContext from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { todoAPI } from "../apis/todoAPI";
import { getAccessToken } from "../utils/authUtils";
import TodoList from "../components/Todo/TodoList";

function TodoListPage() {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const [todoListchanged, setTodoListchanged] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoCreateForm, setTodoCreateForm] = useState<TodoCreateRequest>({
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

export default TodoListPage;
