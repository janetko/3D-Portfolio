import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import CanvasLoader from '../Loader';
import phoneScene from '/phone.glb';

const Phone = () => {
  const phoneRef = useRef();
  const {scene, animations} = useGLTF(phoneScene);
  const {actions} = useAnimations(animations, phoneRef);

  useEffect(() => {
    if (actions['open']) {
      actions['open'].play();
    }
  }, [actions]);

  return (
    <primitive 
      ref={phoneRef} 
      object={scene}
      scale={18}
      position={[0, -1.5, 0]}
      rotation-y={0}
    />
  )
}

const PhoneCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight  intensity={2} /> 
        <spotLight 
         color="#b513f6"
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={0.5} 
          intensity={4} 
          castShadow 
        />
        <OrbitControls 
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
          <Phone />
          <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default PhoneCanvas;