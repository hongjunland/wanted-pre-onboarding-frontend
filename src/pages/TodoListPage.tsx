import styled from "@emotion/styled";
import Todo from "../types/Todo";
import { todoData } from "../dummy/todoData";

function TodoListPage() {
  return (
    <Container>
      <HeadLine>To-Do List</HeadLine>
      <div>
        <TodoInput data-testid="new-todo-input"/>
        <TodoCreateButton data-testid="new-todo-add-button">추가</TodoCreateButton>
      </div>
      <TodoList todoList={todoData} />
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
const TodoInput = styled.input`

`;
const TodoCreateButton = styled.button`

`;
interface TodoListProps {
  todoList: Todo[];
}
function TodoList({ todoList }: TodoListProps) {
  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
interface TodoItemProps {
  todo: Todo;
}
function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo.todo}</span>
        <TodoButton>수정</TodoButton>
        <TodoButton>삭제</TodoButton>
      </label>
    </li>
  );
}
const TodoButton = styled.button`

`;

export default TodoListPage;
