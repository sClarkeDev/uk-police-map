'use client';

import { useMapStore } from '@/stores/map';
import { Geocoder } from '@mapbox/search-js-react';
import { useState } from 'react';

export const Search = () => {
  const map = useMapStore((state) => state.map);
  const [searchInput, setSearchInput] = useState('');

  return (
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
  );
};
