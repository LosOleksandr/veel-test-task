import * as React from 'react';
import { deleteTodo, Todo } from '../lib/api';
import Button from './shared/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import toast from 'react-hot-toast';

type Props = Todo;

const TodoItem: React.FC<Props> = ({ title, id }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteTodo,
    onMutate: async (todoId) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      queryClient.setQueryData<Todo[]>(['todos'], (oldTodos) =>
        oldTodos ? oldTodos.filter((todo) => todo.id !== todoId) : []
      );

      return { previousTodos };
    },
    onError: (_error, _todoId, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
      toast.error('Failed to delete todo');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <div className="bg-muted/50 border-foreground/50 relative flex items-center justify-between rounded-2xl border-2 p-4 font-bold text-ellipsis">
      <p className="line-clamp-2 overflow-hidden break-words text-ellipsis">
        {title}
      </p>
      <Button
        variant="icon"
        onClick={() => mutation.mutate(id)}
        disabled={mutation.isPending}
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export default TodoItem;
