'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { CrimeList } from '../CrimeList';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '../ui/drawer';

export const MobileDrawer = () => {
  const [snap, setSnap] = useState<number | string | null>('100px');
  const isMobile = useMediaQuery('(max-width: 1280px)');

  return (
    <Drawer
      open={isMobile}
      snapPoints={['40px', '100px', 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      dismissible={false}
      modal={false}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>West Midlands Police</DrawerTitle>
          <DrawerDescription>London</DrawerDescription>
        </DrawerHeader>

        <div className="overflow-y-auto flex-1">
          <CrimeList />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
