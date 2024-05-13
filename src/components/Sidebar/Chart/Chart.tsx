import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { useCrimes } from '@/context/Crimes';

export type ChartItem = {
  name: string;
  value: number;
  fill: string;
};

interface ChartProps {
  items: ChartItem[];
}

export const Chart = ({ items }: ChartProps) => {
  const { crimes } = useCrimes();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          animationDuration={500}
          data={items}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          stroke="none"
        >
          <Label value={`${crimes.length} Crimes`} position="center" className="text-2xl" />
          {items.map((entry, index) => (
            <Cell key={`cell-${index}`} className="border-0 !border-transparent" fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
