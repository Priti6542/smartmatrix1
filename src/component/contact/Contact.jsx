import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f7f9fc",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 3 },
        py: 8,
      }}
    >
      <Grid container spacing={4} maxWidth="1000px" alignItems="stretch">
        {/* Left Info */}
        <Grid item xs={12} md={5} display="flex">
          <Paper
            elevation={5}
            sx={{
              p: 4,
              borderRadius: 3,
              width: "100%",
              background: "linear-gradient(135deg, #e36b25ff, #ffb74d)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Contact Information
            </Typography>
            <Typography variant="body1" mt={1} sx={{ opacity: 0.9 }}>
              Reach out to us with any questions or project ideas.
            </Typography>

            <Box mt={3} display="flex" flexDirection="column" gap={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <IconButton sx={{ color: "white", p: 0 }}>
                  <LocationOn />
                </IconButton>
                <Typography variant="body1">
                  Office No. 102-B, First Floor, Ganesham Commercial -A,
                  Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune-411027
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <IconButton sx={{ color: "white", p: 0 }}>
                  <Phone />
                </IconButton>
                <Typography variant="body1">+91 7066511234</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <IconButton sx={{ color: "white", p: 0 }}>
                  <Email />
                </IconButton>
                <Typography variant="body1">
                  hr@smartsoftwareservice.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Right Form */}
        <Grid item xs={12} md={7} display="flex">
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="text.primary"
              mb={2}
            >
              Send Us a Message
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    color="warning"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    color="warning"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    color="warning"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    color="warning"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    color="warning"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: "bold",
                      background: "linear-gradient(135deg, #ff9800, #ffb74d)",
                      boxShadow: "0px 4px 10px rgba(255,152,0,0.4)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #fb8c00, #ffa726)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* 🌍 Google Map */}
      <Box
        sx={{
          mt: 6,
          width: "80%",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4420607984666!2d73.78349947496491!3d18.599176282509717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f4ba19f5bb%3A0x631e505d3295e0bd!2sSMARTMATRIX%20Digital%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740552081292!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "none" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
