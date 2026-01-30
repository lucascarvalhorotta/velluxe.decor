import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Wrench, ChevronRight, Phone, Mail, MapPin, Instagram, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background selection:bg-gold-500/30 selection:text-navy-900">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Modern Luxury Living Room */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(26,34,49,0.75),rgba(42,51,65,0.7))]" />

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 border border-[#D4AF37]/50 rounded-full text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-6 bg-navy-900/30 backdrop-blur-sm">
              Cortinas de Alto Padrão
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              Elegância <br className="hidden md:block" />
              <span className="text-[#D4AF37]">Sob Medida</span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Transformamos ambientes com cortinas e persianas personalizadas.
              Tecidos exclusivos, acabamento impecável e instalação profissional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A572] text-[#1a2231] font-bold text-lg rounded-sm transition-all duration-300 hover:scale-105"
              >
                Solicitar Orçamento
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#1a2231] text-white font-medium text-lg rounded-sm transition-all duration-300"
              >
                Ver Projetos
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="w-[2px] h-12 bg-white/20 relative rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[#D4AF37]"
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Por que escolher a Velluxe"
            title="A Excelência em Cada Detalhe"
            description="Nosso compromisso é entregar não apenas um produto, mas uma experiência completa de transformação do seu ambiente."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <BenefitCard 
              icon={<Ruler className="w-10 h-10 text-[#D4AF37]" />}
              title="Sob Medida"
              description="Cada projeto é único. Medição precisa e confecção personalizada para se adequar perfeitamente às suas janelas e estilo."
              delay={0.1}
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-10 h-10 text-[#D4AF37]" />}
              title="Alto Padrão"
              description="Trabalhamos apenas com tecidos nobres e mecanismos duráveis que garantem sofisticação e longevidade."
              delay={0.2}
            />
            <BenefitCard 
              icon={<Wrench className="w-10 h-10 text-[#D4AF37]" />}
              title="Instalação Profissional"
              description="Nossa equipe técnica especializada garante uma instalação limpa, rápida e com acabamento perfeito."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-[#F5F5F5] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            subtitle="Nosso Processo"
            title="Como Funciona"
            description="Da consultoria à instalação final, cuidamos de cada etapa para garantir sua satisfação total."
          />

          <div className="mt-20 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Contato", desc: "Você entra em contato via formulário ou WhatsApp." },
                { number: "02", title: "Visita", desc: "Agendamos uma visita técnica para medição." },
                { number: "03", title: "Projeto", desc: "Apresentamos tecidos e soluções ideais." },
                { number: "04", title: "Entrega", desc: "Confecção e instalação em até 15 dias." },
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 bg-white p-8 shadow-lg shadow-gray-200/50 rounded-xl border border-gray-100 group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="text-4xl font-serif font-bold text-gray-100 mb-4 group-hover:text-[#D4AF37]/20 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2231] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / PROJECTS */}
      <section id="projects" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Portfolio"
            title="Projetos Recentes"
            description="Inspire-se com algumas das transformações que realizamos em residências e escritórios de alto padrão."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                url: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1888&auto=format&fit=crop",
                title: "Living Contemporâneo",
                desc: "Cortina em Linho Puro"
              },
              {
                url: "https://images.unsplash.com/photo-1505693416388-b0346efee535?q=80&w=2070&auto=format&fit=crop",
                title: "Suíte Master",
                desc: "Blackout 100% com Voil"
              },
              {
                url: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1932&auto=format&fit=crop",
                title: "Home Office",
                desc: "Persiana Rolô Screen"
              },
              {
                url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
                title: "Sala de Jantar",
                desc: "Prega Americana Clássica"
              },
              {
                url: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2080&auto=format&fit=crop",
                title: "Varanda Gourmet",
                desc: "Rolô com Proteção Solar"
              },
              {
                url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1992&auto=format&fit=crop",
                title: "Loft Industrial",
                desc: "Linho Cinza Wave"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-80 overflow-hidden rounded-lg cursor-pointer shadow-md"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.url}')` }}
                />
                <div className="absolute inset-0 bg-[#1a2231]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
                  <h4 className="text-2xl font-serif text-white font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h4>
                  <p className="text-[#D4AF37] font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US / CHECKLIST */}
      <section className="py-24 bg-[#1a2231] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute top-4 left-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-lg -z-0 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop" 
                alt="Detalhe de cortina de luxo" 
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <span className="text-[#D4AF37] tracking-widest uppercase text-sm font-medium mb-2 block">Diferenciais Exclusivos</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Transforme sua casa em um <span className="text-[#D4AF37]">refúgio de luxo</span>
              </h2>
              
              <ul className="space-y-6">
                {[
                  "Atendimento consultivo personalizado por designers de interiores.",
                  "Acervo com mais de 500 opções de tecidos importados e nacionais.",
                  "Mecanismos motorizados compatíveis com Alexa e Google Home.",
                  "Garantia estendida de 5 anos em todos os produtos.",
                  "Pagamento facilitado em até 10x sem juros.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button 
                  className="bg-[#D4AF37] text-[#1a2231] hover:bg-[#C5A572] px-8 py-6 text-lg font-semibold rounded-none" 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Agendar Visita Técnica
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Depoimentos"
            title="O que nossos clientes dizem"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                text: "O atendimento foi impecável desde o primeiro contato. As cortinas transformaram completamente minha sala. A qualidade do linho é impressionante.",
                name: "Mariana S.",
                role: "Arquiteta",
                stars: 5
              },
              {
                text: "Profissionalismo raro de encontrar. A instalação foi rápida, limpa e o resultado final superou minhas expectativas. Recomendo de olhos fechados.",
                name: "Roberto A.",
                role: "Empresário",
                stars: 5
              },
              {
                text: "Fiz todo o meu apartamento com a Velluxe. A motorização das persianas ficou perfeita, integro tudo pelo celular. Excelente custo-benefício pelo padrão entregue.",
                name: "Carla M.",
                role: "Médica",
                stars: 5
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D4AF37] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div>
                  <h5 className="font-bold text-[#1a2231]">{review.name}</h5>
                  <span className="text-sm text-gray-500">{review.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a2231,#2a3341)] -z-0" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="max-w-[600px] w-full">
            <div className="text-center mb-12">
              <span className="text-[#D4AF37] tracking-widest uppercase text-sm font-medium mb-2 block">Contato</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Transforme seu ambiente hoje</h2>
              <p className="text-gray-300 text-lg">
                Solicite um orçamento gratuito e sem compromisso
              </p>
            </div>
            
            <ContactForm />

            <p className="text-white/70 text-sm text-center mt-8 font-light">
              Resposta em até 2 horas • Atendimento de seg a sex 9h-18h
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a2231] text-white/80 py-16 border-t border-white/10">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-serif text-3xl font-bold tracking-tight text-white mb-6 block">
                Velluxe <span className="text-[#D4AF37]">Decor</span>
              </span>
              <p className="leading-relaxed font-light">
                Excelência em cortinas e persianas sob medida para ambientes de alto padrão em Cascavel e região.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#D4AF37] font-bold text-lg mb-6 uppercase tracking-wider">Links Rápidos</h4>
              <ul className="space-y-4 font-light">
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projetos</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-bold text-lg mb-6 uppercase tracking-wider">Contato</h4>
              <ul className="space-y-4 font-light">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#D4AF37]" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#D4AF37]" />
                  <span>contato@velluxedecor.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#D4AF37]" />
                  <span>Showroom em Cascavel, PR</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 Velluxe Decor. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-8 rounded-xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-[#D4AF37]/5 hover:border-[#D4AF37]/20 transition-all duration-300 group"
    >
      <div className="mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#1a2231] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
