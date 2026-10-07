import AboutApproach from "../../features/about/components/AboutApproach";
import AboutBeliefs from "../../features/about/components/AboutBeliefs";
import AboutCapabilities from "../../features/about/components/AboutCapabilities";
import AboutFinalCta from "../../features/about/components/AboutFinalCta";
import AboutHero from "../../features/about/components/AboutHero";
import AboutIndustriesList from "../../features/about/components/AboutIndustriesList";
import AboutTrust from "../../features/about/components/AboutTrust";
import AboutWhoWeAre from "../../features/about/components/AboutWhoWeAre";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutCapabilities />
      <AboutApproach />
      <AboutBeliefs />
      <AboutIndustriesList />
      <AboutTrust />
      <AboutFinalCta />
    </div>
  );
};

export default About;
