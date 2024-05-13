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
import { useState } from 'react';
import { CrimeMarker } from '../CrimeMarker';
import { Controls } from './Controls';
import { MIN_CRIME_ZOOM } from './constants';

const Map = () => {
  const { theme } = useTheme();
  const map = useMapStore((state) => state.map);
  const setMap = useMapStore((state) => state.setMap);
  const setSidebarVisible = useMapStore((state) => state.setSidebarVisible);
  const crimes = useCrimeStore((state) => state.crimes);
  const updateCrimes = useCrimeStore((state) => state.updateCrimes);

  const [userLocation, setUserLocation] = useState<{ latlng: LatLng; accuracy: number } | null>();
  const [crimesVisible, setCrimesVisible] = useState(true);

  const Events = () => {
    const map = useMapEvents({
      dragend() {
        if (map.getZoom() < MIN_CRIME_ZOOM) return;
        updateCrimes(map.getBounds());
      },
      zoomend() {
        if (map.getZoom() >= MIN_CRIME_ZOOM) {
          setCrimesVisible(true);
          setSidebarVisible(true);
          setTimeout(() => {
            map.invalidateSize({ animate: true });
          }, 100);
        } else {
          setCrimesVisible(false);
          setSidebarVisible(false);
          setTimeout(() => {
            map.invalidateSize({ animate: true });
          }, 100);
        }
      },
      locationfound(e) {
        setUserLocation({ latlng: e.latlng, accuracy: e.accuracy });
        map?.flyTo(e.latlng, 18, {
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

        {crimesVisible && parseSameLocationCrimes(crimes).map((crime) => <CrimeMarker key={crime.id} crime={crime} />)}

        {userLocation && <Marker position={userLocation.latlng} />}

        <Events />
        <Controls />
      </MapContainer>
    </div>
  );
};

export default Map;
