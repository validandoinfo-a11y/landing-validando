"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const questions = [
  "¿Los servicios que actualmente presta tu IPS corresponden con los servicios registrados y habilitados?",
  "¿Las hojas de vida y soportes del talento humano están completos, actualizados y disponibles para verificación?",
  "¿La infraestructura cumple las condiciones requeridas para los servicios que presta tu IPS?",
  "¿La dotación y los equipos requeridos están disponibles, funcionales y cuentan con soportes de mantenimiento?",
  "¿Los medicamentos, dispositivos médicos e insumos cuentan con controles de almacenamiento, vencimientos, recepción y trazabilidad cuando aplica?",
  "¿Los procesos prioritarios están documentados, actualizados y el personal conoce y aplica los procedimientos correspondientes?",
  "¿Las historias clínicas y registros asistenciales se diligencian de forma completa, oportuna y con adecuada custodia?",
  "¿La IPS cuenta con evidencias de implementación de seguridad del paciente y gestión de riesgos?",
  "¿Los indicadores de calidad se miden, analizan y generan acciones de mejoramiento cuando se requieren?",
  "¿El PAMEC, cuando aplica, evidencia ejecución, seguimiento, medición y acciones de mejoramiento?",
];

const whatsappUrl = (message: string) => `https://wa.me/573018718451?text=${encodeURIComponent(message)}`;

