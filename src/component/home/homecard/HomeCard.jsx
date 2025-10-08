import React from "react";
import HomeData from "../../../datafiles/HomeData/HomeData";
import styles from "./HomeCard.module.css";
import useScrollAnimation from "../../parallex/useScrollAnimation";

const Card = ({ Icon, title, copy, backgroundImg }) => {
  return (
    <a
      className={`${styles.cardItem} cardItem`}
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className={styles.iconWrapper}>
        <Icon fontSize="large" />
      </div>
      <h5 className={styles.cardTitle}>{title}</h5>
      <p className={styles.cardCopy}>{copy}</p>
      <div className={styles.arrowButton}>
        <i className="fa fa-chevron-right"></i>
      </div>
    </a>
  );
};

const HomeCard = () => {
  useScrollAnimation(); // Scroll fade-in for cards

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            We provide high-quality services to help your business grow and succeed.
          </p>
        </div>

        <div className={styles.cardRow}>
          {HomeData.cardData?.map((card, index) => (
            <Card
              key={index}
              Icon={card.icon}
              title={card.title}
              copy={card.copy}
              // backgroundImg={card.backgroundImg || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
