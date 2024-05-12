import { useTheme } from 'next-themes';
import { ThemeToggle } from './ThemeToggle';

export const Controls = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-2 md:m-7 pointer-events-auto" style={{ zIndex: 9999 }}>
      <div className="flex items-center justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};
