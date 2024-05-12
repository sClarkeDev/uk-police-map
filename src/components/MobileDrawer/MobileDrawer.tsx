'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '../ui/drawer';

export const MobileDrawer = () => {
  const [snap, setSnap] = useState<number | string | null>('110px');
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <Drawer
      open={isMobile}
      snapPoints={['110px', 1]}
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
        <DrawerFooter>
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
