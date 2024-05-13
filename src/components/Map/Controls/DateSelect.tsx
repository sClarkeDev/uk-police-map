import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCrimeStore } from '@/stores/crimes';
import { useShallow } from 'zustand/react/shallow';

export const DateSelect = () => {
  const { dates, selectedDate, setSelectedDate } = useCrimeStore(
    useShallow((state) => ({
      dates: state.dates,
      selectedDate: state.selectedDate,
      setSelectedDate: state.setSelectedDate
    }))
  );

  return (
    <Select value={selectedDate} onValueChange={(value) => setSelectedDate(value)}>
      <SelectTrigger className="w-[104px] pointer-events-auto">
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
