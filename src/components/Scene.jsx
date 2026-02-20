import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, PerspectiveCamera } from '@react-three/drei';

export default function Scene() {
  return (
    <div className="h-screen w-full bg-slate-900">
      <Canvas>
        <PerspectiveCamera makeDefault position={[50, 50, 50]} />
        <OrbitControls makeDefault />
        
        <Grid infiniteGrid sectionSize={10} fadeDistance={100} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} />

      </Canvas>
    </div>
  );
}