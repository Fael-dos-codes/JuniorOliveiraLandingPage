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
            <span className="font-sans font-bold text-base">WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>

          <a href="https://junior-oliveira.pages.dev/" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">Site</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
          </a>
          
          <a href="https://instagram.com/corretor.junioroliveira" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform text-accent"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>

          <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">Facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform text-accent"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">Twitter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform text-accent"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>

          <a href="https://t.me/junioroliveira" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">Telegram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform text-accent"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </a>

          <a href="https://tiktok.com/" target="_blank" rel="noreferrer" className="group relative w-full bg-dark/50 border border-white/5 text-text p-4 rounded-2xl flex items-center justify-between hover:border-accent/50 hover:bg-white/5 transition-all">
            <span className="font-sans font-medium text-base">TikTok</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform text-accent"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
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
