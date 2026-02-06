
// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';

// const projects = [
//   { 
//     id: 1, 
//     title: "Digital Synthesis", 
//     category: "3D Art Direction", 
//     year: "2024", 
//     image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", // Purple Abstract
//     gridClass: "md:col-span-5",
//     aspect: "aspect-[4/5]"
//   },
//   { 
//     id: 2, 
//     title: "Future Mobility", 
//     category: "Automotive CGI", 
//     year: "2024", 
//     image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop", // White Sports Car
//     gridClass: "md:col-span-7 md:mt-32", // Staggered down
//     aspect: "aspect-[16/9]"
//   },
//   { 
//     id: 3, 
//     title: "Fluid Dynamics", 
//     category: "Motion Design", 
//     year: "2023", 
//     image: "https://images.unsplash.com/photo-1504609773096-104ff10587bd?q=80&w=1000&auto=format&fit=crop", // Ink/Smoke
//     gridClass: "md:col-span-4",
//     aspect: "aspect-[4/3]"
//   },
//   { 
//     id: 4, 
//     title: "Deep Space", 
//     category: "Visual Effects", 
//     year: "2023", 
//     image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1000&auto=format&fit=crop", // Starry Sky
//     gridClass: "md:col-span-4 md:mt-16", // Slight offset
//     aspect: "aspect-[4/3]"
//   },
//   { 
//     id: 5, 
//     title: "Portrait Study", 
//     category: "Photography", 
//     year: "2023", 
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // Portrait
//     gridClass: "md:col-span-4",
//     aspect: "aspect-[4/3]"
//   },
// ];

// interface ProjectCardProps {
//   project: typeof projects[0];
//   className?: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => (
//   <div className={`group relative block w-full ${className} ${project.gridClass}`}>
//     <div className={`relative overflow-hidden bg-gray-900 border border-white/10 w-full mb-6 ${project.aspect}`}>
//       <img 
//         src={project.image} 
//         alt={project.title} 
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
//       />
//       {/* Overlay gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//     </div>
    
//     <div className="flex flex-col border-t border-white/20 pt-4 group-hover:border-yellow-500 transition-colors duration-300">
//       <div className="flex justify-between items-baseline mb-1">
//         <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight group-hover:text-yellow-500 transition-colors">
//           {project.title}
//         </h3>
//         <span className="text-xs font-mono text-gray-500">0{project.id}</span>
//       </div>
//       <div className="flex justify-between items-center">
//         <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
//           {project.category}
//         </span>
//         <span className="text-xs font-mono text-gray-600">{project.year}</span>
//       </div>
//     </div>
//   </div>
// );

// const WorkGallery: React.FC = () => {
//   return (
//     <section id="work" className="bg-black text-white py-32 px-6 overflow-hidden">
//       <div className="container mx-auto">
        
//         {/* Header Block */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-t border-white/20 pt-8 relative">
//            {/* Decorative Label */}
//            <div className="absolute top-0 left-0 -translate-y-1/2 bg-black pr-4 flex items-center gap-2">
//               <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//               <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">01 — Selected Works</span>
//            </div>

//            <div className="w-full md:w-2/3">
//              <h2 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter text-white">
//                Featured<br/>Projects
//              </h2>
//            </div>

//            <div className="w-full md:w-1/3 flex flex-col items-end mt-8 md:mt-0 text-right">
//              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest leading-relaxed max-w-xs mb-8">
//                A curation of avant-garde visual explorations,<br/>
//                redefining the digital landscape through light, form, and code.
//              </p>
//              <a href="#all-work" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-yellow-500 transition-colors">
//                 <span className="border-b border-white/30 group-hover:border-yellow-500 pb-1 transition-colors">View All Case Studies</span>
//                 <ArrowUpRight size={14} />
//              </a>
//            </div>
//         </div>

