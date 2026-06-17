import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as PiggyBank, c as CalendarClock, i as Shield, l as Building2, n as Sparkles, o as HeartHandshake, r as Smartphone, s as CircleCheck, t as Zap, u as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CPSVQwKu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHATSAPP_URL = `https://wa.me/573169393922?text=${encodeURIComponent("Hola, me interesa una demo de AdeCerebiia para mi empresa.")}`;
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Installments, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForCompanies, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
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
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground font-bold text-lg shadow-[var(--shadow-brand)]",
			style: { background: "var(--gradient-brand)" },
			children: "A"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg font-semibold tracking-tight",
			children: "AdeCerebiia"
		})]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#producto",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: "Beneficios"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cuotas",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: "Pagos a cuotas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#como-funciona",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: "Cómo funciona"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#empresas",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: "Para empresas"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.03]",
						style: { background: "var(--gradient-brand)" },
						children: ["Solicitar demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10",
				style: { background: "var(--gradient-soft)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30 blur-3xl",
					style: { background: "var(--gradient-brand)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-40 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl bg-primary" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-28 lg:pb-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-16 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Plataforma de adelantos de nómina"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
							children: [
								"Tu dinero,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-clip-text text-transparent",
									style: { backgroundImage: "var(--gradient-brand)" },
									children: "a tu ritmo."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "Ofrece a tus empleados acceso al salario que ya ganaron, con la flexibilidad de pagarlo hasta en 3 cuotas. La empresa no paga nada: el empleado asume una tarifa fija de $8.000 por adelanto."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.02]",
								style: { background: "var(--gradient-brand)" },
								children: ["Solicitar demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#como-funciona",
								className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted",
								children: "Ver cómo funciona"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Sin costo para la empresa"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Tarifa fija: $8.000 por adelanto"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }), " Hasta 3 cuotas"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 150,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustOrb, {})
					})]
				})
			})
		]
	});
}
function TrustOrb() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto aspect-[5/6] w-full max-w-[480px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -inset-10 -z-10 rounded-[3rem] opacity-40 blur-3xl",
				style: { background: "var(--gradient-brand)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 opacity-[0.18]",
				style: {
					backgroundImage: "radial-gradient(oklch(0.52 0.24 268 / 0.5) 1px, transparent 1px)",
					backgroundSize: "22px 22px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-6 h-[78%] w-[86%] -translate-x-1/2 rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm",
				style: { transform: "translate(-46%, 0) rotate(-5deg)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-2 h-[88%] w-[92%] overflow-hidden rounded-3xl p-8 text-primary-foreground shadow-[var(--shadow-brand)] animate-float-slow",
				style: { background: "var(--gradient-hero)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border border-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold",
									children: "A"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-tight opacity-95",
								children: "AdeCerebiia"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-1.5 w-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-white" })]
							}), "En línea"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-10 flex h-40 w-40 items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute h-full w-full rounded-full bg-white/10 animate-pulse-ring" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute h-full w-full rounded-full bg-white/10 animate-pulse-ring",
								style: { animationDelay: "1.2s" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-28 w-28 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									className: "h-12 w-12",
									strokeWidth: 1.6
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "h-5 w-5",
										strokeWidth: 2.2
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-medium uppercase tracking-[0.2em] opacity-70",
							children: "Confianza · Bienestar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 text-2xl font-bold leading-tight",
							children: [
								"Adelantos seguros",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"para tu equipo"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-3 gap-2 border-t border-white/20 pt-5 text-center",
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
				className: "absolute -left-4 top-24 animate-float",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4" }),
					title: "Sin riesgo",
					sub: "Para tu empresa"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -right-4 bottom-28 animate-float-slow",
				style: { animationDelay: "0.6s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-4 w-4" }),
					title: "Hasta 3 cuotas",
					sub: "Flexibilidad de pago"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -left-2 bottom-10 animate-float-slow",
				style: { animationDelay: "1.1s" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChip, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PiggyBank, { className: "h-4 w-4" }),
					title: "Tarifa fija",
					sub: "$8.000 por adelanto"
				})
			})
		]
	});
}
function TrustStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] uppercase tracking-wider opacity-70",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 text-sm font-bold",
		children: value
	})] });
}
function FloatingChip({ icon, title, sub, className = "", style }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-3.5 py-2.5 backdrop-blur-sm shadow-[var(--shadow-card)] ${className}`,
		style,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground",
			style: { background: "var(--gradient-brand)" },
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pr-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold leading-tight",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] text-muted-foreground",
				children: sub
			})]
		})]
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "producto",
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary",
						children: "Beneficios"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl",
						children: "Bienestar para tu equipo, tranquilidad para tu empresa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "Una solución integral donde la empresa no asume costos y el empleado accede a su salario ganado de forma flexible."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: Zap,
						title: "Solicitud en segundos",
						desc: "Tus empleados solicitan su adelanto desde la app en pocos segundos, cuando lo necesiten."
					},
					{
						icon: CalendarClock,
						title: "Pagos hasta en 3 cuotas",
						desc: "Cada adelanto se puede pagar hasta en 3 cuotas, sin afectar el bolsillo del empleado."
					},
					{
						icon: Shield,
						title: "Cero riesgo para la empresa",
						desc: "La empresa no paga nada. El empleado asume una tarifa fija de $8.000 por adelanto."
					},
					{
						icon: HeartHandshake,
						title: "Retención de talento",
						desc: "Un beneficio diferencial que reduce rotación y aumenta la satisfacción del equipo."
					},
					{
						icon: PiggyBank,
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-brand)] transition-transform duration-500 group-hover:scale-110",
								style: { background: "var(--gradient-brand)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: desc
							})
						]
					})
				}, title))
			})]
		})
	});
}
function Installments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cuotas",
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 -z-10",
			style: { background: "var(--gradient-soft)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-3.5 w-3.5" }), "Pagos a cuotas"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl",
						children: "Flexibilidad real para tus empleados"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "Cada adelanto puede pagarse hasta en 3 cuotas, ajustándose al momento financiero del empleado. La empresa no paga nada: el empleado asume una tarifa fija de $8.000 por adelanto."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: [
							"Descuento por nómina, sin gestión manual para tu empresa",
							"El empleado elige entre 1, 2 o 3 cuotas según su flujo",
							"Tarifa fija de $8.000 por adelanto: si solicita $500.000, recibe $492.000",
							"Total transparencia: ve sus cuotas y saldos en tiempo real",
							"Sin intereses ocultos ni letra pequeña"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: b
							})]
						}, b))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
						children: [
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
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5",
							style: { transitionDelay: `${i * 60}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-primary-foreground shadow-[var(--shadow-brand)]",
									style: { background: "var(--gradient-brand)" },
									children: c.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 text-lg font-semibold",
									children: c.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-muted-foreground",
									children: c.desc
								})
							]
						}, c.label))
					})
				})]
			})
		})]
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "como-funciona",
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary",
					children: "Cómo funciona"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl",
					children: "Implementación simple. Impacto inmediato."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
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
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-bold bg-clip-text text-transparent",
								style: { backgroundImage: "var(--gradient-brand)" },
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.desc
							})
						]
					})
				}, s.n))
			})]
		})
	});
}
function ForCompanies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "empresas",
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "order-2 lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl",
							style: { background: "var(--gradient-brand)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-3xl p-10 text-primary-foreground shadow-[var(--shadow-brand)]",
							style: { background: "var(--gradient-hero)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-10 w-10 opacity-90" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 text-5xl font-bold leading-tight",
									children: "+85%"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-lg opacity-90",
									children: "de los empleados reportan mayor tranquilidad financiera tras adoptar adelantos de nómina."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-3xl font-bold",
										children: "+40%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm opacity-80",
										children: "Retención"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-3xl font-bold",
										children: "-30%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm opacity-80",
										children: "Ausentismo"
									})] })]
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary",
							children: "Para empresas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl font-bold tracking-tight sm:text-5xl",
							children: "Un beneficio que tu equipo va a amar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "AdeCerebiia se integra con tu sistema de nómina y entrega a tu equipo acceso a su salario ganado. Sin costo para la empresa, sin riesgo, sin complicaciones."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
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
		className: "py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl p-12 text-primary-foreground shadow-[var(--shadow-brand)] sm:p-16",
				style: { background: "var(--gradient-hero)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-0 opacity-30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "absolute right-8 top-8",
						width: "100",
						height: "100",
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
						className: "absolute -bottom-10 -left-10",
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl",
							children: "Dale a tu equipo el beneficio que estaban esperando"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-lg opacity-90",
							children: "Agenda una demo de 20 minutos y descubre cómo AdeCerebiia transforma la nómina de tu empresa."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-transform hover:scale-[1.02]",
								children: ["Solicitar demo por WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})]
			}) })
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
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
				className: "mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground",
				children: "© 2026 AdeCerebiia · Todos los derechos reservados"
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-sm font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#",
			className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
			children: l
		}) }, l))
	})] });
}
//#endregion
export { Index as component };
