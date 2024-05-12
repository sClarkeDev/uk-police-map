import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map/Map'), { ssr: false });

const HomePage = () => {
  return (
    <div className="h-screen w-screen">
      <Map />
    </div>
  );
};

export default HomePage;
