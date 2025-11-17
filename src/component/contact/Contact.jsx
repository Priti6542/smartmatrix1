import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const infoGradient =
  "linear-gradient(135deg, #49008f 0%, #a047d3 100%)";
const formGradient =
  "linear-gradient(135deg, #0e183d 0%, #2859A9 100%)";

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
        minHeight: "100vh",
        background: "#f8f7f1",
        py: { xs: 2, md: 6 },
        px: { xs: 0, md: 2 },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          alignItems="stretch"
          justifyContent="center"
        >
          {/* Contact Info Card */}
          <Grid item xs={12} md={5} display="flex">
            <Paper
              elevation={5}
              sx={{
                width: "100%",
                maxWidth: { xs: 390, sm: 500, md: "100%" },
                mx: "auto",
                borderRadius: { xs: "18px", sm: "32px" },
                overflow: "hidden",
                background: infoGradient,
                color: "#fff",
                p: { xs: 2, sm: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%"
              }}
            >
              <Box
                sx={{
                  background: "rgba(40,0,100,0.25)",
                  borderRadius: { xs: "14px", sm: "28px" },
                  p: { xs: 2, sm: 3 },
                  mb: { xs: 2, sm: 4 }
                }}
              >
                <LocationOn sx={{ fontSize: 28, mb: 0.5 }} />
                <Typography variant="h6" fontWeight="bold">
                  Address
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.97rem", sm: "1rem" }, fontWeight: 400, lineHeight: 1.5, mt: 1 }}>
                 Office No. 102-B, First Floor, Ganesham Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "rgba(40,0,100,0.25)",
                  borderRadius: { xs: "14px", sm: "28px" },
                  p: { xs: 2, sm: 3 },
                  mb: { xs: 2, sm: 4 }
                }}
              >
                <Email sx={{ fontSize: 28, mb: 0.5 }} />
                <Typography variant="h6" fontWeight="bold">
                  Email Us
                </Typography>
                <Typography sx={{ fontSize: "1rem", mt: 1 }}>
                  hr@smartmatrixds.com
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "rgba(40,0,100,0.25)",
                  borderRadius: { xs: "14px", sm: "28px" },
                  p: { xs: 2, sm: 3 }
                }}
              >
                <Phone sx={{ fontSize: 28, mb: 0.5 }} />
                <Typography variant="h6" fontWeight="bold">
                  Call Us
                </Typography>
                <Typography sx={{ fontSize: "1rem", mt: 1 }}>
                 +91 9112108484
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form Card */}
          <Grid item xs={12} md={7} display="flex">
            <Paper
              elevation={5}
              sx={{
                width: "100%",
                maxWidth: { xs: 390, sm: 500, md: "100%" },
                mx: "auto",
                borderRadius: { xs: "18px", sm: "32px" },
                overflow: "hidden",
                background: formGradient,
                color: "#fff",
                p: { xs: 2, sm: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%"
              }}
            >
              <Typography
                variant="h5"
                align="center"
                fontWeight="bold"
                sx={{ mb: 3, letterSpacing: 1, color: "#fff" }}
              >
                Contact Us
              </Typography>
              <form ref={form} onSubmit={sendEmail}>
                <TextField
                  name="first_name"
                  label="First Name *"
                  fullWidth
                  required
                  size="small"
                  sx={{
                    mb: 1.3,
                    input: {
                      bgcolor: "#e4e5ef",
                      borderRadius: "21px"
                    }
                  }}
                  InputProps={{
                    style: { borderRadius: "21px", background: "#e4e5ef" }
                  }}
                />
                <TextField
                  name="last_name"
                  label="Last Name *"
                  fullWidth
                  required
                  size="small"
                  sx={{
                    mb: 1.3,
                    input: {
                      bgcolor: "#e4e5ef",
                      borderRadius: "21px"
                    }
                  }}
                  InputProps={{
                    style: { borderRadius: "21px", background: "#e4e5ef" }
                  }}
                />
                <TextField
                  name="email"
                  label="Email *"
                  type="email"
                  fullWidth
                  required
                  size="small"
                  sx={{
                    mb: 1.3,
                    input: {
                      bgcolor: "#e4e5ef",
                      borderRadius: "21px"
                    }
                  }}
                  InputProps={{
                    style: { borderRadius: "21px", background: "#e4e5ef" }
                  }}
                />
                <TextField
                  name="phone"
                  label="Phone Number"
                  fullWidth
                  size="small"
                  sx={{
                    mb: 1.3,
                    input: {
                      bgcolor: "#e4e5ef",
                      borderRadius: "21px"
                    }
                  }}
                  InputProps={{
                    style: { borderRadius: "21px", background: "#e4e5ef" }
                  }}
                />
                <TextField
                  multiline
                  rows={4}
                  name="message"
                  label="Your Message *"
                  fullWidth
                  required
                  size="small"
                  sx={{
                    mb: 2,
                    textarea: {
                      bgcolor: "#e4e5ef",
                      borderRadius: "21px"
                    }
                  }}
                  InputProps={{
                    style: { borderRadius: "21px", background: "#e4e5ef" }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    fontWeight: "bold",
                    letterSpacing: 1,
                    background: "#ff7a00",
                    borderRadius: "21px",
                    py: 1.3,
                    fontSize: "1.07rem",
                    "&:hover": { background: "#e56700" }
                  }}
                >
                  SEND MESSAGE
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
