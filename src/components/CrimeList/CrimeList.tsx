import { Crime } from '@/api/data-police-uk';
import { useCrimes } from '@/context/Crimes';
import { useMapStore } from '@/stores/map';
import { useShallow } from 'zustand/react/shallow';
import { CrimeListItem } from './CrimeListItem';

export const CrimeList = () => {
  const { map, setDrawerSnapPoint } = useMapStore(
    useShallow((state) => ({ map: state.map, setDrawerSnapPoint: state.setDrawerSnapPoint }))
  );
  const { crimes } = useCrimes();

  const onClickCrime = (crime: Crime) => {
    map?.flyTo([Number(crime.location.latitude), Number(crime.location.longitude)], 18, {
      animate: true
    });

    setDrawerSnapPoint('100px');
  };

  return (
    <div className="space-y-10">
      {crimes.map((crime) => (
        <CrimeListItem key={crime.id} onClick={onClickCrime} crime={crime} />
      ))}
    </div>
  );
};
