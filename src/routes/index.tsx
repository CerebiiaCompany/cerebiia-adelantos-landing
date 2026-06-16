import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  Shield,
  Wallet,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  BarChart3,
  CheckCircle2,
  Building2,
  Smartphone,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AdeCerebiia — Adelantos de nómina para tu empresa" },
      {
        name: "description",
        content:
          "Plataforma de adelantos de nómina. Da a tus empleados acceso instantáneo a su salario ganado, de forma segura y sin complicaciones.",
      },
      { property: "og:title", content: "AdeCerebiia — Adelantos de nómina" },
      {
        property: "og:description",
        content:
          "Bienestar financiero para tus empleados. Adelantos al instante, control total y cero riesgo para la empresa.",
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
      <Logos />
      <Features />
      <HowItWorks />
      <ForCompanies />
      <AppPreview />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

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

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#producto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Producto</a>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cómo funciona</a>
          <a href="#empresas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Para empresas</a>
          <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden text-sm font-medium text-foreground hover:text-primary transition-colors sm:inline">Ingresar</a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.02]"
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

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + geometric shapes */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl bg-primary" />
        <svg className="absolute right-10 top-24 opacity-40" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="10" y="10" width="100" height="100" rx="16" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" transform="rotate(15 60 60)" />
        </svg>
        <svg className="absolute left-20 bottom-20 opacity-40" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
        </svg>
        <svg className="absolute right-32 bottom-10 opacity-40" width="140" height="140" viewBox="0 0 140 140" fill="none">
          <polygon points="70,15 130,125 10,125" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/30" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Plataforma de adelantos de nómina
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Tu dinero,
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                a tu ritmo.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ofrece a tus empleados acceso instantáneo al salario que ya ganaron.
              Una plataforma simple, rápida y segura para toda tu organización.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
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
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Integración en días</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 100% digital</div>
            </div>
          </div>

          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-6 -z-10 rounded-3xl opacity-30 blur-2xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Disponible para adelanto</div>
            <div className="mt-2 text-4xl font-bold" style={{ color: "oklch(0.52 0.24 268)" }}>$2.400.000</div>
            <div className="mt-1 text-xs text-muted-foreground">de $4.800.000</div>
          </div>
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Zap className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 rounded-full" style={{ background: "var(--gradient-brand)" }} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <MiniStat label="Ingresos mes" value="$3.200.000" trend="+5%" />
          <MiniStat label="Próximo pago" value="15 Abr" trend="10 días" />
        </div>

        <div className="mt-5 rounded-xl border border-border bg-muted/40 p-4">
          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Actividad reciente</div>
          <div className="space-y-3">
            <Activity title="Adelanto rápido" date="Hoy, 14:30" amount="-$500.000" negative />
            <Activity title="Nómina mensual" date="1 Abr" amount="+$4.800.000" />
            <Activity title="Adelanto parcial" date="28 Mar" amount="-$300.000" negative />
          </div>
        </div>

        <button
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)]"
          style={{ background: "var(--gradient-brand)" }}
        >
          Solicitar adelanto <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function MiniStat({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
      <div className="text-xs text-primary">{trend}</div>
    </div>
  );
}

function Activity({ title, date, amount, negative }: { title: string; date: string; amount: string; negative?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <ArrowRight className={`h-3.5 w-3.5 ${negative ? "rotate-45" : "-rotate-45"}`} />
        </div>
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-muted-foreground">{date}</div>
        </div>
      </div>
      <div className={`text-sm font-semibold ${negative ? "text-foreground" : "text-primary"}`}>{amount}</div>
    </div>
  );
}

