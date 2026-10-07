import DoneAllIcon from "@mui/icons-material/DoneAll";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import { HEALTHCARE_SERVICES } from "../data";

const HealthcareServices = () => {
  return (
    <div
      className={cx(
        CONTAINER_CLASS,
        "relative flex flex-wrap items-center justify-center gap-[30px]",
        "py-section sm:py-section-md lg:py-section-lg",
        "wide-desktop:gap-[25px]",
        "upto-1200:gap-5",
        "upto-992:flex-col",
        "upto-768:gap-[30px]",
        "upto-480:gap-[25px]",
      )}
    >
      {HEALTHCARE_SERVICES.map((service, index) => {
        const Icon = service.icon;
        const isLast = index === HEALTHCARE_SERVICES.length - 1;

        return (
          <div key={service.id}>
            <div
              className={cx(
                "relative flex h-[180px] w-[220px] cursor-pointer items-center justify-center",
                "animate-pulse-effect rounded-full text-center text-xl font-bold text-white",
                "bg-[linear-gradient(135deg,#e65100,#f57c00)]",
                "shadow-[0_0_15px_rgba(230,81,0,0.5)] [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]",
                "transition-all duration-[400ms] ease-in-out",
                "hover:scale-105 hover:bg-[linear-gradient(135deg,#e65100,#ff9800)]",
                "hover:shadow-[0_0_20px_rgba(230,81,0,0.7)]",
                // Connector to the next circle.
                "after:absolute after:top-1/2 after:left-full after:h-2 after:w-20",
                "after:animate-swipe-effect after:rounded-[20px] after:content-['']",
                "after:bg-[linear-gradient(90deg,#e65100,#f57c00)]",
                "after:[transform:translateY(-50%)_translateX(60%)]",
                "wide-desktop:after:w-[70px] wide-desktop:after:[transform:translateY(-50%)_translateX(55%)]",
                "upto-992:after:hidden",
                "wide-desktop:h-[160px] wide-desktop:w-[200px] wide-desktop:text-[18px]",
                "upto-1200:h-[150px] upto-1200:w-[190px] upto-1200:text-[18px]",
                "upto-992:h-[160px] upto-992:w-[180px]",
                "upto-768:h-[140px] upto-768:w-[160px] upto-768:text-[18px]",
                "upto-480:h-[120px] upto-480:w-[140px] upto-480:text-base",
                isLast && "after:hidden!",
              )}
            >
              {/* The stylesheet has no rule for this heading; it inherits the
                  circle's typography. */}
              <h3>{service.title}</h3>
            </div>

            <div
              className="relative mt-[30px] min-h-[400px] max-w-[350px] overflow-hidden
                         rounded-[15px] border border-[rgba(230,81,0,0.08)]
                         bg-[linear-gradient(135deg,#fff3e0_0%,#fafafa_100%)]
                         p-5 text-base leading-[1.6] text-[#333]
                         shadow-[0_8px_20px_rgba(230,81,0,0.15)]
                         transition-all duration-300 ease-[ease]
                         hover:-translate-y-[5px] hover:shadow-[0_12px_30px_rgba(230,81,0,0.2)]
                         before:absolute before:top-0 before:-left-full before:h-full before:w-[200%]
                         before:animate-shine-effect before:content-['']
                         before:bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.6)_50%,transparent_70%)]
                         before:[transform:skewX(-30deg)]
                         wide-desktop:min-h-[380px] wide-desktop:max-w-[320px] wide-desktop:p-[18px] wide-desktop:text-[15px]
                         upto-1200:min-h-[350px] upto-1200:max-w-[300px]
                         upto-992:h-auto upto-992:min-h-[350px] upto-992:max-w-[90%]
                         upto-768:min-h-[300px] upto-768:max-w-full upto-768:p-5
                         upto-480:min-h-[280px] upto-480:p-[15px] upto-480:text-[14px]"
            >
              <Icon className="mx-auto mb-[15px] block text-[40px]! text-[#e65100]!" />

              <ul className="list-none py-2.5">
                <h3
                  className="relative mt-[-20px] mb-[25px] pb-[15px] text-center
                             text-[22px] font-bold text-[#e65100]
                             after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[50px]
                             after:-translate-x-1/2 after:rounded-[3px] after:content-['']
                             after:bg-[linear-gradient(90deg,#e65100,#f57c00)]
                             wide-desktop:text-xl"
                >
                  {service.title}
                </h3>
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="mb-3 flex items-start gap-2.5 text-[15px] leading-[1.5] text-[#444]
                               wide-desktop:gap-2 wide-desktop:text-[14px]
                               upto-768:text-[14px] upto-480:gap-2.5 upto-480:text-[13px]"
                  >
                    <DoneAllIcon
                      className="mt-[3px] min-w-[18px]"
                      sx={{ fontSize: 20, color: "#007BFF" }}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthcareServices;
