import React from "react";
import { Box, Typography, Button, Divider, Grid, IconButton } from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavbarData from "../../datafiles/NavbarData";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#212121", color: "#bdbdbd", pt: 8, pb: 4, px: { xs: 3, md: 6 } }}>
      
      {/* CTA Section */}
      <Box
        maxWidth="lg"
        mx="auto"
        textAlign={{ xs: "center", md: "left" }}
        mb={6}
      >
        <Typography
          variant="caption"
          textTransform="uppercase"
          color="gray"
          fontWeight={500}
        >
          Get started
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="white"
          mt={1}
          lineHeight={1.4}
        >
          Boost your productivity.<br />
          Start using our app today.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: "#ff7043",
            ":hover": { bgcolor: "#f4511e" },
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold"
          }}
          onClick={() => navigate("/")}
        >
          Get Started
        </Button>
      </Box>

      {/* Footer Links Section */}
      <Divider sx={{ bgcolor: "#424242", mb: 6 }} />
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        maxWidth="lg"
        mx="auto"
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* Logo */}
        <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
          <img
            src="https://smartmatrixds.com/assets/img/smds-logo.jpeg"
            alt="Company Logo"
            style={{ height: 50, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="subtitle1" color="white" fontWeight="bold" mb={2}>
            Navigation
          </Typography>
          <Box>
            {NavbarData.map((item) => (
              <Typography
                key={item.title}
                variant="body2"
                sx={{
                  cursor: "pointer",
                  mb: 1,
                  transition: "0.3s",
                  ":hover": { color: "white" },
                }}
                onClick={() => navigate(item.path)}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Services Links */}
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="subtitle1" color="white" fontWeight="bold" mb={2}>
            Services
          </Typography>
          <Box>
            {["Management", "Digital Marketing", "Management Courses", "Development", "IT Courses", "Courses"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  cursor: "pointer",
                  mb: 1,
                  transition: "0.3s",
                  ":hover": { color: "white" },
                }}
                onClick={() => navigate("/services")}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* US Healthcare & Contact */}
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="subtitle1" color="white" fontWeight="bold" mb={2}>
            US Healthcare
          </Typography>
          <Box mb={3}>
            {["AR Caller", "Medical Coding", "Medical Billing"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  cursor: "pointer",
                  mb: 1,
                  transition: "0.3s",
                  ":hover": { color: "white" },
                }}
                onClick={() => navigate("/ushealthcare")}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Typography variant="subtitle1" color="white" fontWeight="bold" mb={2}>
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              cursor: "pointer",
              mb: 1,
              transition: "0.3s",
              ":hover": { color: "white" },
            }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Typography>
        </Grid>
      </Grid>

      {/* Social Media & Copyright */}
      <Divider sx={{ bgcolor: "#424242", my: 6 }} />
      <Box
        maxWidth="lg"
        mx="auto"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography variant="body2" color="gray" mb={{ xs: 2, md: 0 }}>
          © 2024 SmartMatrix Digital Services Pvt. Ltd. All rights reserved.
        </Typography>
        <Box>
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
            <IconButton
              key={index}
              sx={{ color: "gray", ":hover": { color: "white" }, mx: 0.5 }}
            >
              <Icon size={18} />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
