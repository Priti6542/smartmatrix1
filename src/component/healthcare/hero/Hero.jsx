import React from "react";
import HealthCareData from "../../../datafiles/healthcare/HealthCareData";
import styles from "./Hero.module.css";

const Hero = () => {
  const heroData = HealthCareData.HealthHero[0];

  return (
    <div
      className={styles.heroContainer}
      style={{
        backgroundImage: `url(${heroData.backgroundImage})`, // ✅ Using local asset image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.imageOverlay}></div>

      <div className={styles.heroContent}>
        <h1>{heroData.Heading}</h1>
        <p>{heroData.subheading}</p>
      </div>
    </div>
  );
};

export default Hero;
