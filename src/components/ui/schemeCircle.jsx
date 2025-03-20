import React from 'react';

const SchemeCircle = ({ title, subtitle, color = 'blue' }) => {
  return (
    <div 
      className={`rounded-full flex flex-col items-center justify-center text-white p-3 w-full h-full aspect-square 
                 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer
                 shadow-md dark:shadow-blue-500/20`}
      style={{ 
        backgroundColor: color,
        backgroundImage: `radial-gradient(circle at 30% 20%, ${color}CC, ${color})` 
      }}
    >
      <div className="font-bold text-sm md:text-base lg:text-lg">{title}</div>
      {subtitle && <div className="text-xs md:text-sm opacity-90">{subtitle}</div>}
    </div>
  );
};

export default SchemeCircle;
