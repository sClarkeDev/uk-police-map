import { BLUE, RED, YELLOW } from '@/constants/colors';
import { useCrimes } from '@/context/Crimes';
import { getCrimeSeverity } from '@/utils/crime';
import { Bar, BarChart, Cell } from 'recharts';

export const CrimeBarChart = () => {
  const { crimes } = useCrimes();

  const lowCount = crimes.filter((crime) => getCrimeSeverity(crime) === 'low').length;
  const mediumCount = crimes.filter((crime) => getCrimeSeverity(crime) === 'medium').length;
  const highCount = crimes.filter((crime) => getCrimeSeverity(crime) === 'high').length;

  const data = [
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

  console.log(data);

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
