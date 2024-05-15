import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { BLUE, RED, YELLOW } from '@/constants/colors';
import { useCrimeStore } from '@/stores/crimes';
import { getCrimeSeverity } from '@/utils/crime';
import { useEffect, useState } from 'react';

export type ChartItem = {
  name: string;
  value: number;
  fill: string;
};

export const Chart = () => {
  const crimes = useCrimeStore((state) => state.crimes);

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
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          animationDuration={500}
          data={chartItems}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={75}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          stroke="none"
          cornerRadius={8}
        >
          <Label value={`Crime Ratio`} position="center" className="text-base" />
          {chartItems.map((entry, index) => (
            <Cell key={`cell-${index}`} radius={20} className="border-0 !border-transparent" fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
