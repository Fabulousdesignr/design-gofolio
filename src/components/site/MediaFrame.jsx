import { useState } from 'react';

export default function MediaFrame({
  src,
  alt,
  video,
  poster,
  className = '',
  imgClassName = '',
  priority = false,
  caption,
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={className}>
      <div className="media-frame media-zoom relative h-full w-full bg-bg-alt">
        {video ? (
          <video
            src={video}
            poster={poster || src}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className={`h-full w-full object-cover ${imgClassName}`}
            aria-label={alt}
          />
        ) : failed ? (
          <div className="flex h-full min-h-[220px] w-full items-center justify-center bg-bg-alt px-6 text-center text-xs text-text-tertiary">
            Preview unavailable
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : loading}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : undefined}
            onError={() => setFailed(true)}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
