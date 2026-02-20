import React, { useState, useMemo } from 'react';
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Grid,
} from "@react-three/drei";

import Cloud from "./components/Cloud";
import { Stats } from "./components/Stats";
import { generateMockLidar } from "./utils/generateMockLidar";

function App() {
  const initialData = useMemo(() => generateMockLidar(150000), []);
  const [pointsCount, setPointsCount] = useState(150000);
  const [lidarData, setLidarData] = useState(initialData);

  const handleGenerateMock = (count) => {
    const { positions, colors } = generateMockLidar(count);
    setLidarData({ positions, colors });
    setPointsCount(count);
  };

  return (
    <div className="h-screen w-full bg-slate-950 flex flex-col overflow-hidden">
      <div className="absolute top-6 left-6 z-10 p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-2xl w-80">
        <div className="mb-6">
          <h1 className="text-white text-xl font-bold">LiDAR Mock Explorer</h1>
          <p className="text-indigo-400 text-[10px] uppercase tracking-widest font-black">
            Visualização 3D WebGL
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleGenerateMock(100000)}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all font-semibold shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Gerar Simulação (100k pts)
          </button>
          <button
            onClick={() => handleGenerateMock(500000)}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-semibold shadow-lg shadow-blue-500/20 active:scale-95"
          >
            Gerar Simulação (500k pts)
          </button>
        </div>
      </div>

      <Stats pointsCount={pointsCount} fileName="Simulação Generativa" />

      <Canvas>
        <PerspectiveCamera makeDefault position={[50, 30, 50]} fov={60} />
        <OrbitControls makeDefault minDistance={1} maxDistance={500} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <ambientLight intensity={0.7} />
        <pointLight position={[100, 100, 100]} intensity={1} />

        <Grid
          infiniteGrid
          sectionSize={10}
          sectionColor="#334155"
          cellColor="#1e293b"
          fadeDistance={150}
        />

        {lidarData && <Cloud data={lidarData} />}
      </Canvas>

      <div className="absolute bottom-6 right-6 text-[10px] text-slate-500 font-mono hidden md:block">
        [LMB] Rotacionar • [RMB] Pan • [SCROLL] Zoom
      </div>
    </div>
  );
}

export default App;
