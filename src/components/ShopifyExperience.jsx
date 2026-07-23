import { ShoppingBag, Smartphone, TrendingUp, Target, Layers, Globe } from 'lucide-react';
import WorkspaceModule from './WorkspaceModule';

const FOCUS_AREAS = [
  { icon: <ShoppingBag size={18} />, label: 'Shopify Storefronts' },
  { icon: <Globe size={18} />, label: 'Ecommerce UX' },
  { icon: <TrendingUp size={18} />, label: 'CRO' },
  { icon: <Target size={18} />, label: 'Landing Pages' },
  { icon: <Globe size={18} />, label: 'Product Pages' },
  { icon: <Layers size={18} />, label: 'Collection Pages' },
  { icon: <Smartphone size={18} />, label: 'Mobile Shopping' },
  { icon: <ShoppingBag size={18} />, label: 'Checkout UX' },
  { icon: <Layers size={18} />, label: 'Design Systems' },
];

export default function ShopifyExperience() {
  return (
    <WorkspaceModule
      id="shopify"
      index={2}
      title="Shopify & Ecommerce"
      subtitle="Converting browsers into buyers through high-trust UX and CRO."
      layout="wide"
    >
      <div className="shopify-exp">
        {/* Short punchy copy - 1 sentence as requested */}
        <div className="shopify-exp__copy">
          <p className="shopify-exp__lead">
            I've designed Shopify storefronts, landing pages, product pages, and ecommerce experiences focused on improving customer journeys and conversion.
          </p>
        </div>

        {/* Focus areas - clean pills */}
        <div className="shopify-exp__focus-grid">
          {FOCUS_AREAS.map(({ icon, label }) => (
            <div key={label} className="shopify-exp__focus-pill">
              <span className="shopify-exp__focus-icon">{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Visual strip: actual Shopify project images */}
        <div className="shopify-exp__image-strip">
          {[
            { src: '/images/Maxmall Hero.png', label: 'Maxmall Storefront' },
            { src: '/images/Hub360 2.png', label: 'Hub360 Multi-vendor' },
            { src: '/images/velvet vine bakery.png', label: 'Velvet Vine Bakery' },
            { src: '/images/Maxmall 3.png', label: 'Product Page UX' },
            { src: '/images/Hub360 3.png', label: 'Collection Page' },
            { src: '/images/Maxmall 5.png', label: 'Mobile Checkout' },
          ].map(({ src, label }) => (
            <div key={label} className="shopify-exp__image-item">
              <img src={src} alt={label} className="shopify-exp__image" />
              <span className="shopify-exp__image-caption">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </WorkspaceModule>
  );
}
