import type { ReactElement, ReactNode } from "react";

import type { ServiceVisualVariant } from "../data";

interface ServiceVisualProps {
  variant: ServiceVisualVariant;
}

const Frame = ({ children }: { children: ReactNode }) => (
  <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-8">
    {children}
  </div>
);

const Dot = ({ className = "" }: { className?: string }) => (
  <span className={`block h-2.5 w-2.5 rounded-full ${className}`} />
);

const BrowserVisual = () => (
  <div className="w-full max-w-[220px] overflow-hidden rounded-lg border border-[#3D3D3D]/10 bg-white shadow-sm">
    <div className="flex items-center gap-1.5 border-b border-[#3D3D3D]/10 bg-[#FFF8F0] px-3 py-2">
      <Dot className="bg-[#F7941E]/70" />
      <Dot className="bg-[#FDB913]/70" />
      <Dot className="bg-[#3D3D3D]/20" />
    </div>
    <div className="space-y-2 p-4">
      <div className="h-2.5 w-3/4 rounded-full bg-[#3D3D3D]/15" />
      <div className="h-2.5 w-full rounded-full bg-[#3D3D3D]/10" />
      <div className="h-2.5 w-5/6 rounded-full bg-[#3D3D3D]/10" />
      <div className="mt-3 h-8 w-1/3 rounded-md bg-[#F7941E]/90" />
    </div>
  </div>
);

const CodeVisual = () => (
  <div className="w-full max-w-[220px] rounded-lg border border-[#3D3D3D]/10 bg-[#262626] p-4 font-mono text-[10px] leading-relaxed text-white/70 shadow-sm">
    <p>
      <span className="text-[#FDB913]">function</span>{" "}
      <span className="text-[#F7941E]">build</span>() {"{"}
    </p>
    <p className="pl-3 text-white/50">return solution;</p>
    <p>{"}"}</p>
  </div>
);

const MobileVisual = () => (
  <div className="flex h-40 w-24 flex-col gap-2 rounded-2xl border border-[#3D3D3D]/10 bg-white p-3 shadow-sm">
    <div className="mx-auto h-1 w-8 rounded-full bg-[#3D3D3D]/15" />
    <div className="h-10 rounded-md bg-[#F7941E]/15" />
    <div className="h-2 w-3/4 rounded-full bg-[#3D3D3D]/15" />
    <div className="h-2 w-full rounded-full bg-[#3D3D3D]/10" />
    <div className="mt-auto h-6 rounded-md bg-[#F7941E]/90" />
  </div>
);

const LayersVisual = () => (
  <div className="relative flex h-32 w-32 flex-col items-center justify-center">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="absolute h-20 w-28 rounded-xl border border-[#3D3D3D]/10 bg-white shadow-sm"
        style={{ top: i * 14, opacity: 1 - i * 0.2 }}
      />
    ))}
    <div
      className="absolute flex h-20 w-28 items-center justify-center rounded-xl bg-[#F7941E]/90"
      style={{ top: 0 }}
    >
      <span className="h-2 w-10 rounded-full bg-white/70" />
    </div>
  </div>
);

const PaletteVisual = () => (
  <div className="grid grid-cols-2 gap-3">
    {["#F7941E", "#FDB913", "#3D3D3D", "#E8750A"].map((color) => (
      <div
        key={color}
        className="h-12 w-12 rounded-full shadow-sm"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

const NetworkVisualMini = () => (
  <svg viewBox="0 0 160 120" className="h-32 w-40">
    <g stroke="#3D3D3D" strokeOpacity="0.15">
      <line x1="80" y1="20" x2="30" y2="60" />
      <line x1="80" y1="20" x2="130" y2="60" />
      <line x1="80" y1="20" x2="80" y2="100" />
      <line x1="30" y1="60" x2="80" y2="100" />
      <line x1="130" y1="60" x2="80" y2="100" />
    </g>
    <circle cx="80" cy="20" r="9" fill="#F7941E" />
    <circle cx="30" cy="60" r="7" fill="#FDB913" />
    <circle cx="130" cy="60" r="7" fill="#FDB913" />
    <circle cx="80" cy="100" r="9" fill="#3D3D3D" />
  </svg>
);

const CloudVisual = () => (
  <svg viewBox="0 0 160 100" className="h-28 w-40">
    <path
      d="M40 70h80a20 20 0 0 0 0-40 28 28 0 0 0-54-8 20 20 0 0 0-26 48z"
      fill="#FFFFFF"
      stroke="#3D3D3D"
      strokeOpacity="0.15"
      strokeWidth="2"
    />
    <circle cx="80" cy="55" r="5" fill="#F7941E" />
    <circle cx="60" cy="55" r="4" fill="#FDB913" />
    <circle cx="100" cy="55" r="4" fill="#FDB913" />
  </svg>
);

const ChartVisual = () => (
  <div className="flex h-28 w-36 items-end gap-2">
    {[40, 70, 50, 90, 65].map((h, i) => (
      <div
        key={i}
        className="flex-1 rounded-t-md bg-[#F7941E]"
        style={{ height: `${h}%`, opacity: 0.5 + i * 0.1 }}
      />
    ))}
  </div>
);

const VISUAL_MAP: Record<ServiceVisualVariant, () => ReactElement> = {
  browser: BrowserVisual,
  code: CodeVisual,
  mobile: MobileVisual,
  layers: LayersVisual,
  palette: PaletteVisual,
  network: NetworkVisualMini,
  cloud: CloudVisual,
  chart: ChartVisual,
};

const ServiceVisual = ({ variant }: ServiceVisualProps) => {
  const Visual = VISUAL_MAP[variant];
  return (
    <Frame>
      <Visual />
    </Frame>
  );
};

export default ServiceVisual;
