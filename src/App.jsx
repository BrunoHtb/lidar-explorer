import React, { useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Grid,
} from "@react-three/drei";

import Cloud from "./components/Cloud";
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
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-200">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[50, 30, 50]} fov={60} />
          <OrbitControls makeDefault minDistance={1} maxDistance={500} />

          <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.7} />
          <pointLight position={[100, 100, 100]} intensity={1} />
          <Grid infiniteGrid sectionSize={10} sectionColor="#334155" cellColor="#1e293b" fadeDistance={150} />

          {lidarData && <Cloud data={lidarData} />}
        </Canvas>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <header className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-3 pointer-events-auto z-20">
          <span className="text-sm text-slate-400 font-bold tracking-widest uppercase">
            Control Panel
          </span>
          <a href="https://github.com/BrunoHtb" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white transition tracking-wider">
            GITHUB
          </a>
        </header>

        <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-12 md:pt-0 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
            LiDAR
            <span className="block text-xl md:text-3xl text-slate-400 font-light mt-2 tracking-wide">
              Visualization Engine
            </span>
          </h1>
          <p className="mt-4 text-[10px] md:text-xs tracking-[0.4em] uppercase text-indigo-400 font-bold drop-shadow-md">
            WebGL • GPU • BufferGeometry
          </p>
        </div>

        <div className="absolute top-32 left-10 w-80 pointer-events-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl z-20">
          <h2 className="text-sm font-bold text-slate-300 mb-6 tracking-widest uppercase">
            Simulation Control
          </h2>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleGenerateMock(100000)}
              className="py-3 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border border-transparent hover:border-cyan-500/50 hover:text-cyan-400 text-left"
            >
              Load 100k Points
            </button>
            <button
              onClick={() => handleGenerateMock(500000)}
              className="py-3 px-4 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border border-transparent hover:border-indigo-500/50 hover:text-indigo-400 text-left"
            >
              Load 500k Points
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-[10px] font-mono text-slate-500 space-y-2">
            <div className="flex justify-between">
              <span>Points</span>
              <span className="text-slate-300">{pointsCount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Render</span>
              <span className="text-slate-300">BufferGeometry</span>
            </div>
            <div className="flex justify-between items-center">
              <span>GPU Acelleration</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 text-[10px] text-slate-500 font-mono tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/5 z-20">
          LMB Rotate • RMB Pan • Scroll Zoom
        </div>
      </div>
    </div>
  );
}

export default App;