function Logos() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Empresas que confían en AdeCerebiia
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-8 opacity-60 sm:grid-cols-3 md:grid-cols-6">
          {["NORDIK", "VERTEX", "LUMEN", "OASIS", "AXIOM", "PRISMA"].map((n) => (
            <div key={n} className="text-center text-base font-semibold tracking-widest text-muted-foreground">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Zap, title: "Adelantos al instante", desc: "Tus empleados acceden a su salario ganado en segundos, cuando más lo necesitan." },
    { icon: Shield, title: "Seguro y transparente", desc: "Cifrado de nivel bancario. Datos y transacciones siempre protegidas." },
    { icon: Wallet, title: "Control total", desc: "Empleados, empleadores y empresas en un solo lugar, con visibilidad completa." },
    { icon: BarChart3, title: "Reportes inteligentes", desc: "Métricas en tiempo real de uso, montos y comportamiento financiero." },
    { icon: Lock, title: "Cero riesgo financiero", desc: "Sin impacto en flujo de caja. Nosotros financiamos los adelantos." },
    { icon: Smartphone, title: "100% digital", desc: "Sin papeleos. Tus empleados solicitan desde el móvil en cualquier momento." },
  ];
  return (
    <section id="producto" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Producto
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Todo lo que tu equipo necesita para su bienestar financiero
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Una plataforma completa que conecta a empresas, empleadores y empleados en una experiencia simple.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-[var(--shadow-card)]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-brand)]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Conecta tu nómina", desc: "Integramos AdeCerebiia con tu sistema de nómina en cuestión de días." },
    { n: "02", title: "Activa a tus empleados", desc: "Cada empleado recibe acceso a su panel personal y empieza a usarlo." },
    { n: "03", title: "Adelantos cuando los necesiten", desc: "Solicitan desde la app y reciben el dinero al instante en su cuenta." },
    { n: "04", title: "Descuento automático", desc: "El monto se descuenta de la próxima nómina, sin trabajo extra para ti." },
  ];
  return (
    <section id="como-funciona" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Cómo funciona
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Implementación simple. Impacto inmediato.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div
                className="text-3xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                {s.n}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForCompanies() {
  const benefits = [
    "Atrae y retiene talento con un beneficio diferencial",
    "Reduce el ausentismo causado por estrés financiero",
    "Aumenta la productividad y satisfacción del equipo",
    "Sin costo de implementación ni mantenimiento",
    "Integración con tu sistema de nómina actual",
    "Soporte dedicado para tu empresa y empleados",
  ];
  return (
    <section id="empresas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div
              className="overflow-hidden rounded-3xl p-10 text-primary-foreground shadow-[var(--shadow-brand)]"
              style={{ background: "var(--gradient-hero)" }}
            >
              <Building2 className="h-10 w-10 opacity-90" />
              <div className="mt-6 text-5xl font-bold leading-tight">
                +85%
              </div>
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

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              Para empresas
            </div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Un beneficio que tu equipo va a amar
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AdeCerebiia se integra con tu sistema de nómina y le entrega a tu equipo
              acceso a su salario ganado. Sin costo, sin riesgo, sin complicaciones.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Panel empleado
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Una experiencia pensada para tu equipo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tus empleados ven en tiempo real cuánto tienen disponible, su historial y solicitan adelantos en segundos.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="absolute -inset-8 -z-10 rounded-3xl opacity-30 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <div className="ml-3 text-xs text-muted-foreground">app.adecerebiia.com/dashboard</div>
            </div>
            <div className="grid grid-cols-12 gap-0">
              {/* Sidebar */}
              <aside className="col-span-3 border-r border-border bg-muted/30 p-5">
                <Logo />
                <div className="mt-6 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Principal</div>
                <nav className="mt-3 space-y-1">
                  {["Dashboard", "Adelanto", "Wallet", "Control", "Asistente", "Logros"].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                        i === 0 ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-current" />
                      {item}
                    </div>
                  ))}
                </nav>
              </aside>
              {/* Main */}
              <div className="col-span-9 p-6">
                <div className="text-sm text-muted-foreground">Buenas tardes,</div>
                <div className="text-2xl font-bold">Erick</div>
                <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                  <DashCard label="Disponible" value="$2.4M" highlight />
                  <DashCard label="Ingresos" value="$3.2M" />
                  <DashCard label="Adelantado" value="$500K" />
                  <DashCard label="Próximo pago" value="15 Abr" />
                </div>
                <div className="mt-4 h-32 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/30 p-4">
                  <div className="text-xs font-medium text-muted-foreground">Ingresos vs Adelantos</div>
                  <svg viewBox="0 0 400 80" className="mt-2 h-20 w-full">
                    <path d="M0,40 Q100,20 200,30 T400,25" fill="none" stroke="oklch(0.52 0.24 268)" strokeWidth="2" />
                    <path d="M0,60 Q100,55 200,58 T400,55" fill="none" stroke="oklch(0.62 0.22 295)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-1 text-lg font-bold ${highlight ? "text-primary" : ""}`}>{value}</div>
    </div>
  );
}

function Stats() {
  const stats = [
    { icon: Users, value: "50K+", label: "Empleados activos" },
    { icon: Building2, value: "200+", label: "Empresas conectadas" },
    { icon: Clock, value: "< 30s", label: "Tiempo promedio" },
    { icon: Shield, value: "99.9%", label: "Disponibilidad" },
  ];
  return (
    <section className="border-y border-border/60 bg-muted/30 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto h-6 w-6 text-primary" />
            <div
              className="mt-3 text-4xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              {value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
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
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-transform hover:scale-[1.02]"
              >
                Solicitar demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-white/10"
              >
                Hablar con ventas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <FooterCol title="Producto" links={["Características", "Precios", "Seguridad", "Integraciones"]} />
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
