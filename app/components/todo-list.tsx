'use client';

import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../lib/api';
import TodoItem from './todo-item';

const TodoList = () => {
  const { data, error, isPending, isSuccess } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (isPending) {
    return (
      <div className="flex min-h-[448px] items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    isSuccess && (
      <ul className="grid w-full grid-cols-1 flex-col gap-4 md:grid-cols-2">
        {data.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    )
  );
};

export default TodoList;
