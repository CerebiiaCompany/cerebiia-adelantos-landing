import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { SectionIcon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  ArrowRight,
  CircleCheckBig,
  HeartPulse,
  UserRoundMinus,
  CircleDollarSign,
  Menu,
  ChevronLeft,
  Home,
  Gift,
  Split,
  Route as RouteIcon,
  BriefcaseBusiness,
  Rocket,
  CalendarRange,
  UserRoundCheck,
  PiggyBank,
  TabletSmartphone,
  CalendarClock,
  ClipboardList,
  FileSpreadsheet,
  Activity,
  Landmark,
  BadgeDollarSign,
  UserRoundPlus,
  type LucideIcon,
} from "@/components/icons";

const WHATSAPP_NUMBER = "573169393922";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa una demo de AdeCerebiia para mi empresa."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const LOGIN_URL = "https://adelantos.cerebiia.com.co/login";
const REGISTER_URL = "https://adelantos.cerebiia.com.co/registro";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio", icon: Home },
  { href: "#producto", label: "Beneficios", icon: Gift },
  { href: "#cuotas", label: "Pagos a cuotas", icon: Split },
  { href: "#como-funciona", label: "Cómo funciona", icon: RouteIcon },
  { href: "#empresas", label: "Para empresas", icon: BriefcaseBusiness },
] as const;

function navigateToHash(href: string) {
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
}

const NAV_ICON_HOVER_ANIM: Record<(typeof NAV_LINKS)[number]["href"], string> = {
  "#inicio": "nav-icon-anim-home",
  "#producto": "nav-icon-anim-medal",
  "#cuotas": "nav-icon-anim-banknote",
  "#como-funciona": "nav-icon-anim-workflow",
  "#empresas": "nav-icon-anim-building",
};

function BenefitCardIcon({ icon, light = false }: { icon: LucideIcon; light?: boolean }) {
  return (
    <SectionIcon
      icon={icon}
      size="lg"
      surface={light ? "light" : "dark"}
      className="benefit-card-icon mb-4"
    />
  );
}

/* ---------- Design system (glass) ---------- */
function GlassCard({
  children,
  className = "",
  hover = true,
  light = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  light?: boolean;
  as?: "div" | "article";
}) {
  const base = light ? "glass-card-light" : "glass-card";
  const hoverClass = hover ? (light ? "glass-card-light-hover" : "glass-card-hover") : "";

  return (
    <Tag className={`${base} ${hoverClass} ${className}`}>
      {children}
    </Tag>
  );
}

function SectionBadge({ children }: { children: ReactNode }) {
  return <div className="section-badge">{children}</div>;
}

function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : ""} ${className}`}>
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

function GlassButtonPrimary({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`btn-glass-primary nav-btn-lift ${className}`}
    >
      {children}
    </a>
  );
}

function GlassButtonEmployeeAccess({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`btn-glass-employee ${className}`}>
      <span className="btn-glass-employee-shimmer" aria-hidden />
      <span className="relative">{children}</span>
    </a>
  );
}

function CheckIcon({ light = false }: { light?: boolean }) {
  return (
    <SectionIcon
      icon={CircleCheckBig}
      size="sm"
      surface={light ? "dark" : "dark"}
      className="mt-0.5 shrink-0"
    />
  );
}

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

const LANDING_OUTLINE_STYLES = {
  sm: "landing-deco-outline-sm",
  md: "landing-deco-outline",
  lg: "landing-deco-outline-lg",
} as const;

const LIGHT_OUTLINE_STYLES = {
  sm: "light-deco-outline-sm",
  md: "light-deco-outline",
  lg: "light-deco-outline-lg",
} as const;

type SectionShape = {
  top: number;
  left: number;
  size: number;
  type: "circle" | "pill" | "diamond" | "square" | "rounded";
  anim: number;
  outline: keyof typeof LANDING_OUTLINE_STYLES;
  rotate?: number;
};

const LANDING_SHAPES = [
  { top: 4, left: 6, size: 300, type: "circle", anim: 0, outline: "lg" },
  { top: 7, left: 94, size: 280, type: "circle", anim: 1, outline: "md" },
  { top: 11, left: 42, size: 160, type: "square", anim: 2, outline: "sm", rotate: 45 },
  { top: 15, left: 72, size: 220, type: "circle", anim: 3, outline: "md" },
  { top: 19, left: 18, size: 200, type: "circle", anim: 4, outline: "lg" },
  { top: 23, left: 58, size: 140, type: "square", anim: 0, outline: "sm", rotate: 8 },
  { top: 27, left: 88, size: 260, type: "circle", anim: 1, outline: "md" },
  { top: 31, left: 28, size: 180, type: "square", anim: 2, outline: "lg", rotate: 14 },
  { top: 35, left: 50, size: 120, type: "square", anim: 3, outline: "md", rotate: 45 },
  { top: 39, left: 8, size: 320, type: "circle", anim: 4, outline: "lg" },
  { top: 43, left: 82, size: 170, type: "square", anim: 0, outline: "sm", rotate: -10 },
  { top: 47, left: 35, size: 240, type: "circle", anim: 1, outline: "md" },
  { top: 51, left: 65, size: 150, type: "circle", anim: 2, outline: "lg" },
  { top: 55, left: 92, size: 200, type: "circle", anim: 3, outline: "sm" },
  { top: 59, left: 14, size: 260, type: "circle", anim: 4, outline: "md" },
  { top: 63, left: 48, size: 130, type: "square", anim: 0, outline: "lg", rotate: 22 },
  { top: 67, left: 76, size: 290, type: "circle", anim: 1, outline: "md" },
  { top: 71, left: 22, size: 160, type: "square", anim: 2, outline: "sm", rotate: 45 },
  { top: 75, left: 55, size: 220, type: "circle", anim: 3, outline: "lg" },
  { top: 79, left: 86, size: 180, type: "circle", anim: 4, outline: "md" },
  { top: 83, left: 10, size: 140, type: "circle", anim: 0, outline: "sm" },
  { top: 87, left: 38, size: 250, type: "circle", anim: 1, outline: "lg" },
  { top: 90, left: 68, size: 170, type: "square", anim: 2, outline: "md", rotate: -16 },
  { top: 93, left: 52, size: 110, type: "square", anim: 3, outline: "sm", rotate: 45 },
  { top: 96, left: 24, size: 200, type: "circle", anim: 4, outline: "lg" },
  { top: 97, left: 90, size: 280, type: "circle", anim: 0, outline: "md" },
] as const satisfies readonly SectionShape[];

const LIGHT_SECTION_SHAPES = [
  { top: 10, left: 8, size: 320, type: "circle", anim: 0, outline: "lg" },
  { top: 10, left: 92, size: 280, type: "square", anim: 1, outline: "lg", rotate: 12 },
  { top: 90, left: 8, size: 260, type: "square", anim: 2, outline: "md", rotate: 45 },
  { top: 90, left: 92, size: 300, type: "circle", anim: 3, outline: "lg" },
] as const satisfies readonly SectionShape[];

function landingShapeRadius(type: SectionShape["type"]) {
  switch (type) {
    case "circle":
    case "pill":
      return "rounded-full";
    case "square":
      return "rounded-xl";
    case "rounded":
      return "rounded-[2rem]";
    case "diamond":
      return "rounded-2xl";
  }
}

function ShapeDecorations({
  shapes,
  outlineStyles,
  large = false,
  subtle = false,
  cornerOnly = false,
}: {
  shapes: readonly SectionShape[];
  outlineStyles: Record<keyof typeof LANDING_OUTLINE_STYLES, string>;
  large?: boolean;
  subtle?: boolean;
  cornerOnly?: boolean;
}) {
  const minSize = large ? "10rem" : "8rem";
  const vwSize = large ? "30vw" : "22vw";
  const borderClass = subtle ? "border" : "border-2";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {shapes.map((shape, i) => {
        const isPill = shape.type === "pill";
        const isDiamond = shape.type === "diamond";
        const extraRotate = shape.rotate ?? 0;
        const size = `clamp(${minSize}, ${vwSize}, ${shape.size}px)`;
        const pillWidth = `clamp(12rem, 34vw, ${Math.round(shape.size * 1.65)}px)`;
        const pillHeight = `clamp(4rem, 10vw, ${Math.round(shape.size * 0.42)}px)`;
        const driftClass = cornerOnly
          ? `corner-shape-drift-${shape.anim}`
          : `landing-shape-drift-${shape.anim}`;

        return (
          <div
            key={`${shape.top}-${shape.left}-${i}`}
            className={`absolute ${driftClass}`}
            style={{
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              animationDelay: `${i * 1.4}s`,
            }}
          >
            <div
              className={`${borderClass} ${landingShapeRadius(shape.type)} ${outlineStyles[shape.outline]}`}
              style={{
                width: isPill ? pillWidth : size,
                height: isPill ? pillHeight : size,
                transform: `translate(-50%, -50%)${isDiamond ? " rotate(45deg)" : extraRotate ? ` rotate(${extraRotate}deg)` : ""}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function LandingDecorations() {
  return <ShapeDecorations shapes={LANDING_SHAPES} outlineStyles={LANDING_OUTLINE_STYLES} />;
}

