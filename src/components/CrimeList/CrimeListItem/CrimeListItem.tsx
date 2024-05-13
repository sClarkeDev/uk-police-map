import { Locate } from 'lucide-react';

import { Crime } from '@/api/data-police-uk';
import { Button } from '@/components/ui/button';
import { getCrimeCategoryName, getCrimeColor, getCrimeSeverity } from '@/utils/crime';

interface CrimeListItemProps {
  crime: Crime;
  onClick: (crime: Crime) => void;
}

export const CrimeListItem = ({ crime, onClick }: CrimeListItemProps) => {
  return (
    <div
      className="flex flex-row items-center justify-between border-l-[6px] pl-6 mx-4 xl:mx-8"
      style={{ borderColor: getCrimeColor(getCrimeSeverity(crime)) }}
    >
      <div className="space-y-1.5">
        <p>{getCrimeCategoryName(crime.category)}</p>
        <p className="text-sm text-muted-foreground">{crime.location.street.name}</p>
      </div>
      <div>
        <Button variant="ghost" size="icon" onClick={() => onClick(crime)}>
          <Locate className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
