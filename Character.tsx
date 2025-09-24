import React, { useMemo } from 'react';

interface CharacterProps {
  scrollPercent: number;
}

const Character: React.FC<CharacterProps> = ({ scrollPercent }) => {
  const position = useMemo(() => {
    let x = 50, y = 80, scale = 1, rotation = 0;
    
    // Normalize scrollPercent to prevent extreme values
    const normPercent = Math.max(0, Math.min(1, scrollPercent));

    if (normPercent < 0.08) {
      // 1. Hero: Idle at bottom center
      x = 50; y = 80;
    } else if (normPercent < 0.20) {
      // 2. To About: Move up and left
      const phase = (normPercent - 0.08) / 0.12;
      x = 50 - 35 * phase;
      y = 80 - 45 * phase;
    } else if (normPercent < 0.32) {
      // 3. To Skills: Move down and right
      const phase = (normPercent - 0.20) / 0.12;
      x = 15 + 70 * phase;
      y = 35 + 25 * phase;
    } else if (normPercent < 0.44) {
      // 4. To Education: Move up and left
      const phase = (normPercent - 0.32) / 0.12;
      x = 85 - 70 * phase;
      y = 60 - 30 * phase;
      rotation = 360 * phase;
    } else if (normPercent < 0.56) {
      // 5. To Projects: Move right
      const phase = (normPercent - 0.44) / 0.12;
      x = 15 + 70 * phase;
      y = 30;
      scale = 1 + 0.5 * Math.sin(phase * Math.PI); // Pulsing
    } else if (normPercent < 0.68) {
      // 6. To Experience: Move down and left
      const phase = (normPercent - 0.56) / 0.12;
      x = 85 - 70 * phase;
      y = 30 + 35 * phase;
    } else if (normPercent < 0.80) {
      // 7. To Interests: Move right and slightly up
      const phase = (normPercent - 0.68) / 0.12;
      x = 15 + 70 * phase;
      y = 65 - 20 * phase;
      rotation = -360 * phase;
    } else {
      // 8. To Contact: Move to final position at bottom center
      const phase = (normPercent - 0.80) / 0.20;
      x = 85 - 35 * Math.min(1, phase);
      y = 45 + 35 * Math.min(1, phase);
      rotation = 0;
      scale = 1;
    }

    return {
      left: `${x}vw`,
      top: `${y}vh`,
      transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
    };
  }, [scrollPercent]);

  return (
    <div
      style={position}
      className="fixed z-50 w-16 h-16 transition-all duration-300 ease-out"
    >
      <div className="w-full h-full bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 flex items-center justify-center animate-pulse">
        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-amber-400 rounded-full animate-ping-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default Character;