function LightSectionDecorations() {
  return (
    <ShapeDecorations
      shapes={LIGHT_SECTION_SHAPES}
      outlineStyles={LIGHT_OUTLINE_STYLES}
      large
      subtle
      cornerOnly
    />
  );
}

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const openMobileMenu = useCallback(() => {
    setMobileOpen(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-landing text-white antialiased">
      <div className="relative min-h-screen">
        <LandingDecorations />

        <div className="relative z-[1]">
        <Nav
          mobileOpen={mobileOpen}
          onOpenMobile={openMobileMenu}
        />
        <MobileNavMenu open={mobileOpen} onClose={closeMobileMenu} />
        <Hero />
        <ImpactMetrics />
        <CorporateBenefits />
        <Features />
        <Installments />
        <HowItWorks />
        <ForCompanies />
        <CTA />
        <Footer />
        </div>
      </div>
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

/* ---------- Section activation (scroll + nav hash) ---------- */
function useSectionActivation(sectionId: string) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  const trigger = useCallback(() => {
    setActive(false);
    window.setTimeout(() => setActive(true), 60);
  }, []);

  const reset = useCallback(() => setActive(false), []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) trigger();
        else reset();
      },
      { threshold: 0.16, rootMargin: "0px 0px -48px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [trigger, reset]);

  useEffect(() => {
    const hash = `#${sectionId}`;

    const onHash = () => {
      if (window.location.hash === hash) trigger();
    };

    const onNavClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest(`a[href="${hash}"]`);
      if (target) window.setTimeout(trigger, 320);
    };

    if (window.location.hash === hash) trigger();

    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onNavClick);
    return () => {
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onNavClick);
    };
  }, [sectionId, trigger]);

  return { sectionRef, active };
}

/* ---------- Logo ---------- */
function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-bold text-primary-foreground shadow-[var(--shadow-brand)] sm:h-10 sm:w-10 sm:text-lg"
        style={{ background: "var(--gradient-brand)" }}
      >
        A
      </div>
      <span
        className={`truncate text-base font-semibold tracking-tight sm:text-lg ${
          inverted ? "text-white" : "text-foreground"
        }`}
      >
        AdeCerebiia
      </span>
    </div>
  );
}

/* ---------- Nav ---------- */
function NavInlineLink({
  href,
  label,
  icon,
  onClick,
  index = 0,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  index?: number;
}) {
  const iconAnim =
    NAV_ICON_HOVER_ANIM[href as keyof typeof NAV_ICON_HOVER_ANIM] ?? "nav-icon-anim-home";

  return (
    <a
      href={href}
      title={label}
      onClick={onClick}
      style={{ animationDelay: `${index * 55}ms` }}
      className="nav-inline-link nav-item-enter group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white transition-all duration-300 xl:px-3.5"
    >
      <span className={`nav-card-icon inline-flex ${iconAnim}`}>
        <SectionIcon icon={icon} size="xs" surface="dark" className="nav-inline-icon" />
      </span>
      <span className="relative whitespace-nowrap">{label}</span>
    </a>
  );
}

