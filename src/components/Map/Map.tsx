'use client';

import { Map as LMap, LatLng } from 'leaflet';
import { useTheme } from 'next-themes';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

import { useCrimeStore } from '@/stores/crimes';
import { useMapStore } from '@/stores/map';
import { parseSameLocationCrimes } from '@/utils/crime';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { CrimeMarker } from '../CrimeMarker';
import { Controls } from './Controls';
import { DEFAULT_ZOOM, MAX_ZOOM, MIN_CRIME_ZOOM } from './constants';

const Map = () => {
  const { theme } = useTheme();
  const map = useMapStore((state) => state.map);
  const setMap = useMapStore((state) => state.setMap);
  const crimes = useCrimeStore((state) => state.crimes);
  const forces = useCrimeStore((state) => state.forces);
  const updateCrimes = useCrimeStore((state) => state.updateCrimes);

  const [userLocation, setUserLocation] = useState<{ latlng: LatLng; accuracy: number } | null>();

  // Fetch inital crimes
  useEffect(() => {
    if (!map || !forces?.length) return;

    updateCrimes(map.getBounds());
  }, [forces?.length, map, updateCrimes]);

  const Events = () => {
    const map = useMapEvents({
      dragend() {
        updateCrimes(map.getBounds());
      },
      load() {
        updateCrimes(map.getBounds());
      },
      zoomend() {},
      locationfound(e) {
        setUserLocation({ latlng: e.latlng, accuracy: e.accuracy });
        map?.flyTo(e.latlng, MAX_ZOOM, {
          animate: true
        });
      },
      locationerror(e) {
        alert(e.message);
      }
    });

    return null;
  };

  return (
    <div className="h-full w-full relative">
      <MapContainer
        ref={(m) => setMap(m as LMap)}
        center={[51.508468, -0.597097]}
        minZoom={MIN_CRIME_ZOOM}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full !bg-background"
        zoomControl={false}
        style={{ zIndex: 40 }}
      >
        <TileLayer
          attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
          url={`/api/map/{z}/{x}/{y}?theme=${theme}`}
        />

        {parseSameLocationCrimes(crimes).map((crime) => (
          <CrimeMarker key={crime.id} crime={crime} />
        ))}

        {userLocation && <Marker position={userLocation.latlng} />}

        <Events />
        <Controls />
      </MapContainer>
    </div>
  );
};

export default Map;
