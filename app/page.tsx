import ThemeToggler from '@/components/theme-toggler';

export default function Home() {
  return (
    <div className="grid h-screen w-screen place-content-center">
      Todo list Test App
      <div className="bg-success max-w-xs text-lg">Todo Task</div>
      <div className="bg-danger max-w-xs text-lg">Todo Task</div>
      <div className="bg-muted max-w-xs text-lg">Todo Task</div>
      <div className="bg-accent max-w-xs text-lg">Todo Task</div>
      <ThemeToggler />
    </div>
  );
}
