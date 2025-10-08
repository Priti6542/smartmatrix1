import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutData from "../../../datafiles/AboutData/AboutData";
import styles from "./VissionMissionValue.module.css"; // Import CSS module

const VisionMissionValue = () => {
  return (
    <Container maxWidth="100%" className={styles.container}>
      <Typography variant="h3" className={styles.heading}>
        Vision, Mission & Values
      </Typography>

      <Box className={styles.timeline}>
        {/* Vertical Line */}
        <Box className={styles.verticalLine} />

        {AboutData.visionMissionValues.map((item, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`${styles.cardContainer} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              {/* Circle Indicator */}
              <Box className={styles.circle} />

              {/* Card Content */}
              <Box className={styles.card}>
              <Typography variant="h4" className={styles.cardTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body1" className={styles.cardDescription}>
                  {item.description}
                </Typography>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Container>
  );
};

export default VisionMissionValue;
