import { Crime } from '@/api/data-police-uk';
import { useCrimeStore } from '@/stores/crimes';
import { useMapStore } from '@/stores/map';
import { useShallow } from 'zustand/react/shallow';
import { MAX_ZOOM } from '../Map/constants';
import { CrimeListItem } from './CrimeListItem';

export const CrimeList = () => {
  const { map, setDrawerSnapPoint } = useMapStore(
    useShallow((state) => ({ map: state.map, setDrawerSnapPoint: state.setDrawerSnapPoint }))
  );
  const crimes = useCrimeStore((state) => state.crimes);

  const onClickCrime = (crime: Crime) => {
    map?.flyTo([Number(crime.location.latitude), Number(crime.location.longitude)], MAX_ZOOM, {
      animate: true
    });

    setDrawerSnapPoint('105px');
  };

  return (
    <div className="space-y-10">
      {crimes.map((crime) => (
        <CrimeListItem key={crime.id} onClick={onClickCrime} crime={crime} />
      ))}
    </div>
  );
};
