import HomeAbout from "../../features/home/components/HomeAbout";
import HomeFinalCta from "../../features/home/components/HomeFinalCta";
import HomeHero from "../../features/home/components/HomeHero";
import HomeIndustries from "../../features/home/components/HomeIndustries";
import HomeServices from "../../features/home/components/HomeServices";
import HomeStats from "../../features/home/components/HomeStats";
import HomeWhyChooseUs from "../../features/home/components/HomeWhyChooseUs";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeStats />
      <HomeAbout />
      <HomeServices />
      <HomeWhyChooseUs />
      <HomeIndustries />
      <HomeFinalCta />
    </div>
  );
};

export default Home;
