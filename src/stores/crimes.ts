import {
  Crime,
  CrimeDate,
  ForceData,
  Item,
  getCrimeDates,
  getCrimesInBounds,
  getForce,
  getForces,
  locateNeighbourhood
} from '@/api/data-police-uk';
import { LatLngBounds } from 'leaflet';
import { create } from 'zustand';
import { useMapStore } from './map';

interface CrimeState {
  forces: Item[];
  force: ForceData | null;
  dates: CrimeDate[];
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  crimes: Crime[];
  updateCrimes: (bounds: LatLngBounds) => void;
}

export const useCrimeStore = create<CrimeState>((set, get) => ({
  forces: [],
  force: null,
  dates: [],
  selectedDate: '',
  setSelectedDate: (date) => {
    get().updateCrimes(useMapStore.getState().map?.getBounds() as LatLngBounds);
    set({ selectedDate: date });
  },
  crimes: [],
  updateCrimes: async (bounds) => {
    const crimes = await getCrimesInBounds(bounds, get().selectedDate);
    set({ crimes });

    const neighbourhood = await locateNeighbourhood(bounds.getCenter());
    const force = await getForce(neighbourhood.force);
    set({ force });
  }
}));

const initStore = async () => {
  const forces = await getForces();
  const dates = await getCrimeDates();

  return {
    forces,
    dates
  };
};

initStore()
  .then((values) =>
    useCrimeStore.setState({ forces: values.forces, dates: values.dates, selectedDate: values.dates[0].date })
  )
  .catch((err) => console.error(err));
