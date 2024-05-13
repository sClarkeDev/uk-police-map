'use client';

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
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useMap } from './Map';

type CrimesContextType = {
  crimes: Crime[];
  updateCrimes: (bounds: LatLngBounds) => void;
  forces: Item[];
  force: ForceData | null;
  dates: CrimeDate[];
  selectedDate: string;
  setSelectedDate: (date: string) => void;
};

const CrimesContext = createContext<CrimesContextType>({
  crimes: [],
  updateCrimes: () => {},
  forces: [],
  force: null,
  dates: [],
  selectedDate: '',
  setSelectedDate: () => {}
});

export const useCrimes = () => useContext(CrimesContext);

type CrimesProviderProps = {
  children: React.ReactNode;
};

export const CrimesProvider: React.FC<CrimesProviderProps> = ({ children }) => {
  const { map } = useMap();

  const [state, setState] = useState<{
    crimes: Crime[];
    forces: Item[];
    force: ForceData | null;
    dates: CrimeDate[];
    selectedDate: string;
  }>({
    crimes: [],
    force: null,
    forces: [],
    dates: [],
    selectedDate: ''
  });
  useEffect(() => {
    getInitalData()
      .then(({ forces, dates }) => {
        setState((old) => ({ ...old, forces, dates, selectedDate: dates[0].date }));
      })
      .catch((err) => console.error(err));
  }, []);

  const updateCrimes = useCallback(
    async (bounds: LatLngBounds) => {
      try {
        const crimes = await getCrimesInBounds(bounds, state.selectedDate);
        setState((old) => ({ ...old, crimes }));

        const neighbourhood = await locateNeighbourhood(bounds.getCenter());
        const force = await getForce(neighbourhood.force);

        setState((old) => ({ ...old, force }));
      } catch (error) {
        console.error(error);
      }
    },
    [state.selectedDate]
  );

  useEffect(() => {
    if (!map) return;

    updateCrimes(map.getBounds());
  }, [map, updateCrimes]);

  const updateSelectedDate = (value: string) => setState((old) => ({ ...old, selectedDate: value }));

  return (
    <CrimesContext.Provider
      value={{
        crimes: state.crimes,
        updateCrimes,
        force: state.force,
        forces: state.forces,
        dates: state.dates,
        selectedDate: state.selectedDate,
        setSelectedDate: updateSelectedDate
      }}
    >
      {children}
    </CrimesContext.Provider>
  );
};

const getInitalData = async () => {
  const forces = await getForces();
  const dates = await getCrimeDates();

  return { dates, forces };
};
