const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200/50 p-12 relative overflow-hidden">
      {/* Decorative Background Mesh Glows */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-slate-500/10 rounded-full blur-[128px]" />
      
      <div className="max-w-md text-center z-10">
        {/* Pattern Grid - Kept exactly the same as your request */}
        <div className="grid grid-cols-3 gap-5 mb-12">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl transition-all duration-500 backdrop-blur-xl
                ${i % 2 === 0  
                  ? "bg-indigo-500/40 border-t border-l border-white/30 shadow-2xl shadow-indigo-500/20" 
                  : "bg-slate-400/10 border border-white/5"
                }
                hover:scale-110 hover:rotate-3 cursor-default
              `}
              style={{
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* --- REFINED TEXT STYLING --- */}
        
        {/* Title: Changed to font-black for more presence, added tight tracking, and a smoother vertical gradient */}
        <h2 className="text-4xl font-black tracking-tighter mb-4 leading-tight">
          <span className="bg-gradient-to-b from-base-content via-base-content to-base-content/40 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        {/* Improved Accent: A shorter, more intentional line helps the eye transition to the subtitle */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-10 bg-indigo-500/50 rounded-full" />
        </div>

        {/* Subtitle: Switched to font-normal + tracking-wide. This creates the "Design Studio" look */}
        <p className="text-base-content/70 text-lg font-normal tracking-wide leading-relaxed max-w-[320px] mx-auto">
          {subtitle}
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </div>
  );
};

export default AuthImagePattern;