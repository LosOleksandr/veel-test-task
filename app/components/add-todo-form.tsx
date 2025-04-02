'use client';

import * as React from 'react';
import Input from './shared/input';
import Button from './shared/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo, Todo } from '../lib/api';

const AddTodoForm: React.FC = () => {
  const [value, setValue] = React.useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData(['todos']);

      queryClient.setQueryData(['todos'], (old: Todo[]) => [newTodo, ...old]);

      return { previousTodos };
    },

    onError: (_error, _newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    mutation.mutate({ title: value, completed: false, userId: 1, id: 201 });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-4">
      <Input
        value={value}
        label="Add todo"
        name="todo"
        id="todo"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add todo"
      />
      {value ? (
        <Button
          className="max-h-max flex-1/3 self-end"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Adding...' : 'Add Todo'}
        </Button>
      ) : null}
    </form>
  );
};

export default AddTodoForm;
