"use client";

import Image from 'next/image';
import { useRef } from 'react';

export default function ValidandoLanding() {
  const formularioRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formularioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/573000000000?text=Hola,%20deseo%20asesoría%20sobre%20los%20servicios%20de%20Validando";

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-blue-100">

      {/* BOTÓN FLOTANTE DE WHATSAPP CON PULSO ANIMADO */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 transition-all flex items-center gap-2 group animate-bounce"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold px-0 group-hover:px-2">
          ¿Necesitas ayuda inmediata?
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* HERO SECTION CON GRADIENTE DINÁMICO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold tracking-widest uppercase mb-8 animate-pulse">
            Especialistas en Calidad Salud
          </div>

          <div className="mb-10">
            <Image src="/logo.png" alt="Validando" width={220} height={90} priority className="mx-auto drop-shadow-2xl" />
            <p className="mt-4 text-blue-100 text-lg font-medium tracking-wide">
              Soluciones integrales de calidad en salud
            </p>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Cero hallazgos en tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">PAMEC y Habilitación</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* CARD 1 */}
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all group">
              <h3 className="text-xl font-bold mb-2">PAMEC Mensual</h3>
              <p className="text-blue-300 text-sm mb-4">IPS y Transporte Asistencial</p>
              <div className="text-5xl font-black text-white">$400.000 <span className="text-lg font-normal opacity-60">COP/mes</span></div>
            </div>
            
            {/* CARD 2 */}
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all group">
              <h3 className="text-xl font-bold mb-2">Documentación</h3>
              <p className="text-blue-300 text-sm mb-4">Profesionales Independientes</p>
              <div className="text-5xl font-black text-white">$850.000 <span className="text-lg font-normal opacity-60">COP</span></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToForm} 
              className="bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1"
            >
              ¡AGENDAR DIAGNÓSTICO GRATIS!
            </button>
          </div>
        </div>
      </section>

      {/* FORMULARIO CON DISEÑO PREMIUM */}
      <section ref={formularioRef} className="py-24 px-6 bg-slate-50">
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <h3 className="text-3xl font-black mb-2 text-center text-slate-900">Empieza hoy mismo</h3>
            <p className="text-center text-slate-500 mb-8 font-medium">Recibe respuesta en menos de 30 minutos.</p>
            
            <form
              onSubmit={(e: any) => {
                e.preventDefault();
                const mensaje = `Hola Validando! Mi nombre es ${e.target.nombre.value}. Me urge asesoría para ${e.target.servicio.value} en mi consultorio/IPS ${e.target.empresa.value}.`;
                window.open(`https://wa.me/573000000000?text=${encodeURIComponent(mensaje)}`, "_blank");
              }}
              className="space-y-5"
            >
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400 ml-2">Nombre y Apellido</label>
                <input name="nombre" required className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-700 font-semibold" />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400 ml-2">IPS / Consultorio</label>
                <input name="empresa" required className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-700 font-semibold" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400 ml-2">Servicio de Interés</label>
                <select name="servicio" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-700 font-bold appearance-none">
                  <option value="PAMEC Mensual">PAMEC Mensual ($400.000 COP)</option>
                  <option value="Documentación Independientes">Documentación Independientes ($850.000 COP)</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-900 transition-all shadow-xl">
                SOLICITAR ASESORÍA AHORA
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER MODERNO */}
      <footer className="py-20 bg-white text-center px-6 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <Image src="/logo.png" alt="Validando" width={150} height={60} className="mx-auto mb-6 opacity-90" />
          <h4 className="text-xl font-bold text-slate-900 mb-2">Validando</h4>
          <p className="text-slate-500 font-medium mb-8 uppercase tracking-tighter text-sm">
            Soluciones integrales de calidad en salud
          </p>
          <div className="h-[1px] w-20 bg-blue-500 mx-auto mb-8" />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Especialistas en Normatividad Colombiana.
          </p>
        </div>
      </footer>
    </div>
  );
}