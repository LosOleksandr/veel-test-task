'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Sun, Moon } from 'lucide-react';
import Button from './shared/button';

const ThemeToggler: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkTheme = resolvedTheme === 'dark';

  return (
    <Button
      className="text-foreground absolute top-0 right-0 md:top-4 md:right-4"
      variant="icon"
      onClick={() => setTheme(isDarkTheme ? 'light' : 'dark')}
    >
      {isDarkTheme ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggler;
