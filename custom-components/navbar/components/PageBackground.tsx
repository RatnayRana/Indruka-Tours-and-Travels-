export function PageBackground() {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-18px); }
        }
        @keyframes floatYSlow {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-12px); }
        }
        @keyframes floatYReverse {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(14px); }
        }
        @keyframes blobMorph {
          0%, 100% { border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%; transform: scale(1)   rotate(0deg);   }
          33%       { border-radius: 45% 55% 40% 60% / 60% 40% 55% 45%; transform: scale(1.05) rotate(6deg);  }
          66%       { border-radius: 55% 45% 60% 40% / 45% 55% 50% 55%; transform: scale(0.97) rotate(-4deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes flipFlop {
          0%,  100% { transform: rotate(12deg)  translateY(0px);  }
          25%        { transform: rotate(22deg)  translateY(-8px); }
          50%        { transform: rotate(5deg)   translateY(-4px); }
          75%        { transform: rotate(18deg)  translateY(-10px);}
        }
       
      `}</style>

      {/* Animated gradient background */}
      <div
         className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #f5e6c8 0%, #e8d5a3 20%, #7ec8c8 50%, #3a9aa8 70%, #1a6b7a 100%)",
        }}
      />

      {/* Coral blob — top-left, morphing + floating */}
      <div
        className="absolute top-0 left-0 w-48 h-48 z-0 opacity-80 pointer-events-none"
        style={{ animation: "floatY 6s ease-in-out infinite" }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, #e07040 0%, #c85020 60%, transparent 100%)",
            animation: "blobMorph 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Orange ball — top-right, bouncing */}
      <div
        className="absolute top-4 right-24 w-16 h-16 z-0 pointer-events-none"
        style={{ animation: "floatYReverse 4s ease-in-out infinite" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "#f5a623",
            animation: "pulseFade 4s ease-in-out infinite",
            boxShadow: "0 8px 24px rgba(245,166,35,0.35)",
          }}
        />
      </div>

      {/* Gold ring — bottom-right, spinning + floating */}
      <div
        className="absolute bottom-16 right-8 w-24 h-24 z-0 opacity-70 pointer-events-none"
        style={{ animation: "floatYSlow 5s ease-in-out infinite 1s" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, #f5c842 0%, #e8a800 100%)",
            animation: "spinSlow 12s linear infinite",
            boxShadow: "0 0 0 6px rgba(245,200,66,0.25), 0 0 0 12px rgba(245,200,66,0.1)",
          }}
        />
      </div>

      {/* Flip-flop emoji — swinging */}
      <div
        className="absolute top-8 right-6 text-4xl z-0 pointer-events-none select-none"
        style={{
          transformOrigin: "top center",
          animation: "flipFlop 3s ease-in-out infinite",
        }}
      >
        🩴
      </div>
    </>
  );
}