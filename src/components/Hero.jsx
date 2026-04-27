export default function Hero() {
  return (
    <header className="pt-40 pb-24 section-padding">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div className="flex flex-col items-start text-left px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-alt border border-card-border rounded-full text-xs sm:text-sm font-semibold mb-10">
            <div className="w-2 h-2 bg-emerald-500 rounded-full relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            </div>
            Available for new projects
          </div>
          
          <span className="block text-lg sm:text-xl font-semibold text-text-secondary mb-6">
            Hi, I'm Godwin O.
          </span>
          
          <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] font-black tracking-[-0.02em] leading-[1.15] mb-8 max-w-[15ch]">
            Designing products people actually use
          </h1>
          
          <p className="text-lg sm:text-2xl text-text-secondary mb-12 leading-relaxed max-w-2xl">
            I’m a Product Designer helping teams build clear, functional, and visually engaging digital products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#work" 
                className="flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-accent/20 w-full sm:w-auto"
              >
                View My Work
              </a>
              <a 
                href="/cv.pdf" 
                download
                className="flex items-center justify-center bg-bg-alt border border-card-border hover:border-text-primary text-text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Download CV
              </a>
            </div>
            <div className="text-sm text-text-secondary mt-2 sm:mt-0 px-1 sm:px-0">
              Based in GMT+1 <br />
              Working Worldwide
            </div>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-[450px] aspect-[4/5] bg-bg-alt rounded-[32px] border border-card-border relative overflow-hidden shadow-2xl">
            <img src="/images/My Image.jpeg" alt="Godwin" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
