import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function BuildingBox() {
  return (
    <mesh>
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial color="#FF0000" />
    </mesh>
  );
}

export default function Building3D() {
  return (
    <div className="h-[380px] w-full rounded-lg overflow-hidden">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <BuildingBox />
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
}
