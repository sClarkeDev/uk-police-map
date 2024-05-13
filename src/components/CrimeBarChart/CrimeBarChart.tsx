import { BLUE, RED, YELLOW } from '@/constants/colors';
import { useCrimeStore } from '@/stores/crimes';
import { getCrimeSeverity } from '@/utils/crime';
import { useMemo } from 'react';
import { Bar, BarChart, Cell } from 'recharts';

export const CrimeBarChart = () => {
  const crimes = useCrimeStore((state) => state.crimes);

  const data = useMemo(() => {
    const lowCount = crimes.filter((crime) => getCrimeSeverity(crime) === 'low').length;
    const mediumCount = crimes.filter((crime) => getCrimeSeverity(crime) === 'medium').length;
    const highCount = crimes.filter((crime) => getCrimeSeverity(crime) === 'high').length;

    return [
      {
        count: lowCount,
        color: BLUE
      },
      {
        count: mediumCount,
        color: YELLOW
      },
      {
        count: highCount,
        color: RED
      }
    ];
  }, [crimes]);

  return (
    <BarChart width={60} height={40} data={data}>
      <Bar dataKey="count">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  );
};