function NavCardLink({
  href,
  label,
  icon,
  onClick,
  index = 0,
  className = "",
  mobile = false,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  index?: number;
  className?: string;
  mobile?: boolean;
}) {
  const iconAnim =
    NAV_ICON_HOVER_ANIM[href as keyof typeof NAV_ICON_HOVER_ANIM] ?? "nav-icon-anim-home";

  return (
    <a
      href={href}
      title={label}
      onClick={onClick}
      style={mobile ? undefined : { animationDelay: `${index * 70}ms` }}
      className={`nav-card-link ${mobile ? "" : "nav-item-enter"} group flex w-full min-w-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-1.5 py-2 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 ${mobile ? "mobile-nav-card mobile-nav-item" : ""} ${className}`}
    >
      <span className={`nav-card-icon inline-flex ${iconAnim}`}>
        <SectionIcon icon={icon} size="sm" surface="dark" className="nav-card-icon-svg" />
      </span>
      <span className="mt-1.5 max-w-full text-center text-[10px] font-medium leading-tight text-white/80 transition-colors duration-300 group-hover:text-white sm:text-[11px]">
        {label}
      </span>
    </a>
  );
}

function NavLoginLink({
  className = "",
  stacked = false,
  onNavigate,
}: {
  className?: string;
  stacked?: boolean;
  onNavigate?: () => void;
}) {
  const visibility = stacked ? "inline-flex" : "hidden lg:inline-flex";

  return (
    <a
      href={LOGIN_URL}
      onClick={onNavigate}
      className={`nav-link-ingresar ${visibility} items-center text-xs font-medium sm:text-sm ${stacked ? "mobile-sheet-footer-item mobile-sheet-login w-full justify-center py-2.5" : "px-1"} ${className}`}
    >
      Ingresar
    </a>
  );
}

function NavCta({
  className = "",
  stacked = false,
  onNavigate,
}: {
  className?: string;
  stacked?: boolean;
  onNavigate?: () => void;
}) {
  const visibility = stacked ? "inline-flex" : "hidden lg:inline-flex";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={`nav-btn-cta nav-btn-lift ${visibility} items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs sm:gap-2 sm:text-sm sm:px-5 sm:py-2.5 ${stacked ? "mobile-sheet-footer-item mobile-sheet-cta w-full" : ""} ${className}`}
    >
      Contáctanos
      <ArrowRight className="nav-arrow-slide h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
    </a>
  );
}

function MobileNavMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const pendingHashRef = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open || !pendingHashRef.current) return;

    const hash = pendingHashRef.current;
    pendingHashRef.current = null;
    const timer = window.setTimeout(() => navigateToHash(hash), 280);
    return () => window.clearTimeout(timer);
  }, [open]);

  const handleNavClick = useCallback(
    (href: string, event?: MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith("#")) {
        event?.preventDefault();
        pendingHashRef.current = href;
        onClose();
        return;
      }
      onClose();
    },
    [onClose],
  );

  if (!mounted || !open) return null;

  return createPortal(
    <div className="mobile-sheet-root fixed inset-0 z-[9999] lg:hidden" aria-hidden={!open}>
      <div
        className="mobile-sheet-backdrop fixed inset-0 z-0 bg-black/80"
        aria-hidden
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        data-state="open"
        className="mobile-sheet pointer-events-auto fixed inset-y-0 right-0 z-20 flex h-dvh w-[min(100vw,22rem)] max-w-[calc(100vw-1rem)] flex-col gap-0 border-l border-white/15 bg-white/8 text-white shadow-[-8px_0_40px_rgba(15,23,42,0.35)] backdrop-blur-2xl"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(265_55%_55%_/_0.18),transparent_55%)]"
          aria-hidden
        />

        <div className="mobile-sheet-header relative z-30 flex items-center justify-between gap-3 border-b border-white/15 px-4 py-4 sm:px-6 sm:py-5">
          <Logo inverted />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            className="mobile-sheet-close relative z-30 inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/20 active:scale-95"
            aria-label="Cerrar menú"
          >
            <ChevronLeft className="h-5 w-5 pointer-events-none" strokeWidth={2.25} aria-hidden />
          </button>
        </div>

        <nav
          className="mobile-sheet-nav relative z-20 grid grid-cols-2 gap-3 p-4 sm:grid-cols-2"
          aria-label="Menú móvil"
        >
          {NAV_LINKS.map((link, i) => (
            <NavCardLink
              key={link.href}
              {...link}
              index={i}
              mobile
              className="min-w-0 w-full py-3.5"
              onClick={(event) => handleNavClick(link.href, event)}
            />
          ))}
        </nav>

        <div className="mobile-sheet-footer relative z-20 mt-auto space-y-3 border-t border-white/15 p-4">
          <NavLoginLink stacked onNavigate={onClose} />
          <NavCta stacked className="justify-center" onNavigate={onClose} />
        </div>
      </aside>
    </div>,
    document.body,
  );
}

