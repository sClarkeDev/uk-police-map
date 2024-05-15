'use client';

import { MobileDrawer } from '@/components/MobileDrawer/MobileDrawer';
import { Sidebar } from '@/components/Sidebar';
import { useMapStore } from '@/stores/map';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

const HomePage = () => {
  const sidebarVisible = useMapStore((state) => state.sidebarVisible);
  const map = useMapStore((state) => state.map);

  return (
    <div className="h-full w-full flex overflow-hidden">
      {sidebarVisible && (
        <div className="hidden xl:flex w-[450px]">
          <Sidebar />
        </div>
      )}

      <div className="flex-1">
        <Map />
      </div>

      {/* Render Mobile Drawer after map is initalized to avoid tiling issues */}
      {map && <MobileDrawer />}
    </div>
  );
};

export default HomePage;
