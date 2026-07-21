import { Mail, MessageCircle } from 'lucide-react';
import WorkspaceModule from './WorkspaceModule';

export default function CTA() {
  return (
    <WorkspaceModule
      id="contact"
      index={5}
      title="Contact"
      subtitle="If you're looking for a designer, let's talk."
      layout="compact"
    >
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-10 leading-snug">
          Open to roles, freelance work, and collaborations. Let's build something good.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href="https://wa.me/2349157826355?text=Hi%20Godwin%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="workspace-btn inline-flex items-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a
            href="mailto:fabianokechukwu6@gmail.com?subject=Portfolio%20Inquiry"
            className="workspace-btn inline-flex items-center gap-2"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </WorkspaceModule>
  );
}
