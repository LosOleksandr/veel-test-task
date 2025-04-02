'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggler: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkTheme = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };
  return (
    <button
      className="text-foreground fill-foreground absolute top-4 right-4"
      onClick={toggleTheme}
    >
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggler;
