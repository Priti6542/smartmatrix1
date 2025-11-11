import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import AboutData from "../../../datafiles/AboutData/AboutData";

const AboutHero = () => {

  
  const { backgroundImage, title, description } = AboutData.AboutHero[0];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } },
    hover: { scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.8)" },
  };

  return (
     <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      // style={{ marginTop: "-70px" }} 
    >
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
            zIndex: 1,
            // marginTop: "0px",
          },
        }}
      >
        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "10%", left: "5%", zIndex: 2, fontSize: "2rem", color: "gold" }}
        >
          ✨
        </motion.div>

        <Box sx={{ position: "relative", zIndex: 2, maxWidth: "600px", padding: "20px" }}>
          <motion.div variants={textVariants}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: "bold",
                background: "linear-gradient(45deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </Typography>
          </motion.div>

          <motion.div variants={textVariants} transition={{ delay: 0.7 }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: "1.2rem",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.9)",
                textShadow: "0px 0px 5px rgba(255,255,255,0.3)",
              }}
            >
              {description}
            </Typography>
          </motion.div>

          {/* Button Animation */}
          {/* <motion.div variants={buttonVariants} whileHover="hover">
            <Button
              variant="contained"
              color="warning"
              size="large"
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                transition: "all 0.3s",
                borderRadius: "50px",
              }}
            >
              Know More
            </Button>
          </motion.div> */}
        </Box>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", bottom: "10%", right: "5%", zIndex: 2, fontSize: "2rem", color: "gold" }}
        >
          ✨
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default AboutHero;
