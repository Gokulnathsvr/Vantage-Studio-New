import React, { useRef, useEffect, useState } from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Identity Systems",
    description: "Architecting the DNA of future brands.",
    tags: ["Strategy", "Visual", "Voice"]
  },
  {
    title: "Digital Ecosystems",
    description: "Immersive environments that defy gravity.",
    tags: ["Interface", "Experience", "Scale"]
  },
  {
    title: "Kinetic Dimensions",
    description: "Motion that commands attention in a noisy world.",
    tags: ["WebGL", "3D", "Animation"]
  },
  {
    title: "Art Direction",
    description: "Visual storytelling with uncompromising aesthetic.",
    tags: ["Campaign", "Editorial", "Film"]
  }
];

const serviceImages = [
  "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Identity (Neon Abstract)
  "https://images.unsplash.com/photo-1649932203796-86c56fdc238c?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Digital (Tech/Structure)
  "https://plus.unsplash.com/premium_photo-1683133942573-00d6943e7136?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Kinetic (3D Fluid)
  "https://images.unsplash.com/photo-1674507888179-92b9c4361216?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Art Direction (Fashion Portrait)
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = height - windowHeight;
      
      // Prevent division by zero
      if (totalDist <= 0) return;

      let progress = -top / totalDist;
      progress = Math.max(0, Math.min(progress, 1));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Configuration for the hallway
  const zDistancePerCard = 1200; // Distance between artworks
  const totalZTravel = zDistancePerCard * services.length;
  // We stop slightly before the end
  const currentZ = scrollProgress * (totalZTravel + 500); 

  return (
    <section id="services" ref={containerRef} className="relative h-[500vh] bg-black text-white border-t border-white/10">
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}>
        
        {/* World Container - Moving forward based on scroll */}
        <div 
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(${currentZ}px)`,
            willChange: 'transform'
          }}
        >
          {/* --- Artworks --- */}
          {services.map((service, index) => {
            const zPos = -index * zDistancePerCard - 1000; 
            const isLeft = index % 2 === 0;
            
            // Positioning in the Scroll Path (Aisle)
            // Alternating slightly left (-350) and right (350) but facing forward
            const xOffset = isLeft ? -400 : 400;
            const rotateY = isLeft ? '15deg' : '-15deg'; // Subtle tilt towards center

            return (
              <div 
                key={index}
                className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `
                    translate3d(-50%, -50%, ${zPos}px) 
                    translateX(${xOffset}px) 
                    rotateY(${rotateY})
                  `
                }}
              >
                {/* Floating Frame */}
                <div className="relative group p-4 bg-[#111] border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-105">
                   {/* Artwork Container */}
                   <div className="relative w-[400px] h-[600px] md:w-[500px] md:h-[700px] overflow-hidden bg-gray-900">
                      {/* Placeholder background to avoid invisibility if image fails */}
                      <div className="absolute inset-0 bg-gray-800 animate-pulse"></div> 
                      <img 
                        src={serviceImages[index] || ""} 
                        alt={service.title}
                        className="relative w-full h-full object-cover z-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                        loading="eager"
                      />
                      {/* Inner Shadow */}
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none z-20"></div>
                   </div>
                   
                   {/* Frame Label - Museum Style */}
                   <div className="absolute -bottom-24 left-0 w-full text-left">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-xs font-bold tracking-widest text-white/40">0{index + 1}</span>
                        <div className="h-[1px] w-12 bg-white/20"></div>
                      </div>
                      <h3 className="text-5xl font-black uppercase text-white leading-none mb-2 tracking-tighter">{service.title}</h3>
                      <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        {service.tags.join(" + ")}
                      </p>
                   </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* HUD */}
        <div className="absolute top-12 left-12 z-50 pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white opacity-150">Capabilities</h1>
        </div>
        
        <div className="absolute bottom-12 right-12 z-50 pointer-events-none flex flex-col items-end">
           <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">Advance</p>
           <div className="w-1 h-12 bg-white/20 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce"></div>
           </div>
        </div>
        
        {/* Vignette Overlay (Dark for Dark Mode) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

      </div>
    </section>
  );
};

export default Services;