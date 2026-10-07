import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/icons/smart_logo.webp";
import { CAPABILITIES } from "../../constants/capabilities";
import { INDUSTRIES } from "../../constants/industries";
import { NAVIGATION, SOCIAL_LINKS } from "../../constants/navigation";
import { ROUTES } from "../../constants/routes";
import { BRAND, CONTACT_DETAILS, SITE } from "../../constants/site";
import { cx } from "../../utils/helpers";

import { CONTAINER_CLASS } from "./Container";
import { SECTION_SPACING_CLASS } from "./Section";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const COLUMN_HEADING_CLASS = "mb-5 text-sm font-semibold text-white";
const LINK_CLASS =
  "block text-sm text-white/55 no-underline transition-colors duration-200 hover:text-white";

interface FooterColumnProps {
  heading: string;
  children: ReactNode;
}

const FooterColumn = ({ heading, children }: FooterColumnProps) => (
  <motion.div variants={itemVariants}>
    <p className={COLUMN_HEADING_CLASS}>{heading}</p>
    <div className="flex flex-col gap-3">{children}</div>
  </motion.div>
);

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: `linear-gradient(180deg, ${BRAND.charcoal} 0%, ${BRAND.charcoalDeep} 100%)`,
      }}
    >
      <div className={cx(CONTAINER_CLASS, SECTION_SPACING_CLASS)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12">
            {/* Company */}
            <motion.div
              variants={itemVariants}
              className="col-span-2 lg:col-span-4"
            >
              <RouterLink to={ROUTES.HOME} aria-label="Go to home">
                <img
                  src={logo}
                  alt={`${SITE.shortName} logo`}
                  className="h-10 w-auto rounded-md"
                />
              </RouterLink>
              <p className="mt-5 max-w-[280px] text-sm leading-6 text-white/55">
                {SITE.tagline}
              </p>

              {SOCIAL_LINKS.length > 0 && (
                <div className="mt-6 flex gap-2.5">
                  {SOCIAL_LINKS.map(({ label, url, icon: Icon }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-200 hover:border-[#F5A623]/50 hover:text-[#F5A623]"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Navigation */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <FooterColumn heading="Navigation">
                {NAVIGATION.map((item) => (
                  <RouterLink
                    key={item.path}
                    to={item.path}
                    className={LINK_CLASS}
                  >
                    {item.label}
                  </RouterLink>
                ))}
              </FooterColumn>
            </div>

            {/* Services */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <FooterColumn heading="Services">
                {CAPABILITIES.slice(0, 6).map((capability) => (
                  <RouterLink
                    key={capability.id}
                    to={ROUTES.SERVICES}
                    className={LINK_CLASS}
                  >
                    {capability.shortLabel}
                  </RouterLink>
                ))}
              </FooterColumn>
            </div>

            {/* Industries */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <FooterColumn heading="Industries">
                {INDUSTRIES.map((industry) => (
                  <RouterLink
                    key={industry.id}
                    to={industry.path ?? ROUTES.INDUSTRIES}
                    className={LINK_CLASS}
                  >
                    {industry.title}
                  </RouterLink>
                ))}
              </FooterColumn>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <FooterColumn heading="Contact">
                <p className="text-sm leading-6 text-white/55">
                  {CONTACT_DETAILS.address}
                </p>
                <a href={`tel:${CONTACT_DETAILS.phone}`} className={LINK_CLASS}>
                  {CONTACT_DETAILS.phone}
                </a>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className={LINK_CLASS}
                >
                  {CONTACT_DETAILS.email}
                </a>
              </FooterColumn>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} {SITE.name} All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <span
                  key={item}
                  className="text-xs text-white/40 transition-colors duration-200 hover:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
