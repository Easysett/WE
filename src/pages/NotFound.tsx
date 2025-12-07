import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Large Background 404 - Fully Responsive */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 
          className="font-bold text-gray-200 leading-none"
          style={{ fontSize: 'clamp(8rem, 35vw, 40rem)' }}
        >
          404
        </h1>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-md">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 px-4">
          Page Not Found
        </h2>
        
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#B0A78E] hover:bg-[#9a9179] text-white px-6 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-3.5 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg mt-6 w-full sm:w-auto max-w-xs"
        >
          Go to Home
          <ArrowLeft size={18} className="rotate-180 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;