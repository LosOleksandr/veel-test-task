'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggler: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === 'dark';

  return (
    <button
      className="text-foreground fill-foreground absolute top-4 right-4"
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
    >
      {isDarkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggler;
