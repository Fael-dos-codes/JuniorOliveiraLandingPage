import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Key, Search, Compass, Target, ShieldCheck, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Animations
      gsap.fromTo(
        '.hero-text',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(
        '.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
      );

      // 2. Navbar Transformation
      ScrollTrigger.create({
        trigger: '.hero-section',
        start: 'bottom top',
        onEnter: () => gsap.to('.navbar-island', { backgroundColor: 'rgba(13, 13, 18, 0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(250, 248, 245, 0.1)', duration: 0.4 }),
        onLeaveBack: () => gsap.to('.navbar-island', { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', border: '1px solid rgba(250, 248, 245, 0)', duration: 0.4 })
      });

      // 3. Features Stagger
      gsap.fromTo(
        '.feature-card',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 70%'
          }
        }
      );

      // 4. Philosophy Text Split
      gsap.fromTo(
        '.philosophy-line',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 60%'
          }
        }
      );

      const cards = gsap.utils.toArray('.protocol-card');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.3, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.protocol-section',
            start: 'top 60%'
          }
        }
      );
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-background text-text">
      {/* NAVBAR */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="navbar-island flex items-center justify-between px-4 md:px-6 py-3 rounded-[3rem] w-full max-w-4xl transition-all duration-300">
          <div className="flex items-center gap-2">
            <img src="/image-removebg-preview.png" alt="Júnior Oliveira Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm text-text/80">
            <a href="#solucoes" className="hover:text-accent hover:-translate-y-[1px] transition-all">Soluções</a>
            <a href="#sobre" className="hover:text-accent hover:-translate-y-[1px] transition-all">Sobre</a>
            <a href="#estrategia" className="hover:text-accent hover:-translate-y-[1px] transition-all">Estratégia</a>
            <a href="#contato" className="hover:text-accent hover:-translate-y-[1px] transition-all">Contato</a>
          </div>
          <a href="https://wa.me/553496442250" target="_blank" rel="noreferrer" className="bg-accent text-background px-4 md:px-5 py-2 rounded-full font-sans font-semibold text-xs md:text-sm hover:scale-[1.03] ease-magnetic transition-transform overflow-hidden relative group whitespace-nowrap">
            <span className="relative z-10">Falar no WhatsApp</span>
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section relative h-[100dvh] w-full flex items-end pb-24 px-6 md:px-16">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" alt="Luxury Real Estate Interior" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="flex flex-col gap-2">
              <span className="hero-text font-sans font-bold text-3xl md:text-5xl text-text tracking-tight uppercase">Oportunidade e visão estratégica encontram a</span>
              <span className="hero-text font-serif italic text-5xl md:text-7xl lg:text-8xl text-accent leading-[0.9] mt-2">Melhor Opção.</span>
            </h1>
            <p className="hero-text mt-8 text-lg md:text-xl text-text/70 font-sans max-w-xl font-light">
              Especialista em oportunidades imobiliárias em Uberlândia. Ajudo você a comprar com visão, ética e inteligência.
            </p>
            <div className="hero-cta mt-10">
              <a href="https://wa.me/553496442250" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-medium text-text transition-all hover:scale-[1.03] ease-magnetic">
                Agendar Consultoria
                <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="solucoes" className="features-section relative w-full py-32 px-6 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="feature-card bg-dark/40 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Search className="w-24 h-24 text-accent" />
              </div>
              <div className="h-48 relative flex items-center justify-center mb-6">
                <div className="w-full max-w-[200px] aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center absolute transform transition-transform duration-700 ease-spring rotate-[-5deg] group-hover:rotate-0 z-10">
                  <span className="font-mono text-xs text-accent">Oportunidade A</span>
                </div>
                <div className="w-full max-w-[200px] aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center absolute transform transition-transform duration-700 ease-spring translate-x-4 translate-y-4 rotate-[5deg] group-hover:translate-x-8 group-hover:translate-y-2 z-0">
                  <span className="font-mono text-xs text-text/50">Oportunidade B</span>
                </div>
              </div>
              <h3 className="font-sans font-bold text-2xl mb-3 text-text">Mapeamento</h3>
              <p className="font-sans text-text/60 text-sm leading-relaxed">
                Varredura constante no mercado de Uberlândia para encontrar o imóvel que se encaixa perfeitamente no seu perfil e momento de vida.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card bg-dark/40 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
              <div className="h-48 relative mb-6 rounded-2xl overflow-hidden bg-black/40">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Market Insight" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              <h3 className="font-sans font-bold text-2xl mb-3 text-text">Visão & Estratégia</h3>
              <p className="font-sans text-text/60 text-sm leading-relaxed">
                Análise profunda de valorização, infraestrutura e potencial de retorno. Uma abordagem baseada em dados e na realidade local.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card bg-accent/10 border border-accent/20 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
              <div className="h-48 flex items-center justify-center mb-6 relative">
                <div className="absolute w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="w-20 h-20 rounded-full border border-accent/30 flex items-center justify-center bg-background z-10 group-hover:border-accent transition-colors duration-500">
                  <Key className="w-8 h-8 text-accent transform group-hover:rotate-45 transition-transform duration-500 ease-spring" />
                </div>
              </div>
              <h3 className="font-sans font-bold text-2xl mb-3 text-accent">Ética Absoluta</h3>
              <p className="font-sans text-text/60 text-sm leading-relaxed">
                Transparência inegociável em cada etapa. Você no controle do processo com aconselhamento honesto e foco no seu melhor interesse.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section relative w-full py-40 px-6 md:px-16 bg-background overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="philosophy-line font-sans text-lg md:text-xl text-text/50 mb-6 uppercase tracking-widest">
            A maioria dos corretores foca em: apenas fechar a venda de imóveis.
          </p>
          <h2 className="philosophy-line font-serif italic text-4xl md:text-6xl text-text leading-tight">
            Nós focamos em: construir patrimônio seguro garantindo a <span className="text-accent not-italic font-sans font-bold">melhor opção</span> para você.
          </h2>
        </div>
      </section>

      {/* SOBRE O CONSULTOR */}
      <section id="sobre" className="relative w-full bg-dark/20 py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[600px] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group">
            <img src="/image11.jpeg" alt="Júnior Oliveira" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-accent text-sm mb-4 uppercase tracking-widest">Consultor Especialista</span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-text mb-6">Júnior Oliveira</h2>
            <p className="font-sans text-text/70 text-lg leading-relaxed mb-6">
              Com expertise consolidada no mercado imobiliário de Uberlândia, atuo de forma incansável para garantir que cada transação seja segura, rentável e completamente alinhada aos seus interesses.
            </p>
            <p className="font-sans text-text/70 text-lg leading-relaxed">
              O meu compromisso não é apenas intermediar vendas, mas sim entregar uma consultoria de alto nível. Eu trago clareza, ética e visão estratégica para que você tome decisões com total confiança e tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* PROTOCOL SECTION (Normal Flow) */}
      <section id="estrategia" className="protocol-section relative w-full bg-background py-32 flex flex-col gap-24">
        
        {/* Step 1 */}
        <div className="protocol-card w-full flex items-center justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-[500px] w-full rounded-[2rem] md:rounded-[3rem] bg-dark/30 border border-white/5 flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0,transparent_60%)]"></div>
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-accent/20 flex items-center justify-center relative">
                 <div className="absolute inset-0 rounded-full border border-accent/40 animate-ping opacity-20"></div>
                 <div className="absolute inset-4 rounded-full border border-dashed border-accent/30 animate-spin-slow"></div>
                 <Target className="w-12 h-12 md:w-20 md:h-20 text-accent/60 group-hover:scale-110 transition-transform duration-500" />
               </div>
            </div>
            <div>
              <span className="font-mono text-accent text-lg mb-4 block">01. O DIAGNÓSTICO</span>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-text mb-6">Mapeamento de Objetivos</h2>
              <p className="font-sans text-text/60 text-lg leading-relaxed max-w-lg mb-4">
                Antes de buscar imóveis, entendemos profundamente o que você precisa. Seu momento, sua estrutura familiar e sua capacidade financeira guiam nosso algoritmo humano.
              </p>
              <p className="font-sans text-text/60 text-lg leading-relaxed max-w-lg">
                Nossa prioridade é otimizar o seu tempo e apresentar apenas aquilo que se encaixa perfeitamente na sua visão de futuro.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="protocol-card w-full flex items-center justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-[500px] w-full rounded-[2rem] md:rounded-[3rem] bg-dark/50 border border-white/5 flex items-center justify-center overflow-hidden md:order-2 group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08)_0,transparent_50%)]"></div>
               <div className="w-full h-0.5 bg-accent/30 shadow-[0_0_15px_rgba(201,168,76,0.5)] absolute animate-scan"></div>
               <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center relative">
                 <Compass className="w-12 h-12 md:w-20 md:h-20 text-accent/60 group-hover:rotate-45 transition-transform duration-700" />
               </div>
            </div>
            <div className="md:order-1">
              <span className="font-mono text-accent text-lg mb-4 block">02. A BUSCA ESTRATÉGICA</span>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-text mb-6">Crivo de Qualidade</h2>
              <p className="font-sans text-text/60 text-lg leading-relaxed max-w-lg mb-4">
                Filtramos o mercado de Uberlândia com rigor técnico. Analisamos documentação, potencial de valorização e infraestrutura para apresentar apenas as opções que fazem sentido.
              </p>
              <p className="font-sans text-text/60 text-lg leading-relaxed max-w-lg">
                Você terá acesso a oportunidades exclusivas (off-market) e relatórios detalhados sobre cada investimento.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="protocol-card w-full flex items-center justify-center px-6">
          <div className="max-w-7xl w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 md:h-[500px] w-full rounded-[2rem] md:rounded-[3rem] bg-accent/5 border border-accent/20 flex items-center justify-center overflow-hidden group">
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] border border-accent/30 flex items-center justify-center relative rotate-45 group-hover:rotate-0 transition-transform duration-700 bg-dark/50">
                  <div className="absolute inset-0 rounded-[2rem] border border-accent animate-pulse opacity-30"></div>
                  <ShieldCheck className="w-12 h-12 md:w-20 md:h-20 text-accent -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
               </div>
            </div>
            <div>
              <span className="font-mono text-accent text-lg mb-4 block">03. O FECHAMENTO ÉTICO</span>
              <h2 className="font-sans font-bold text-4xl md:text-5xl text-text mb-6">Transação Segura</h2>
              <p className="font-sans text-text/60 text-lg leading-relaxed max-w-lg mb-4">
                Negociação transparente, assessoria jurídica alinhada e suporte total até a entrega das chaves. Sua paz de espírito é o nosso principal indicador de sucesso.
              </p>
              <p className="font-sans text-text/60 text-lg leading-relaxed max-w-lg">
                Sem surpresas indesejadas, sem pressão. O seu investimento protegido com ética e clareza do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED SECTION */}
      <section id="contato" className="relative w-full py-32 px-6 bg-dark/20 flex flex-col items-center justify-center text-center">
        <h2 className="font-serif italic text-5xl md:text-7xl text-text mb-6">Inicie sua Jornada</h2>
        <p className="font-sans text-text/70 max-w-2xl text-lg mb-12">
          Agende uma consultoria. Vamos descobrir juntos a melhor oportunidade no mercado imobiliário para o seu perfil.
        </p>
        <a href="https://wa.me/553496442250" target="_blank" rel="noreferrer" className="bg-accent text-background px-10 py-5 rounded-full font-sans font-bold text-lg hover:scale-[1.03] ease-magnetic transition-transform flex items-center gap-3">
          Falar no WhatsApp
          <ArrowUpRight className="w-6 h-6" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-text rounded-t-[4rem] px-6 py-12 md:px-16 mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8 border-b border-white/5 pb-12">
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/image-removebg-preview.png" alt="Júnior Oliveira Logo" className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <p className="font-sans text-text/50 text-sm mb-2 leading-relaxed">
              Visão, ética e estratégia no mercado imobiliário.
            </p>
            <p className="font-sans text-text/50 text-sm">
              <span className="text-accent font-semibold">CRECI:</span> 63759
            </p>
          </div>
          
          <div className="flex flex-col gap-3 font-sans text-sm text-text/60">
            <h4 className="text-accent font-semibold mb-1 uppercase tracking-wider text-xs">Navegação</h4>
            <a href="#solucoes" className="hover:text-accent transition-colors">Soluções</a>
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#estrategia" className="hover:text-accent transition-colors">Estratégia</a>
            <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
          </div>

          <div className="flex flex-col gap-3 font-sans text-sm text-text/60">
            <h4 className="text-accent font-semibold mb-1 uppercase tracking-wider text-xs">Contatos</h4>
            <a href="https://wa.me/553496442250" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              WhatsApp: (34) 9644-2250
            </a>
            <a href="https://instagram.com/corretor.junioroliveira" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram: @corretor.junioroliveira
            </a>
            <p className="mt-2 text-text/40">Uberlândia - MG</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex justify-center pt-8 text-center px-4">
          <p className="font-sans text-xs text-text/40">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
