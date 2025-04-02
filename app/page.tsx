import ThemeToggler from '@/app/components/theme-toggler';
import TodoList from './components/todo-list';
import AddTodoForm from './components/add-todo-form';

export default async function Home() {
  return (
    <div className="m-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center gap-4 p-4">
      <ThemeToggler />
      <AddTodoForm />
      <TodoList />
    </div>
  );
}
