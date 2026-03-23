"use client";

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group" onClick={closeMobileMenu}>
            <img src="/assets/logo.svg" alt="Storge Care Logo" className="w-10 h-10 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-storge-dark tracking-tighter uppercase">Storge Care</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
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
              <Link
                href="#sobre"
                className="inline-flex items-center justify-center bg-storge-primary hover:bg-storge-primary/90 text-white rounded-full px-6 h-10 text-sm font-medium shadow-lg shadow-storge-primary/20"
              >
                Agendar atendimento
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((state) => !state)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-storge-dark" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-5 border-t border-gray-100 mt-2">
            <div className="flex flex-col gap-4 pt-4">
              <Link href="#sobre" className="text-sm font-medium text-storge-dark/80 hover:text-storge-primary transition-colors" onClick={closeMobileMenu}>
                Sobre Nós
              </Link>
              <Link href="#servicos" className="text-sm font-medium text-storge-dark/80 hover:text-storge-primary transition-colors" onClick={closeMobileMenu}>
                Nossos Serviços
              </Link>
              <Link href="#parceria" className="text-sm font-medium text-storge-dark/80 hover:text-storge-primary transition-colors" onClick={closeMobileMenu}>
                Quero fazer parte
              </Link>
              <a href="tel:+5591993726000" className="flex items-center gap-2 text-sm font-bold text-storge-dark" onClick={closeMobileMenu}>
                <Phone size={16} className="text-storge-primary" />
                +55 91 99372-6000
              </a>
              <Link
                href="#sobre"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center bg-storge-primary hover:bg-storge-primary/90 text-white rounded-full px-6 h-10 text-sm font-medium shadow-lg shadow-storge-primary/20 w-full"
              >
                Agendar atendimento
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
