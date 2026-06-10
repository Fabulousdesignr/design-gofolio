/**
 * Product / workspace preview frame: browser-like chrome, no blur.
 */
export default function ProductFrame({
  src,
  alt,
  label = 'Preview',
  focused = false,
  className = '',
  fallback = '',
}) {
  const isVideo = src && src.toLowerCase().endsWith('.mp4');
  return (
    <div
      className={`product-frame ${focused ? 'product-frame--focus' : ''} ${className}`.trim()}
    >
      <div className="product-frame-chrome" aria-hidden="true">
        <div className="product-frame-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="product-frame-label font-mono">{label}</span>
      </div>
      <div className="product-frame-viewport">
        {src ? (
          isVideo ? (
            <video
              src={src}
              poster={fallback}
              className="product-frame-img"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img src={src} alt={alt || label} className="product-frame-img" loading="lazy" />
          )
        ) : (
          <div className="product-frame-placeholder">Preview</div>
        )}
      </div>
    </div>
  );
}
