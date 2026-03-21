import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-storge-primary rounded-sm flex items-center justify-center relative">
                <div className="w-4 h-1 bg-white absolute"></div>
                <div className="w-1 h-4 bg-white absolute"></div>
            </div>
            <span className="text-xl font-bold text-storge-dark tracking-tighter">StorgeCare</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#sobre" className="text-sm font-medium text-storge-dark/80 hover:text-storge-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="#servicos" className="text-sm font-medium text-storge-dark/80 hover:text-storge-primary transition-colors">
              Nossos Serviços
            </Link>
            <Link href="#parceria" className="text-sm font-medium text-storge-dark/80 hover:text-storge-primary transition-colors">
              Quero fazer parte
            </Link>
            
            <div className="flex items-center gap-4 ml-4">
              <a href="tel:+5591993726000" className="flex items-center gap-2 text-sm font-bold text-storge-dark">
                <Phone size={16} className="text-storge-primary" />
                +55 91 99372-6000
              </a>
              <Button className="bg-storge-primary hover:bg-storge-primary/90 text-white rounded-full px-6">
                Agendar atendimento
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-storge-dark" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
