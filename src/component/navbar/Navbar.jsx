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
import smart_logo from "../../assets/smart_logo.webp";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* <AppBar
        position="sticky"
        sx={{
          background: scrolled
            ? "linear-gradient(135deg, #280d57ff 0%, #61608aff 100%)"
            : "transparent",
          boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none",
          px: { xs: 1, sm: 2 },
          zIndex: 1200,
          transition: "all 0.3s ease",
        }}
      > */}
      <AppBar
        position="fixed"
        color="transparent"
        // elevation={0}
        sx={{
          background: scrolled
            ? "linear-gradient(135deg, #280d57ff 0%, #61608aff 100%)"
            : "transparent",
          boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none",
          px: { xs: 1, sm: 2 },
          zIndex: 1200,
          transition: "all 0.3s ease",
        }}
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
              src={smart_logo}
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
                  fontSize: "16px",
                  fontWeight: location.pathname === item.path ? "700" : "500",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  background:
                    location.pathname === item.path
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.25)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: location.pathname === item.path ? "80%" : "0%",
                    height: "3px",
                    background: "linear-gradient(90deg, #ff6b35, #ffd93d)",
                    borderRadius: "2px 2px 0 0",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "80%",
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
            width: 280,
            background: "linear-gradient(135deg, #280d57ff 0%, #61608aff 100%)",
            color: "#fff",
            position: "relative",
            transition: "0.5s ease",
            boxShadow: "-8px 0 32px rgba(255, 107, 53, 0.4)",
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
                mb: 1.5,
                mx: 1,
                px: 2,
                py: 1.5,
                fontWeight: location.pathname === item.path ? "700" : "500",
                background:
                  location.pathname === item.path
                    ? "rgba(255,255,255,0.25)"
                    : "transparent",
                borderLeft:
                  location.pathname === item.path
                    ? "4px solid #fff"
                    : "4px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                  transform: "translateX(4px)",
                  borderLeft: "4px solid #fff",
                },
              }}
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: location.pathname === item.path ? "700" : "500",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
