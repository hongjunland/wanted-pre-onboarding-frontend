import styled from "@emotion/styled";
import { Todo } from "../types/Todo";
import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { todoAPI } from "../apis/todoAPI";
import { getAccessToken } from "../utils/authUtils";
import TodoList from "../components/Todo/TodoList";
import TodoCreate from "../components/Todo/TodoCreate";

function TodoListPage() {
  const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
  const [todoListchanged, setTodoListchanged] = useState(false);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const navigate = useNavigate();
  const fetchTodos = useCallback(async () => {
    try {
      const newTodoList = await todoAPI.getTodos();
      setTodoList(newTodoList);
      setTodoListchanged(false);
    } catch (error: any) {
      if (error.response.status === 401) {
        navigate("/signin");
      } else {
        console.error(error);
      }
    }
  }, [navigate]);
  useEffect(() => {
    fetchTodos();
  }, [todoListchanged, fetchTodos]);
  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      if (getAccessToken()) {
        setLoggedIn(true);
      } else {
        navigate("/signin");
      }
    }
  }, [isLoggedIn, navigate, setLoggedIn]);

  return (
    <Container>
      <HeadLine>To-Do List</HeadLine>
      <TodoCreate setTodoListchanged={setTodoListchanged} />
      <TodoList todoList={todoList} setTodoListchanged={setTodoListchanged} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto;
`;
const HeadLine = styled.h1`
  text-align: center;
`;

export default TodoListPage;
