'use client';

import { Crime, ForceData, Item, Neighborhood, getCrimesInBounds, getForces } from '@/api/data-police-uk';
import { LatLngBounds } from 'leaflet';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useMap } from './Map';

type CrimesContextType = {
  crimes: Crime[];
  updateCrimes: (bounds: LatLngBounds) => void;
  forces: Item[];
  force: { force: ForceData; neighbourhood: Neighborhood } | null;
};

const CrimesContext = createContext<CrimesContextType>({
  crimes: [],
  updateCrimes: () => {},
  forces: [],
  force: null
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
    force: { force: ForceData; neighbourhood: Neighborhood } | null;
  }>({
    crimes: [],
    force: null,
    forces: []
  });
  useEffect(() => {
    getInitalData()
      .then(({ forces }) => {
        setState((old) => ({ ...old, forces }));
      })
      .catch((err) => console.error(err));
  }, []);

  const updateCrimes = useCallback(async (bounds: LatLngBounds) => {
    try {
      const crimes = await getCrimesInBounds(bounds, '2024-01');
      setState((old) => ({ ...old, crimes }));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!map) return;

    updateCrimes(map.getBounds());
  }, [map, updateCrimes]);

  return (
    <CrimesContext.Provider
      value={{
        crimes: state.crimes,
        updateCrimes,
        force: state.force,
        forces: state.forces
      }}
    >
      {children}
    </CrimesContext.Provider>
  );
};

const getInitalData = async () => {
  const forces = await getForces();

  return { forces };
};
