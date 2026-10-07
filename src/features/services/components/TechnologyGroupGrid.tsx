import type { TechnologyGroup } from "../data";

import Reveal from "./Reveal";

interface TechnologyGroupGridProps {
  groups: TechnologyGroup[];
}

/**
 * Grid of technology-group pill lists, shared between the main page's
 * "Technology we work with" section (all groups) and each service detail
 * page's technology section (filtered to that service's relevant groups).
 */
const TechnologyGroupGrid = ({ groups }: TechnologyGroupGridProps) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {groups.map((group, index) => (
      <Reveal key={group.label} delay={(index % 4) * 0.08}>
        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3D3D]/45">
          {group.label}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {group.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#3D3D3D]/10 bg-white px-3.5 py-1.5 text-sm font-medium text-[#3D3D3D]/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F7941E]/40 hover:text-[#262626]"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    ))}
  </div>
);

export default TechnologyGroupGrid;
