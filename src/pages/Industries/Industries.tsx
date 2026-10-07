import PageHero from "../../components/sections/PageHero";
import IndustryList from "../../features/industries/components/IndustryList";
import { INDUSTRIES_HERO } from "../../features/industries/data";

const Industries = () => {
  return (
    <div>
      <PageHero
        title={INDUSTRIES_HERO.title}
        description={INDUSTRIES_HERO.description}
        backgroundImage={INDUSTRIES_HERO.backgroundImage}
      />
      <IndustryList />
    </div>
  );
};

export default Industries;
