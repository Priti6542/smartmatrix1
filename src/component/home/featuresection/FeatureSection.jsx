// FeatureSection.js
import React from "react";
import HomeData from '../../../datafiles/HomeData/HomeData';
import styles from './FeatureSection.module.css'; // Import the modular CSS
import useParallax from "../../parallex/useParallax";

const FeatureSection = () => {
  return (
    <div className={styles.featureSection}>
    <h1>OUR FEATURES</h1>
      {HomeData.FeatureSectionData.map((feature, index) => (
        <FeatureItem
          key={index}
          title={feature.title}
          content={feature.content}
          image={feature.images}
          backgroundImage={feature.backgroundImage}
          speed={0.5} // Set the parallax speed for each section
          isReversed={index % 2 !== 0} // Alternate layout for even-indexed items   
        />
      ))}
    </div>
  );
};

const FeatureItem = ({ title, content, image, backgroundImage, speed, isReversed }) => {
  useParallax(speed); // Apply parallax effect with the given speed

  return (
    <div className={`${styles.featureItem} ${isReversed ? styles.reversed : ""}`}>
      <div
        className={styles.featureItemBackground}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        data-speed={speed}
      ></div>
      <div className={styles.content }>
        <h2>{title}</h2>
        <p>{content}</p>
        
      </div>
      {/* <img src={image} alt={title} className={styles.featureImage} /> */}
    </div>
  );
};

export default FeatureSection;
