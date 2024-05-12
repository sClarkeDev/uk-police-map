import { MobileDrawer } from '@/components/MobileDrawer/MobileDrawer';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

const HomePage = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="hidden lg:block w-[500px]"></div>

      <div className="flex-1">
        <Map />
      </div>

      <MobileDrawer />
    </div>
  );
};

export default HomePage;
