import { cn } from "@/lib/utils";
import { useId } from "react";
import type { LucideIcon, LucideProps } from "lucide-react";

export type { LucideIcon, LucideProps };

type IconProps = LucideProps & {
  icon: LucideIcon;
};

type GradientTone = "brand" | "light" | "accent";

const GRADIENT_STOPS: Record<GradientTone, readonly [string, string]> = {
  brand: ["hsl(220 90% 50%)", "hsl(265 72% 52%)"],
  light: ["hsl(0 0% 100%)", "hsl(265 80% 90%)"],
  accent: ["hsl(265 72% 88%)", "hsl(275 62% 80%)"],
};

const SECTION_ICON_SIZES = {
  xs: "h-4 w-4",
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
} as const;

type SectionIconSize = keyof typeof SECTION_ICON_SIZES;
type SectionIconSurface = "dark" | "light" | "accent";

function Icon({ icon: IconComponent, className, ...props }: IconProps) {
  return <IconComponent className={cn("h-4 w-4 shrink-0", className)} {...props} />;
}

function GradientIcon({
  icon: IconComponent,
  className,
  strokeWidth = 2,
  tone = "brand",
  ...props
}: IconProps & { tone?: GradientTone }) {
  const gradientId = useId().replace(/:/g, "");
  const [from, to] = GRADIENT_STOPS[tone];

  return (
    <span className={cn("relative z-[1] inline-flex shrink-0", className)}>
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
      </svg>
      <IconComponent
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
        aria-hidden
        {...props}
      />
    </span>
  );
}

/** Icono temático unificado para secciones (degradado según fondo). */
function SectionIcon({
  icon,
  size = "md",
  surface = "dark",
  className,
  strokeWidth,
}: {
  icon: LucideIcon;
  size?: SectionIconSize;
  surface?: SectionIconSurface;
  className?: string;
  strokeWidth?: number;
}) {
  const tone: GradientTone =
    surface === "light" ? "brand" : surface === "accent" ? "accent" : "light";
  const defaultStroke = size === "xs" || size === "sm" ? 2.15 : 1.85;

  return (
    <GradientIcon
      icon={icon}
      tone={tone}
      className={cn(SECTION_ICON_SIZES[size], className)}
      strokeWidth={strokeWidth ?? defaultStroke}
    />
  );
}

export { Icon, GradientIcon, SectionIcon };
