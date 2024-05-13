'use client';

import { DrawerSnapPoint, useMap } from '@/context/Map';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CrimeList } from '../CrimeList';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '../ui/drawer';

export const MobileDrawer = () => {
  const { drawerSnapPoint, setDrawerSnapPoint } = useMap();
  const isMobile = useMediaQuery('(max-width: 1280px)');

  return (
    <Drawer
      open={isMobile}
      snapPoints={['40px', '100px', 0.8]}
      activeSnapPoint={drawerSnapPoint}
      setActiveSnapPoint={(point) => setDrawerSnapPoint(point as DrawerSnapPoint)}
      dismissible={false}
      modal={false}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>West Midlands Police</DrawerTitle>
          <DrawerDescription>London</DrawerDescription>
        </DrawerHeader>

        <div data-vaul-no-drag className="mt-6 overflow-y-auto flex-1">
          <CrimeList />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
