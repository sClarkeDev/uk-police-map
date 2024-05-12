'use client';

import { useTheme } from 'next-themes';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const { theme } = useTheme();

  return (
    <div className="h-full w-full relative">
      <MapContainer center={[51.505, -0.09]} zoom={17} className="h-full w-full !bg-background" zoomControl={false}>
        <TileLayer
          attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
          url={`/api/map/{z}/{x}/{y}?theme=${theme}`}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
