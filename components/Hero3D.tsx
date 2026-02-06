import React, { useEffect, useRef, useState } from 'react';

const images = [
  "https://plus.unsplash.com/premium_photo-1681412205223-b897c2943b06?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Fashion/Portrait
  "https://images.unsplash.com/photo-1541359927273-d76820fc43f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Brutalist Architecture
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Abstract Fluid
  "https://plus.unsplash.com/premium_photo-1673285096704-f94a6712c243?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Dark Profile
  "https://images.unsplash.com/photo-1762571944746-de332cab1e57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Abstract 3D
  "https://images.unsplash.com/photo-1697301439926-f3eaef4d78d6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // High Fashion
  "https://images.unsplash.com/photo-1690023835939-ca6c03a5d3bc?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Computer/Tech
  "https://images.unsplash.com/photo-1548411947-f2cb989c26b9?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // B&W Portrait
];

const Hero3D: React.FC = () => {
  // Scroll Progress State
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Interaction State
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const reqRef = useRef<number>(0);
  const isInteracting = useRef(false);
  const autoRotateSpeed = 0.05;

  // Geometry
  const radius = 450;
  const theta = 360 / images.length;

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled through this section
      const scrollDistance = -top;
      const totalScrollableDistance = height - windowHeight;

      let progress = scrollDistance / totalScrollableDistance;
      progress = Math.max(0, Math.min(progress, 1));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Loop
  useEffect(() => {
    const animate = () => {
      if (!isInteracting.current && !isDragging) {
        setRotation(prev => prev - autoRotateSpeed);
      }
      reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, [isDragging]);

  // Input Handlers
  const handleStart = (clientX: number) => {
    isInteracting.current = true;
    setIsDragging(true);
    setStartX(clientX);
    setStartRotation(rotation);
  };

  const handleMove = (clientX: number, clientY: number) => {
    const windowH = window.innerHeight;
    const normalizedY = (clientY / windowH) - 0.5;
    setTilt(normalizedY * 20);

    if (isDragging) {
      const diff = clientX - startX;
      setRotation(startRotation + diff * 0.3);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    isInteracting.current = false;
  };

  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e.clientY);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => handleEnd();
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
  const onTouchEnd = () => handleEnd();

  // --- Animation Interpolation ---

  // The "Wall Break" happens from 0 to 0.4 progress
  const splitProgress = Math.min(1, scrollProgress * 2.5);
  const easedSplit = 1 - Math.pow(1 - splitProgress, 3); // Cubic ease out

  const topPanelY = -easedSplit * 100; // Moves up 100%
  const bottomPanelY = easedSplit * 100; // Moves down 100%

  // Carousel Reveal
  const carouselScale = 0.8 + (easedSplit * 0.2);
  const carouselOpacity = Math.min(1, splitProgress * 3);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Layer 1 (Back): The Interactive 3D Carousel Scene */}
        <div
          className="absolute inset-0 flex items-center justify-center perspective-[1000px] z-10"
          style={{
            transform: `scale(${carouselScale})`,
            opacity: carouselOpacity,
            willChange: 'transform, opacity'
          }}
        >
          {/* 3D Scene */}
          <div
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing z-20"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="scene-3d w-[300px] h-[450px] relative z-20 perspective-[1200px]">
              <div
                className="carousel-3d w-full h-full absolute top-0 left-0"
                style={{
                  transform: `rotateY(${rotation}deg) rotateX(${tilt}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: isDragging ? 'none' : 'transform 0.1s linear'
                }}
              >
                {images.map((src, index) => {
                  const cardRotation = theta * index;
                  const isActive = activeCard === index;

                  return (
                    <div
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCard(isActive ? null : index);
                      }}
                      className={`carousel-cell absolute w-[300px] h-[450px] bg-black shadow-2xl transition-all duration-300 origin-center select-none ${isActive ? 'z-50 border-4 border-yellow-500 scale-110' : 'brightness-75 hover:brightness-100'}`}
                      style={{
                        transform: `rotateY(${cardRotation}deg) translateZ(${radius}px)`,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    >
                      <img
                        src={src}
                        alt={`Inspiration ${index}`}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/10 pointer-events-none"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2 (Front): The Breaking Wall */}
        {/* Top Panel */}
        <div
          className="absolute top-0 left-0 w-full h-[50vh] bg-black z-30 flex flex-col justify-end items-center overflow-hidden pb-2"
          style={{
            transform: `translateY(${topPanelY}%)`,
            willChange: 'transform'
          }}
        >
          {/* Micro Labels Top */}
          <div className="absolute top-8 left-8 text-[10px] font-bold tracking-[0.2em] text-gray-500">OBSERVE</div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.2em] text-gray-500">REFLECT</div>
          <div className="absolute top-8 right-8 text-[10px] font-bold tracking-[0.2em] text-gray-500">CREATE</div>

          {/* Sized to fit VANTAGE - Reduced to 10vw for safety */}
          <h1 className="text-[10vw] xl:text-[9vw] leading-none font-black uppercase tracking-tighter text-center text-white w-full whitespace-nowrap select-none px-4">
            Visual
          </h1>
        </div>

        {/* Bottom Panel */}
        <div
          className="absolute bottom-0 left-0 w-full h-[50vh] bg-black z-30 flex flex-col justify-start items-center overflow-hidden pt-2"
          style={{
            transform: `translateY(${bottomPanelY}%)`,
            willChange: 'transform'
          }}
        >
          {/* Sized to fit VANTAGE - Reduced to 10vw for safety */}
          <h1 className="text-[10vw] xl:text-[9vw] leading-none font-black uppercase tracking-tighter text-center text-white w-full whitespace-nowrap select-none px-4">
            Vantage
          </h1>

          {/* Micro Labels Bottom */}
          <div className="absolute bottom-8 left-8 text-[10px] font-bold tracking-[0.2em] text-gray-500">OBSERVE</div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.2em] text-gray-500">REFLECT</div>
          <div className="absolute bottom-8 right-8 text-[10px] font-bold tracking-[0.2em] text-gray-500">CREATE</div>
        </div>

        {/* Center Logo/Icon for Transition */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-white pointer-events-none"
          style={{ opacity: 1 - splitProgress * 2 }}
        >
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero3D;