function Nav({
  mobileOpen,
  onOpenMobile,
}: {
  mobileOpen: boolean;
  onOpenMobile: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const SCROLL_THRESHOLD = 10;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 12);

      if (currentScrollY <= 12) {
        setNavVisible(true);
      } else {
        const delta = currentScrollY - lastScrollY.current;
        if (delta > SCROLL_THRESHOLD) {
          setNavVisible(false);
        } else if (delta < -SCROLL_THRESHOLD) {
          setNavVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) setNavVisible(true);
  }, [mobileOpen]);

  return (
    <header
      className={`nav-header-enter nav-header-scrollable sticky top-0 z-40 w-full border-b border-white/15 bg-white/8 text-white backdrop-blur-xl ${
        scrolled ? "border-white/20 bg-white/12 shadow-[0_8px_40px_rgba(15,23,42,0.22)]" : ""
      } ${navVisible ? "nav-header-visible" : "nav-header-hidden"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8 lg:py-3">
        <div className="flex items-center gap-3 lg:gap-4">
          <a
            href="#inicio"
            className="nav-logo-hover shrink-0"
            aria-label="AdeCerebiia — inicio"
          >
            <Logo inverted />
          </a>

          <nav
            className="nav-item-enter hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1"
            style={{ animationDelay: "180ms" }}
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((link, i) => (
              <NavInlineLink
                key={link.href}
                {...link}
                index={i}
                onClick={(event) => {
                  if (link.href.startsWith("#")) {
                    event.preventDefault();
                    navigateToHash(link.href);
                  }
                }}
              />
            ))}
          </nav>

          <div
            className="nav-item-enter ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-2.5 lg:ml-0"
            style={{ animationDelay: "350ms" }}
          >
            <NavLoginLink />
            <NavCta />

            <button
              type="button"
              aria-expanded={mobileOpen}
              onClick={onOpenMobile}
              className="nav-menu-btn inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/20 lg:hidden sm:h-10 sm:w-10"
              aria-label="Abrir menú"
            >
              <Menu className="nav-menu-icon h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
const HERO_HIGHLIGHTS = [
  {
    icon: CalendarClock,
    title: "Control Operativo Total",
    desc: "Define ventanas de tiempo personalizadas. Las solicitudes se desactivan automáticamente antes del cierre de nómina para garantizar un proceso contable limpio.",
  },
  {
    icon: ClipboardList,
    title: "Cero Carga Administrativa",
    desc: "Transforma las solicitudes manuales en un registro digital centralizado, ordenado y auditable.",
  },
  {
    icon: FileSpreadsheet,
    title: "Conciliación sin Errores",
    desc: "Exporta reportes consolidados listos para aplicar a tu software de nómina tradicional al finalizar el periodo permitido.",
  },
] as const;

function HeroHighlight({
  icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <GlassCard className="flex items-start gap-3.5 p-4 sm:gap-4 sm:p-5" hover>
      <SectionIcon icon={icon} size="md" surface="accent" className="hero-highlight-icon mt-0.5 shrink-0" />
      <div className="min-w-0 pt-0.5 text-left">
        <div className="text-sm font-semibold text-white sm:text-base">{title}</div>
        <div className="mt-0.5 text-left text-xs leading-relaxed text-white/70 sm:text-sm">{desc}</div>
      </div>
    </GlassCard>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-14 sm:px-6 sm:pt-8 sm:pb-20 lg:pt-8 lg:pb-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="relative max-w-xl py-2 sm:py-4 lg:py-2">
              <div className="lg:hidden">
                <Logo inverted />
              </div>
              <div className="section-badge mt-6 sm:mt-6 lg:mt-0">
                Gestión de adelantos de nómina
              </div>
              <h1 className="mt-5 text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white sm:mt-6 sm:text-4xl sm:leading-[1.08] lg:text-5xl">
                Bienestar para tu equipo,
                <br />
                control{" "}
                <span className="hero-title-accent">para tu empresa.</span>
              </h1>
              <p className="mt-4 max-w-lg text-left text-sm leading-relaxed text-white/80 sm:text-base">
                Automatiza, gestiona y registra las solicitudes de adelanto de nómina de tus
                colaboradores. Una plataforma diseñada para integrarse a tu flujo operativo actual
                de forma fluida, elegante y segura.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-5">
                {HERO_HIGHLIGHTS.map((item) => (
                  <HeroHighlight key={item.title} {...item} />
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <GlassButtonPrimary
                  href={REGISTER_URL}
                  className="w-full justify-center gap-2 sm:w-auto"
                >
                  Regístrate gratis
                  <ArrowRight className="h-4 w-4" />
                </GlassButtonPrimary>
                <GlassButtonEmployeeAccess
                  href={REGISTER_URL}
                  className="w-full gap-2 sm:w-auto"
                >
                  <UserRoundPlus className="h-4 w-4 shrink-0" aria-hidden />
                  Activar Acceso Empleado
                </GlassButtonEmployeeAccess>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative flex min-h-[320px] items-center justify-center overflow-visible sm:min-h-[420px] lg:min-h-full lg:justify-end">
              <div className="relative w-full max-w-sm overflow-visible lg:translate-x-6 xl:translate-x-10">
                <TrustOrb />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero visual: white card, original content ---------- */
function TrustOrb() {
  return (
    <div className="relative mx-auto mt-4 aspect-[4/5] w-full max-w-[300px] overflow-visible sm:mt-0 sm:aspect-[5/6] sm:max-w-[420px] lg:max-w-[480px]">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-white/50 opacity-70 blur-3xl sm:-inset-10" />

      <div
        className="absolute left-1/2 top-4 h-[78%] w-[86%] -translate-x-1/2 rounded-3xl border-2 landing-deco-outline-lg sm:top-6"
        style={{ transform: "translate(-46%, 0) rotate(-5deg)" }}
      />

      <div className="relative mx-auto mt-2 h-[88%] w-[92%] overflow-hidden rounded-2xl border border-foreground/8 bg-white p-5 text-foreground shadow-[0_20px_50px_rgba(15,23,42,0.1)] animate-float-slow sm:rounded-3xl sm:p-8">
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-2 border-primary/20 bg-transparent sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-2 border-accent/25 bg-transparent sm:h-96 sm:w-96" />

        <div className="relative z-[1] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm"
              style={{ background: "var(--gradient-brand)" }}
            >
              A
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">AdeCerebiia</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/8 px-2.5 py-1 text-[10px] font-medium text-foreground/75">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            En línea
          </div>
        </div>

        <div className="relative z-[1] mx-auto mt-6 flex h-28 w-28 items-center justify-center sm:mt-10 sm:h-40 sm:w-40">
          <span className="absolute h-full w-full rounded-full bg-primary/10 animate-pulse-ring" />
          <span
            className="absolute h-full w-full rounded-full bg-primary/10 animate-pulse-ring"
            style={{ animationDelay: "1.2s" }}
          />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_12px_32px_rgba(15,23,42,0.12)] ring-4 ring-primary/12 sm:h-28 sm:w-28">
            <SectionIcon icon={ShieldCheck} size="xl" surface="light" />
            <span className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-accent/20 sm:h-9 sm:w-9">
              <SectionIcon icon={CircleCheckBig} size="xs" surface="light" />
            </span>
          </div>
        </div>

        <div className="relative z-[1] mt-6 text-center sm:mt-10">
          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50 sm:text-[11px]">
            Confianza · Bienestar
          </div>
          <div className="mt-2 text-xl font-bold leading-tight text-foreground sm:text-2xl">
            Adelantos seguros
            <br />
            para tu equipo
          </div>
        </div>

        <div className="relative z-[1] mt-6 grid grid-cols-3 gap-1.5 border-t border-foreground/8 pt-4 text-center sm:mt-8 sm:gap-2 sm:pt-5">
          <TrustStat label="Cuotas" value="Hasta 3" />
          <TrustStat label="Costo empresa" value="$0" />
          <TrustStat label="Tarifa" value="$8.000" />
        </div>
      </div>

      <div className="absolute -left-12 top-16 hidden animate-float sm:block lg:-left-16 lg:top-20">
        <FloatingChip icon={ShieldCheck} title="Sin riesgo" sub="Para tu empresa" />
      </div>
      <div
        className="absolute -right-12 bottom-32 hidden animate-float-slow sm:block lg:-right-16 lg:bottom-36"
        style={{ animationDelay: "0.6s" }}
      >
        <FloatingChip icon={Split} title="Hasta 3 cuotas" sub="Flexibilidad de pago" />
      </div>
      <div
        className="absolute -left-10 bottom-6 hidden animate-float-slow sm:block lg:-left-14 lg:bottom-8"
        style={{ animationDelay: "1.1s" }}
      >
        <FloatingChip icon={BadgeDollarSign} title="Tarifa fija" sub="$8.000 por adelanto" />
      </div>
    </div>
  );
}

function TrustStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-foreground/50">{label}</div>
      <div className="mt-1 text-sm font-bold text-foreground">{value}</div>
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
  icon: LucideIcon;
  title: string;
  sub: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`floating-chip flex max-w-[12rem] items-center gap-3 px-3 py-2.5 sm:max-w-none sm:px-3.5 sm:py-3 ${className}`}
      style={style}
    >
      <SectionIcon icon={icon} size="sm" surface="light" className="shrink-0" />
      <div className="min-w-0 pr-1 text-left">
        <div className="text-xs font-semibold leading-tight text-foreground sm:text-sm">{title}</div>
        <div className="text-left text-[10px] text-foreground/60 sm:text-[11px]">{sub}</div>
      </div>
    </div>
  );
}

/* ---------- Impact Metrics ---------- */
const IMPACT_METRICS = [
  {
    icon: HeartPulse,
    target: 70,
    prefix: "",
    suffix: "%",
    label: "Estrés Financiero",
    description:
      "De los trabajadores sufre de ansiedad por su flujo de caja. Reduce esta carga ofreciendo liquidez sobre el salario ya devengado.",
  },
  {
    icon: UserRoundMinus,
    target: -16,
    prefix: "",
    suffix: "%",
    label: "Rotación de Personal",
    description:
      "Disminución promedio en la deserción laboral al implementar programas modernos de bienestar financiero e incentivos internos.",
  },
  {
    icon: CircleDollarSign,
    target: 0,
    prefix: "$",
    suffix: "",
    label: "Costo Organizacional",
    description:
      "Cero costos de afiliación, mantenimiento o integración. Un beneficio de alto impacto operativo totalmente gratuito para la empresa.",
  },
] as const;

type ImpactMetric = (typeof IMPACT_METRICS)[number];

function formatMetricValue(value: number, metric: ImpactMetric) {
  const rounded = Math.round(value);
  return `${metric.prefix}${rounded}${metric.suffix}`;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function CountUpMetric({
  metric,
  duration = 1600,
}: {
  metric: ImpactMetric;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const [display, setDisplay] = useState(() => formatMetricValue(0, metric));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startValue = 0;
    const { target } = metric;

    const cancel = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    const runCount = () => {
      cancel();

      if (reducedMotion) {
        setDisplay(formatMetricValue(target, metric));
        return;
      }

      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const current = startValue + (target - startValue) * eased;
        setDisplay(formatMetricValue(current, metric));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          frameRef.current = null;
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDisplay(formatMetricValue(startValue, metric));
            runCount();
          } else {
            cancel();
            setDisplay(formatMetricValue(startValue, metric));
          }
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -40px 0px" }
    );

    io.observe(el);
    return () => {
      cancel();
      io.disconnect();
    };
  }, [metric, duration]);

  return (
    <span
      ref={ref}
      className="tabular-nums text-white"
    >
      {display}
    </span>
  );
}

function ImpactMetricCard({ metric }: { metric: ImpactMetric }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    if (!window.matchMedia("(hover: none)").matches) return;
    setExpanded((open) => !open);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleExpanded();
    },
    [toggleExpanded],
  );

  return (
    <div
      className="h-full"
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label={`${metric.label}. ${expanded ? "Ocultar detalle" : "Ver detalle"}`}
      onClick={toggleExpanded}
      onKeyDown={handleKeyDown}
    >
      <GlassCard
        className={`impact-metric-card group p-5 sm:p-6 ${expanded ? "is-expanded" : ""}`}
        hover
      >
        <div className="flex flex-col items-center text-center">
          <SectionIcon
            icon={metric.icon}
            size="md"
            surface="dark"
            className="impact-metric-icon mb-3"
          />

          <div className="text-4xl font-extrabold leading-none sm:text-5xl">
            <CountUpMetric metric={metric} />
          </div>

          <h3 className="mt-2.5 text-sm font-bold tracking-wide text-white sm:text-base">
            {metric.label}
          </h3>

          <p className="impact-metric-desc text-left text-sm leading-relaxed text-white/65">
            {metric.description}
          </p>
        </div>
      </GlassCard>
    </div>
  );
}

function ImpactMetrics() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {IMPACT_METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 100}>
              <ImpactMetricCard metric={metric} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Corporate Benefits ---------- */
const CORPORATE_BENEFITS = [
  {
    icon: UserRoundCheck,
    title: "Retención de talento clave",
    desc: "Fortalece la propuesta de valor para tus colaboradores con un beneficio financiero tangible que impacta directamente en la permanencia del equipo.",
  },
  {
    icon: Activity,
    title: "Mayor productividad operativa",
    desc: "Reduce el ausentismo y el estrés financiero del personal, mejorando el foco, la asistencia y el desempeño en operaciones críticas.",
  },
  {
    icon: ShieldCheck,
    title: "Cero riesgo para la empresa",
    desc: "Implementación sin costo organizacional, sin endeudamiento corporativo y con trazabilidad completa en cada adelanto descontado por nómina.",
  },
] as const;

function CorporateBenefits() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            title="Diseñado para optimizar tus Recursos Humanos"
            subtitle="Un beneficio financiero que fortalece tu equipo sin costo para la organización."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {CORPORATE_BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <GlassCard as="article" className="h-full p-6 text-left sm:p-7" hover>
                <BenefitCardIcon icon={Icon} />
                <h3 className="mb-2 text-left text-lg font-semibold text-white sm:text-xl">{title}</h3>
                <p className="text-left text-sm leading-relaxed text-white/70">{desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features (beneficios) ---------- */
const FEATURE_ITEMS = [
  {
    icon: Rocket,
    title: "Solicitud en segundos",
    desc: "Tus empleados solicitan su adelanto desde la app en pocos segundos, cuando lo necesiten.",
  },
  {
    icon: CalendarRange,
    title: "Pagos hasta en 3 cuotas",
    desc: "Cada adelanto se puede pagar hasta en 3 cuotas, sin afectar el bolsillo del empleado.",
  },
  {
    icon: ShieldCheck,
    title: "Cero riesgo para la empresa",
    desc: "La empresa no paga nada. El empleado asume una tarifa fija de $8.000 por adelanto.",
  },
  {
    icon: UserRoundCheck,
    title: "Retención de talento",
    desc: "Un beneficio diferencial que reduce rotación y aumenta la satisfacción del equipo.",
  },
  {
    icon: PiggyBank,
    title: "Bienestar financiero",
    desc: "Reduce el estrés financiero y elimina la dependencia de préstamos con altos intereses.",
  },
  {
    icon: TabletSmartphone,
    title: "100% digital",
    desc: "Sin papeleos ni trámites. Tus empleados solicitan desde su móvil en cualquier momento.",
  },
] satisfies ReadonlyArray<{ icon: LucideIcon; title: string; desc: string }>;

function Features() {
  return (
    <section id="producto" className="section-shell section-surface-light relative overflow-hidden">
      <LightSectionDecorations />
      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            badge="Beneficios"
            title="Bienestar para tu equipo, tranquilidad para tu empresa"
            subtitle="Una solución integral donde la empresa no asume costos y el empleado accede a su salario ganado de forma flexible."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURE_ITEMS.map(({ icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="feature-glass-card h-full p-5 text-left sm:p-7">
                <div className="feature-glass-card-icon">
                  <SectionIcon icon={icon} size="lg" surface="light" />
                </div>
                <h3 className="feature-glass-card-title text-lg font-semibold text-foreground">{title}</h3>
                <p className="feature-glass-card-desc mt-2 text-sm leading-relaxed text-foreground/70">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Installments (cuotas) ---------- */
const CUOTAS_STEPS = [
  { n: "1", label: "Cuota única", desc: "Descuento total en la próxima liquidación de nómina." },
  { n: "2", label: "2 cuotas", desc: "El monto se reparte entre los dos periodos siguientes." },
  { n: "3", label: "3 cuotas", desc: "Máxima flexibilidad para el flujo de caja del colaborador." },
] as const;

function CuotasTimelineFigure({ n, active = false }: { n: string; active?: boolean }) {
  return (
    <div
      className={cn(
        "cuotas-timeline-figure relative z-10 flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full text-2xl font-bold text-primary-foreground shadow-[var(--shadow-orb)] ring-4 ring-transparent transition-[transform,box-shadow] duration-500",
        active && "is-active",
      )}
    >
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full"
        style={{ background: "var(--gradient-orb)" }}
      >
        <span className="cuotas-figure-shine" aria-hidden />
        <span className="relative z-[1]">{n}</span>
      </div>
    </div>
  );
}

function CuotasTimelineCard({ label, desc }: { label: string; desc: string }) {
  return (
    <GlassCard as="article" className="flex h-full w-full flex-col p-5 text-left sm:p-6" hover={false}>
      <div className="text-center text-lg font-semibold text-white sm:text-left">{label}</div>
      <div className="mt-1 flex-1 text-left text-sm leading-relaxed text-white/70">{desc}</div>
    </GlassCard>
  );
}

function CuotasTimelineStep({
  step,
  index,
  active,
  onActivate,
  orientation = "horizontal",
  showConnector = false,
  connectorActive = false,
}: {
  step: (typeof CUOTAS_STEPS)[number];
  index: number;
  active: boolean;
  onActivate: () => void;
  orientation?: "horizontal" | "vertical";
  showConnector?: boolean;
  connectorActive?: boolean;
}) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate();
    }
  };

  return (
    <div
      className={cn(
        "cuotas-timeline-step group/step flex flex-col items-center outline-none",
        orientation === "horizontal" ? "h-full" : "w-full max-w-sm",
        active && "is-active",
      )}
      role="button"
      tabIndex={0}
      aria-expanded={active}
      aria-label={`${step.label}: ${step.desc}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={handleKeyDown}
    >
      <CuotasTimelineFigure n={step.n} active={active} />
      <div
        className={cn(
          "cuotas-step-card-panel mt-4 w-full",
          orientation === "horizontal" && "flex flex-1 flex-col",
          active && "is-expanded",
        )}
        style={{ transitionDelay: active ? `${index * 70}ms` : "0ms" }}
      >
        <div className="cuotas-step-card-inner">
          <CuotasTimelineCard label={step.label} desc={step.desc} />
        </div>
      </div>
      {showConnector && (
        <div className="relative my-3 flex h-12 w-0.5 shrink-0" aria-hidden>
          <div className="h-full w-full rounded-full bg-white/15" />
          <div
            className={cn(
              "cuotas-timeline-segment-fill-v absolute inset-0 origin-top scale-y-0 rounded-full bg-gradient-to-b from-white/50 via-white to-white/50",
              connectorActive && "is-active",
            )}
          />
        </div>
      )}
    </div>
  );
}

function CuotasTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      className="cuotas-timeline group/timeline relative"
      data-active-step={activeStep}
      onMouseLeave={() => setActiveStep(0)}
    >
      {/* Desktop: pasos en columna (figura + card) con línea en el centro de las figuras */}
      <div className="relative hidden sm:block">
        <div className="pointer-events-none absolute inset-x-0 top-7 z-0 h-0.5" aria-hidden>
          <div
            className="cuotas-timeline-segment cuotas-timeline-segment-1 absolute top-0 h-full"
            style={{ left: "16.666%", width: "33.333%" }}
          >
            <div className="h-full rounded-full bg-white/15" />
            <div
              className={cn(
                "cuotas-timeline-segment-fill absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-white/50 via-white to-white/50",
                activeStep >= 1 && "is-active",
              )}
            />
          </div>
          <div
            className="cuotas-timeline-segment cuotas-timeline-segment-2 absolute top-0 h-full"
            style={{ left: "50%", width: "33.333%" }}
          >
            <div className="h-full rounded-full bg-white/15" />
            <div
              className={cn(
                "cuotas-timeline-segment-fill absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-white/50 via-white to-white/50",
                activeStep >= 2 && "is-active",
              )}
              style={{ transitionDelay: activeStep >= 2 ? "0.12s" : "0ms" }}
            />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 items-start gap-4">
          {CUOTAS_STEPS.map((step, i) => (
            <CuotasTimelineStep
              key={step.n}
              step={step}
              index={i}
              active={activeStep === i}
              onActivate={() => setActiveStep(i)}
              orientation="horizontal"
            />
          ))}
        </div>
      </div>

      {/* Mobile: pasos verticales con conector entre centros de figura */}
      <div className="flex flex-col items-center sm:hidden">
        {CUOTAS_STEPS.map((step, i) => (
          <CuotasTimelineStep
            key={step.n}
            step={step}
            index={i}
            active={activeStep === i}
            onActivate={() => setActiveStep(i)}
            orientation="vertical"
            showConnector={i < CUOTAS_STEPS.length - 1}
            connectorActive={activeStep > i}
          />
        ))}
      </div>
    </div>
  );
}

