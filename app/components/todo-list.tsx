'use client';

import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../lib/api';
import TodoItem from './todo-item';

const TodoList = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    data && (
      <ul>
        {data.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    )
  );
};

export default TodoList;
