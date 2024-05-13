import { DateSelect } from './DateSelect';
import { LocateControl } from './LocateControl';
import { ThemeToggle } from './ThemeToggle';
import { ZoomControl } from './ZoomControl';

export const Controls = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-2 lg:m-7 pointer-events-auto" style={{ zIndex: 9999 }}>
      <div className="flex justify-end space-x-4">
        <DateSelect />

        <div className="flex flex-col-reverse space-y-2 space-y-reverse xl:flex-row xl:space-y-0 xl:space-x-4">
          <ThemeToggle />
          <LocateControl />
          <ZoomControl />
        </div>
      </div>
    </div>
  );
};
