export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoCreateRequest {
  todo: string;
}
export interface TodoCreateResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
export interface TodoUpdateRequest {
  todo: string;
  isCompleted: boolean;
}
