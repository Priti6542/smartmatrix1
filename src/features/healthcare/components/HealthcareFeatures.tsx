import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import { HEALTHCARE_FEATURES } from "../data";

const HealthcareFeatures = () => {
  return (
    <div className="w-full bg-[linear-gradient(135deg,#1a1a2e_0%,#16213e_50%,#0f3460_100%)] text-center">
      <div
        className={cx(
          CONTAINER_CLASS,
          "py-section sm:py-section-md lg:py-section-lg",
        )}
      >
        <h1
          className="relative mb-heading lg:mb-heading-lg text-[42px] font-bold uppercase tracking-[1.8px] text-[#ff6b35]
                     after:mx-auto after:my-2.5 after:block after:h-1 after:w-[90px] after:rounded-sm
                     after:bg-[linear-gradient(90deg,#ff6b35,#ffd93d)] after:content-['']
                     upto-768:text-[36px] upto-480:text-[30px]"
        >
          Our Healthcare Features
        </h1>
        <div className="flex h-[1300px] flex-col items-center gap-gap-lg upto-768:h-auto">
          {HEALTHCARE_FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={cx(
                "group flex w-[1200px] items-center overflow-hidden rounded-[20px]",
                "border-[1.5px] border-[rgba(255,255,255,0.21)] bg-white/10 p-[50px]",
                "shadow-[0_10px_30px_rgba(20,15,50,0.17)] backdrop-blur-[10px]",
                "[transform:perspective(1000px)_rotateY(3deg)]",
                "transition-[transform,box-shadow] duration-[400ms] ease-in-out",
                "hover:[transform:perspective(1000px)_rotateY(0deg)_scale(1.03)]",
                "hover:shadow-[0_15px_40px_rgba(255,107,53,0.13)]",
                "upto-1200:w-[95%] upto-1200:p-10",
                "upto-992:flex-col upto-992:p-[30px] upto-992:text-center",
                "upto-768:w-full upto-768:p-[25px] upto-480:p-[18px]",
                index % 2 === 0 && "flex-row-reverse",
              )}
            >
              <div className="flex flex-1 items-center justify-center p-5">
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-auto w-[90%] max-w-full rounded-[15px]
                               transition-transform duration-300 ease-in-out group-hover:scale-110
                               upto-992:max-w-[300px] upto-768:max-w-[200px] upto-480:hidden"
                  />
                )}
              </div>

              <div
                className="flex-1 px-[50px] py-5 text-left
                           upto-1200:px-10
                           upto-992:p-5 upto-992:text-center
                           upto-768:p-[15px] upto-768:text-justify"
              >
                <h2
                  className="mt-5 mb-2.5 text-[28px] font-bold text-[#ff6b35]
                             upto-992:text-2xl upto-768:text-[22px]
                             upto-480:mt-[-10px] upto-480:text-base"
                >
                  {feature.title}
                </h2>
                <p className="mb-5 text-[15px] leading-[1.7] text-[#eee] upto-768:text-[13px] upto-480:text-xs">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareFeatures;
