import { ForceDialog } from '@/components/ForceDialog';
import { DateSelect } from './DateSelect';
import { LocateControl } from './LocateControl';
import { ThemeToggle } from './ThemeToggle';
import { ZoomControl } from './ZoomControl';

export const Controls = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-4 lg:m-6 pointer-events-none" style={{ zIndex: 9999 }}>
      <div className="flex justify-end xl:justify-between">
        <div className="hidden xl:block">
          <ForceDialog />
        </div>

        <div className="flex space-x-3 xl:space-x-4">
          <DateSelect />

          <div className="flex flex-col-reverse space-y-3 space-y-reverse xl:flex-row xl:space-y-0 xl:space-x-4 [&>*]:pointer-events-auto">
            <ThemeToggle />
            <LocateControl />
            <ZoomControl />
          </div>
        </div>
      </div>
    </div>
  );
};
