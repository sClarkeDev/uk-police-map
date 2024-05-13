'use client';

import { useCrimes } from '@/context/Crimes';
import { CrimeList } from '../CrimeList';

export const Sidebar = () => {
  const { crimes } = useCrimes();

  return (
    <div className="flex-1 flex flex-col animate-in slide-in-from-right py-8">
      {crimes.length ? (
        <>
          <div className="flex-1 overflow-y-auto">
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
