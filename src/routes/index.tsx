import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  Activity,
  ArrowUp,
  CalendarClock,
  Check,
  FileCheck2,
  FileSpreadsheet,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Reglas comerciales vigentes (configurables desde el panel admin).
   Si cambian en la plataforma, actualizarlas aquí.
   ───────────────────────────────────────────────────────────── */
const TARIFA_POR_CUOTA = 8_000;
const TOPE_PORCENTAJE = 30;
const MAX_CUOTAS = 3;

const WHATSAPP_NUMBER = "573209576723"; // +57 320 957 6723
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero conocer ZÜPA para los empleados de mi empresa.",
)}`;

/* Aplicación de ZÜPA (empleados y empresas). Se puede sobrescribir con VITE_APP_URL. */
const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) ?? "https://adelantos.cerebiia.com.co";
const LOGIN_URL = `${APP_URL}/login`;
const ACTIVATE_URL = `${APP_URL}/registro?activar=1`;

const cop = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });
const formatCOP = (value: number) => `$${cop.format(Math.round(value))}`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Retraso escalonado para elementos con data-reveal. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/**
 * Revela con una transición los elementos marcados con `data-reveal`
 * cuando entran en pantalla. Sin JS o con movimiento reducido, todo es visible.
 */
function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Valor que "rueda" hasta el nuevo número cuando cambia (simulador). */
function useTweened(target: number, duration = 420) {
  const [value, setValue] = useState(target);
  const from = useRef(target);
  const raf = useRef(0);
  useEffect(() => {
    if (prefersReducedMotion()) {
      from.current = target;
      setValue(target);
      return;
    }
    const start = performance.now();
    const origin = from.current;
    cancelAnimationFrame(raf.current);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const current = origin + (target - origin) * (1 - Math.pow(1 - t, 3));
      from.current = current;
      setValue(current);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return value;
}

/** Sección visible en el centro de la pantalla (para marcarla en el menú). */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const NAV_SECTIONS = ["confianza", "como-funciona", "simulador", "panel"];

/** Monto que cuenta desde 0 la primera vez que aparece en pantalla. */
function CountUp({
  value,
  duration = 1100,
  prefix = "",
  format = formatCOP,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setCurrent(value * (1 - Math.pow(1 - t, 3)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setCurrent(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {format(current)}
    </span>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZÜPA · Adelantos de nómina sin costo para tu empresa" },
      {
        name: "description",
        content:
          "Tus empleados reciben parte del salario que ya trabajaron, cuando lo necesitan. ZÜPA pone el dinero y tu empresa no paga nada: solo descuenta las cuotas en la nómina.",
      },
      { property: "og:title", content: "ZÜPA · Adelantos de nómina sin costo para tu empresa" },
      {
        property: "og:description",
        content:
          "Un beneficio para tu equipo que tu empresa no paga. Adelantos de nómina en 1 a 3 cuotas, 100 % digitales.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="scroll-progress" aria-hidden />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:text-navy"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido">
        <Hero />
        <Ticker />
        <ZeroDeal />
        <TrustSection />
        <HowItWorks />
        <Simulator />
        <ForCompanies />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Piezas compartidas ---------- */

function Logo({ className = "h-10" }: { className?: string }) {
  return <img src="/zupa-logo.png" alt="ZÜPA" className={`w-auto rounded-lg ${className}`} />;
}

function WhatsAppButton({
  children,
  tone = "lime",
  className = "",
}: {
  children: ReactNode;
  tone?: "lime" | "navy";
  className?: string;
}) {
  const tones = {
    lime: "bg-lime text-navy hover:bg-[oklch(0.95_0.17_125)] focus-visible:ring-lime focus-visible:ring-offset-navy",
    navy: "bg-navy text-white hover:bg-navy-2 focus-visible:ring-navy focus-visible:ring-offset-white",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${tones[tone]} ${className}`}
    >
      <MessageCircle className="h-[1.1em] w-[1.1em]" aria-hidden />
      {children}
    </a>
  );
}

