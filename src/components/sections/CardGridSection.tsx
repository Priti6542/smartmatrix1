import type { ReactNode } from "react";

import Section from "../layout/Section";

import SectionHeading from "./SectionHeading";

export interface CardGridSectionProps {
  title: string;
  subtitle?: string;
  /** The cards to lay out in the responsive grid. */
  children: ReactNode;
}

const CardGridSection = ({
  title,
  subtitle,
  children,
}: CardGridSectionProps) => {
  return (
    <Section className="bg-[#f5f7fa]">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-gap lg:gap-gap-lg upto-768:grid-cols-1">
        {children}
      </div>
    </Section>
  );
};

export default CardGridSection;
