'use client';

import { DrawerSnapPoint, useMap } from '@/context/Map';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { CrimeBarChart } from '../CrimeBarChart';
import { CrimeList } from '../CrimeList';
import { ForceDialog } from '../ForceDialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '../ui/drawer';
import { Separator } from '../ui/separator';

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
        <DrawerHeader className="flex items-center justify-between">
          <div>
            <DrawerTitle asChild>
              <ForceDialog />
            </DrawerTitle>
            <DrawerDescription>London</DrawerDescription>
          </div>

          <CrimeBarChart />
        </DrawerHeader>

        <Separator />

        <div data-vaul-no-drag className="mt-6 overflow-y-auto flex-1 space-y-4">
          <CrimeList />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
