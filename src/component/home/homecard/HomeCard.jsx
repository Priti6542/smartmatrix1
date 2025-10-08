import React from "react";
import HomeData from "../../../datafiles/HomeData/HomeData";
import styles from "./HomeCard.module.css";

// Single Service Card
const Card = ({ Icon, title, copy, backgroundImg }) => {
  return (
    <a
      href="#"
      className={styles.cardItem}
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

// Main Services Section
const HomeCard = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            We provide high-quality services to help your business grow and
            succeed.
          </p>
        </div>

        {/* Service Cards */}
        <div className={styles.cardRow}>
          {HomeData.cardData?.map((card, index) => (
            <Card
              key={index}
              Icon={card.icon} // Pass the MUI icon component
              title={card.title}
              copy={card.copy}
              // backgroundImg={card.backgroundImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
