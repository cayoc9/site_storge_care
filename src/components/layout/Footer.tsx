import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-storge-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/20 pb-12">
          
          {/* Brand Info */}
          <div className="max-w-xs space-y-6">
            <div className="flex items-center gap-2">
                <img src="/assets/logo.svg" alt="Storge Care Logo" className="w-10 h-10 brightness-0 invert" />
                <span className="text-xl font-bold tracking-tighter uppercase">Storge Care</span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
                Estamos comprometidos em fornecer atendimento de saúde de alta qualidade, 
                priorizando o seu conforto e o cuidado humanizado.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-white/60" />
              <p className="text-sm font-bold">Fone: +55 91 99372-6000</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-white/60" />
              <p className="text-sm">Belém - PA, Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/60">
            © 2025 Storge Care. Todos os direitos reservados.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                <img src="/assets/x.svg" alt="X (Twitter)" className="w-5 h-5 invert" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                <img src="/assets/facebook.svg" alt="Facebook" className="w-5 h-5 invert" />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
                <img src="/assets/instagram.svg" alt="Instagram" className="w-5 h-5 invert" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
