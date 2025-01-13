import { useFrame, useThree } from '@react-three/fiber';

import * as THREE from 'three';
import * as THREEx from './../../node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js'

const box = new THREE.BoxGeometry(2, 2, 2);
const cube = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: 0xff0000 }));

const ThreeAr = () => {
  const three = useThree();

  const arjs = new THREEx.LocationBased(three.scene, three.camera);
  const cam = new THREEx.WebcamRenderer(three.gl);

  const orientationControls = new THREEx.DeviceOrientationControls(three.camera)

  // https://ar-js-org.github.io/AR.js-Docs/location-based/#threejs
  // https://github.com/AR-js-org/AR.js/pull/188/files#diff-65b7c8dc378124ae83133162ac9bc4b7386c5218b53d49a67c303ec1abca2659
  // IOS??? https://github.com/AR-js-org/AR.js/issues/347

  arjs.startGps();
  // arjs.fakeGps(-0.72, 51.05);
  arjs.add(cube, 5.08276891708374, 51.55937957763672);

  useFrame(() => {
    if (orientationControls) orientationControls.update();

    cam.update();
  });

  return (
    <>
      {/* <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1]} />
        <meshStandardMaterial color="red" />
      </mesh> */}

      <ambientLight intensity={0.5} />
    </>
  );
};

export default ThreeAr;