function SectionHeading({
  title,
  intro,
  align = "left",
  invert = false,
}: {
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div data-reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2
        className={`text-balance text-[clamp(2rem,4.2vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] ${
          invert ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            invert ? "text-lavender" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const active = useActiveSection(NAV_SECTIONS);
  const links = [
    { href: "#confianza", label: "Confianza" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#simulador", label: "Simulador" },
    { href: "#panel", label: "Panel empresa" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6">
        <a href="#contenido" aria-label="ZÜPA, inicio" className="-ml-2 rounded-lg">
          <Logo className="h-12" />
        </a>
        <nav aria-label="Secciones" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href.slice(1) ? "true" : undefined}
              className={`nav-link relative text-sm font-medium transition-colors hover:text-white ${
                active === l.href.slice(1) ? "nav-link--active text-white" : "text-lavender"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href={LOGIN_URL}
            className="inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-white transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            Ingresar
          </a>
          <WhatsAppButton className="min-h-11 px-4 py-2.5 text-sm">Agendar demo</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <p className="hero-in text-base font-medium text-lime" style={delay(0)}>Adelantos de nómina para tu equipo</p>
          <h1 style={delay(90)} className="hero-in mt-4 text-balance text-[clamp(2.35rem,5.6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            Un beneficio para tus empleados que tu empresa no paga.
          </h1>
          <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-lavender" style={delay(220)}>
            Tus empleados reciben parte del salario que ya trabajaron, el día que lo necesitan.
            ZÜPA pone el dinero; tu empresa solo descuenta las cuotas en la nómina.
          </p>
          <div className="hero-in mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center" style={delay(340)}>
            <WhatsAppButton className="w-full px-6 py-3.5 text-base sm:w-auto">Agendar una demo</WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-base font-medium text-white sm:w-auto transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              Ver cómo funciona
            </a>
          </div>
          <p className="hero-in mt-6 text-sm text-lavender" style={delay(440)}>
            ¿Ya usas ZÜPA?{" "}
            <a
              href={LOGIN_URL}
              className="rounded font-semibold text-lime underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              Ingresa a la app
            </a>
          </p>
        </div>

        <PayslipVisual />
      </div>
    </section>
  );
}

/* ---------- Hero visual: el desprendible de nómina ---------- */

/**
 * El documento que RR. HH. conoce de memoria. El adelanto aparece como una
 * deducción más: eso es todo lo que cambia para la empresa.
 */
function PayslipVisual() {
  const salary = 3_000_000;
  const salud = salary * 0.04;
  const pension = salary * 0.04;
  const cuota = 250_000;
  const neto = salary - salud - pension - cuota;

  return (
    <figure className="payslip relative mx-auto w-full max-w-[470px]" aria-label="Ejemplo de desprendible de nómina con un adelanto ZÜPA">
      <div className="payslip-card overflow-hidden rounded-2xl bg-white text-foreground shadow-[0_40px_90px_-35px_oklch(0_0_0/0.75)]">
        <div className="flex items-start justify-between gap-4 border-b border-dashed border-border px-5 pb-4 pt-5 sm:px-6">
          <div className="min-w-0">
            <p className="font-display text-lg font-bold text-navy">Desprendible de nómina</p>
            <p className="mt-0.5 text-sm text-muted-foreground">Laura Méndez, noviembre de 2026</p>
          </div>
          <span className="shrink-0 rounded-full bg-mist px-3 py-1 text-xs font-medium text-muted-foreground">Ejemplo</span>
        </div>

        <div className="px-5 py-4 text-[15px] sm:px-6">
          <p className="text-xs font-semibold text-muted-foreground">Devengado</p>
          <PayslipRow label="Salario básico" value={formatCOP(salary)} />
          <p className="mt-3 text-xs font-semibold text-muted-foreground">Deducciones</p>
          <PayslipRow label="Salud (4 %)" value={`−${formatCOP(salud)}`} />
          <PayslipRow label="Pensión (4 %)" value={`−${formatCOP(pension)}`} />
          <div className="payslip-mark -mx-2 mt-1 rounded-lg px-2">
            <PayslipRow label="Adelanto ZÜPA, cuota 1 de 2" value={`−${formatCOP(cuota)}`} strong />
          </div>
          {/* Nota al margen, como la escribiría alguien de nómina */}
          <p className="payslip-note mt-2.5 inline-flex items-start gap-2 rounded-lg bg-navy px-3 py-2 text-[13px] font-semibold leading-snug text-lime">
            <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Lo único que hace tu empresa: aplicar este descuento.
          </p>
        </div>

        <div className="flex items-baseline justify-between gap-4 border-t border-border bg-mist px-5 py-4 sm:px-6">
          <span className="text-sm font-medium text-muted-foreground">Neto a pagar</span>
          <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-navy tabular-nums">{formatCOP(neto)}</span>
        </div>
      </div>

      <figcaption className="payslip-total mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/15 px-5 py-4">
        <span className="text-base font-medium text-white">Costo para tu empresa</span>
        <span className="font-display text-4xl font-extrabold leading-none tracking-[-0.04em] text-lime">$0</span>
      </figcaption>
    </figure>
  );
}

function PayslipRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-1.5">
      <span className={strong ? "font-semibold text-navy" : "text-foreground"}>{label}</span>
      <span className={`shrink-0 tabular-nums ${strong ? "font-bold text-navy" : "text-muted-foreground"}`}>{value}</span>
    </div>
  );
}

/** Notificación que ve el empleado cuando recibe su dinero. */
function DisbursedToast({ amount }: { amount: number }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 text-foreground shadow-[0_24px_60px_-20px_oklch(0.21_0.07_280/0.45)] ring-1 ring-border">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime text-navy">
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M5 10.5l3.2 3.2L15 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-sm font-bold text-navy">Adelanto desembolsado</p>
        <p className="text-xs text-muted-foreground">{formatCOP(amount)} llegaron a tu cuenta</p>
      </div>
    </div>
  );
}

