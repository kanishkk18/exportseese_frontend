import React from 'react';
import SchemeCircle from './schemeCircle';

const SchemeGrid = () => {
  const schemes = [
    { title: 'SEIS', subtitle: 'Scheme', color: '#0056b3' },
    { title: 'EPCG', subtitle: 'Scheme', color: '#2563eb' },
    { title: 'Advance', subtitle: 'License', color: '#3b82f6' },
    { title: 'RoDTEP', subtitle: 'Scheme', color: '#1e40af' },
    { title: 'RoSCTL', subtitle: 'Scheme', color: '#0369a1' },
    { title: 'MEIS', subtitle: 'Scheme', color: '#0284c7' },
    { title: 'DFIA', subtitle: 'Scheme', color: '#0ea5e9' },
    { title: 'EOU', subtitle: 'Scheme', color: '#0891b2' },
    { title: 'SEZ', subtitle: 'Scheme', color: '#0e7490' },
    { title: 'FTP', subtitle: 'Policy', color: '#155e75' },
    { title: 'MSME', subtitle: 'Scheme', color: '#075985' },
    { title: 'DGFT', subtitle: 'Services', color: '#0c4a6e' },
   
  ];
  
  // Generate light blue circles for decoration
  const decorativeCircles = Array(24).fill(null);

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full grid grid-cols-6 gap-3 p-4 pointer-events-none">
        {decorativeCircles.map((_, index) => (
          <div key={`dec-top-${index}`} className="aspect-square rounded-full bg-blue-400 dark:bg-blue-500 opacity-10"></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:hidden gap-3">
          {schemes.map((scheme, index) => (
            <div key={index} className="aspect-square">
              <SchemeCircle 
                title={scheme.title} 
                subtitle={scheme.subtitle} 
                color={scheme.color} 
              />
            </div>
          ))}
        </div>
        
        {/* Desktop flex layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {schemes.map((scheme, index) => (
            <div key={index} className="w-[130px] h-[130px]">
              <SchemeCircle 
                title={scheme.title} 
                subtitle={scheme.subtitle} 
                color={scheme.color} 
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-full h-full grid grid-cols-6 gap-3 p-4 pointer-events-none">
        {decorativeCircles.map((_, index) => (
          <div key={`dec-bottom-${index}`} className="aspect-square rounded-full bg-blue-400 dark:bg-transparent opacity-10"></div>
        ))}
      </div>
    </div>
  );
};

export default SchemeGrid;
