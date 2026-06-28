import React from 'react';
import { ArrowRight, Key, ArrowUpRight } from 'lucide-react';

export default function WebsiteHome() {
  return (
    <div className="relative w-full min-h-screen bg-background flex flex-col items-center justify-center py-12 px-6">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img src="/image11.jpeg" alt="Background" className="w-full h-full object-cover object-top opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center mt-10">
        
        {/* HEADER TEXT */}
        <div className="flex flex-col items-center mb-8 w-full mt-4">
           <h1 className="font-sans font-bold text-xl md:text-2xl text-text tracking-wider text-center mt-2">
             Júnior Oliveira Consultoria Imobiliária
           </h1>
        </div>



        {/* LINK BUTTONS */}
        <div className="w-full flex flex-col gap-4">
          <a href="https://wa.me/553496442250" target="_blank" rel="noreferrer" className="group relative w-full bg-accent text-background p-4 rounded-2xl flex items-center justify-between hover:scale-[1.02] transition-transform shadow-lg shadow-accent/20">
            <span className="font-sans font-bold text-base">Falar no WhatsApp</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a href="https://github.com/Fael-dos-codes/JuniorOliveiraSite" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">Conheça Meu Site</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
          </a>
          
          <a href="https://instagram.com/corretor.junioroliveira" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">Siga no Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform text-accent"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>

      </div>

      {/* FOOTER */}
      <div className="relative z-10 mt-16 text-center font-sans text-text/50 text-xs space-y-2">
        <div className="pt-4 border-t border-white/5 text-text/30">
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
      
    </div>
  );
}
