import instance from '@/app/lib/instance';
import { AxiosError } from 'axios';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoBody = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const res = await instance.get('/todos?_limit=10');

    if (!res.data || !Array.isArray(res.data)) {
      throw new Error('Invalid response format from API');
    }

    return res.data as Todo[];
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response)
        throw new Error(
          `API error: ${error.response.status} - ${error.response.statusText}`
        );
      else if (error.request) {
        throw new Error(
          'No response received from API. Please check your network connection.'
        );
      }
    }

    throw new Error(
      `Failed to fetch todos: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};

export const createTodo = async (body: TodoBody) => {
  try {
    const res = await instance.post('/todos', body);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response)
        throw new Error(
          `API error: ${error.response.status} - ${error.response.statusText}`
        );
      else if (error.request) {
        throw new Error(
          'No response received from API. Please check your network connection.'
        );
      }
    }

    throw new Error(
      `Failed to create todo: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const res = await instance.delete(`/todos/${id}`);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response)
        throw new Error(
          `API error: ${error.response.status} - ${error.response.statusText}`
        );
      else if (error.request) {
        throw new Error(
          'No response received from API. Please check your network connection.'
        );
      }
    }

    throw new Error(
      `Failed to delete todo: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
};
