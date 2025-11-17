import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4adpxcj",
        "template_c94nniu",
        form.current,
        "hy1mk0-ZjrxZVZrim"
      )
      .then(
        () => {
          alert("Message sent to your email!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 3, md: 4 },
        background: "#FFF1E6",
        minHeight: "100vh",
        maxWidth: 500,
        mx: "auto",
      }}
    >
      {/* Contact Info */}
      <Paper
        elevation={4}
        sx={{
          mb: 2,
          p: { xs: 2, sm: 3 },
          borderRadius: "16px",
          background: "#fff",
          borderTop: "6px solid #FF7A00",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "#FF7A00", mb: 1 }}
        >
          Contact Information
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <IconButton sx={{ color: "#FF7A00", p: 0 }}>
            <LocationOn fontSize="small" />
          </IconButton>
          <Typography sx={{ fontSize: "0.95rem" }}>
            Office No. 102-B, First Floor, Ganesham Commercial -A, Survey No.
            21/18-21/24, BRTS Road, Pimple Saudagar, Pune-411027
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <IconButton sx={{ color: "#FF7A00", p: 0 }}>
            <Phone fontSize="small" />
          </IconButton>
          <Typography sx={{ fontSize: "0.95rem" }}>+91 7066511234</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton sx={{ color: "#FF7A00", p: 0 }}>
            <Email fontSize="small" />
          </IconButton>
          <Typography sx={{ fontSize: "0.95rem" }}>contact@smartmatrixds.com</Typography>
        </Box>
      </Paper>

      {/* Contact Form */}
      <Paper
        elevation={4}
        sx={{
          mb: 2,
          p: { xs: 2, sm: 3 },
          borderRadius: "16px",
          background: "#fff",
          borderTop: "6px solid #FF7A00",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#FF7A00", mb: 1 }}
        >
          Contact Us
        </Typography>

        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="first_name"
                label="First Name"
                fullWidth
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="last_name"
                label="Last Name"
                fullWidth
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phone"
                label="Phone Number"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                rows={4}
                name="message"
                label="Your Message"
                fullWidth
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  fontWeight: "bold",
                  background: "#FF7A00",
                  "&:hover": { background: "#E56700" },
                }}
              >
                SEND MESSAGE
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* MAP */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pb: "56.25%",
          borderRadius: "16px",
          overflow: "hidden",
          mt: 2,
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7562.952626834423!2d73.805661!3d18.597634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c6f5fc3061%3A0xd8b8f3fdf9d8fde5!2sGanesham%20A!5e0!3m2!1sen!2sin!4v1763372096573!5m2!1sen!2sin"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: "16px"
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default Contact;
