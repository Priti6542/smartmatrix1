import IndustryCard from "../../../components/cards/IndustryCard";
import CardGridSection from "../../../components/sections/CardGridSection";
import { INDUSTRIES } from "../../../constants/industries";

const IndustryList = () => {
  return (
    <CardGridSection
      title="Where we work"
      subtitle="Each vertical brings its own compliance, data, and delivery demands. These are the ones our teams run day to day."
    >
      {INDUSTRIES.map((industry) => (
        <IndustryCard
          key={industry.id}
          title={industry.title}
          description={industry.description}
          image={industry.image}
          path={industry.path}
        />
      ))}
    </CardGridSection>
  );
};

export default IndustryList;
