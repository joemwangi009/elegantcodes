export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-500 mx-auto mb-4"></div>
        <p className="text-slate-600 font-inter">Loading ElegantCodes...</p>
      </div>
    </div>
  );
} 