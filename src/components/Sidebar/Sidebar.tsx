'use client';

import { useCrimeStore } from '@/stores/crimes';
import { FaGithub } from 'react-icons/fa6';
import { CrimeList } from '../CrimeList';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export const Sidebar = () => {
  const crimes = useCrimeStore((state) => state.crimes);

  return (
    <div className="flex-1 flex flex-col animate-in slide-in-from-right">
      <div>
        <div className="flex items-center justify-between py-7 px-8">
          <h1 className="text-2xl">UK Police Map</h1>

          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/sClarkeDev/uk-police-map" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <Separator />
      </div>
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
