import { useCrimeStore } from '@/stores/crimes';
import { useMemo } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, YAxis } from 'recharts';

import { CrimeSeverity } from '@/api/data-police-uk';
import { getCrimeColor } from '@/utils/crime';
import { useTheme } from 'next-themes';
import categories from '../../assets/categories.json';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 rounded-md">
        <p>{`${payload[0].payload.name} : ${payload[0].payload.count}`}</p>
      </div>
    );
  }

  return null;
};

export const CrimeCategoryChart = () => {
  const { theme } = useTheme();
  const crimes = useCrimeStore((state) => state.crimes);

  const data = useMemo(() => {
    return categories
      .slice(1)
      .map((category) => {
        const count = crimes.filter((crime) => crime.category === category.url).length;
        const color = getCrimeColor(category.severity as CrimeSeverity);

        return { name: category.name, count, color };
      })
      .filter((crime) => crime.count !== 0);
  }, [crimes]);

  return (
    <div className="h-full w-full p-4 pl-0">
      <ResponsiveContainer height="100%" width="100%">
        <BarChart width={60} height={40} data={data}>
          <Tooltip
            content={CustomTooltip}
            cursor={{ fill: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,.1)' }}
          />

          <YAxis />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
