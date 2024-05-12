import { ThemeToggle } from './ThemeToggle';
import { ZoomControl } from './ZoomControl';

export const Controls = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-2 md:m-7 pointer-events-auto" style={{ zIndex: 9999 }}>
      <div className="flex justify-end space-x-4">
        <ThemeToggle />
        <ZoomControl />
      </div>
    </div>
  );
};
