import React from 'react';
import ProjectCardWrapper from './ProjectCardWrapper';

const alongProjects = [
  {
    id: 1,
    title: 'Strava Redesign : Cognitive Ergonomics',
    image: '/assets/along-strava.png',
    border: false,
  },
  {
    id: 2,
    title: 'Social Psychology of Intimate Clothing',
    image: '/assets/along-intimate-clothing.png',
    border: false,
  },
  {
    id: 3,
    title: 'Krea : Samsung Prism Hackathon',
    image: '/assets/along-krea.png',
    border: false,
  },
  {
    id: 4,
    title: 'Research Paper : AI & Emotional Connection',
    image: '/assets/along-ai-emotion.png',
    border: true, // Figma node 527:259 has border-[#acacac]
  },
  {
    id: 5,
    title: 'Information Visualization : Billboard Decoded',
    image: '/assets/along-billboard.png',
    border: false,
  },
  {
    id: 6,
    title: 'Travia : A Gamified Travel Experience',
    image: '/assets/along-travia.png',
    border: false,
  },
];

export default function AlongTheWay() {
  // Duplicate project array once so marquee loops 100% seamlessly from right to left
  const doubleProjects = [...alongProjects, ...alongProjects];

  return (
    <section className="w-full bg-white text-[#3e3d3d] relative py-0 flex flex-col items-center selection:bg-[#afcc0f] selection:text-black -mt-[140px]">
      
      {/* Outer Section Container */}
      <div className="w-full flex flex-col items-center relative pt-[68px] pb-[60px]">

        {/* Header Section Container (Centered horizontally as one group) */}
        <div className="w-full max-w-[1440px] pt-0 pb-[44px] flex flex-col items-center justify-center text-center gap-[6px] relative z-10 px-4 mx-auto">
          
          {/* Title Row: Icon + "Along the Way" Heading (Centered Group) */}
          <div className="flex items-center justify-center gap-[12px] relative z-10 flex-wrap">
            
            {/* Hand-drawn Icon (Figma Node 541:274 / image 145) */}
            <div className="w-[56px] h-[66px] md:w-[66px] md:h-[78px] relative shrink-0 flex items-center justify-center">
              <div className="w-full h-full rotate-[7.09deg] transform shrink-0">
                <img 
                  src="/assets/along-the-way-icon.png" 
                  alt="Along the Way Icon" 
                  className="w-full h-full object-contain pointer-events-none" 
                />
              </div>
            </div>

            {/* Main Heading (Figma Node 533:268 - 44px Bold Neue Montreal) */}
            <h2 className="font-neue font-bold text-[#3e3d3d] text-[36px] md:text-[44px] tracking-[-0.88px] leading-normal text-center select-none">
              Along the Way
            </h2>
          </div>

          {/* Subtitle Text (Figma Node 533:269 - 16px Gochi Hand) */}
          <p className="font-gochi text-[#636262] text-[16px] text-center leading-normal max-w-[429px] select-none mx-auto">
            Projects that did’nt make it to the main stage
          </p>

        </div>

        {/* Full-Width Continuous Horizontal Auto-Scrolling Carousel Track */}
        <div className="w-full overflow-hidden relative z-30 py-3 cursor-pointer bg-transparent">
          <div className="animate-marquee flex gap-[24px] items-center hover:[animation-play-state:paused] pointer-events-auto">
            {doubleProjects.map((project, index) => (
              <ProjectCardWrapper 
                key={`${project.id}-${index}`} 
                className="w-[372px] shrink-0 flex flex-col gap-[12px] items-start group relative z-30"
              >
                {/* Project Image Frame (Figma 372px x 209px, rounded-[20px]) */}
                <div className={`w-[372px] h-[209px] shrink-0 rounded-[20px] overflow-hidden bg-white ${project.border ? 'border border-[#acacac]' : ''} shadow-[0px_0.841px_3.363px_0px_rgba(0,0,0,0.12)] relative transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.008] group-hover:shadow-[0px_10px_24px_rgba(0,0,0,0.15)]`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] bg-white" 
                  />
                </div>

                {/* Project Title Label (Figma Node 527:244 / 18px Medium Neue Montreal) */}
                <h3 className="font-neue font-medium text-[#3e3d3d] text-[18px] leading-normal w-full bg-white group-hover:text-black transition-colors select-none">
                  {project.title}
                </h3>
              </ProjectCardWrapper>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
