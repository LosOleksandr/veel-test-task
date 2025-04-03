import Image from 'next/image';
import * as React from 'react';
import ThemeToggler from './theme-toggler';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <div className="flex items-center gap-2">
        <Image
          src={'/images/todo.png'}
          alt="todo logo"
          width={44}
          height={44}
        />
        <h1 className="text-2xl font-bold">Todo App</h1>
      </div>
      <ThemeToggler />
    </header>
  );
};

export default Header;
