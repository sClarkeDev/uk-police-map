'use client';

import { useMobile } from '@/hooks/useMobile';
import { useCrimeStore } from '@/stores/crimes';
import { DrawerSnapPoint, useMapStore } from '@/stores/map';
import { useShallow } from 'zustand/react/shallow';
import { CrimeBarChart } from '../CrimeBarChart';
import { CrimeList } from '../CrimeList';
import { ForceDialog } from '../ForceDialog';
import { NeighbourhoodDialog } from '../NeighbourhoodDialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '../ui/drawer';
import { Separator } from '../ui/separator';

export const MobileDrawer = () => {
  const crimes = useCrimeStore((state) => state.crimes);
  const force = useCrimeStore((state) => state.force);

  const { drawerSnapPoint, setDrawerSnapPoint } = useMapStore(
    useShallow((state) => ({ drawerSnapPoint: state.drawerSnapPoint, setDrawerSnapPoint: state.setDrawerSnapPoint }))
  );
  const isMobile = useMobile();

  return (
    <Drawer
      open={isMobile}
      snapPoints={crimes.length && force ? ['40px', '105px', 1] : ['40px']}
      activeSnapPoint={crimes.length && force ? drawerSnapPoint : '40px'}
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
