import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCrimes } from '@/context/Crimes';

export const DateSelect = () => {
  const { dates, selectedDate, setSelectedDate } = useCrimes();

  return (
    <Select value={selectedDate} onValueChange={(value) => setSelectedDate(value)}>
      <SelectTrigger className="w-[110px] pointer-events-auto">
        <SelectValue placeholder="Select a date" />
      </SelectTrigger>
      <SelectContent className="pointer-events-auto" style={{ zIndex: 99999 }}>
        {dates.map((date) => (
          <SelectItem key={date.date} value={date.date}>
            {date.date}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
