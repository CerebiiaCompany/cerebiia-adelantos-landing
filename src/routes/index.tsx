import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import {
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Smartphone,
  CalendarClock,
  PiggyBank,
  HeartHandshake,
} from "lucide-react";

const WHATSAPP_NUMBER = "573169393922";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa una demo de AdeCerebiia para mi empresa."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AdeCerebiia — Adelantos de nómina para tu empresa" },
      {
        name: "description",
        content:
          "Plataforma de adelantos de nómina con pagos hasta en 3 cuotas. La empresa no paga nada: el empleado asume una tarifa fija de $8.000 por adelanto.",
      },
      { property: "og:title", content: "AdeCerebiia — Adelantos de nómina" },
      {
        property: "og:description",
        content:
          "Bienestar financiero para tus empleados. Adelantos hasta en 3 cuotas y cero riesgo para la empresa.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Features />
      <Installments />
      <HowItWorks />
      <ForCompanies />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------- Scroll reveal ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Logo ---------- */
function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground font-bold text-lg shadow-[var(--shadow-brand)]"
        style={{ background: "var(--gradient-brand)" }}
      >
        A
      </div>
      <span className="text-lg font-semibold tracking-tight">AdeCerebiia</span>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#producto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Beneficios</a>
          <a href="#cuotas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pagos a cuotas</a>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cómo funciona</a>
          <a href="#empresas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Para empresas</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-brand)" }}
          >
            Solicitar demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl bg-primary" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Plataforma de adelantos de nómina
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Tu dinero,
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>
                a tu ritmo.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ofrece a tus empleados acceso al salario que ya ganaron,
              con la flexibilidad de pagarlo hasta en 3 cuotas. La empresa no paga nada: el empleado asume una tarifa fija de $8.000 por adelanto.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-brand)" }}
              >
                Solicitar demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Ver cómo funciona
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Sin costo para la empresa</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Tarifa fija: $8.000 por adelanto</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Hasta 3 cuotas</div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <TrustOrb />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero visual: refined, calm, premium ---------- */
function TrustOrb() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-[480px]">
      {/* Soft ambient glow */}
      <div
        className="absolute -inset-10 -z-10 rounded-[3rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      {/* Subtle dotted grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.52 0.24 268 / 0.5) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Back card — depth */}
      <div
        className="absolute left-1/2 top-6 h-[78%] w-[86%] -translate-x-1/2 rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm"
        style={{ transform: "translate(-46%, 0) rotate(-5deg)" }}
      />

      {/* Main brand card */}
      <div
        className="relative mx-auto mt-2 h-[88%] w-[92%] overflow-hidden rounded-3xl p-8 text-primary-foreground shadow-[var(--shadow-brand)] animate-float-slow"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-white/10" />

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
              <span className="text-sm font-bold">A</span>
            </div>
            <span className="text-sm font-semibold tracking-tight opacity-95">AdeCerebiia</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            En línea
          </div>
        </div>

        {/* Brand emblem with pulse */}
        <div className="relative mx-auto mt-10 flex h-40 w-40 items-center justify-center">
          <span className="absolute h-full w-full rounded-full bg-white/10 animate-pulse-ring" />
          <span
            className="absolute h-full w-full rounded-full bg-white/10 animate-pulse-ring"
            style={{ animationDelay: "1.2s" }}
          />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25">
            <Shield className="h-12 w-12" strokeWidth={1.6} />
            <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-lg">
              <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} />
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-10 text-center">
          <div className="text-[11px] font-medium uppercase tracking-[0.2em] opacity-70">
            Confianza · Bienestar
          </div>
          <div className="mt-2 text-2xl font-bold leading-tight">
            Adelantos seguros<br />para tu equipo
          </div>
        </div>

        {/* Mini trust rail */}
        <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/20 pt-5 text-center">
          <TrustStat label="Cuotas" value="Hasta 3" />
          <TrustStat label="Costo empresa" value="$0" />
          <TrustStat label="Tarifa" value="$8.000" />
        </div>
      </div>

      {/* Floating accent chips */}
      <div className="absolute -left-4 top-24 animate-float">
        <FloatingChip
          icon={<HeartHandshake className="h-4 w-4" />}
          title="Sin riesgo"
          sub="Para tu empresa"
        />
      </div>
      <div className="absolute -right-4 bottom-28 animate-float-slow" style={{ animationDelay: "0.6s" }}>
        <FloatingChip
          icon={<CalendarClock className="h-4 w-4" />}
          title="Hasta 3 cuotas"
          sub="Flexibilidad de pago"
        />
      </div>
      <div className="absolute -left-2 bottom-10 animate-float-slow" style={{ animationDelay: "1.1s" }}>
        <FloatingChip
          icon={<PiggyBank className="h-4 w-4" />}
          title="Tarifa fija"
          sub="$8.000 por adelanto"
        />
      </div>
    </div>
  );
}

function TrustStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider opacity-70">{label}</div>
      <div className="mt-1 text-sm font-bold">{value}</div>
    </div>
  );
}

function FloatingChip({
  icon,
  title,
  sub,
  className = "",
  style,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-3.5 py-2.5 backdrop-blur-sm shadow-[var(--shadow-card)] ${className}`}
      style={style}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground"
        style={{ background: "var(--gradient-brand)" }}
      >
        {icon}
      </div>
      <div className="pr-1">
        <div className="text-sm font-semibold leading-tight">{title}</div>
        <div className="text-[11px] text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

/* ---------- Features (beneficios) ---------- */
function Features() {
  const items = [
    { icon: Zap, title: "Solicitud en segundos", desc: "Tus empleados solicitan su adelanto desde la app en pocos segundos, cuando lo necesiten." },
    { icon: CalendarClock, title: "Pagos hasta en 3 cuotas", desc: "Cada adelanto se puede pagar hasta en 3 cuotas, sin afectar el bolsillo del empleado." },
    { icon: Shield, title: "Cero riesgo para la empresa", desc: "La empresa no paga nada. El empleado asume una tarifa fija de $8.000 por adelanto." },
    { icon: HeartHandshake, title: "Retención de talento", desc: "Un beneficio diferencial que reduce rotación y aumenta la satisfacción del equipo." },
    { icon: PiggyBank, title: "Bienestar financiero", desc: "Reduce el estrés financiero y elimina la dependencia de préstamos con altos intereses." },
    { icon: Smartphone, title: "100% digital", desc: "Sin papeleos ni trámites. Tus empleados solicitan desde su móvil en cualquier momento." },
  ];
  return (
    <section id="producto" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Beneficios
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Bienestar para tu equipo, tranquilidad para tu empresa
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Una solución integral donde la empresa no asume costos y el empleado accede a su salario ganado de forma flexible.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-brand)] transition-transform duration-500 group-hover:scale-110"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Installments (cuotas) ---------- */
function Installments() {
  const cuotas = [
    { n: "1", label: "Cuota única", desc: "Se descuenta en la siguiente nómina." },
    { n: "2", label: "2 cuotas", desc: "Distribuido en las próximas dos nóminas." },
    { n: "3", label: "3 cuotas", desc: "Máxima flexibilidad para el empleado." },
  ];
  return (
    <section id="cuotas" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <CalendarClock className="h-3.5 w-3.5" />
              Pagos a cuotas
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Flexibilidad real para tus empleados
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cada adelanto puede pagarse hasta en 3 cuotas, ajustándose al momento financiero del empleado.
              La empresa no paga nada: el empleado asume una tarifa fija de $8.000 por adelanto.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Descuento por nómina, sin gestión manual para tu empresa",
                "El empleado elige entre 1, 2 o 3 cuotas según su flujo",
                "Tarifa fija de $8.000 por adelanto: si solicita $500.000, recibe $492.000",
                "Total transparencia: ve sus cuotas y saldos en tiempo real",
                "Sin intereses ocultos ni letra pequeña",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cuotas.map((c, i) => (
                <div
                  key={c.label}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-primary-foreground shadow-[var(--shadow-brand)]"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {c.n}
                  </div>
                  <div className="mt-4 text-lg font-semibold">{c.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Conecta tu nómina", desc: "Integramos AdeCerebiia con tu sistema de nómina en días." },
    { n: "02", title: "Activa a tus empleados", desc: "Cada empleado recibe acceso a su panel personal." },
    { n: "03", title: "Solicitan desde la app", desc: "Piden el adelanto y eligen entre 1, 2 o 3 cuotas. La solicitud llega al panel de Cerebiia." },
    { n: "04", title: "Pagamos y descontamos", desc: "Nuestro equipo procesa y desembolsa el adelanto. Las cuotas se descuentan de la nómina sin trabajo extra para ti." },
  ];
  return (
    <section id="como-funciona" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Cómo funciona
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Implementación simple. Impacto inmediato.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1">
                <div
                  className="text-3xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- For companies ---------- */
function ForCompanies() {
  const benefits = [
    "Atrae y retiene talento con un beneficio diferencial",
    "Reduce el ausentismo causado por estrés financiero",
    "Aumenta la productividad y satisfacción del equipo",
    "Sin costo de implementación ni mantenimiento",
    "La empresa no paga nada: el empleado asume el costo de $8.000 por adelanto",
    "Integración con tu sistema de nómina actual",
    "Soporte dedicado para tu empresa y empleados",
  ];
  return (
    <section id="empresas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div
                className="overflow-hidden rounded-3xl p-10 text-primary-foreground shadow-[var(--shadow-brand)]"
                style={{ background: "var(--gradient-hero)" }}
              >
                <Building2 className="h-10 w-10 opacity-90" />
                <div className="mt-6 text-5xl font-bold leading-tight">+85%</div>
                <p className="mt-2 text-lg opacity-90">
                  de los empleados reportan mayor tranquilidad financiera tras adoptar adelantos de nómina.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                  <div>
                    <div className="text-3xl font-bold">+40%</div>
                    <div className="text-sm opacity-80">Retención</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">-30%</div>
                    <div className="text-sm opacity-80">Ausentismo</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Para empresas
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Un beneficio que tu equipo va a amar
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AdeCerebiia se integra con tu sistema de nómina y entrega a tu equipo acceso a su salario ganado.
              Sin costo para la empresa, sin riesgo, sin complicaciones.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-12 text-primary-foreground shadow-[var(--shadow-brand)] sm:p-16"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <svg className="absolute right-8 top-8" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" />
              </svg>
              <svg className="absolute -bottom-10 -left-10" width="180" height="180" viewBox="0 0 180 180" fill="none">
                <rect x="20" y="20" width="140" height="140" rx="20" stroke="white" strokeWidth="1" transform="rotate(20 90 90)" />
              </svg>
            </div>
            <div className="relative">
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Dale a tu equipo el beneficio que estaban esperando
              </h2>
              <p className="mt-4 max-w-xl text-lg opacity-90">
                Agenda una demo de 20 minutos y descubre cómo AdeCerebiia transforma la nómina de tu empresa.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-transform hover:scale-[1.02]"
                >
                  Solicitar demo por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Plataforma de adelantos de nómina. Tu dinero, a tu ritmo.
            </p>
          </div>
          <FooterCol title="Producto" links={["Beneficios", "Pagos a cuotas", "Seguridad", "Integraciones"]} />
          <FooterCol title="Empresa" links={["Sobre nosotros", "Clientes", "Blog", "Contacto"]} />
          <FooterCol title="Legal" links={["Términos", "Privacidad", "Cookies"]} />
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 AdeCerebiia · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