function Installments() {
  return (
    <section id="cuotas" className="section-shell relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionBadge>Pagos a cuotas</SectionBadge>
            <h2 className="section-title mt-4 text-left">
              Flexibilidad de pago para tu equipo
            </h2>
            <p className="section-subtitle mt-4 text-left">
              Tus colaboradores pueden repartir cada adelanto en hasta 3 cuotas, según su momento
              financiero. Sin costo para la empresa: solo aplica una tarifa fija de $8.000 por
              solicitud.
            </p>
            <ul className="mt-6 space-y-3 sm:mt-8">
              {[
                "Descuento automático por nómina, sin gestión manual para RR.HH.",
                "El colaborador elige entre 1, 2 o 3 cuotas al solicitar el adelanto.",
                "Tarifa transparente de $8.000: un adelanto de $500.000 se desembolsa en $492.000.",
                "Visibilidad total: cuotas, saldos y fechas de descuento en tiempo real.",
                "Sin intereses ocultos ni condiciones en letra pequeña.",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckIcon light />
                  <span className="text-left text-sm text-white/90 sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <CuotasTimeline />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
const HOW_IT_WORKS_STEPS = [
  { n: "01", title: "Conecta tu nómina", desc: "Integramos AdeCerebiia con tu sistema de nómina en días." },
  { n: "02", title: "Activa a tus empleados", desc: "Cada empleado recibe acceso a su panel personal." },
  { n: "03", title: "Solicitan desde la app", desc: "Piden el adelanto y eligen entre 1, 2 o 3 cuotas. La solicitud llega al panel de Cerebiia." },
  { n: "04", title: "Pagamos y descontamos", desc: "Nuestro equipo procesa y desembolsa el adelanto. Las cuotas se descuentan de la nómina sin trabajo extra para ti." },
] as const;

function HowStepFigure({ n, light = false }: { n: string; light?: boolean }) {
  return (
    <div className="how-works-figure relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] ring-4 ring-transparent transition-shadow duration-500 sm:h-14 sm:w-14 sm:text-base">
      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full"
        style={{ background: light ? "var(--gradient-brand)" : "var(--gradient-orb)" }}
      >
        <span className="how-figure-shine" aria-hidden />
        <span className="relative z-[1]">{n}</span>
      </div>
    </div>
  );
}

function HowWorksStepCard({ title, desc, light = false }: { title: string; desc: string; light?: boolean }) {
  return (
    <GlassCard as="article" light={light} className="group/step flex h-full w-full flex-col p-5 text-left sm:p-6" hover>
      <h3 className={`text-left text-base font-semibold sm:text-lg ${light ? "text-foreground" : "text-white"}`}>{title}</h3>
      <p className={`mt-2 flex-1 text-left text-sm leading-relaxed ${light ? "text-foreground/70" : "text-white/70"}`}>{desc}</p>
      <div
        className={`mt-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 group-hover/step:scale-x-100 ${light ? "via-primary/30" : "via-white/35"}`}
      />
    </GlassCard>
  );
}

function HowWorksTimeline({ active, light = false }: { active: boolean; light?: boolean }) {
  return (
    <div className="how-works-timeline group/timeline relative mt-10 sm:mt-16">
      {/* Desktop: línea entre centros de figura */}
      <div className="relative hidden lg:block">
        <div className="pointer-events-none absolute inset-x-0 top-7 z-0 h-0.5" aria-hidden>
          {[
            { left: "12.5%", width: "25%" },
            { left: "37.5%", width: "25%" },
            { left: "62.5%", width: "25%" },
          ].map((seg, i) => (
            <div
              key={seg.left}
              className={`how-works-segment how-works-segment-${i + 1} absolute top-0 h-full`}
              style={{ left: seg.left, width: seg.width }}
            >
              <div className={`h-full rounded-full ${light ? "bg-primary/15" : "bg-white/12"}`} />
              <div
                className={`how-works-segment-fill absolute inset-0 origin-left scale-x-0 rounded-full ${light ? "bg-gradient-to-r from-primary/35 via-primary to-primary/35" : "bg-gradient-to-r from-white/40 via-white to-white/40"} ${active ? "is-active" : ""}`}
                style={{ transitionDelay: active ? `${240 + i * 120}ms` : "0ms" }}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-4 items-stretch gap-5">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div
              key={`lg-${step.n}`}
              className="how-works-step group/step flex h-full flex-col items-center"
            >
              <HowStepFigure n={step.n} light={light} />
              <div
                className={`how-step-card-fall mt-4 flex w-full flex-1 flex-col ${active ? "is-active" : ""}`}
                style={{ transitionDelay: active ? `${220 + i * 160}ms` : "0ms" }}
              >
                <HowWorksStepCard title={step.title} desc={step.desc} light={light} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet / mobile */}
      <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:hidden">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <div
            key={`sm-${step.n}`}
            className="how-works-step group/step flex h-full flex-col"
          >
            <div className="mb-4 flex justify-center sm:justify-start">
              <HowStepFigure n={step.n} light={light} />
            </div>
            <div
              className={`how-step-card-fall flex flex-1 flex-col ${active ? "is-active" : ""}`}
              style={{ transitionDelay: active ? `${180 + i * 140}ms` : "0ms" }}
            >
              <HowWorksStepCard title={step.title} desc={step.desc} light={light} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const { sectionRef, active } = useSectionActivation("como-funciona");

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="section-shell section-surface-light relative overflow-hidden"
    >
      <LightSectionDecorations />
      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            badge="Cómo funciona"
            title="Implementación simple. Impacto inmediato."
            subtitle="Cuatro pasos para activar adelantos de nómina en tu empresa sin fricción operativa."
          />
        </Reveal>

        <HowWorksTimeline active={active} light />
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
    <section id="empresas" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-3 -z-10 rounded-3xl opacity-30 blur-2xl sm:-inset-4"
                style={{ background: "var(--gradient-orb)" }}
              />
              <GlassCard className="relative overflow-hidden p-6 text-left sm:p-10" hover={false}>
                <div
                  className="absolute inset-0 opacity-90"
                  style={{ background: "var(--gradient-orb)" }}
                />
                <div className="relative text-left text-primary-foreground">
                  <SectionIcon icon={Landmark} size="xl" surface="dark" />
                  <div className="mt-4 text-4xl font-bold leading-tight sm:mt-6 sm:text-5xl">+85%</div>
                  <p className="mt-2 text-left text-base leading-relaxed text-white/90 sm:text-lg">
                    de los empleados reportan mayor tranquilidad financiera tras adoptar adelantos de nómina.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/20 pt-5 sm:mt-8 sm:pt-6">
                    <div>
                      <div className="text-2xl font-bold sm:text-3xl">+40%</div>
                      <div className="text-xs text-white/75 sm:text-sm">Retención</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold sm:text-3xl">-30%</div>
                      <div className="text-xs text-white/75 sm:text-sm">Ausentismo</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionBadge>Para empresas</SectionBadge>
            <h2 className="section-title mt-4 text-left">
              Un beneficio que tu equipo va a amar
            </h2>
            <p className="section-subtitle mt-4 text-left">
              AdeCerebiia se integra con tu sistema de nómina y entrega a tu equipo acceso a su salario ganado.
              Sin costo para la empresa, sin riesgo, sin complicaciones.
            </p>
            <ul className="mt-6 space-y-3 sm:mt-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckIcon light />
                  <span className="text-left text-sm text-white/90 sm:text-base">{b}</span>
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
    <section id="contacto" className="section-shell">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <GlassCard className="relative overflow-hidden p-6 sm:p-12 lg:p-16" hover={false}>
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{ background: "var(--gradient-orb)" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(0_0%_100%_/_0.15),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <svg className="absolute right-4 top-4 sm:right-8 sm:top-8" width="72" height="72" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" />
              </svg>
              <svg className="absolute -bottom-10 -left-10 hidden sm:block" width="180" height="180" viewBox="0 0 180 180" fill="none">
                <rect x="20" y="20" width="140" height="140" rx="20" stroke="white" strokeWidth="1" transform="rotate(20 90 90)" />
              </svg>
            </div>
            <div className="relative text-left text-white">
              <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Dale a tu equipo el beneficio que estaban esperando
              </h2>
              <p className="mt-3 max-w-xl text-left text-base leading-relaxed text-white/85 sm:mt-4 sm:text-lg">
                Agenda una demo de 20 minutos y descubre cómo AdeCerebiia transforma la nómina de tu empresa.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <GlassButtonPrimary
                  href={WHATSAPP_URL}
                  external
                  className="w-full justify-center gap-2 bg-white text-[hsl(262_55%_40%)] shadow-[var(--shadow-cta-white)] hover:bg-white/95 sm:w-auto"
                >
                  Contactarnos por WhatsApp
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </GlassButtonPrimary>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-left text-sm leading-relaxed text-white/75">
              Plataforma de adelantos de nómina. Tu dinero, a tu ritmo.
            </p>
          </div>
          <FooterCol title="Producto" links={["Beneficios", "Pagos a cuotas", "Seguridad", "Integraciones"]} />
          <FooterCol title="Empresa" links={["Sobre nosotros", "Clientes", "Blog", "Contacto"]} />
          <FooterCol title="Legal" links={["Términos", "Privacidad", "Cookies"]} />
        </div>
        <div className="mt-8 border-t border-white/15 pt-5 text-center text-xs text-white/60 sm:mt-12 sm:pt-6">
          © 2026 AdeCerebiia · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-white/65 transition-colors hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
