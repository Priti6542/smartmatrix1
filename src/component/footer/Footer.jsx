import React from "react";
import { Box, Container, Grid, IconButton, Link, Typography } from "@mui/material";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavbarData from "../../datafiles/NavbarData";
import { motion } from 'framer-motion';

const Footer = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #000851 0%, #0a0e27 100%)',
        color: '#fff',
        pt: 8,
        pb: 3,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #1CB5E0, transparent)',
        },
      }}
    >
      {/* Decorative gradient blobs */}
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(28, 181, 224, 0.1) 0%, transparent 70%)',
          top: '-200px',
          right: '-100px',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(28, 181, 224, 0.08) 0%, transparent 70%)',
          bottom: '-100px',
          left: '-50px',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box
                  component="img"
                  src="https://smartmatrixds.com/assets/img/smds-logo.jpeg"
                  alt="SmartMatrix Logo"
                  sx={{
                    height: 60,
                    mb: 3,
                    cursor: 'pointer',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(28, 181, 224, 0.3)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                  onClick={() => navigate('/')}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3,
                    lineHeight: 1.8,
                    maxWidth: '300px',
                  }}
                >
                  Transforming ideas into intelligent solutions. Building tomorrow's technology, today.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {[
                    { Icon: FaFacebookF, link: 'https://facebook.com' },
                    { Icon: FaTwitter, link: 'https://twitter.com' },
                    { Icon: FaLinkedinIn, link: 'https://linkedin.com' },
                    { Icon: FaInstagram, link: 'https://instagram.com' },
                  ].map((social, index) => (
                    <IconButton
                      key={index}
                      component={motion.div}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      sx={{
                        width: 40,
                        height: 40,
                        background: 'rgba(28, 181, 224, 0.1)',
                        border: '1px solid rgba(28, 181, 224, 0.3)',
                        color: '#1CB5E0',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #1CB5E0, #000851)',
                          color: '#fff',
                          borderColor: '#1CB5E0',
                        },
                      }}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.Icon size={16} />
                    </IconButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #1CB5E0, #FFD700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.1rem',
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {NavbarData.map((item) => (
                    <Link
                      key={item.title}
                      onClick={() => navigate(item.path)}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: '15px',
                        '&::before': {
                          content: '"→"',
                          position: 'absolute',
                          left: 0,
                          opacity: 0,
                          transition: 'all 0.3s ease',
                          color: '#1CB5E0',
                        },
                        '&:hover': {
                          color: '#1CB5E0',
                          paddingLeft: '20px',
                          '&::before': {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #1CB5E0, #FFD700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.1rem',
                  }}
                >
                  Our Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {[
                    'Web Development',
                    'App Development',
                    'Cloud Computing',
                    'Digital Marketing',
                    'UI/UX Design',
                    'IT Consulting',
                  ].map((service) => (
                    <Link
                      key={service}
                      onClick={() => navigate('/services')}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        paddingLeft: '15px',
                        '&::before': {
                          content: '"→"',
                          position: 'absolute',
                          left: 0,
                          opacity: 0,
                          transition: 'all 0.3s ease',
                          color: '#1CB5E0',
                        },
                        '&:hover': {
                          color: '#1CB5E0',
                          paddingLeft: '20px',
                          '&::before': {
                            opacity: 1,
                          },
                        },
                      }}
                    >
                      {service}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={3}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #1CB5E0, #FFD700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.1rem',
                  }}
                >
                  Contact Us
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box
                      sx={{
                        minWidth: 35,
                        height: 35,
                        borderRadius: '50%',
                        background: 'rgba(28, 181, 224, 0.1)',
                        border: '1px solid rgba(28, 181, 224, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <FaMapMarkerAlt size={14} color="#1CB5E0" />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                      }}
                    >
                      Office No. 102-B, First Floor, Ganesham Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        minWidth: 35,
                        height: 35,
                        borderRadius: '50%',
                        background: 'rgba(28, 181, 224, 0.1)',
                        border: '1px solid rgba(28, 181, 224, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <FaPhoneAlt size={14} color="#1CB5E0" />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.85rem',
                      }}
                    >
                      +91 9112108484
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box
                      sx={{
                        minWidth: 35,
                        height: 35,
                        borderRadius: '50%',
                        background: 'rgba(28, 181, 224, 0.1)',
                        border: '1px solid rgba(28, 181, 224, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <FaEnvelope size={14} color="#1CB5E0" />
                    </Box>
                    <Box>
                      {/* <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.85rem',
                          mb: 0.5,
                        }}
                      >
                      </Typography> */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.85rem',
                        }}
                      >
                        contact@smartmatrixds.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              mt: 6,
              pt: 3,
              borderTop: '1px solid rgba(28, 181, 224, 0.2)',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.85rem',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              © {new Date().getFullYear()} SmartMatrix Digital Services Pvt. Ltd. All rights reserved.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link
                  key={item}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#1CB5E0',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