/** Réplica simplificada de la pantalla de inicio del empleado en la app. */
function PhoneMockup() {
  return (
    <div className="rounded-[2.75rem] bg-[oklch(0.16_0.06_281)] p-2.5 shadow-[0_40px_90px_-30px_oklch(0_0_0/0.7)] ring-1 ring-white/10">
      <div className="overflow-hidden rounded-[2.2rem] bg-mist" aria-hidden>
        <div className="flex items-center justify-between bg-white px-4 pb-2.5 pt-4">
          <span className="font-display text-base font-extrabold text-navy">ZÜPA</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
            DG
          </span>
        </div>
        <div className="space-y-3 p-3">
          <div className="rounded-2xl bg-navy p-4 text-white">
            <p className="font-display text-[15px] font-bold">Buenos días, Daniela</p>
            <p className="mt-3 text-[10px] text-lavender">Disponible para adelanto</p>
            <p className="font-display text-[32px] font-extrabold leading-none tracking-[-0.04em] text-lime">$510.000</p>
            <p className="mt-1 text-[9px] text-lavender">Tope del {TOPE_PORCENTAJE} % de lo trabajado</p>
            <div className="mt-3.5 rounded-lg bg-lime py-2 text-center text-[11px] font-bold text-navy">
              Solicitar adelanto
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white p-2.5">
              <p className="text-[9px] text-muted-foreground">Próximo pago</p>
              <p className="font-display text-sm font-bold text-navy">30 de nov</p>
            </div>
            <div className="rounded-xl bg-white p-2.5">
              <p className="text-[9px] text-muted-foreground">Cuotas</p>
              <p className="font-display text-sm font-bold text-navy">1 a {MAX_CUOTAS}</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-2.5">
            <p className="text-[9px] text-muted-foreground">¿En cuántas cuotas?</p>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className={`rounded-md py-1.5 text-center text-[10px] font-semibold ${
                    n === 2 ? "bg-navy text-white" : "bg-mist text-navy"
                  }`}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
          <div className="h-1" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Cinta de datos ---------- */

function Ticker() {
  const facts = [
    "Tu empresa paga $0",
    "100 % digital",
    `De 1 a ${MAX_CUOTAS} cuotas`,
    "Sin intereses",
    `Hasta el ${TOPE_PORCENTAJE} % de lo trabajado`,
    "Primer adelanto con la primera cuota gratis",
  ];
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {facts.map((f) => (
        <li key={f} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-display text-[clamp(1.25rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
            {f}
          </span>
          <span className="h-2 w-2 rounded-full bg-navy" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden bg-lime py-5 text-navy">
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* ---------- El trato: la cuenta de cada uno ---------- */

function ZeroDeal() {
  return (
    <section className="bg-mist py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          align="center"
          title="Así se ve la cuenta para cada uno."
          intro="Tu empresa no pone el dinero ni paga comisiones. El empleado paga una tarifa fija por cuota, solo cuando usa el adelanto."
        />
        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 md:grid-cols-2 md:gap-8">
          <CompanyBill />
          <AdvanceReceipt amount={500_000} fee={TARIFA_POR_CUOTA} />
        </div>
      </div>
    </section>
  );
}

/** La "factura" de la empresa: todo en $0. */
function CompanyBill() {
  const rows = ["Implementación", "Mensualidad", "Comisión por adelanto", "Dinero que adelantas"];
  return (
    <figure data-reveal="left" className="flex w-full flex-col" aria-label="Lo que paga tu empresa">
      <div className="flex flex-1 flex-col overflow-hidden rounded-3xl bg-navy text-white shadow-[0_30px_70px_-30px_oklch(0.21_0.07_280/0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="font-display text-lg font-bold">Tu empresa</span>
          <span className="whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-lavender">
            Todos los meses
          </span>
        </div>
        <dl className="flex-1 divide-y divide-white/10 px-6">
          {rows.map((label) => (
            <div key={label} className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="text-sm text-lavender">{label}</dt>
              <dd className="font-display text-base font-semibold">$0</dd>
            </div>
          ))}
        </dl>
        <div className="m-3 flex items-center justify-between gap-4 rounded-2xl bg-lime px-5 py-4 text-navy">
          <span className="text-base font-semibold">Total a pagar</span>
          <span className="zero-pop font-display text-5xl font-extrabold leading-none tracking-[-0.04em]">$0</span>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-muted-foreground">
        Solo aplicas en la nómina el descuento que te reportamos.
      </figcaption>
    </figure>
  );
}

/** Comprobante de ejemplo: explica el modelo de negocio en una imagen. */
function AdvanceReceipt({ amount, fee }: { amount: number; fee: number }) {
  const rows = [
    { label: "Monto solicitado", value: <CountUp value={amount} /> },
    { label: "Comisión (la paga el empleado)", value: <CountUp value={fee} prefix="−" duration={700} />, muted: true },
    { label: "Llega a su cuenta", value: <CountUp value={amount - fee} duration={1300} />, strong: true },
    { label: "Se descuenta en la próxima nómina", value: <CountUp value={amount} /> },
  ];
  return (
    <figure data-reveal="right" style={delay(120)} className="flex w-full flex-col" aria-label="Ejemplo de un adelanto con ZÜPA">
      <div className="flex flex-1 flex-col overflow-hidden rounded-3xl bg-white text-foreground shadow-[0_30px_70px_-35px_oklch(0.21_0.07_280/0.45)] ring-1 ring-border">
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="font-display text-lg font-bold text-navy">Tu empleado</span>
          <span className="shrink-0 whitespace-nowrap rounded-full bg-mist px-3 py-1 text-xs font-medium text-muted-foreground">
            Ejemplo con 1 cuota
          </span>
        </div>
        <dl className="flex-1 divide-y divide-border px-6">
          {rows.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="text-sm text-muted-foreground">{r.label}</dt>
              <dd
                className={`shrink-0 whitespace-nowrap font-display tabular-nums ${
                  r.strong ? "text-xl font-bold text-navy" : r.muted ? "text-base text-muted-foreground" : "text-base font-semibold text-navy"
                }`}
              >
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="m-3 flex items-center justify-between gap-4 rounded-2xl bg-lime px-5 py-4 text-navy">
          <span className="text-base font-semibold">Costo para tu empresa</span>
          <span className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em]">$0</span>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-muted-foreground">
        Tarifa de {formatCOP(TARIFA_POR_CUOTA)} por cuota, sin intereses.
      </figcaption>
    </figure>
  );
}

/* ---------- Confianza para la empresa ---------- */

function TrustSection() {
  const items = [
    {
      icon: Wallet,
      q: "¿Mi empresa tiene que poner dinero?",
      a: "No. ZÜPA desembolsa cada adelanto desde sus propias cuentas. La caja de tu empresa no se toca.",
    },
    {
      icon: FileSpreadsheet,
      q: "¿Cambia mi proceso de nómina?",
      a: "No. Al cierre del mes recibes un Excel con el descuento de cada persona y lo aplicas como cualquier otra deducción.",
    },
    {
      icon: ShieldCheck,
      q: "¿Y si alguien pide más de lo que puede pagar?",
      a: `No puede. El tope es el ${TOPE_PORCENTAJE} % de lo que ya trabajó en el mes, en máximo ${MAX_CUOTAS} cuotas.`,
    },
    {
      icon: Users,
      q: "¿Quién valida a los empleados?",
      a: "ZÜPA. Antes de su primer adelanto, cada empleado sube su documento de identidad, una selfie y su certificación laboral.",
    },
    {
      icon: Activity,
      q: "¿Puedo ver todo lo que pasa?",
      a: "Sí. Cada solicitud, desembolso y descuento queda en tu panel, con historial de auditoría.",
    },
  ];

  return (
    <section id="confianza" className="scroll-mt-16 py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            title="Lo que le preocupa a tu empresa, resuelto."
            intro="Estas son las preguntas que nos hace cada gerente de recursos humanos antes de firmar. Sin letra pequeña."
          />
          <p data-reveal className="mt-6 text-sm text-muted-foreground">
            ZÜPA es operado por Cerebiia.
          </p>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {items.map(({ icon: Icon, q, a }, i) => (
            <li key={q} data-reveal style={delay(i * 80)} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6 sm:gap-x-5 sm:py-7">
              <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-lime">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-bold leading-snug text-navy">{q}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Cómo funciona: historia con scroll ---------- */

const HOW_STEPS = [
  {
    title: "Firmamos el convenio",
    desc: "Sin costo de implementación ni mensualidad. Cargas tu nómina con nuestra plantilla de Excel.",
    highlight: "Plantilla de Excel lista",
  },
  {
    title: "Tus empleados activan su cuenta",
    desc: "Cada empleado entra con su documento, valida su identidad y queda listo para pedir.",
    highlight: "100 % digital",
  },
  {
    title: "Piden y reciben su dinero",
    desc: `Hasta el ${TOPE_PORCENTAJE} % de lo que ya trabajaron en el mes, en 1 a ${MAX_CUOTAS} cuotas. ZÜPA desembolsa a su cuenta.`,
    highlight: "Desembolso directo de ZÜPA",
  },
  {
    title: "Descuentas y nos transfieres",
    desc: "Al cierre del mes te enviamos el reporte de cuotas. Lo aplicas en tu nómina normal y nos transfieres lo descontado.",
    highlight: "Reporte listo para nómina",
  },
];

function HowItWorks() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    list.querySelectorAll("[data-index]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="scroll-mt-16 bg-mist py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          title="Cómo funciona."
          intro="Cuatro pasos. Tu equipo de nómina hace lo mismo que ya hace hoy: aplicar descuentos."
        />

        <div className="mt-12 lg:mt-6 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <ol ref={listRef}>
            {HOW_STEPS.map((step, i) => {
              const isActive = active === i;
              return (
                <li
                  key={step.title}
                  data-index={i}
                  className="mt-14 first:mt-0 lg:mt-0 lg:flex lg:min-h-[64vh] lg:items-center"
                >
                  <div className={`transition-opacity duration-500 ${isActive ? "lg:opacity-100" : "lg:opacity-30"}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-base font-extrabold transition-colors duration-500 ${
                          isActive ? "bg-lime text-navy" : "bg-navy text-lime"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-navy/60">
                        Paso {i + 1} de {HOW_STEPS.length}
                      </span>
                    </div>
                    <h3 className="mt-4 text-balance text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-lg leading-relaxed text-muted-foreground">{step.desc}</p>
                    <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-navy ring-1 ring-border">
                      <span className="h-2 w-2 rounded-full bg-lime" aria-hidden />
                      {step.highlight}
                    </p>

                    {/* En celular, cada paso trae su escena debajo */}
                    <div data-reveal="scale" className="mt-7 rounded-[1.75rem] bg-navy p-5 lg:hidden">
                      <StoryScene index={i} active />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* En escritorio, la escena queda fija y cambia con cada paso */}
          <div className="hidden lg:block" aria-hidden>
            <div className="sticky top-[calc(50vh-16rem)] h-[32rem]">
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-8 shadow-[0_40px_90px_-40px_oklch(0.21_0.07_280/0.6)]">
                <div className="flex gap-2">
                  {HOW_STEPS.map((step, i) => (
                    <span key={step.title} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                      <span
                        className={`block h-full origin-left rounded-full bg-lime transition-transform duration-700 ${
                          i <= active ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </span>
                  ))}
                </div>
                {HOW_STEPS.map((step, i) => (
                  <div
                    key={step.title}
                    className={`absolute inset-x-8 bottom-8 top-16 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
                    }`}
                  >
                    <StoryScene index={i} active={active === i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryScene({ index, active }: { index: number; active: boolean }) {
  const scenes = [SceneAgreement, SceneActivation, SceneDisbursement, SceneClosing];
  const Scene = scenes[index];
  return (
    <div className="scene w-full" data-active={active}>
      <Scene />
    </div>
  );
}

function SceneCheck() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-navy">
      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
    </span>
  );
}

function SceneAgreement() {
  const items = ["Sin costo de implementación", "Sin mensualidad", "Nómina cargada con la plantilla"];
  return (
    <div className="relative mx-auto w-full max-w-sm rounded-2xl bg-white p-6 text-foreground">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-navy">
          <FileCheck2 className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-display text-base font-bold text-navy">Convenio ZÜPA</p>
          <p className="text-xs text-muted-foreground">Acme Colombia S.A.S.</p>
        </div>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={item} className="scene-item flex items-center gap-3 text-[15px] text-navy" style={delay(200 + i * 220)}>
            <SceneCheck />
            {item}
          </li>
        ))}
      </ul>
      <span className="scene-stamp absolute -right-3 -top-3 rotate-6 rounded-xl border-2 border-navy bg-lime px-3 py-1.5 font-display text-sm font-extrabold text-navy" style={delay(950)}>
        Firmado
      </span>
    </div>
  );
}

function SceneActivation() {
  const checks = ["Documento de identidad", "Selfie", "Certificación laboral"];
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-6 text-foreground">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">LM</span>
        <div>
          <p className="font-display text-base font-bold text-navy">Laura Méndez</p>
          <p className="text-xs text-muted-foreground">Activación de cuenta</p>
        </div>
      </div>
      <ul className="mt-5 divide-y divide-border">
        {checks.map((item, i) => (
          <li key={item} className="scene-item flex items-center justify-between gap-3 py-2.5 text-[15px] text-navy" style={delay(200 + i * 220)}>
            {item}
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
              Validado <SceneCheck />
            </span>
          </li>
        ))}
      </ul>
      <p className="scene-item mt-4 rounded-xl bg-lime px-4 py-2.5 text-center font-display text-sm font-bold text-navy" style={delay(950)}>
        Cuenta activa, lista para pedir
      </p>
    </div>
  );
}

function SceneDisbursement() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-3">
      <div className="rounded-2xl bg-white p-6 text-foreground">
        <p className="text-sm text-muted-foreground">Llega a la cuenta de Laura</p>
        <p className="scene-item mt-1 font-display text-5xl font-extrabold tracking-[-0.04em] text-navy" style={delay(150)}>
          $492.000
        </p>
        <div className="mt-4 space-y-1.5 border-t border-border pt-3 text-sm">
          <div className="scene-item flex justify-between text-muted-foreground" style={delay(350)}>
            <span>Solicitado</span>
            <span className="tabular-nums">$500.000</span>
          </div>
          <div className="scene-item flex justify-between text-muted-foreground" style={delay(500)}>
            <span>Comisión (la paga Laura)</span>
            <span className="tabular-nums">−$8.000</span>
          </div>
        </div>
      </div>
      <div className="scene-item" style={delay(800)}>
        <DisbursedToast amount={492_000} />
      </div>
    </div>
  );
}

function SceneClosing() {
  const rows = [
    ["Laura Méndez", "Cuota 1 de 2", 250_000],
    ["Andrés Rojas", "Cuota 1 de 1", 250_000],
    ["Camila Torres", "Cuota 2 de 3", 200_000],
  ] as const;
  const total = rows.reduce((sum, r) => sum + r[2], 0);
  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white text-foreground">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[oklch(0.55_0.13_150)] text-white">
          <FileSpreadsheet className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-display text-sm font-bold text-navy">Cierre de nómina, noviembre</p>
          <p className="text-xs text-muted-foreground">Reporte de ZÜPA</p>
        </div>
      </div>
      <ul className="divide-y divide-border px-5 text-sm">
        {rows.map(([name, cuota, amount], i) => (
          <li key={name} className="scene-item flex items-center justify-between gap-3 py-2.5" style={delay(200 + i * 180)}>
            <span>
              <span className="block font-medium text-navy">{name}</span>
              <span className="text-xs text-muted-foreground">{cuota}</span>
            </span>
            <span className="tabular-nums font-semibold text-navy">{formatCOP(amount)}</span>
          </li>
        ))}
      </ul>
      <div className="scene-item flex items-center justify-between gap-3 bg-lime px-5 py-3.5 text-navy" style={delay(850)}>
        <span className="inline-flex items-center gap-2 text-sm font-bold">
          <SceneCheck /> Transferencia a ZÜPA
        </span>
        <span className="font-display text-lg font-extrabold tabular-nums">{formatCOP(total)}</span>
      </div>
    </div>
  );
}

/* ---------- Simulador ---------- */

function Simulator() {
  const [amount, setAmount] = useState(500_000);
  const [cuotas, setCuotas] = useState(2);
  const [firstAdvance, setFirstAdvance] = useState(false);
  const amountId = useId();
  const firstId = useId();

  const chargedCuotas = firstAdvance ? cuotas - 1 : cuotas;
  const fee = TARIFA_POR_CUOTA * chargedCuotas;
  const received = amount - fee;
  const perCuota = amount / cuotas;
  const fillPct = ((amount - 50_000) / (1_500_000 - 50_000)) * 100;
  const feeShown = useTweened(fee);
  const receivedShown = useTweened(received);
  const perCuotaShown = useTweened(perCuota);

  const perks = [
    { icon: Smartphone, text: "Lo pide desde el celular, sin filas ni papeles." },
    { icon: Wallet, text: "El dinero llega a su cuenta bancaria." },
    { icon: ShieldCheck, text: `Puede pedir hasta el ${TOPE_PORCENTAJE} % de lo que ya trabajó: nadie se endeuda de más.` },
  ];

  return (
    <section id="simulador" className="scroll-mt-16 py-16 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            title="Así lo vive tu equipo."
            intro="Precio claro desde el primer día. Mueve los valores y mira cuánto recibe un empleado y cuánto paga tu empresa."
          />
          <div data-reveal className="relative mx-auto mt-12 hidden w-[270px] lg:block">
            <PhoneMockup />
            <div className="absolute -left-24 top-[58%] w-[250px]">
              <DisbursedToast amount={received} />
            </div>
          </div>
          <ul className="mt-10 space-y-5 lg:hidden">
            {perks.map(({ icon: Icon, text }, i) => (
              <li key={text} data-reveal style={delay(i * 110)} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime/40 text-navy">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="pt-2 text-base leading-relaxed text-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="scale" className="rounded-3xl border border-border bg-white p-6 sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={amountId} className="text-sm font-medium text-muted-foreground">
              Monto del adelanto
            </label>
            <output htmlFor={amountId} className="font-display text-3xl font-extrabold tracking-[-0.03em] text-navy tabular-nums">
              {formatCOP(amount)}
            </output>
          </div>
          <input
            id={amountId}
            type="range"
            min={50_000}
            max={1_500_000}
            step={10_000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="zupa-range mt-4 w-full"
            style={{ "--fill": `${fillPct}%` } as React.CSSProperties}
          />

          <fieldset className="mt-7">
            <legend className="text-sm font-medium text-muted-foreground">Número de cuotas</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {Array.from({ length: MAX_CUOTAS }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-pressed={cuotas === n}
                  onClick={() => setCuotas(n)}
                  className={`rounded-xl border py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${
                    cuotas === n
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-white text-navy hover:bg-mist"
                  }`}
                >
                  {n} {n === 1 ? "cuota" : "cuotas"}
                </button>
              ))}
            </div>
          </fieldset>

          <label htmlFor={firstId} className="mt-5 flex min-h-11 cursor-pointer items-center gap-3 rounded-xl text-[15px] text-foreground">
            <input
              id={firstId}
              type="checkbox"
              checked={firstAdvance}
              onChange={(e) => setFirstAdvance(e.target.checked)}
              className="h-6 w-6 shrink-0 rounded accent-[oklch(0.2122_0.0732_280.44)]"
            />
            Es su primer adelanto (la primera cuota no tiene comisión)
          </label>

          <dl className="mt-7 divide-y divide-border border-t border-border" aria-live="polite">
            <SimRow
              label={`Comisión (${chargedCuotas} × ${formatCOP(TARIFA_POR_CUOTA)})`}
              value={Math.round(feeShown) === 0 ? "$0" : `−${formatCOP(feeShown)}`}
            />
            <SimRow label="Llega a su cuenta" value={formatCOP(receivedShown)} strong />
            <SimRow
              label={cuotas === 1 ? "Se descuenta en la próxima nómina" : `Se descuenta en ${cuotas} nóminas de`}
              value={`${cuotas === 1 ? "" : "≈ "}${formatCOP(perCuotaShown)}`}
            />
          </dl>

          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-navy px-5 py-4 text-white">
            <span className="text-base font-medium">Costo para tu empresa</span>
            <span className="font-display text-4xl font-extrabold leading-none text-lime">$0</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3.5">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className={`shrink-0 whitespace-nowrap font-display tabular-nums text-navy ${strong ? "text-2xl font-extrabold" : "text-base font-semibold"}`}>
        {value}
      </dd>
    </div>
  );
}

/* ---------- Para tu empresa ---------- */

function ForCompanies() {
  const modules = [
    { icon: Users, title: "Tu planta en un solo lugar", desc: "Carga o actualiza la nómina con una plantilla de Excel." },
    { icon: Activity, title: "Monitoreo de adelantos", desc: "Quién pidió, cuánto y en cuántas cuotas, en tiempo real." },
    { icon: CalendarClock, title: "Seguimiento de cuotas", desc: "Lo descontado y lo pendiente de cada empleado." },
    { icon: FileSpreadsheet, title: "Cierre del mes listo", desc: "El reporte de descuentos para tu nómina, exportable a Excel." },
  ];

  return (
    <section id="panel" className="scroll-mt-16 overflow-hidden bg-navy pt-16 pb-10 text-white sm:pt-28 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          invert
          title="Un beneficio que se administra solo."
          intro="Tu equipo de recursos humanos tiene su propio panel. Sin conciliaciones manuales ni correos de ida y vuelta: cada mes recibes el valor exacto que debes descontar a cada persona."
        />

        <figure data-reveal="scale" className="mt-14">
          <DashboardMockup />
          <figcaption className="mt-4 text-sm text-lavender">
            Panel de empresa de ZÜPA, con datos de ejemplo.
          </figcaption>
        </figure>

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:mt-14 lg:grid-cols-4 lg:gap-x-10">
          {modules.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} data-reveal style={delay(i * 110)}>
              <Icon className="h-6 w-6 text-lime" aria-hidden />
              <h3 className="mt-3 text-base font-bold leading-snug text-white sm:text-lg">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-lavender sm:text-[15px]">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Réplica del panel de empresa (ventana de navegador). Datos ilustrativos. */
function DashboardMockup() {
  const nav = ["Dashboard", "Mis empleados", "Monitoreo adelantos", "Seguimiento cuotas", "Retenciones y cierres"];
  const rows = [
    { name: "Laura Méndez", amount: 400_000, cuotas: "2 de 2", state: "Al día" },
    { name: "Andrés Rojas", amount: 250_000, cuotas: "1 de 1", state: "Al día" },
    { name: "Camila Torres", amount: 600_000, cuotas: "1 de 3", state: "En curso" },
  ];
  return (
    <div
      className="overflow-hidden rounded-2xl bg-white ring-1 ring-white/15 text-foreground shadow-[0_50px_120px_-40px_oklch(0_0_0/0.8)]"
      aria-hidden
    >
      {/* barra del navegador */}
      <div className="flex items-center gap-2 border-b border-border bg-mist px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.17_25)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.82_0.15_85)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.75_0.16_145)]" />
        <span className="ml-4 hidden rounded-md bg-white px-3 py-1 text-xs text-muted-foreground sm:block">
          app.zupa · Panel empresa
        </span>
      </div>

      <div className="grid md:grid-cols-[210px_1fr]">
        {/* sidebar */}
        <div className="hidden bg-navy p-4 md:block">
          <img src="/zupa-logo.png" alt="" className="-ml-2 h-12 w-auto" />
          <ul className="mt-4 space-y-1">
            {nav.map((item, i) => (
              <li
                key={item}
                className={`rounded-lg px-3 py-2 text-[13px] ${
                  i === 0 ? "bg-lime font-bold text-navy" : "text-lavender"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* contenido */}
        <div className="space-y-4 bg-mist p-4 sm:p-6">
          <div className="rounded-2xl bg-navy p-5 text-white sm:p-6">
            <p className="font-display text-lg font-bold sm:text-xl">Buenos días, Recursos Humanos</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-[1.2fr_2fr] sm:items-end">
              <div>
                <p className="text-xs text-lavender">Nómina habilitada para adelantos</p>
                <p className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-lime">
                  <CountUp value={92} duration={1400} format={(n) => `${Math.round(n)}%`} />
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm">
                {[
                  ["Adelantos", <CountUp key="a" value={18} format={(n) => String(Math.round(n))} />],
                  ["A descontar", <CountUp key="d" value={4_320_000} duration={1400} />],
                  ["Tu costo", "$0"],
                ].map(([label, value]) => (
                  <div key={label as string} className="border-l border-white/10 pl-3">
                    <p className="text-[11px] text-lavender">{label}</p>
                    <p className="font-display text-base font-bold sm:text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="font-display text-sm font-bold text-navy">Cuotas de este mes</p>
              <span className="whitespace-nowrap rounded-lg bg-lime/40 px-2.5 py-1 text-xs font-semibold text-navy">Exportar Excel</span>
            </div>
            <table className="w-full text-left text-[13px]">
              <thead className="text-muted-foreground">
                <tr>
                  <th className="px-4 py-2 font-medium">Empleado</th>
                  <th className="px-4 py-2 font-medium">Adelanto</th>
                  <th className="hidden px-4 py-2 font-medium sm:table-cell">Cuota</th>
                  <th className="hidden px-4 py-2 font-medium sm:table-cell">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r, i) => (
                  <tr key={r.name} data-reveal="row" style={delay(300 + i * 140)}>
                    <td className="whitespace-nowrap px-4 py-2.5 font-medium text-navy">{r.name}</td>
                    <td className="px-4 py-2.5 tabular-nums">{formatCOP(r.amount)}</td>
                    <td className="hidden px-4 py-2.5 sm:table-cell">{r.cuotas}</td>
                    <td className="hidden px-4 py-2.5 sm:table-cell">
                      <span className="whitespace-nowrap rounded-full bg-mist px-2 py-0.5 text-xs text-navy">{r.state}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- CTA final ---------- */

function FinalCta() {
  return (
    <section className="bg-navy px-5 pb-20 pt-6 sm:px-6 sm:pb-28 sm:pt-10">
      <div
        data-reveal="scale"
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-lime px-7 py-12 text-navy sm:px-14 sm:py-16 lg:px-16 lg:py-20 shadow-[0_25px_60px_-15px_rgba(216,255,62,0.22)]"
      >
        {/* Formas y brillos sutiles de fondo para dar profundidad */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-navy/10 blur-2xl"
          aria-hidden
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-navy/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-navy">
            <span className="h-2 w-2 rounded-full bg-navy" />
            Sin costo de implementación · Listo en 48 horas
          </div>

          <h2 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-navy">
            Lleva ZÜPA a tu empresa este mes.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy/85 sm:text-xl">
            Agenda 20 minutos por WhatsApp y te mostramos el panel de empresa y cómo se ve el cierre de
            nómina con tus números.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm font-semibold text-navy/90">
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 stroke-[2.5]" /> Tu empresa paga $0
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 stroke-[2.5]" /> Carga rápida con Excel
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 stroke-[2.5]" /> Sin permanencia obligatoria
            </span>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <WhatsAppButton
              tone="navy"
              className="w-full whitespace-nowrap px-8 py-4 text-base font-bold shadow-lg transition-all hover:shadow-xl sm:w-auto"
            >
              Agendar demo por WhatsApp
            </WhatsAppButton>
            <span className="text-xs font-medium text-navy/70">Atención directa · Respuesta en minutos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  const links = [
    { href: "#confianza", label: "Confianza" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#simulador", label: "Simulador" },
    { href: "#panel", label: "Panel de empresa" },
  ];
  const linkClass =
    "inline-block rounded py-1.5 text-[15px] text-lavender transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime";

  return (
    <footer className="overflow-hidden bg-navy text-white">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr] lg:gap-10 lg:pb-16 lg:pt-20">
        <div data-reveal>
          <Logo className="-ml-2 h-14" />
          <p className="mt-4 font-display text-2xl font-bold tracking-[-0.02em]">Tu plata. Tus reglas.</p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-lavender">
            Adelantos de nómina para los equipos de las empresas en Colombia. Sin costo para la empresa.
          </p>
        </div>

        <nav data-reveal style={delay(100)} aria-label="Secciones de la página">
          <h2 className="text-sm font-semibold text-white">Explora</h2>
          <ul className="mt-3 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal style={delay(150)}>
          <h2 className="text-sm font-semibold text-white">Accede a ZÜPA</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <a href={LOGIN_URL} className={linkClass}>
                Ingresar a la app
              </a>
            </li>
            <li>
              <a href={ACTIVATE_URL} className={linkClass}>
                Activar mi cuenta
              </a>
            </li>
          </ul>
          <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-lavender/70">
            Para empleados y empresas que ya tienen convenio.
          </p>
        </div>

        <div data-reveal style={delay(200)}>
          <h2 className="text-sm font-semibold text-white">Habla con nosotros</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-lavender">
            Te mostramos ZÜPA con los números de tu empresa en una llamada de 20 minutos.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded font-display text-xl font-bold text-white transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            +57 320 957 6723
          </a>
          <div className="mt-5">
            <WhatsAppButton className="px-5 py-3 text-sm">Escribir por WhatsApp</WhatsAppButton>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-lavender/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} ZÜPA · Un producto de Cerebiia</p>
          <a href="#contenido" className={`inline-flex items-center gap-2 ${linkClass}`}>
            <ArrowUp className="h-4 w-4" aria-hidden />
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
