import Section from "../../../components/layout/Section";
import { cx } from "../../../utils/helpers";
import { HEALTHCARE_FEATURES } from "../data";

const HealthcareFeatures = () => {
  return (
    <Section spacing="none" className="bg-[#FFFCF7] pt-14 pb-0 text-[#262626] sm:pt-18 lg:pt-24">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8690f]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
          In Detail
        </span>
        <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          Our healthcare features.
        </h2>
      </header>

      <div className="space-y-6">
        {HEALTHCARE_FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group grid items-center gap-8 rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 transition-all duration-300 hover:border-[#F47C20]/30 hover:shadow-[0_16px_40px_rgba(61,61,61,0.06)] sm:p-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={cx("relative overflow-hidden rounded-xl", index % 2 === 1 && "lg:order-2")}>
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <div className={cx(index % 2 === 1 && "lg:order-1")}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                  <Icon sx={{ fontSize: 20 }} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold sm:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-copy text-sm leading-7 text-[#3D3D3D]/70 sm:text-base">
                  {feature.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HealthcareFeatures;
