import { Map } from 'leaflet';
import { create } from 'zustand';

export type DrawerSnapPoint = '40px' | '105px' | 1;

interface MapState {
  map: Map | null;
  setMap: (map: Map) => void;
  drawerSnapPoint: DrawerSnapPoint;
  setDrawerSnapPoint: (point: DrawerSnapPoint) => void;
}

export const useMapStore = create<MapState>((set) => ({
  map: null,
  setMap: (map) => set({ map }),
  drawerSnapPoint: '105px',
  setDrawerSnapPoint: (point) => set({ drawerSnapPoint: point })
}));
