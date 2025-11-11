import React from "react";
import { motion } from "framer-motion";
import AboutData from "../../../datafiles/AboutData/AboutData";
import styles from "./AboutCard.module.css"; // Import CSS Module

const AboutCard = () => {
  const { AboutCard } = AboutData;
  const item = AboutCard[0]; // Only use the first item

  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.cardContainer}
      >
        {/* Video Background */}
        {/* <div className={styles.videoSection}>
          <div className={styles.videoOverlay}></div>
          <video
            src={item.video}
            autoPlay
            loop
            muted
            className={styles.video}
          />
        </div> */}
        <div className={styles.videoSection}>
  <div className={styles.videoOverlay}></div>
  <img
    src={item.image}           // your imported image URL here
    alt="background"
    className={styles.image}  // add this style class for image styling
  />
</div>


        {/* Text Content */}
        <div className={styles.contentSection}>
          <h2 className={styles.heading}>{item.Heading}</h2>
          <h3 className={styles.subTitle}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
          {/* <button className={styles.exploreBtn}>Learn More</button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCard;