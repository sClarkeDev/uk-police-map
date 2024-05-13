import { Locate } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useMap } from '@/context/Map';

export const LocateControl = () => {
  const { map } = useMap();

  const onClick = () => map?.locate({ setView: false, enableHighAccuracy: true });

  return (
    <Button size="icon" variant="outline" onClick={onClick}>
      <Locate className="h-4 w-4" />
    </Button>
  );
};
