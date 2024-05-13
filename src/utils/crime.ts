import { Crime, CrimeSeverity, Item } from '@/api/data-police-uk';

import categories from '@/assets/categories.json';
import { BLUE, RED, YELLOW } from '@/constants/colors';

export const getCrimeSeverity = (crime: Crime): CrimeSeverity => {
  const severity = categories.find((c) => c.url === crime.category)?.severity;
  return severity as CrimeSeverity;
};

export const getCrimeCategoryName = (category: string) => {
  const name = categories.find((c) => c.url === category)?.name;
  return name;
};

export const getCrimeForceName = (forces: Item[], force: string) => {
  const name = forces.find((c) => c.id === force)?.name;
  return name;
};

export const getCrimeColor = (severity: CrimeSeverity) => {
  switch (severity) {
    case 'low':
      return BLUE;

    case 'medium':
      return YELLOW;

    case 'high':
      return RED;
  }
};
