import { Map } from 'leaflet';
import { create } from 'zustand';

export type DrawerSnapPoint = '40px' | '105px' | 0.8;

interface MapState {
  map: Map | null;
  setMap: (map: Map) => void;
  sidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
  drawerSnapPoint: DrawerSnapPoint;
  setDrawerSnapPoint: (point: DrawerSnapPoint) => void;
}

export const useMapStore = create<MapState>((set) => ({
  map: null,
  setMap: (map) => set({ map }),
  sidebarVisible: true,
  setSidebarVisible: (visible) => set({ sidebarVisible: visible }),
  drawerSnapPoint: '105px',
  setDrawerSnapPoint: (point) => set({ drawerSnapPoint: point })
}));
