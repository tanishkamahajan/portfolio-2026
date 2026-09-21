import React from 'react';
import ProjectCardWrapper from './ProjectCardWrapper';
import ScrollReveal from './ScrollReveal';

const alongProjects = [
  {
    id: 1,
    title: 'Eva : Samsung Hackathon',
    image: '/assets/along-eva.png',
    border: false,
    link: 'https://www.behance.net/gallery/244027267/Eva-Agentic-AI-Companion-Design-%28Samsung-Hackathon%29',
  },
  {
    id: 2,
    title: 'Social Psychology of Intimate Clothing',
    image: '/assets/along-intimate-clothing.png',
    border: false,
    link: 'https://www.behance.net/gallery/244590121/The-Social-Psychology-of-Intimate-Clothing',
  },
  {
    id: 3,
    title: 'Krea : Samsung Prism Hackathon',
    image: '/assets/along-krea.png',
    border: false,
    link: 'https://www.figma.com/proto/yYXQyh7b7q5xTICyIr88a3/KREA?node-id=1073-667&viewport=197%2C8%2C0.25&t=iEvAk1o5dRbCxq95-1&scaling=scale-down-width&content-scaling=fixed&page-id=1073%3A663',
  },
  {
    id: 4,
    title: 'Research Paper : AI & Emotional Connection',
    image: '/assets/along-ai-emotion.png',
    border: true, // Figma node 527:259 has border-[#acacac]
    pdf: '/Projects/Research Paper/AI and Emotional connection.pdf',
  },
  {
    id: 5,
    title: 'Information Visualization : Billboard Decoded',
    image: '/assets/along-billboard.png',
    border: false,
    link: 'https://drive.google.com/file/d/1WwJkiVk9lwl07cfe4WrAuaC-ozQK08eu/view?usp=sharing',
  },
  {
    id: 6,
    title: 'Travia : A Gamified Travel Experience',
    image: '/assets/along-travia.png',
    border: false,
    link: 'https://www.behance.net/gallery/244067043/Travia-A-Gamified-Travel-Companion-App',
  },
];

export default function AlongTheWay() {
  // Duplicate project array once so marquee loops 100% seamlessly from right to left
  const doubleProjects = [...alongProjects, ...alongProjects];

  return (
    <section className="w-full max-w-full overflow-x-clip bg-transparent text-[#3e3d3d] relative z-20 py-0 flex flex-col items-center selection:bg-[#afcc0f] selection:text-black mt-0 md:mt-0 xl:-mt-[140px]">
      
      {/* Outer Section Container */}
      <div className="w-full max-w-full overflow-x-clip flex flex-col items-center relative pt-[40px] pb-[40px] md:pt-[68px] md:pb-[60px]">

        {/* Header Section Container (Centered horizontally as one group) */}
        <ScrollReveal y={25} duration={0.6} className="w-full max-w-[1440px] pt-0 pb-6 md:pb-[44px] flex flex-col items-center justify-center text-center gap-[6px] relative z-10 px-4 mx-auto">
          
          {/* Title Row: Icon + "Along the Way" Heading (Centered Group) */}
          <div className="flex items-center justify-center gap-2.5 md:gap-[12px] relative z-10 flex-nowrap">
            
            {/* Hand-drawn Icon (Figma Node 541:274 / image 145) */}
            <div className="w-[44px] h-[52px] md:w-[clamp(52px,5.5vw,66px)] md:h-[clamp(62px,6.5vw,78px)] xl:w-[66px] xl:h-[78px] relative shrink-0 flex items-center justify-center">
              <div className="w-full h-full rotate-[7.09deg] transform shrink-0">
                <img 
                  src="/assets/along-the-way-icon.png" 
                  alt="Along the Way Icon" 
                  className="w-full h-full object-contain pointer-events-none" 
                />
              </div>
            </div>

            {/* Main Heading (Figma Node 533:268 - 44px Bold Neue Montreal) */}
            <h2 className="font-neue font-bold text-[#3e3d3d] text-[28px] sm:text-[34px] md:text-[clamp(34px,3.8vw,44px)] xl:text-[44px] tracking-[-0.6px] md:tracking-[-0.88px] leading-normal text-center select-none whitespace-nowrap">
              Along the Way
            </h2>
          </div>

          {/* Subtitle Text (Figma Node 533:269 - 16px Gochi Hand) */}
          <p className="font-gochi text-[#636262] text-[14px] sm:text-[16px] text-center leading-normal max-w-[429px] select-none mx-auto">
            Projects that didn’t make it to the main stage
          </p>

        </ScrollReveal>

        {/* Full-Width Continuous Horizontal Auto-Scrolling Carousel Track */}
        <ScrollReveal y={30} duration={0.7} delay={0.12} className="w-full max-w-full overflow-hidden relative z-30 py-3 cursor-pointer bg-transparent">
          <div className="animate-marquee flex flex-nowrap gap-4 md:gap-[clamp(16px,2vw,24px)] xl:gap-[24px] items-center hover:[animation-play-state:paused] pointer-events-auto">
            {doubleProjects.map((project, index) => (
              <ProjectCardWrapper 
                key={`${project.id}-${index}`} 
                link={project.link}
                pdf={project.pdf}
                className="w-[260px] sm:w-[290px] md:w-[clamp(290px,calc(290px+(100vw-768px)*0.16),372px)] xl:w-[372px] shrink-0 flex flex-col gap-2 md:gap-[12px] items-start group relative z-30"
              >
                {/* Project Image Frame (Figma 372px x 209px, exact 372:209 aspect ratio preserved) */}
                <div className={`w-full aspect-[372/209] shrink-0 rounded-[16px] md:rounded-[20px] overflow-hidden bg-white ${project.border ? 'border border-[#acacac]' : ''} shadow-[0px_0.841px_3.363px_0px_rgba(0,0,0,0.12)] relative transform transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.008] group-hover:shadow-[0px_10px_24px_rgba(0,0,0,0.15)]`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] bg-white" 
                  />
                </div>

                {/* Project Title Label (Figma Node 527:244 / 18px Medium Neue Montreal) */}
                <h3 className="font-neue font-medium text-[#3e3d3d] text-[14px] sm:text-[15px] md:text-[clamp(15px,1.5vw,18px)] xl:text-[18px] leading-snug md:leading-normal w-full bg-white group-hover:text-black transition-colors select-none">
                  {project.title}
                </h3>
              </ProjectCardWrapper>
            ))}
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}
