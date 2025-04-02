import ThemeToggler from '@/app/components/theme-toggler';
import TodoList from './components/todo-list';

export default async function Home() {
  return (
    <div className="grid h-screen w-screen place-content-center">
      <ThemeToggler />
      <TodoList />
    </div>
  );
}
