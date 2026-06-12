import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContentCard({ title, description, tags, mediaUrl, actionText, actionUrl, secondaryActionText, secondaryActionUrl, actionStyle = 'button', actionDownload, secondaryActionDownload, reverse }) {
  const isVideo = mediaUrl?.endsWith('.mp4');

  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} bg-card border border-card-border rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 w-full group`}>
      
      {/* Media Side */}
      <div className="w-full md:w-[55%] h-[400px] md:h-auto md:min-h-[500px] bg-bg-primary relative overflow-hidden border-b md:border-b-0 border-card-border" style={{ borderRightWidth: !reverse ? '1px' : '0', borderLeftWidth: reverse ? '1px' : '0' }}>
        {isVideo ? (
          <video 
            src={mediaUrl} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" 
            autoPlay 
            muted 
            loop 
            playsInline 
          />
        ) : (
          <img 
            src={mediaUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]" 
          />
        )}
      </div>

      {/* Content Side */}
      <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-card relative">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-bg-primary text-text-secondary text-[11px] font-bold tracking-widest uppercase rounded-lg border border-card-border">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="font-serif text-[32px] md:text-[40px] leading-[1.1] text-text-primary mb-6 tracking-tight">{title}</h3>
        
        <p className="text-text-secondary text-[17px] leading-[1.65] mb-10">
          {description}
        </p>

        {(actionUrl || secondaryActionUrl) && (
          <div className="mt-auto pt-6 flex flex-wrap items-center gap-4">
            {actionUrl && (
              actionStyle === 'link' ? (
                (actionUrl.startsWith('/') && !actionUrl.toLowerCase().endsWith('.pdf')) ? (
                  <Link to={actionUrl} className="inline-flex items-center gap-2 text-text-primary text-[15px] font-semibold hover:text-accent-orange transition-colors group/btn w-max">
                    {actionText} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a href={actionUrl} target={actionDownload ? undefined : "_blank"} rel="noopener noreferrer" download={actionDownload ? "Godwin_Okechukwu_CV.pdf" : undefined} className="inline-flex items-center gap-2 text-text-primary text-[15px] font-semibold hover:text-accent-orange transition-colors group/btn w-max">
                    {actionText} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )
              ) : (
                (actionUrl.startsWith('/') && !actionUrl.toLowerCase().endsWith('.pdf')) ? (
                  <Link to={actionUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-card-border text-text-primary text-[14px] font-semibold hover:border-accent-orange hover:text-accent-orange transition-colors group/btn w-max bg-bg-primary">
                    {actionText || 'View case study'} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a href={actionUrl} target={actionDownload ? undefined : "_blank"} rel="noopener noreferrer" download={actionDownload ? "Godwin_Okechukwu_CV.pdf" : undefined} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-card-border text-text-primary text-[14px] font-semibold hover:border-accent-orange hover:text-accent-orange transition-colors group/btn w-max bg-bg-primary">
                    {actionText || 'Visit site'} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )
              )
            )}

            {secondaryActionUrl && (
              (secondaryActionUrl.startsWith('/') && !secondaryActionUrl.toLowerCase().endsWith('.pdf')) ? (
                <Link to={secondaryActionUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-transparent text-text-secondary hover:text-text-primary hover:border-card-border text-[14px] font-semibold transition-all group/sec w-max">
                  {secondaryActionText} <ArrowRight size={16} className="group-hover/sec:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <a href={secondaryActionUrl} target={secondaryActionDownload ? undefined : "_blank"} rel="noopener noreferrer" download={secondaryActionDownload ? "Godwin_Okechukwu_CV.pdf" : undefined} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-transparent text-text-secondary hover:text-text-primary hover:border-card-border text-[14px] font-semibold transition-all group/sec w-max">
                  {secondaryActionText} <ArrowRight size={16} className="group-hover/sec:translate-x-1 transition-transform" />
                </a>
              )
            )}
          </div>
        )}
      </div>

    </div>
  );
}
