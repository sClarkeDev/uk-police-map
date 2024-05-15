'use client';

import { useCrimeStore } from '@/stores/crimes';
import { CrimeList } from '../CrimeList';

export const Sidebar = () => {
  const crimes = useCrimeStore((state) => state.crimes);

  return (
    <div className="flex-1 flex flex-col animate-in slide-in-from-right">
      {crimes.length ? (
        <>
          <div className="flex-1 overflow-y-auto py-8">
            <CrimeList />
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p>No results.</p>
        </div>
      )}
    </div>
  );
};
