import { Crime, CrimeSeverity, Item, NestedCrime } from '@/api/data-police-uk';

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

export const parseSameLocationCrimes = (crimes: Crime[]) => {
  crimes.sort((a, b) => {
    const aseverity = getCrimeSeverity(a);
    const bseverity = getCrimeSeverity(b);

    if (aseverity === 'high') return -1;
    if (bseverity === 'high') return 1;
    if (aseverity === 'medium') return -1;
    if (bseverity === 'medium') return 1;
    return 0;
  });

  const groupedCrimes: NestedCrime[] = [];
  crimes.forEach((crime) => {
    const existingGroup = groupedCrimes.find(
      (group) =>
        group.location.latitude === crime.location.latitude && group.location.longitude === crime.location.longitude
    );
    if (existingGroup) {
      existingGroup.sameLocation.push(crime);
    } else {
      groupedCrimes.push({ ...crime, sameLocation: [] });
    }
  });

  return groupedCrimes;
};
