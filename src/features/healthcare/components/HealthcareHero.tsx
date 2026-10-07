import { HEALTHCARE_HERO } from "../data";

const HealthcareHero = () => {
  const { backgroundImage, title, description } = HEALTHCARE_HERO;

  return (
    <div
      className="relative flex h-screen w-full animate-fade-in-zoom-out items-center justify-center
                 overflow-hidden bg-cover bg-center bg-no-repeat text-center
                 upto-768:h-[70vh] upto-480:h-[60vh]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute top-0 left-0 z-0 h-full w-full animate-fade-in-overlay opacity-0
                   backdrop-blur-[4px]
                   bg-[linear-gradient(rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.8)_100%)]"
      />

      <div className="relative z-[2] max-w-copy animate-slide-up-far p-5 text-white opacity-0">
        <h1
          className="animate-float bg-[linear-gradient(90deg,#ff6b35,#ffd93d)] bg-clip-text
                     text-[3.5rem] font-extrabold uppercase tracking-[2px] text-transparent
                     [-webkit-text-fill-color:transparent]
                     upto-1024:text-[2.8rem] upto-768:text-[2.2rem] upto-480:text-[1.8rem]"
        >
          {title}
        </h1>
        <p
          className="mt-2.5 text-[1.5rem] text-white/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]
                     upto-1024:text-[1.3rem] upto-768:text-[1.1rem] upto-480:text-base"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default HealthcareHero;
