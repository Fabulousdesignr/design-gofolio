import WorkspaceModule from './WorkspaceModule';
import ProductFrame from './ProductFrame';

const showcaseItems = [
  { id: 1, src: '/images/Hub360 2.png', label: 'Hub360 Analytics' },
  { id: 2, src: '/images/Ui 1.png', label: 'E-Commerce Catalog' },
  { id: 3, src: '/images/Ui 2.png', label: 'Mobile Banking Flow' },
  { id: 4, src: '/images/Ui 3.png', label: 'Retail Checkout' },
  { id: 5, src: '/images/Ui 4.png', label: 'App Onboarding' },
  { id: 6, src: '/images/Ui 5.png', label: 'SaaS Landing Page' },
  { id: 7, src: '/images/Ui 7.png', label: 'Dark Mode Dashboard' },
];

export default function HomeShowcase() {
  return (
    <WorkspaceModule
      id="showcase"
      index={3}
      title="Designed Across"
      subtitle="A collection of interfaces, landing pages, systems, and product explorations I designed across different industries."
    >
      {/* Ambient Marquee Container */}
      <div className="workspace-showcase-container overflow-hidden py-4 -mx-6 lg:mx-0 pause-on-hover marquee-mask">
        
        {/* The Track: Two identical sets to loop seamlessly */}
        <div className="flex w-max animate-marquee-slow">
          
          {/* First set */}
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
            {showcaseItems.map((item) => (
              <div 
                key={`set1-${item.id}`} 
                className="w-[75vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] max-w-[600px] flex-shrink-0 aspect-[16/10] group opacity-70 hover:opacity-100 transition-opacity duration-500"
              >
                <ProductFrame
                  src={item.src}
                  alt={item.label}
                  label={item.label}
                  className="w-full h-full showcase-ambient-frame"
                />
              </div>
            ))}
          </div>

          {/* Second set (duplicate for infinite loop) */}
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {showcaseItems.map((item) => (
              <div 
                key={`set2-${item.id}`} 
                className="w-[75vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] max-w-[600px] flex-shrink-0 aspect-[16/10] group opacity-70 hover:opacity-100 transition-opacity duration-500"
              >
                <ProductFrame
                  src={item.src}
                  alt={item.label}
                  label={item.label}
                  className="w-full h-full showcase-ambient-frame"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </WorkspaceModule>
  );
}
