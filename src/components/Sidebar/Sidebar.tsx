'use client';

import { useCrimes } from '@/context/Crimes';
import { CrimeList } from '../CrimeList';
import { Separator } from '../ui/separator';

export const Sidebar = () => {
  const { crimes } = useCrimes();

  return (
    <div className="flex-1 flex animate-in slide-in-from-right py-8">
      {crimes.length ? (
        <div className="flex-1 flex flex-col space-y-8">
          <div className="px-8 space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">West Midlands Police</h2>
            <p className="text-lg text-muted-foreground">London</p>
          </div>
          <Separator />
          <div className="flex-1 overflow-y-auto">
            <CrimeList />
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p>No results.</p>
        </div>
      )}
    </div>
  );
};
