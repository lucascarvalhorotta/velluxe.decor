import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Ruler, ShieldCheck, Wrench, ChevronRight, Phone, Mail, MapPin, Instagram, CheckCircle2 } from "lucide-react";

function VelluxeLogo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <svg 
      viewBox="400 1100 2400 1000"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path fill="#D4AF37" d="M490.73,1613.42c69.93-22.03,141.23-39.62,213.39-52.63,72.31-13.03,145.42-21.39,218.8-25.1,73.69-3.73,147.54-2.62,221.11,2.88,74.09,5.54,147.79,15.19,221.18,26.63,74.1,11.55,147.91,24.87,221.82,37.59,73.83,12.71,147.8,24.79,222.15,34.04,66.04,8.21,132.38,13.91,198.92,15.53,65.01,1.58,130.18-.59,194.82-7.87,63.76-7.18,127.05-19.13,188.52-37.67,60.63-18.29,119.55-42.96,174.36-74.77,13.47-7.82,26.67-16.07,39.61-24.73,10.64-7.12.64-24.45-10.09-17.27-52.24,34.95-108.88,62.9-168.06,83.98-59.91,21.34-122.1,35.96-184.96,45.33-63.57,9.48-127.97,13.39-192.22,13.49-64.72.1-129.42-3.77-193.77-10.57-73.73-7.8-147.05-19.06-220.16-31.31-73.66-12.35-147.15-25.74-220.85-37.85-73.8-12.13-147.86-23.01-222.32-30.29-73.67-7.21-147.66-10.56-221.68-8.89-73.67,1.67-147.2,8.1-220.08,18.95-72.23,10.76-143.78,26.05-214.08,45.82-17.33,4.87-34.57,10.03-51.74,15.44-12.23,3.85-7.01,23.17,5.32,19.29h0Z"/>
      <path fill="#D4AF37" d="M490.73,1668.64c69.93-22.03,141.23-39.62,213.39-52.63,72.31-13.03,145.42-21.39,218.8-25.1,73.69-3.73,147.54-2.62,221.11,2.88,74.09,5.54,147.79,15.19,221.18,26.63,74.1,11.55,147.91,24.87,221.82,37.59,73.83,12.71,147.8,24.79,222.15,34.04,66.04,8.21,132.38,13.91,198.92,15.53,65.01,1.58,130.18-.59,194.82-7.87,63.76-7.18,127.05-19.13,188.52-37.67,60.63-18.29,119.55-42.96,174.36-74.77,13.47-7.82,26.67-16.07,39.61-24.73,10.64-7.12.64-24.45-10.09-17.27-52.24,34.95-108.88,62.9-168.06,83.98-59.91,21.34-122.1,35.96-184.96,45.33-63.57,9.48-127.97,13.39-192.22,13.49-64.72.1-129.42-3.77-193.77-10.57-73.73-7.8-147.05-19.06-220.16-31.31-73.66-12.35-147.15-25.74-220.85-37.85-73.8-12.13-147.86-23.01-222.32-30.29-73.67-7.21-147.66-10.56-221.68-8.89-73.67,1.67-147.2,8.1-220.08,18.95-72.23,10.76-143.78,26.05-214.08,45.82-17.33,4.87-34.57,10.03-51.74,15.44-12.23,3.85-7.01,23.17,5.32,19.29h0Z"/>
      <path fill="#D4AF37" d="M490.73,1723.92c69.93-22.03,141.23-39.62,213.39-52.63,72.31-13.03,145.42-21.39,218.8-25.1,73.69-3.73,147.54-2.62,221.11,2.88,74.09,5.54,147.79,15.19,221.18,26.63,74.1,11.55,147.91,24.87,221.82,37.59,73.83,12.71,147.8,24.79,222.15,34.04,66.04,8.21,132.38,13.91,198.92,15.53,65.01,1.58,130.18-.59,194.82-7.87,63.76-7.18,127.05-19.13,188.52-37.67,60.63-18.29,119.55-42.96,174.36-74.77,13.47-7.82,26.67-16.07,39.61-24.73,10.64-7.12.64-24.45-10.09-17.27-52.24,34.95-108.88,62.9-168.06,83.98-59.91,21.34-122.1,35.96-184.96,45.33-63.57,9.48-127.97,13.39-192.22,13.49-64.72.1-129.42-3.77-193.77-10.57-73.73-7.8-147.05-19.06-220.16-31.31-73.66-12.35-147.15-25.74-220.85-37.85-73.8-12.13-147.86-23.01-222.32-30.29-73.67-7.21-147.66-10.56-221.68-8.89-73.67,1.67-147.2,8.1-220.08,18.95-72.23,10.76-143.78,26.05-214.08,45.82-17.33,4.87-34.57,10.03-51.74,15.44-12.23,3.85-7.01,23.17,5.32,19.29h0Z"/>
      <text fontFamily="'Cormorant Garamond', serif" fontSize="700" fontWeight="600" fill="#FFFFFF" x="488" y="1440">Velluxe</text>
      <text fontFamily="'Cormorant Garamond', serif" fontSize="300" fontWeight="500" fontStyle="italic" fill="#ffffff" x="1217" y="1965">Decor</text>
    </svg>
  );
}

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
            backgroundImage: `url('/images/hero-bg.jpeg')`,
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
                url: "/images/1.png",
                title: "",
                desc: ""
              },
              {
                url: "/images/2.png",
                title: "",
                desc: ""
              },
              {
                url: "/images/3.png",
                title: "",
                desc: ""
              },
              {
                url: "/images/4.png",
                title: "",
                desc: ""
              },
              {
                url: "/images/5.png",
                title: "",
                desc: ""
              },
              {
                url: "/images/6.png",
                title: "",
                desc: ""
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-xl aspect-[4/5] cursor-pointer"
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
                src="/images/7.png" 
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
                  "Atendimento consultivo personalizado.",
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
               Atendimento de seg a sex 9h-18h
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a2231] text-white/80 py-16 border-t border-white/10">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <VelluxeLogo className="h-12 w-auto mb-6" />
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
                  <span>(45) 99811-3954</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#D4AF37]" />
                  <span>contato@velluxedecor.com.br</span>
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
