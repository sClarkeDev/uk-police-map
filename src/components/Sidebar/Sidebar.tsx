'use client';

import { BLUE, RED, YELLOW } from '@/constants/colors';
import { useCrimes } from '@/context/Crimes';
import { getCrimeSeverity } from '@/utils/crime';
import { useEffect, useState } from 'react';
import { CrimeList } from '../CrimeList';
import { Chart, ChartItem } from './Chart';

export const Sidebar = () => {
  const { crimes } = useCrimes();

  const [chartItems, setChartItems] = useState<ChartItem[]>([]);

  useEffect(() => {
    const lowCount = crimes.filter((c) => getCrimeSeverity(c) === 'low').length;
    const mediumCount = crimes.filter((c) => getCrimeSeverity(c) === 'medium').length;
    const highCount = crimes.filter((c) => getCrimeSeverity(c) === 'high').length;

    setChartItems([
      { name: 'Low', value: lowCount, fill: BLUE },
      { name: 'Medium', value: mediumCount, fill: YELLOW },
      { name: 'High', value: highCount, fill: RED }
    ]);
  }, [crimes]);

  return (
    <div className="flex-1 flex animate-in slide-in-from-right py-8">
      {crimes.length ? (
        <div className="flex-1 flex flex-col space-y-8">
          <div className="w-full aspect-[10/8]">
            <Chart items={chartItems} />
          </div>

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
