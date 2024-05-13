'use client';

import { Map as LMap } from 'leaflet';
import { useTheme } from 'next-themes';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

import { useCrimes } from '@/context/Crimes';
import { useMap } from '@/context/Map';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { CrimeMarker } from '../CrimeMarker';
import { Controls } from './Controls';

const Map = () => {
  const { theme } = useTheme();
  const { setMap } = useMap();
  const { crimes, updateCrimes } = useCrimes();

  const Events = () => {
    const map = useMapEvents({
      dragend() {
        updateCrimes(map.getBounds());
      }
    });

    return null;
  };

  return (
    <div className="h-full w-full relative">
      <MapContainer
        ref={(m) => setMap(m as LMap)}
        center={[51.505, -0.09]}
        zoom={17}
        className="h-full w-full !bg-background"
        zoomControl={false}
        style={{ zIndex: 40 }}
      >
        <TileLayer
          attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
          url={`/api/map/{z}/{x}/{y}?theme=${theme}`}
        />

        {crimes.map((crime) => (
          <CrimeMarker key={crime.id} crime={crime} />
        ))}

        <Controls />
        <Events />
      </MapContainer>
    </div>
  );
};

export default Map;