//         {/* Asymmetric Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
//            {projects.map((project) => (
//              <ProjectCard 
//                key={project.id} 
//                project={project} 
//              />
//            ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WorkGallery;

import React, { useEffect, useRef, useState } from 'react';

const images = {
  col1: [
    "https://images.unsplash.com/photo-1587303876752-91efb6315dcc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // B&W Fashion
    "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Astronaut
    //"https://images.unsplash.com/photo-1731479345195-106e6b0acfb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dark Texture
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Neon
  ],
  col2: [
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 3D Shape
    "https://plus.unsplash.com/premium_photo-1673285096761-79e49ff5b760?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ocean Waves
    //"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Floating Rock
    "https://images.unsplash.com/photo-1731479345195-106e6b0acfb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Light
  ],
  col3: [
    "https://images.unsplash.com/photo-1587303876752-91efb6315dcc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Green Car
    "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Red Arches
    "https://images.unsplash.com/photo-1651122555286-ffab5a04131a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Blue Chair
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Portrait
  ],
  col4: [
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ", // Silhouette
    "https://images.unsplash.com/photo-1497515098781-e965764ab601?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // White Figure
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Colorful Cyberpunk
    "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // People
    "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
};

const ParallaxGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate offset relative to viewport center
        const scrollCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        setOffset(elementCenter - scrollCenter);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="bg-black relative z-20 pt-32 pb-32">
      
      {/* Section Header - UX Principle: Hierarchy & Grouping */}
      {/* High Z-index ensures text stays on top, solid background prevents bleed */}
      <div className="container mx-auto px-6 md:px-12 mb-20 relative z-50">
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 bg-black">
              <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                     <span className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase">01 — Selected Works</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                    Featured<br/>Projects
                  </h2>
              </div>
              <p className="text-zinc-400 max-w-sm text-left md:text-right mt-8 md:mt-0 font-light text-sm md:text-base leading-relaxed">
                  A curation of avant-garde visual explorations, redefining the digital landscape through light, form, and code.
              </p>
          </div>
      </div>

      {/* Gallery Container - UX Principle: Containment */}
      {/* overflow-hidden creates a strict viewport, preventing images from floating up into the header */}
      <div className="relative w-full overflow-hidden py-12">
          
          {/* Top Fade Mask */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/90 to-transparent z-40 pointer-events-none"></div>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 bg-radial-gradient from-transparent via-black/10 to-black/80"></div>

          {/* Tilted Grid Container */}
          {/* Increased top margin to ensure grid starts well below the header area */}
          <div 
            className="w-[120%] -ml-[10%] grid grid-cols-4 gap-4 md:gap-6 transform-gpu opacity-90"
            style={{ 
                transform: `perspective(1000px) rotateZ(-3deg) rotateY(4deg) rotateX(2deg) scale(1.1)` 
            }}
          >
            
            {/* Column 1 - Fast Up - Starts lower (mt-24) to avoid overlap */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-24" 
                style={{ transform: `translateY(${offset * -0.1}px)` }}
            >
                {images.col1.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

            {/* Column 2 - Slow Down - Added substantial margin to stagger */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-64" 
                style={{ transform: `translateY(${offset * 0.05}px)` }}
            >
                {images.col2.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

            {/* Column 3 - Fast Up - Starts lower */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-48" 
                style={{ transform: `translateY(${offset * -0.08}px)` }}
            >
                {images.col3.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

            {/* Column 4 - Slow Down - Starts very low */}
            <div 
                className="flex flex-col gap-4 md:gap-6 will-change-transform mt-96" 
                style={{ transform: `translateY(${offset * 0.06}px)` }}
            >
                {images.col4.map((src, i) => (
                    <div key={i} className="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img 
                            src={src} 
                            alt="Visual" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-out" 
                        />
                    </div>
                ))}
            </div>

          </div>

          {/* Bottom Fade Mask */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"></div>

      </div>
    </div>
  );
};

export default ParallaxGallery;
