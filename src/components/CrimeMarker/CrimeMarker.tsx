import * as L from 'leaflet';
import { memo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { Crime, NestedCrime } from '@/api/data-police-uk';
import { getCrimeCategoryName, getCrimeColor, getCrimeSeverity } from '@/utils/crime';
import './styles.css';

interface CrimeMarkerProps {
  crime: NestedCrime;
}

const markerDivIcon = (color: string) =>
  L.divIcon({
    className: '',
    html: `<div class="w-full h-full rounded-full text-white flex items-center justify-center" style="background-color: ${color}; box-shadow: 0 0 8px 0 ${color};"></div>`,
    iconSize: [12, 12]
  });

export const CrimeMarker = memo(({ crime }: CrimeMarkerProps) => {
  return (
    <MarkerClusterGroup
      chunkedLoading
      zoomToBoundsOnClick
      spiderLegPolylineOptions={{ opacity: 0 }}
      iconCreateFunction={() => markerDivIcon(getCrimeColor(getCrimeSeverity(crime)))}
    >
      <MarkerIcon crime={crime} />

      {crime.sameLocation.map((c) => (
        <MarkerIcon key={c.id} crime={c} />
      ))}
    </MarkerClusterGroup>
  );
});

const MarkerIcon = ({ crime }: { crime: Crime }) => (
  <Marker
    position={[Number(crime.location.latitude), Number(crime.location.longitude)]}
    icon={markerDivIcon(getCrimeColor(getCrimeSeverity(crime)))}
  >
    <Popup className="flex text-center">
      <p className="text-base">{getCrimeCategoryName(crime.category)}</p>
      <p className="text-muted-foreground">{crime.outcome_status && crime.outcome_status?.category}</p>
      <p className="text-muted-foreground">{crime.location?.street && crime.location.street.name}</p>
    </Popup>
  </Marker>
);
