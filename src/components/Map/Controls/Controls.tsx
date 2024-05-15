import { CrimeCategoryChart } from '@/components/CrimeCategoryChart';
import { CrimePieChart } from '@/components/CrimePieChart';
import { ForceDialog } from '@/components/ForceDialog';
import { NeighbourhoodDialog } from '@/components/NeighbourhoodDialog';
import { useCrimeStore } from '@/stores/crimes';
import { useMapStore } from '@/stores/map';
import { Geocoder } from '@mapbox/search-js-react';
import { useState } from 'react';
import { DateSelect } from './DateSelect';
import { LocateControl } from './LocateControl';
import { ThemeToggle } from './ThemeToggle';
import { ZoomControl } from './ZoomControl';

export const Controls = () => {
  const sidebarVisible = useMapStore((state) => state.sidebarVisible);
  const crimes = useCrimeStore((state) => state.crimes);
  const map = useMapStore((state) => state.map);

  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-4 lg:m-6 pointer-events-none" style={{ zIndex: 9999 }}>
      <div className="flex justify-end xl:justify-between">
        <div className="hidden xl:flex flex-col space-y-2.5">
          <ForceDialog />
          <NeighbourhoodDialog />
        </div>

        <div className="flex space-x-3 xl:space-x-4">
          <form className="pointer-events-auto">
            {/* @ts-expect-error no available types? @mapbox/search-js-react */}
            <Geocoder
              theme={{
                variables: {
                  colorBackground: 'hsl(var(--background))',
                  colorText: 'hsl(var(--foreground))',
                  colorPrimary: 'hsl(var(--foreground))',
                  colorSecondary: 'hsl(var(--muted-foreground))',
                  border: '1px solid hsl(var(--input))',
                  boxShadow: undefined,
                  fontWeight: '500',
                  unit: '16px',
                  borderRadius: '0.75rem'
                }
              }}
              placeholder="Search"
              value={searchInput}
              onChange={setSearchInput}
              accessToken={process.env.NEXT_PUBLIC_MAPBOX_GEOCODING_ACCESS_TOKEN as string}
              onRetrieve={(res) =>
                map?.flyTo([Number(res.geometry.coordinates[1]), Number(res.geometry.coordinates[0])], 17, {
                  animate: true
                })
              }
            />
          </form>

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
          <div
            className="h-48 aspect-square bg-background/80 backdrop-blur rounded-lg border transition-opacity duration-300"
            style={{ opacity: crimes?.length ? 1 : 0 }}
          >
            <CrimePieChart />
          </div>

          <div
            className="flex-1 bg-background/80 backdrop-blur rounded-lg border transition-opacity duration-300 pointer-events-auto"
            style={{ opacity: crimes?.length ? 1 : 0 }}
          >
            <CrimeCategoryChart />
          </div>
        </div>
      )}
    </div>
  );
};
