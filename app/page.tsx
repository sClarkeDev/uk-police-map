import { MobileDrawer } from '@/components/MobileDrawer/MobileDrawer';
import { Sidebar } from '@/components/Sidebar';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

const HomePage = () => {
  return (
    <div className="h-full w-full flex overflow-hidden">
      <div className="flex-1">
        <Map />
      </div>

      <div className="hidden lg:flex w-[500px]">
        <Sidebar />
      </div>
      <MobileDrawer />
    </div>
  );
};

export default HomePage;
