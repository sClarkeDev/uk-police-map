import {
  Crime,
  CrimeDate,
  ForceData,
  Item,
  Neighborhood,
  getCrimeDates,
  getCrimesInBounds,
  getForce,
  getForces,
  getNeighbourhood,
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
  updateCrimes: (bounds: LatLngBounds, date?: string) => void;
  neighbourhood: Neighborhood | null;
}

export const useCrimeStore = create<CrimeState>((set, get) => ({
  forces: [],
  force: null,
  dates: [],
  selectedDate: '',
  setSelectedDate: (date) => {
    get().updateCrimes(useMapStore.getState().map?.getBounds() as LatLngBounds, date);
    set({ selectedDate: date });
  },
  crimes: [],
  updateCrimes: async (bounds: LatLngBounds, date?: string) => {
    const crimes = await getCrimesInBounds(bounds, date || get().selectedDate);
    set({ crimes });

    const locatedNeighbourhood = await locateNeighbourhood(bounds.getCenter());
    const force = await getForce(locatedNeighbourhood.force);
    const neighbourhood = await getNeighbourhood(locatedNeighbourhood.force, locatedNeighbourhood.neighbourhood);
    set({ force, neighbourhood });
  },
  neighbourhood: null
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
