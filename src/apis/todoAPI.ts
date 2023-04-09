import instance from ".";
import Todo from "../types/Todo";
import { TodoCreateFormData, TodoCreateResponse } from "./types";

async function createTodo(
  todoCreateFormData: TodoCreateFormData
): Promise<TodoCreateResponse> {
  const response = await instance.post("/todos", todoCreateFormData);
  console.log(response.data);
  return response.data;
}

async function getTodos(): Promise<Todo[]> {
  // Authorization: `Bearer ${getAccessToken()}`
  const response = await instance.get("/todos");
  console.log(response);
  return response.data;
}

async function deleteTodo(id: string): Promise<boolean> {
  const response = await instance.delete(`/todos/${id}`);
  console.log(response.data);
  if (response.status === 204) {
    return true;
  }
  return false;
}

export const todoAPI = { createTodo, getTodos, deleteTodo };
