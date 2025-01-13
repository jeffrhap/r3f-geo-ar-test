'use client';

import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import ThreeAr from '@components/sections/ThreeAr.component';

type Props = {
  params: { locale: string };
};

const Home: NextPage<Props> = () => {
  return (
    <div className='h-svh'>
      {/* THREEJS GEO AR */}
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 80,
          position: [0, 1, 2]
        }}
      >
        <ThreeAr />
      </Canvas>
    </div>
  );
};

export default Home;
