import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CareerData from "../../../datafiles/CareerData/CareerData";
import styles from "./Internship.module.css";
import { FaLaptopCode, FaCheckCircle, FaRocket } from "react-icons/fa";

const icons = [FaLaptopCode, FaCheckCircle, FaRocket];

const Internship = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const elements = sectionRef.current.querySelectorAll(
      `.${styles.fadeInDown}, .${styles.fadeInUp}, .${styles.fadeInCard}`
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={styles.internshipSection}>
      <h2 className={`${styles.heading} ${styles.fadeInDown}`}>
         Internship Opportunities
      </h2>
      <p className={`${styles.subHeading} ${styles.fadeInUp}`}>
        Gain real-world experience and accelerate your career with us!
      </p>

      <div className={styles.cardsContainer}>
        {CareerData.Internship.map((item, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div
              key={item.id || index}
              className={`${styles.card} ${styles.fadeInCard}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`${styles.iconWrapper} ${styles.iconBounce}`}>
                <IconComponent />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>

              <h4>
                <b> Qualifications:</b>
              </h4>
              <p className={styles.qualification}>{item.qualification}</p>

              <h4>
                <b> Benefits:</b>
              </h4>
              <p className={styles.benefits}>{item.benefits}</p>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className={styles.applyButton}
              >
                Contact Us
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Internship;
