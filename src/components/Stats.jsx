export const Stats = ({ pointsCount, fileName }) => {
  return (
    <div className="absolute bottom-6 left-6 z-10 p-4 bg-slate-900/80 backdrop-blur-md rounded-lg border border-slate-700 text-xs font-mono">
      <div className="flex flex-col space-y-1">
        <p className="text-indigo-400 font-bold uppercase mb-1">System Status</p>
        <p className="text-slate-300">
          <span className="text-slate-500">Source:</span> {fileName || "Simulation"}
        </p>
        <p className="text-slate-300">
          <span className="text-slate-500">Points:</span> {pointsCount?.toLocaleString() || 0}
        </p>
        <p className="text-slate-300">
          <span className="text-slate-500">Render:</span> WebGL (BufferGeometry)
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-500">GPU Acceleration Active</span>
        </div>
      </div>
    </div>
  );
};