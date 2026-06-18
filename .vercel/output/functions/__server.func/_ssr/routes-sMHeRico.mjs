import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Portal, c as Trigger, i as Overlay, n as Content, o as Root, r as Description, s as Title, t as Close } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Smartphone, c as Medal, d as CircleCheck, f as CalendarDays, g as ArrowRight, h as Banknote, i as TrendingUp, l as House, m as Bolt, n as Workflow, o as ShieldCheck, p as Building2, r as Users, s as Menu, t as X, u as HeartHandshake } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-sMHeRico.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Root;
var SheetTrigger = Trigger;
var SheetPortal = Portal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = Title.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = Description.displayName;
var WHATSAPP_URL = `https://wa.me/573169393922?text=${encodeURIComponent("Hola, me interesa una demo de AdeCerebiia para mi empresa.")}`;
var LOGIN_URL = "https://adelantos.cerebiia.com.co/login";
var REGISTER_URL = "https://adelantos.cerebiia.com.co/registro";
var NAV_LINKS = [
	{
		href: "#inicio",
		label: "Inicio",
		icon: House
	},
	{
		href: "#producto",
		label: "Beneficios",
		icon: Medal
	},
	{
		href: "#cuotas",
		label: "Pagos a cuotas",
		icon: Banknote
	},
	{
		href: "#como-funciona",
		label: "Cómo funciona",
		icon: Workflow
	},
	{
		href: "#empresas",
		label: "Para empresas",
		icon: Building2
	}
];
var NAV_HEADER_OFFSET = 72;
function navigateToHash(href) {
	if (!href.startsWith("#")) return;
	const id = href.slice(1);
	const target = document.getElementById(id);
	if (!target) return;
	const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEADER_OFFSET;
	window.scrollTo({
		top: Math.max(0, top),
		behavior: "smooth"
	});
	window.history.pushState(null, "", href);
}
function handleMobileNavClick(href, closeMenu, event) {
	if (href.startsWith("#")) {
		event?.preventDefault();
		closeMenu();
		window.setTimeout(() => navigateToHash(href), 300);
		return;
	}
	closeMenu();
}
var NAV_ICON_HOVER_ANIM = {
	"#inicio": "nav-icon-anim-home",
	"#producto": "nav-icon-anim-medal",
	"#cuotas": "nav-icon-anim-banknote",
	"#como-funciona": "nav-icon-anim-workflow",
	"#empresas": "nav-icon-anim-building"
};
var ICON_SIZES = {
	nav: {
		wrap: "h-6 w-6 rounded-md",
		icon: "h-3 w-3"
	},
	xs: {
		wrap: "h-7 w-7 rounded-lg",
		icon: "h-3.5 w-3.5"
	},
	sm: {
		wrap: "h-9 w-9 rounded-xl",
		icon: "h-4 w-4"
	},
	md: {
		wrap: "h-12 w-12 rounded-xl",
		icon: "h-5 w-5"
	},
	lg: {
		wrap: "h-14 w-14 rounded-2xl",
		icon: "h-7 w-7"
	}
};
function BrandIcon({ icon: Icon, size = "md", variant = "gradient", className = "" }) {
	const s = ICON_SIZES[size];
	const variantClass = variant === "glass" ? "bg-white text-primary shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-white" : variant === "soft" ? "bg-primary/12 text-primary ring-1 ring-primary/25 shadow-[var(--shadow-brand)]" : variant === "orb" ? "text-primary-foreground shadow-[var(--shadow-orb)]" : "text-primary-foreground shadow-[var(--shadow-brand)]";
	const gradientStyle = variant === "gradient" ? { background: "var(--gradient-brand)" } : variant === "orb" ? { background: "var(--gradient-orb)" } : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex shrink-0 items-center justify-center transition-transform duration-300 ${s.wrap} ${variantClass} ${className}`,
		style: gradientStyle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: s.icon,
			strokeWidth: 2.25,
			"aria-hidden": true
		})
	});
}
function GlassCard({ children, className = "", hover = true, as: Tag = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className: `glass-card ${hover ? "glass-card-hover" : ""} ${className}`,
		children
	});
}
function SectionBadge({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "section-badge",
		children
	});
}
function SectionHeader({ badge, title, subtitle, centered = true, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${centered ? "mx-auto max-w-2xl text-center" : ""} ${className}`,
		children: [
			badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: badge }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-subtitle",
				children: subtitle
			})
		]
	});
}
function GlassButtonPrimary({ href, children, className = "", external = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		className: `btn-glass-primary nav-btn-lift ${className}`,
		children
	});
}
function GlassButtonSecondary({ href, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: `btn-glass-secondary nav-btn-lift ${className}`,
		children
	});
}
function GlassButtonEmployeeAccess({ href, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: `btn-glass-employee ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "btn-glass-employee-shimmer",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative",
			children
		})]
	});
}
function CheckIcon({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${light ? "bg-white/10 ring-1 ring-white/25 backdrop-blur-sm" : "bg-white/10 ring-1 ring-white/20 backdrop-blur-sm"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
			className: `h-4 w-4 ${light ? "text-cyan-200" : "text-cyan-200"}`,
			strokeWidth: 2.25
		})
	});
}
var LANDING_OUTLINE_STYLES = {
	sm: "landing-deco-outline-sm",
	md: "landing-deco-outline",
	lg: "landing-deco-outline-lg"
};
var LANDING_SHAPES = [
	{
		top: 4,
		left: 6,
		size: 300,
		type: "circle",
		anim: 0,
		outline: "lg"
	},
	{
		top: 7,
		left: 94,
		size: 280,
		type: "rounded",
		anim: 1,
		outline: "md",
		rotate: -12
	},
	{
		top: 11,
		left: 42,
		size: 160,
		type: "diamond",
		anim: 2,
		outline: "sm"
	},
	{
		top: 15,
		left: 72,
		size: 220,
		type: "circle",
		anim: 3,
		outline: "md"
	},
	{
		top: 19,
		left: 18,
		size: 200,
		type: "pill",
		anim: 4,
		outline: "lg"
	},
	{
		top: 23,
		left: 58,
		size: 140,
		type: "square",
		anim: 0,
		outline: "sm",
		rotate: 8
	},
	{
		top: 27,
		left: 88,
		size: 260,
		type: "circle",
		anim: 1,
		outline: "md"
	},
	{
		top: 31,
		left: 28,
		size: 180,
		type: "rounded",
		anim: 2,
		outline: "lg",
		rotate: 14
	},
	{
		top: 35,
		left: 50,
		size: 120,
		type: "diamond",
		anim: 3,
		outline: "md"
	},
	{
		top: 39,
		left: 8,
		size: 320,
		type: "circle",
		anim: 4,
		outline: "lg"
	},
	{
		top: 43,
		left: 82,
		size: 170,
		type: "square",
		anim: 0,
		outline: "sm",
		rotate: -10
	},
	{
		top: 47,
		left: 35,
		size: 240,
		type: "circle",
		anim: 1,
		outline: "md"
	},
	{
		top: 51,
		left: 65,
		size: 150,
		type: "pill",
		anim: 2,
		outline: "lg"
	},
	{
		top: 55,
		left: 92,
		size: 200,
		type: "rounded",
		anim: 3,
		outline: "sm",
		rotate: -18
	},
	{
		top: 59,
		left: 14,
		size: 260,
		type: "circle",
		anim: 4,
		outline: "md"
	},
	{
		top: 63,
		left: 48,
		size: 130,
		type: "square",
		anim: 0,
		outline: "lg",
		rotate: 22
	},
	{
		top: 67,
		left: 76,
		size: 290,
		type: "circle",
		anim: 1,
		outline: "md"
	},
	{
		top: 71,
		left: 22,
		size: 160,
		type: "diamond",
		anim: 2,
		outline: "sm"
	},
	{
		top: 75,
		left: 55,
		size: 220,
		type: "rounded",
		anim: 3,
		outline: "lg",
		rotate: 6
	},
	{
		top: 79,
		left: 86,
		size: 180,
		type: "circle",
		anim: 4,
		outline: "md"
	},
	{
		top: 83,
		left: 10,
		size: 140,
		type: "pill",
		anim: 0,
		outline: "sm"
	},
	{
		top: 87,
		left: 38,
		size: 250,
		type: "circle",
		anim: 1,
		outline: "lg"
	},
	{
		top: 90,
		left: 68,
		size: 170,
		type: "square",
		anim: 2,
		outline: "md",
		rotate: -16
	},
	{
		top: 93,
		left: 52,
		size: 110,
		type: "diamond",
		anim: 3,
		outline: "sm"
	},
	{
		top: 96,
		left: 24,
		size: 200,
		type: "rounded",
		anim: 4,
		outline: "lg",
		rotate: 12
	},
	{
		top: 97,
		left: 90,
		size: 280,
		type: "circle",
		anim: 0,
		outline: "md"
	}
];
function landingShapeRadius(type) {
	switch (type) {
		case "circle":
		case "pill": return "rounded-full";
		case "square": return "rounded-xl";
		case "rounded": return "rounded-[2rem]";
		case "diamond": return "rounded-2xl";
	}
}
function LandingDecorations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: LANDING_SHAPES.map((shape, i) => {
			const isPill = shape.type === "pill";
			const isDiamond = shape.type === "diamond";
			const extraRotate = "rotate" in shape && shape.rotate ? shape.rotate : 0;
			const size = `clamp(8rem, 22vw, ${shape.size}px)`;
			const pillWidth = `clamp(10rem, 28vw, ${Math.round(shape.size * 1.65)}px)`;
			const pillHeight = `clamp(3.5rem, 8vw, ${Math.round(shape.size * .42)}px)`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute landing-shape-drift-${shape.anim}`,
				style: {
					top: `${shape.top}%`,
					left: `${shape.left}%`,
					animationDelay: `${i * 1.4}s`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `border-2 ${landingShapeRadius(shape.type)} ${LANDING_OUTLINE_STYLES[shape.outline]}`,
					style: {
						width: isPill ? pillWidth : size,
						height: isPill ? pillHeight : size,
						transform: `translate(-50%, -50%)${isDiamond ? " rotate(45deg)" : extraRotate ? ` rotate(${extraRotate}deg)` : ""}`
					}
				})
			}, i);
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-landing text-white antialiased",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingDecorations, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[1]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactMetrics, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorporateBenefits, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Installments, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForCompanies, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
				]
			})]
		})
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				e.target.classList.add("is-visible");
				io.unobserve(e.target);
			}
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function useSectionActivation(sectionId) {
	const sectionRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	const trigger = (0, import_react.useCallback)(() => {
		setActive(false);
		window.setTimeout(() => setActive(true), 60);
	}, []);
	const reset = (0, import_react.useCallback)(() => setActive(false), []);
	(0, import_react.useEffect)(() => {
		const el = sectionRef.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) trigger();
			else reset();
		}, {
			threshold: .16,
			rootMargin: "0px 0px -48px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [trigger, reset]);
	(0, import_react.useEffect)(() => {
		const hash = `#${sectionId}`;
		const onHash = () => {
			if (window.location.hash === hash) trigger();
		};
		const onNavClick = (event) => {
			if (event.target.closest(`a[href="${hash}"]`)) window.setTimeout(trigger, 320);
		};
		if (window.location.hash === hash) trigger();
		window.addEventListener("hashchange", onHash);
		document.addEventListener("click", onNavClick);
		return () => {
			window.removeEventListener("hashchange", onHash);
			document.removeEventListener("click", onNavClick);
		};
	}, [sectionId, trigger]);
	return {
		sectionRef,
		active
	};
}
function Logo({ inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-2 sm:gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-bold sm:h-10 sm:w-10 sm:text-lg ${inverted ? "text-primary-foreground shadow-[var(--shadow-orb)]" : "text-primary-foreground shadow-[var(--shadow-brand)]"}`,
			style: { background: inverted ? "var(--gradient-orb)" : "var(--gradient-brand)" },
			children: "A"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `truncate text-base font-semibold tracking-tight sm:text-lg ${inverted ? "text-white" : "text-foreground"}`,
			children: "AdeCerebiia"
		})]
	});
}
function NavInlineLink({ href, label, icon: Icon, onClick, index = 0 }) {
	const iconAnim = NAV_ICON_HOVER_ANIM[href] ?? "nav-icon-anim-home";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		title: label,
		onClick,
		style: { animationDelay: `${index * 55}ms` },
		className: "nav-inline-link nav-item-enter group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:text-white xl:px-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `nav-card-icon inline-flex ${iconAnim}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "nav-inline-icon h-4 w-4 text-white/55 transition-all duration-300 group-hover:text-white",
				strokeWidth: 2.25,
				"aria-hidden": true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative whitespace-nowrap",
			children: label
		})]
	});
}
function NavCardLink({ href, label, icon: Icon, onClick, index = 0, className = "", mobile = false }) {
	const iconAnim = NAV_ICON_HOVER_ANIM[href] ?? "nav-icon-anim-home";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		title: label,
		onClick,
		style: mobile ? void 0 : { animationDelay: `${index * 70}ms` },
		className: `nav-card-link ${mobile ? "" : "nav-item-enter"} group flex w-full min-w-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-1.5 py-2 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 ${mobile ? "mobile-nav-card mobile-nav-item" : ""} ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `nav-card-icon inline-flex ${iconAnim}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "nav-card-icon-svg h-5 w-5 text-white/80 transition-all duration-300 sm:h-[22px] sm:w-[22px]",
				strokeWidth: 2.25,
				"aria-hidden": true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1.5 max-w-full text-center text-[10px] font-medium leading-tight text-white/80 transition-colors duration-300 group-hover:text-white sm:text-[11px]",
			children: label
		})]
	});
}
function NavAuthButtons({ className = "", stacked = false, onNavigate }) {
	const visibility = stacked ? "inline-flex" : "hidden lg:inline-flex";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center gap-3 ${stacked ? "w-full flex-col" : ""} ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: LOGIN_URL,
			onClick: onNavigate,
			className: `nav-btn-ingresar ${visibility} nav-btn-lift mobile-sheet-footer-item mobile-sheet-register items-center justify-center rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm sm:px-3.5 sm:py-2 ${stacked ? "w-full" : ""}`,
			children: "Ingresar"
		})
	});
}
function NavCta({ className = "", stacked = false, onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		onClick: onNavigate,
		className: `nav-btn-ingresar nav-btn-lift ${stacked ? "inline-flex" : "hidden lg:inline-flex"} items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium sm:gap-2 sm:text-sm sm:px-3.5 sm:py-2 ${stacked ? "mobile-sheet-footer-item mobile-sheet-cta w-full" : ""} ${className}`,
		children: ["Contáctanos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "nav-arrow-slide h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" })]
	});
}
function Nav() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [navVisible, setNavVisible] = (0, import_react.useState)(true);
	const lastScrollY = (0, import_react.useRef)(0);
	const closeMobileMenu = (0, import_react.useCallback)(() => setMobileOpen(false), []);
	(0, import_react.useEffect)(() => {
		const SCROLL_THRESHOLD = 10;
		const onScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY > 12);
			if (currentScrollY <= 12) setNavVisible(true);
			else {
				const delta = currentScrollY - lastScrollY.current;
				if (delta > SCROLL_THRESHOLD) setNavVisible(false);
				else if (delta < -10) setNavVisible(true);
			}
			lastScrollY.current = currentScrollY;
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (mobileOpen) setNavVisible(true);
	}, [mobileOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `nav-header-enter nav-header-scrollable sticky top-0 z-40 w-full border-b border-white/15 bg-white/8 text-white backdrop-blur-xl ${scrolled ? "border-white/20 bg-white/12 shadow-[0_8px_40px_rgba(15,23,42,0.22)]" : ""} ${navVisible ? "nav-header-visible" : "nav-header-hidden"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8 lg:py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 lg:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#inicio",
						className: "nav-logo-hover shrink-0",
						"aria-label": "AdeCerebiia — inicio",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "nav-item-enter hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1",
						style: { animationDelay: "180ms" },
						"aria-label": "Navegación principal",
						children: NAV_LINKS.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavInlineLink, {
							...link,
							index: i,
							onClick: (event) => {
								if (link.href.startsWith("#")) {
									event.preventDefault();
									navigateToHash(link.href);
								}
							}
						}, link.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "nav-item-enter ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-2.5 lg:ml-0",
						style: { animationDelay: "350ms" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavAuthButtons, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCta, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
								open: mobileOpen,
								onOpenChange: setMobileOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-expanded": mobileOpen,
										className: "nav-menu-btn inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/20 lg:hidden sm:h-10 sm:w-10",
										"aria-label": mobileOpen ? "Cerrar menú" : "Abrir menú",
										children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "nav-menu-icon h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "nav-menu-icon h-5 w-5" })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
									side: "right",
									className: "mobile-sheet flex w-[min(100vw,22rem)] max-w-[calc(100vw-1rem)] flex-col gap-0 border-l border-white/15 bg-white/8 p-0 text-white shadow-[-8px_0_40px_rgba(15,23,42,0.35)] backdrop-blur-2xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(265_55%_55%_/_0.18),transparent_55%)]",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
											className: "mobile-sheet-header relative border-b border-white/15 px-4 py-4 text-left sm:px-6 sm:py-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
												className: "sr-only",
												children: "Menú de navegación"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
											className: "mobile-sheet-nav relative grid grid-cols-2 gap-3 p-4 sm:grid-cols-2",
											"aria-label": "Menú móvil",
											children: NAV_LINKS.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCardLink, {
												...link,
												index: i,
												mobile: true,
												className: "min-w-0 w-full py-3.5",
												onClick: (event) => handleMobileNavClick(link.href, closeMobileMenu, event)
											}, link.href))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mobile-sheet-footer relative mt-auto space-y-3 border-t border-white/15 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavAuthButtons, {
												stacked: true,
												onNavigate: closeMobileMenu
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavCta, {
												stacked: true,
												className: "justify-center",
												onNavigate: closeMobileMenu
											})]
										})
									]
								})]
							})
						]
					})
				]
			})
		})
	});
}
var HERO_HIGHLIGHTS = [
	{
		icon: CalendarDays,
		title: "Control Operativo Total",
		desc: "Define ventanas de tiempo personalizadas. Las solicitudes se desactivan automáticamente antes del cierre de nómina para garantizar un proceso contable limpio."
	},
	{
		icon: Workflow,
		title: "Cero Carga Administrativa",
		desc: "Transforma las solicitudes manuales en un registro digital centralizado, ordenado y auditable."
	},
	{
		icon: TrendingUp,
		title: "Conciliación sin Errores",
		desc: "Exporta reportes consolidados listos para aplicar a tu software de nómina tradicional al finalizar el periodo permitido."
	}
];
function HeroHighlight({ icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "flex items-start gap-3.5 p-4 sm:gap-4 sm:p-5",
		hover: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
			icon,
			size: "md",
			variant: "orb"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 pt-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold text-white sm:text-base",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-xs leading-relaxed text-white/70 sm:text-sm",
				children: desc
			})]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inicio",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 pt-6 pb-14 sm:px-6 sm:pt-8 sm:pb-20 lg:pt-8 lg:pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-xl py-2 sm:py-4 lg:py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "section-badge mt-6 sm:mt-6 lg:mt-0",
							children: "Gestión de adelantos de nómina"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white sm:mt-6 sm:text-4xl sm:leading-[1.08] lg:text-5xl",
							children: [
								"Bienestar para tu equipo,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-soft",
									children: "control para tu empresa."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base",
							children: "Automatiza, gestiona y registra las solicitudes de adelanto de nómina de tus colaboradores. Una plataforma diseñada para integrarse a tu flujo operativo actual de forma fluida, elegante y segura."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-4 sm:space-y-5",
							children: HERO_HIGHLIGHTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroHighlight, { ...item }, item.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButtonPrimary, {
									href: REGISTER_URL,
									className: "w-full justify-center gap-2 sm:w-auto",
									children: ["Regístrate gratis", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButtonEmployeeAccess, {
									href: REGISTER_URL,
									className: "w-full gap-2 sm:w-auto",
									children: "Activar Acceso Empleado"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButtonSecondary, {
									href: LOGIN_URL,
									className: "w-full justify-center gap-2 sm:w-auto",
									children: "Inicia sesión"
								})
							]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex min-h-[320px] items-center justify-center sm:min-h-[420px] lg:min-h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full max-w-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustOrb, {})
						})
					})
				})]
			})
		})
	});
}
function TrustOrb() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto mt-4 aspect-[4/5] w-full max-w-[300px] sm:mt-0 sm:aspect-[5/6] sm:max-w-[420px] lg:max-w-[480px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[3rem] bg-white/40 opacity-70 blur-3xl sm:-inset-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 opacity-[0.35]",
				style: {
					backgroundImage: "radial-gradient(oklch(0.52 0.24 268 / 0.18) 1px, transparent 1px)",
					backgroundSize: "22px 22px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-4 h-[78%] w-[86%] -translate-x-1/2 rounded-3xl border border-white/60 bg-white/70 shadow-lg backdrop-blur-md sm:top-6",
				style: { transform: "translate(-46%, 0) rotate(-5deg)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-2 h-[88%] w-[92%] overflow-hidden rounded-2xl border border-foreground/8 bg-white p-5 text-foreground shadow-[0_20px_50px_rgba(15,23,42,0.12)] animate-float-slow sm:rounded-3xl sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-primary/12" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-primary/8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-primary/8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm",
								style: { background: "var(--gradient-brand)" },
								children: "A"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-tight text-foreground",
								children: "AdeCerebiia"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/8 px-2.5 py-1 text-[10px] font-medium text-foreground/75",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-1.5 w-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" })]
							}), "En línea"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-6 flex h-28 w-28 items-center justify-center sm:mt-10 sm:h-40 sm:w-40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-full w-full rounded-full bg-primary/10 animate-pulse-ring" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute h-full w-full rounded-full bg-primary/10 animate-pulse-ring",
								style: { animationDelay: "1.2s" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_12px_32px_rgba(15,23,42,0.14)] ring-4 ring-primary/15 sm:h-28 sm:w-28",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "h-9 w-9 text-accent sm:h-11 sm:w-11",
									strokeWidth: 2.25
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-accent shadow-lg ring-2 ring-accent/20 sm:h-9 sm:w-9",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "h-4 w-4 sm:h-5 sm:w-5",
										strokeWidth: 2.5
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-center sm:mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50 sm:text-[11px]",
							children: "Confianza · Bienestar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 text-xl font-bold leading-tight text-foreground sm:text-2xl",
							children: [
								"Adelantos seguros",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"para tu equipo"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-3 gap-1.5 border-t border-foreground/8 pt-4 text-center sm:mt-8 sm:gap-2 sm:pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStat, {
								label: "Cuotas",
								value: "Hasta 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStat, {
								label: "Costo empresa",
								value: "$0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStat, {
								label: "Tarifa",
								value: "$8.000"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-4 top-24 hidden animate-float sm:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
					icon: HeartHandshake,
					title: "Sin riesgo",
					sub: "Para tu empresa"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-4 bottom-28 hidden animate-float-slow sm:block",
				style: { animationDelay: "0.6s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
					icon: CalendarDays,
					title: "Hasta 3 cuotas",
					sub: "Flexibilidad de pago"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-2 bottom-10 hidden animate-float-slow sm:block",
				style: { animationDelay: "1.1s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
					icon: Banknote,
					title: "Tarifa fija",
					sub: "$8.000 por adelanto"
				})
			})
		]
	});
}
function TrustStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] uppercase tracking-wider text-foreground/50",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 text-sm font-bold text-foreground",
		children: value
	})] });
}
function FloatingChip({ icon, title, sub, className = "", style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `glass-chip flex max-w-[12rem] items-center gap-3 px-3 py-2.5 sm:max-w-none sm:px-3.5 sm:py-3 ${className}`,
		style,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
			icon,
			size: "sm",
			variant: "orb"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 pr-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold leading-tight text-white sm:text-sm",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] text-white/60 sm:text-[11px]",
				children: sub
			})]
		})]
	});
}
var IMPACT_METRICS = [
	{
		target: 70,
		prefix: "",
		suffix: "%",
		label: "Estrés Financiero"
	},
	{
		target: -16,
		prefix: "",
		suffix: "%",
		label: "Rotación de Personal"
	},
	{
		target: 0,
		prefix: "$",
		suffix: "",
		label: "Costo Organizacional"
	}
];
function formatMetricValue(value, metric) {
	const rounded = Math.round(value);
	return `${metric.prefix}${rounded}${metric.suffix}`;
}
function easeOutCubic(t) {
	return 1 - (1 - t) ** 3;
}
function CountUpMetric({ metric, duration = 1600 }) {
	const ref = (0, import_react.useRef)(null);
	const frameRef = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(() => formatMetricValue(0, metric));
	(0, import_react.useEffect)(() => {
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
			const tick = (now) => {
				const progress = Math.min((now - startTime) / duration, 1);
				const eased = easeOutCubic(progress);
				setDisplay(formatMetricValue(startValue + (target - startValue) * eased, metric));
				if (progress < 1) frameRef.current = requestAnimationFrame(tick);
				else frameRef.current = null;
			};
			frameRef.current = requestAnimationFrame(tick);
		};
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setDisplay(formatMetricValue(startValue, metric));
				runCount();
			} else {
				cancel();
				setDisplay(formatMetricValue(startValue, metric));
			}
		}, {
			threshold: .4,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(el);
		return () => {
			cancel();
			io.disconnect();
		};
	}, [metric, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className: "tabular-nums text-gradient-metric",
		children: display
	});
}
function ImpactMetrics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6",
				children: IMPACT_METRICS.map((metric, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "p-8 text-center sm:p-10",
						hover: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl font-extrabold sm:text-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUpMetric, { metric })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium tracking-wide text-white/70",
							children: metric.label
						})]
					})
				}, metric.label))
			})
		})
	});
}
var CORPORATE_BENEFITS = [
	{
		icon: Users,
		title: "Retención de talento clave",
		desc: "Fortalece la propuesta de valor para tus colaboradores con un beneficio financiero tangible que impacta directamente en la permanencia del equipo."
	},
	{
		icon: TrendingUp,
		title: "Mayor productividad operativa",
		desc: "Reduce el ausentismo y el estrés financiero del personal, mejorando el foco, la asistencia y el desempeño en operaciones críticas."
	},
	{
		icon: ShieldCheck,
		title: "Cero riesgo para la empresa",
		desc: "Implementación sin costo organizacional, sin endeudamiento corporativo y con trazabilidad completa en cada adelanto descontado por nómina."
	}
];
function CorporateBenefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				title: "Diseñado para optimizar tus Recursos Humanos",
				subtitle: "Un beneficio financiero que fortalece tu equipo sin costo para la organización."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6",
				children: CORPORATE_BENEFITS.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						as: "article",
						className: "h-full p-6 sm:p-7",
						hover: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-[var(--shadow-orb)]",
								style: { background: "var(--gradient-orb)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-6 w-6 text-white",
									strokeWidth: 2.25,
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-lg font-semibold text-white sm:text-xl",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-white/70",
								children: desc
							})
						]
					})
				}, title))
			})]
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "producto",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				badge: "Beneficios",
				title: "Bienestar para tu equipo, tranquilidad para tu empresa",
				subtitle: "Una solución integral donde la empresa no asume costos y el empleado accede a su salario ganado de forma flexible."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Bolt,
						title: "Solicitud en segundos",
						desc: "Tus empleados solicitan su adelanto desde la app en pocos segundos, cuando lo necesiten."
					},
					{
						icon: CalendarDays,
						title: "Pagos hasta en 3 cuotas",
						desc: "Cada adelanto se puede pagar hasta en 3 cuotas, sin afectar el bolsillo del empleado."
					},
					{
						icon: ShieldCheck,
						title: "Cero riesgo para la empresa",
						desc: "La empresa no paga nada. El empleado asume una tarifa fija de $8.000 por adelanto."
					},
					{
						icon: Users,
						title: "Retención de talento",
						desc: "Un beneficio diferencial que reduce rotación y aumenta la satisfacción del equipo."
					},
					{
						icon: TrendingUp,
						title: "Bienestar financiero",
						desc: "Reduce el estrés financiero y elimina la dependencia de préstamos con altos intereses."
					},
					{
						icon: Smartphone,
						title: "100% digital",
						desc: "Sin papeleos ni trámites. Tus empleados solicitan desde su móvil en cualquier momento."
					}
				].map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						as: "article",
						className: "group h-full p-5 sm:p-7",
						hover: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandIcon, {
								icon: Icon,
								size: "lg",
								variant: "orb",
								className: "group-hover:scale-105 group-hover:shadow-[0_0_32px_hsl(265_55%_55%_/_0.4)]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold text-white",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-white/70",
								children: desc
							})
						]
					})
				}, title))
			})]
		})
	});
}
var CUOTAS_STEPS = [
	{
		n: "1",
		label: "Cuota única",
		desc: "Se descuenta en la siguiente nómina."
	},
	{
		n: "2",
		label: "2 cuotas",
		desc: "Distribuido en las próximas dos nóminas."
	},
	{
		n: "3",
		label: "3 cuotas",
		desc: "Máxima flexibilidad para el empleado."
	}
];
function CuotasTimelineFigure({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "cuotas-timeline-figure relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl font-bold text-primary-foreground shadow-[var(--shadow-orb)] ring-4 ring-transparent transition-shadow duration-500",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full w-full items-center justify-center rounded-xl",
			style: { background: "var(--gradient-orb)" },
			children: n
		})
	});
}
function CuotasTimelineCard({ label, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		as: "article",
		className: "w-full p-5 text-center sm:p-6",
		hover: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-lg font-semibold text-white",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm text-white/70",
			children: desc
		})]
	});
}
function CuotasTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cuotas-timeline group/timeline relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden sm:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 top-7 z-0 h-0.5",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cuotas-timeline-segment cuotas-timeline-segment-1 absolute top-0 h-full",
					style: {
						left: "16.666%",
						width: "33.333%"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-full bg-white/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cuotas-timeline-segment-fill absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-white/50 via-white to-white/50" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cuotas-timeline-segment cuotas-timeline-segment-2 absolute top-0 h-full",
					style: {
						left: "50%",
						width: "33.333%"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-full bg-white/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cuotas-timeline-segment-fill absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-white/50 via-white to-white/50" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 grid grid-cols-3 gap-4",
				children: CUOTAS_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cuotas-timeline-step group/step flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuotasTimelineFigure, { n: step.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuotasTimelineCard, {
							label: step.label,
							desc: step.desc
						})
					})]
				}, step.n))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col items-center sm:hidden",
			children: CUOTAS_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cuotas-timeline-step group/step flex w-full max-w-sm flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuotasTimelineFigure, { n: step.n }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuotasTimelineCard, {
							label: step.label,
							desc: step.desc
						})
					}),
					i < CUOTAS_STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative my-3 flex h-12 w-0.5 shrink-0",
						"aria-hidden": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-full bg-white/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cuotas-timeline-segment-fill-v absolute inset-0 origin-top scale-y-0 rounded-full bg-gradient-to-b from-white/50 via-white to-white/50" })]
					})
				]
			}, step.n))
		})]
	});
}
function Installments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cuotas",
		className: "section-shell relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 sm:gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Pagos a cuotas" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title mt-4 text-left",
						children: "Flexibilidad real para tus empleados"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-subtitle mt-4 text-left",
						children: "Cada adelanto puede pagarse hasta en 3 cuotas, ajustándose al momento financiero del empleado. La empresa no paga nada: el empleado asume una tarifa fija de $8.000 por adelanto."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 sm:mt-8",
						children: [
							"Descuento por nómina, sin gestión manual para tu empresa",
							"El empleado elige entre 1, 2 o 3 cuotas según su flujo",
							"Tarifa fija de $8.000 por adelanto: si solicita $500.000, recibe $492.000",
							"Total transparencia: ve sus cuotas y saldos en tiempo real",
							"Sin intereses ocultos ni letra pequeña"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-white/90 sm:text-base",
								children: b
							})]
						}, b))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CuotasTimeline, {})
				})]
			})
		})
	});
}
var HOW_IT_WORKS_STEPS = [
	{
		n: "01",
		title: "Conecta tu nómina",
		desc: "Integramos AdeCerebiia con tu sistema de nómina en días."
	},
	{
		n: "02",
		title: "Activa a tus empleados",
		desc: "Cada empleado recibe acceso a su panel personal."
	},
	{
		n: "03",
		title: "Solicitan desde la app",
		desc: "Piden el adelanto y eligen entre 1, 2 o 3 cuotas. La solicitud llega al panel de Cerebiia."
	},
	{
		n: "04",
		title: "Pagamos y descontamos",
		desc: "Nuestro equipo procesa y desembolsa el adelanto. Las cuotas se descuentan de la nómina sin trabajo extra para ti."
	}
];
function HowStepFigure({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "how-works-figure relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground shadow-[var(--shadow-orb)] ring-4 ring-transparent transition-shadow duration-500 sm:h-14 sm:w-14 sm:text-base",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full w-full items-center justify-center rounded-xl",
			style: { background: "var(--gradient-orb)" },
			children: n
		})
	});
}
function HowWorksStepCard({ title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		as: "article",
		className: "group/step h-full p-5 sm:p-6",
		hover: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-semibold text-white sm:text-lg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm leading-relaxed text-white/70",
				children: desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/step:scale-x-100" })
		]
	});
}
function HowWorksTimeline({ active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "how-works-timeline group/timeline relative mt-10 sm:mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden lg:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-7 z-0 h-0.5",
				"aria-hidden": true,
				children: [
					{
						left: "12.5%",
						width: "25%"
					},
					{
						left: "37.5%",
						width: "25%"
					},
					{
						left: "62.5%",
						width: "25%"
					}
				].map((seg, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `how-works-segment how-works-segment-${i + 1} absolute top-0 h-full`,
					style: {
						left: seg.left,
						width: seg.width
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-full bg-white/12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `how-works-segment-fill absolute inset-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-white/40 via-white to-white/40 ${active ? "is-active" : ""}`,
						style: { transitionDelay: active ? `${240 + i * 120}ms` : "0ms" }
					})]
				}, seg.left))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 grid grid-cols-4 gap-5",
				children: HOW_IT_WORKS_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `how-step-enter how-works-step group/step flex flex-col items-center ${active ? "is-active" : ""}`,
					style: { transitionDelay: `${i * 150}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowStepFigure, { n: step.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowWorksStepCard, {
							title: step.title,
							desc: step.desc
						})
					})]
				}, `lg-${step.n}`))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:hidden",
			children: HOW_IT_WORKS_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `how-step-enter how-works-step group/step flex flex-col ${active ? "is-active" : ""}`,
				style: { transitionDelay: `${i * 150}ms` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex justify-center sm:justify-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowStepFigure, { n: step.n })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowWorksStepCard, {
					title: step.title,
					desc: step.desc
				})]
			}, `sm-${step.n}`))
		})]
	});
}
function HowItWorks() {
	const { sectionRef, active } = useSectionActivation("como-funciona");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "como-funciona",
		ref: sectionRef,
		className: "section-shell relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				badge: "Cómo funciona",
				title: "Implementación simple. Impacto inmediato.",
				subtitle: "Cuatro pasos para activar adelantos de nómina en tu empresa sin fricción operativa."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowWorksTimeline, { active })]
		})
	});
}
function ForCompanies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "empresas",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 sm:gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "order-2 lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-3 -z-10 rounded-3xl opacity-30 blur-2xl sm:-inset-4",
							style: { background: "var(--gradient-orb)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "relative overflow-hidden p-6 sm:p-10",
							hover: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 opacity-90",
								style: { background: "var(--gradient-orb)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative text-primary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										className: "h-8 w-8 text-white sm:h-10 sm:w-10",
										strokeWidth: 2.25
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 text-4xl font-bold leading-tight sm:mt-6 sm:text-5xl",
										children: "+85%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-base text-white/90 sm:text-lg",
										children: "de los empleados reportan mayor tranquilidad financiera tras adoptar adelantos de nómina."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid grid-cols-2 gap-4 border-t border-white/20 pt-5 sm:mt-8 sm:pt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold sm:text-3xl",
											children: "+40%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-white/75 sm:text-sm",
											children: "Retención"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-2xl font-bold sm:text-3xl",
											children: "-30%"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-white/75 sm:text-sm",
											children: "Ausentismo"
										})] })]
									})
								]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBadge, { children: "Para empresas" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title mt-4 text-left",
							children: "Un beneficio que tu equipo va a amar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-subtitle mt-4 text-left",
							children: "AdeCerebiia se integra con tu sistema de nómina y entrega a tu equipo acceso a su salario ganado. Sin costo para la empresa, sin riesgo, sin complicaciones."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 sm:mt-8",
							children: [
								"Atrae y retiene talento con un beneficio diferencial",
								"Reduce el ausentismo causado por estrés financiero",
								"Aumenta la productividad y satisfacción del equipo",
								"Sin costo de implementación ni mantenimiento",
								"La empresa no paga nada: el empleado asume el costo de $8.000 por adelanto",
								"Integración con tu sistema de nómina actual",
								"Soporte dedicado para tu empresa y empleados"
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckIcon, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-white/90 sm:text-base",
									children: b
								})]
							}, b))
						})
					]
				})]
			})
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "relative overflow-hidden p-6 sm:p-12 lg:p-16",
				hover: false,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 opacity-80",
						style: { background: "var(--gradient-orb)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(0_0%_100%_/_0.15),transparent_50%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-0 opacity-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute right-4 top-4 sm:right-8 sm:top-8",
							width: "72",
							height: "72",
							viewBox: "0 0 100 100",
							fill: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "50",
								cy: "50",
								r: "45",
								stroke: "white",
								strokeWidth: "1"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute -bottom-10 -left-10 hidden sm:block",
							width: "180",
							height: "180",
							viewBox: "0 0 180 180",
							fill: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: "20",
								y: "20",
								width: "140",
								height: "140",
								rx: "20",
								stroke: "white",
								strokeWidth: "1",
								transform: "rotate(20 90 90)"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
								children: "Dale a tu equipo el beneficio que estaban esperando"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-base text-white/85 sm:mt-4 sm:text-lg",
								children: "Agenda una demo de 20 minutos y descubre cómo AdeCerebiia transforma la nómina de tu empresa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassButtonPrimary, {
									href: WHATSAPP_URL,
									external: true,
									className: "w-full justify-center gap-2 bg-white text-[hsl(262_55%_40%)] shadow-[var(--shadow-cta-white)] hover:bg-white/95 sm:w-auto",
									children: ["Contactarnos por WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 shrink-0" })]
								})
							})
						]
					})
				]
			}) })
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-white/10 bg-white/5 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 md:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm text-white/75",
							children: "Plataforma de adelantos de nómina. Tu dinero, a tu ritmo."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Producto",
						links: [
							"Beneficios",
							"Pagos a cuotas",
							"Seguridad",
							"Integraciones"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Empresa",
						links: [
							"Sobre nosotros",
							"Clientes",
							"Blog",
							"Contacto"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Legal",
						links: [
							"Términos",
							"Privacidad",
							"Cookies"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 border-t border-white/15 pt-5 text-center text-xs text-white/60 sm:mt-12 sm:pt-6",
				children: "© 2026 AdeCerebiia · Todos los derechos reservados"
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-sm font-semibold text-white",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#",
			className: "text-sm text-white/65 transition-colors hover:text-white",
			children: l
		}) }, l))
	})] });
}
//#endregion
export { Index as component };
