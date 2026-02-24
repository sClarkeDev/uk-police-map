import { useShallow } from "zustand/react/shallow"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCrimeStore } from "@/stores/crimes"

export const DateSelect = () => {
  const { dates, selectedDate, setSelectedDate } = useCrimeStore(
    useShallow((state) => ({
      dates: state.dates,
      selectedDate: state.selectedDate,
      setSelectedDate: state.setSelectedDate,
    }))
  )

  return (
    <Select value={selectedDate} onValueChange={(value) => setSelectedDate(value)}>
      <SelectTrigger className="w-[104px] pointer-events-auto bg-background border border-input dark:bg-input/30 rounded-md px-3 py-2 text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-colors">
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
  )
}
