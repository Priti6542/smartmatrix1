import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import { CAREERS_HERO, LIFE_DESCRIPTION, LIFE_HEADING } from "../data";

/**
 * Only one careers-specific photograph exists in the project, so this
 * section uses it once more here — in a wide, letterboxed treatment with
 * typography laid over it — rather than inventing a photo grid or stock
 * imagery that doesn't exist.
 */
const LifeAtSmartMatrix = () => {
  return (
    <Section className="bg-white text-[#262626]">
      <div className="relative overflow-hidden rounded-[28px]">
        <img
          src={CAREERS_HERO.backgroundImage}
          alt="Collaboration at Smart Matrix"
          className="h-[420px] w-full object-cover sm:h-[480px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/85 via-[#262626]/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-0 p-7 sm:p-10"
        >
          <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] text-white sm:text-[2.25rem]">
            {LIFE_HEADING}
          </h2>
          <p className="mt-3 max-w-copy text-sm leading-6 text-white/75 sm:text-base">
            {LIFE_DESCRIPTION}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default LifeAtSmartMatrix;
