'use client';

import { Map } from 'leaflet';
import { createContext, useContext, useState } from 'react';

type MapContextType = {
  map: Map | null;
  setMap: (newMap: Map) => void;
  sidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
};

const MapContext = createContext<MapContextType>({
  map: null,
  setMap: () => {},
  sidebarVisible: true,
  setSidebarVisible: () => {}
});

export const useMap = () => useContext(MapContext);

type MapProviderProps = {
  children: React.ReactNode;
};

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [map, setMap] = useState<Map | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const setMapValue = (newMap: Map) => {
    setMap(newMap);
  };

  const setSidebarVisibleValue = (value: boolean) => {
    setSidebarVisible(value);
  };

  return (
    <MapContext.Provider
      value={{ map, setMap: setMapValue, sidebarVisible, setSidebarVisible: setSidebarVisibleValue }}
    >
      {children}
    </MapContext.Provider>
  );
};
