/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import CanvasLoader from '../Loader';
import Plane from './Plane';
import { a } from '@react-spring/three';


const Computer = ({isRotating, setIsRotating, ...props}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const computerRef = useRef();

  const {gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches
      ? e.touches[0].clientX
      : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches
        ? e.touches[0].clientX
        : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      computerRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      computerRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      computerRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0225;
      
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      computerRef.current.rotation.y += rotationSpeed.current;
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group>
      <mesh {...props} ref={computerRef}>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={1} />
        <spotLight 
          position={[-20, 50, 10]}
          angle={0.18}
          penumbra={1.5}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive 
          object={computer.scene} 
        />
      </mesh>
    </a.group>
  )
}


const ComputerCanvas = () => {
  const [isRotating, setIsRotating] = useState(false);
  
  const adjustComputerForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-1, -3.25, -1.5];
    let rotation = [-0.01, -0.2, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [0.75, 0.75, 0.75];
    }

    return [screenScale, screenPosition, rotation]
  }
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
  
    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [2.25, -2.5, 0];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [4.2, -2.5, -2.2];
    }
  
    return [screenScale, screenPosition]
  }

  const [computerScale, computerPosition, computerRotation] = adjustComputerForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setIsRotating(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setIsRotating(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [isRotating]);

  return (
    <Canvas
    camera={{position: [20, 3, 5], fov: 25}}
    shadows
      className={`${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computer 
          position={computerPosition}
          scale={computerScale}
          rotation={computerRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
        />
        <Plane
          isRotating={isRotating}
          scale={planeScale}
          position={planePosition}
          rotation={[0, 0, 0]}
        />
      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default ComputerCanvas;