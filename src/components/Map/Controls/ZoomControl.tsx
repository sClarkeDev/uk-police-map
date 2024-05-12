import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useMap } from '@/context/Map';

export const ZoomControl = () => {
  const { map } = useMap();

  const onClickZoomIn = () => map?.zoomIn();

  const onClickZoomOut = () => map?.zoomOut();

  return (
    <div className="flex flex-col space-y-2">
      <Button size="icon" variant="outline" onClick={onClickZoomIn}>
        <Plus className="h-4 w-4" />
      </Button>

      <Button size="icon" variant="outline" onClick={onClickZoomOut}>
        <Minus className="h-4 w-4" />
      </Button>
    </div>
  );
};
