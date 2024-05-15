'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DrawerSnapPoint, useMapStore } from '@/stores/map';
import { useShallow } from 'zustand/react/shallow';
import { CrimeBarChart } from '../CrimeBarChart';
import { CrimeList } from '../CrimeList';
import { ForceDialog } from '../ForceDialog';
import { NeighbourhoodDialog } from '../NeighbourhoodDialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '../ui/drawer';
import { Separator } from '../ui/separator';

export const MobileDrawer = () => {
  const { drawerSnapPoint, setDrawerSnapPoint } = useMapStore(
    useShallow((state) => ({ drawerSnapPoint: state.drawerSnapPoint, setDrawerSnapPoint: state.setDrawerSnapPoint }))
  );
  const isMobile = useMediaQuery('(max-width: 1280px)');

  return (
    <Drawer
      open={isMobile}
      snapPoints={['40px', '105px', 0.8]}
      activeSnapPoint={drawerSnapPoint}
      setActiveSnapPoint={(point) => setDrawerSnapPoint(point as DrawerSnapPoint)}
      dismissible={false}
      modal={false}
    >
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between mb-1.5">
          <div className="flex flex-col space-y-2">
            <DrawerTitle asChild>
              <ForceDialog />
            </DrawerTitle>
            <DrawerDescription asChild>
              <NeighbourhoodDialog />
            </DrawerDescription>
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
