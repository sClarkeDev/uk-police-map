import { MobileDrawer } from '@/components/MobileDrawer/MobileDrawer';
import { Sidebar } from '@/components/Sidebar';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

const HomePage = () => {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="hidden xl:flex w-[450px]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Map />
      </div>

      <MobileDrawer />
    </div>
  );
};

export default HomePage;
