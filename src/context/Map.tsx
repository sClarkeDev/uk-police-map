'use client';

import { Map } from 'leaflet';
import { createContext, useContext, useState } from 'react';

export type DrawerSnapPoint = '40px' | '100px' | 0.8;

type MapContextType = {
  map: Map | null;
  setMap: (newMap: Map) => void;
  sidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
  drawerSnapPoint: DrawerSnapPoint;
  setDrawerSnapPoint: (point: DrawerSnapPoint) => void;
};

const MapContext = createContext<MapContextType>({
  map: null,
  setMap: () => {},
  sidebarVisible: true,
  setSidebarVisible: () => {},
  drawerSnapPoint: '40px',
  setDrawerSnapPoint: () => {}
});

export const useMap = () => useContext(MapContext);

type MapProviderProps = {
  children: React.ReactNode;
};

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [map, setMap] = useState<Map | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [drawerSnapPoint, setDrawerSnapPoint] = useState<DrawerSnapPoint>('40px');

  const setMapValue = (newMap: Map) => {
    setMap(newMap);
  };

  const setSidebarVisibleValue = (value: boolean) => {
    setSidebarVisible(value);
  };

  return (
    <MapContext.Provider
      value={{
        map,
        setMap: setMapValue,
        sidebarVisible,
        setSidebarVisible: setSidebarVisibleValue,
        drawerSnapPoint,
        setDrawerSnapPoint
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
