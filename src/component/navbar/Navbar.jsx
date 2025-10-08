import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavbarData from "../../datafiles/NavbarData";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for AppBar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        // sx={{
        //   px: { xs: 1, sm: 2 },
        //   background: scrolled
        //     ? "linear-gradient(90deg, #1CB5E0, #000851)"
        //     : "transparent",
        //   boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.3)" : "none",
        //   transition: "0.5s",
        // }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <IconButton
            edge="start"
            component={Link}
            to="/"
            sx={{ p: 0 }}
            aria-label="go to home"
          >
            <img
              src="https://smartmatrixds.com/assets/img/smds-logo.jpeg"
              alt="Logo"
              style={{
                height: "45px",
                width: "auto",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            />
          </IconButton>

          {/* Desktop Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 3,
            }}
          >
            {NavbarData.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "500",
                  borderBottom:
                    location.pathname === item.path
                      ? "2px solid #FFD700"
                      : "none",
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 2,
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleDrawerToggle}
              color="inherit"
              aria-label="open menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 250,
            background: "linear-gradient(180deg, #1CB5E0, #000851)",
            color: "#fff",
            position: "relative",
            transition: "0.5s ease",
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", right: 10, top: 10, color: "#fff" }}
          aria-label="close menu"
        >
          <CloseIcon />
        </IconButton>

        {/* Drawer Links */}
        <List sx={{ mt: 7 }}>
          {NavbarData.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                mb: 1,
                fontWeight:
                  location.pathname === item.path ? "bold" : "500",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
