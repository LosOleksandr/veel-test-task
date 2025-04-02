import * as React from 'react';
import { Todo } from '../lib/api';

type Props = Todo;

const TodoItem: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default TodoItem;
