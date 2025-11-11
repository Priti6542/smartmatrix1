import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import contactimg from "../../assets/contactimg.jpg";

const ContactHeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        marginTop:-8 ,
      }}
    >
      {/* Background Image */}
      <motion.img
        src={contactimg}
        alt="Contact Background"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(55%)",
          zIndex: -1,
        }}
      />

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
            fontSize: { xs: "2rem", md: "3.5rem" },
          }}
        >
          Get in Touch with Us
        </Typography>
        <Typography
          variant="h6"
          mt={2}
          sx={{
            maxWidth: "600px",
            mx: "auto",
            opacity: 0.9,
            fontWeight: 300,
          }}
        >
          We’d love to hear from you — let’s build something great together.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default ContactHeroSection;
