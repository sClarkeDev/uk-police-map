import { CrimeCategoryChart } from '@/components/CrimeCategoryChart';
import { ForceDialog } from '@/components/ForceDialog';
import { NeighbourhoodDialog } from '@/components/NeighbourhoodDialog';
import { Chart } from '@/components/Sidebar/Chart';
import { useCrimeStore } from '@/stores/crimes';
import { useMapStore } from '@/stores/map';
import { DateSelect } from './DateSelect';
import { Key } from './Key';
import { LocateControl } from './LocateControl';
import { ThemeToggle } from './ThemeToggle';
import { ZoomControl } from './ZoomControl';

export const Controls = () => {
  const sidebarVisible = useMapStore((state) => state.sidebarVisible);
  const crimes = useCrimeStore((state) => state.crimes);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-4 lg:m-6 pointer-events-none" style={{ zIndex: 9999 }}>
      <div className="flex justify-end xl:justify-between">
        <div className="hidden xl:flex flex-col space-y-2.5">
          <ForceDialog />
          <NeighbourhoodDialog />
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

      {sidebarVisible && (
        <div className="hidden xl:flex absolute bottom-0 left-0 right-0 justify-between space-x-6">
          <Key />

          <div
            className="h-60 aspect-square bg-background/80 backdrop-blur rounded-lg border transition-opacity duration-300"
            style={{ opacity: crimes?.length ? 1 : 0 }}
          >
            <Chart />
          </div>

          <div className="flex-1 transition-opacity duration-300" style={{ opacity: crimes?.length ? 1 : 0 }}>
            <CrimeCategoryChart />
          </div>
        </div>
      )}
    </div>
  );
};