function Checklist() {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const answered = answers.filter(Boolean).length;
  const yesCount = answers.filter((answer) => answer === "Sí").length;
  const unsureCount = answers.filter((answer) => answer === "No estoy seguro").length;
  const result = yesCount >= 8 ? "Buen punto de partida." : yesCount >= 5 ? "Hay aspectos que conviene revisar." : "Revisión prioritaria recomendada.";
  const isLastQuestion = currentQuestion === questions.length - 1;

  const selectAnswer = (option: string) => {
    setAnswers((current) => current.map((answer, index) => index === currentQuestion ? option : answer));
    if (!isLastQuestion) {
      window.setTimeout(() => setCurrentQuestion((current) => current + 1), 180);
    }
  };

  return (
    <section id="checklist" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-700">Checklist Express gratuito</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Evalúa tu IPS en 10 preguntas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Responde con honestidad. Al final tendrás una orientación inicial sobre los puntos que conviene verificar.</p>
        </div>
        <div className="mx-auto max-w-2xl rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-10">
          {!showResult ? (
            <div key={currentQuestion} className="animate-in fade-in slide-in-from-right-3 duration-300">
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between text-sm font-bold text-slate-600">
                  <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuenow={currentQuestion + 1} aria-valuemin={1} aria-valuemax={questions.length} aria-label={`Pregunta ${currentQuestion + 1} de ${questions.length}`}>
                  <div className="h-full rounded-full bg-blue-600 transition-all duration-500" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
                </div>
              </div>
              <fieldset>
                <legend className="text-xl font-black leading-relaxed text-slate-950 sm:text-2xl">{questions[currentQuestion]}</legend>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {["Sí", "No", "No estoy seguro"].map((option) => (
                    <label key={option} className={`flex min-h-14 cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-center font-bold transition ${answers[currentQuestion] === option ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50/50"}`}>
                      <input type="radio" name={`question-${currentQuestion}`} value={option} checked={answers[currentQuestion] === option} onChange={() => selectAnswer(option)} className="sr-only" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="mt-8 flex min-h-6 justify-start">
                {currentQuestion > 0 && <button type="button" onClick={() => setCurrentQuestion((current) => current - 1)} className="text-sm font-bold text-slate-500 transition hover:text-blue-700">← Anterior</button>}
              </div>
              {isLastQuestion && <button type="button" onClick={() => setShowResult(true)} disabled={!answers[currentQuestion]} className="mt-2 w-full rounded-xl bg-blue-700 px-6 py-4 text-base font-black tracking-wide text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none">VER MI RESULTADO</button>}
            </div>
          ) : (
            <div aria-live="polite" className="rounded-3xl border border-blue-100 bg-blue-950 p-8 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Tu resultado orientativo</p>
              <h3 className="mt-3 text-3xl font-black">{result}</h3>
              <p className="mt-4 text-blue-100">Respuestas afirmativas: <strong>{yesCount}</strong> de {questions.length}.</p>
              <p className="mt-2 text-blue-100">No estoy seguro: <strong>{unsureCount}</strong>. Estos puntos requieren verificación.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ValidandoLanding() {
  const checklistRef = useRef<HTMLElement>(null);
  const scrollToChecklist = () => checklistRef.current?.scrollIntoView({ behavior: "smooth" });
  const whatsappMessage = "Hola, realicé el Checklist Express de VALIDANDO y quiero información para revisar mi IPS.";

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" aria-label="Contactar a VALIDANDO por WhatsApp" className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-105 hover:bg-emerald-600"><span aria-hidden="true" className="text-2xl font-black">↗</span></a>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 px-6 py-16 text-white md:py-24">
        <div className="absolute -right-24 -top-32 size-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <header className="flex items-center justify-between"><Image src="/logo.png" alt="VALIDANDO" width={180} height={74} priority className="brightness-0 invert" /><span className="hidden rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-200 md:block">Especialistas en Calidad en Salud</span></header>
          <div className="max-w-3xl py-20 md:py-28">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Para IPS que quieren estar preparadas</p>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight md:text-7xl">¿Tu IPS está preparada para una visita de habilitación?</h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-blue-100 md:text-2xl">Descúbrelo en menos de 3 minutos con nuestro Checklist Express gratuito.</p>
            <button type="button" onClick={scrollToChecklist} className="mt-10 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-black tracking-wide text-blue-950 shadow-xl shadow-cyan-400/20 transition hover:bg-cyan-300">COMENZAR CHECKLIST GRATIS</button>
          </div>
        </div>
      </section>

      <section ref={checklistRef}><Checklist /></section>

      <section className="px-6 py-24"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Acompañamiento especializado</p><h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">¿Cómo podemos ayudarte?</h2></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{["Diagnóstico SUH", "Habilitación", "PAMEC", "Auditoría"].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">✓</div><h3 className="text-xl font-black text-slate-900">{item}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Orientación práctica para fortalecer la calidad de tus servicios.</p></div>)}</div></div></section>

      <section className="bg-slate-50 px-6 py-24"><div className="mx-auto max-w-6xl"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Una ruta clara</p><h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">Así trabajamos</h2></div><div className="mt-14 grid gap-8 md:grid-cols-4">{["Revisamos", "Identificamos brechas", "Priorizamos", "Acompañamos la mejora"].map((step, index) => <div key={step} className="text-center"><div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-700 text-xl font-black text-white">{index + 1}</div><h3 className="mt-5 font-black text-slate-900">{step}</h3></div>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-3xl rounded-3xl bg-blue-50 p-8 text-center md:p-12"><h2 className="text-3xl font-black text-slate-950">¿Encontraste puntos por mejorar?</h2><p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-600">VALIDANDO puede ayudarte a identificar brechas y establecer una ruta de trabajo de acuerdo con los servicios habilitados.</p><a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl bg-emerald-500 px-7 py-4 text-sm font-black tracking-wide text-white shadow-lg transition hover:bg-emerald-600">QUIERO REVISAR MI IPS</a></div></section>

      <footer className="border-t border-slate-100 bg-white px-6 py-12 text-center"><Image src="/logo.png" alt="VALIDANDO" width={140} height={58} className="mx-auto mb-5" /><p className="mx-auto max-w-3xl text-xs leading-relaxed text-slate-500">Este checklist es una herramienta orientativa y no sustituye una auditoría, una visita de verificación ni la evaluación integral de los criterios aplicables al prestador y sus servicios.</p><p className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">© {new Date().getFullYear()} VALIDANDO · Especialistas en Calidad en Salud</p></footer>
    </main>
  );
}
