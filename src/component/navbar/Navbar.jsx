import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarData from '../../datafiles/NavbarData';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // To highlight active link

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          px: 2,
          bgcolor: 'linear-gradient(90deg, #1CB5E0, #000851)', // Gradient background
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <IconButton edge="start" component={Link} to="/" sx={{ p: 0 }}>
            <img
              src="https://smartmatrixds.com/assets/img/smds-logo.jpeg"
              alt="Logo"
              style={{
                height: "50px",
                width: "auto",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
              }}
            />
          </IconButton>

          {/* Desktop Links */}
          <Box sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: 'center',
            gap: 3
          }}>
            {NavbarData.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: location.pathname === item.path ? 'bold' : '500',
                  borderBottom: location.pathname === item.path ? '2px solid #FFD700' : 'none',
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 2
                  }
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { md: "none" }, marginLeft: "auto" }}>
            <IconButton onClick={handleDrawerToggle} color="inherit">
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
            bgcolor: 'linear-gradient(180deg, #1CB5E0, #000851)',
            color: '#fff',
            transition: '0.5s'
          }
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", right: 10, top: 10, color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>

        {/* Drawer Links */}
        <List sx={{ mt: 7 }}>
          {NavbarData.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                mb: 1,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                fontWeight: location.pathname === item.path ? 'bold' : '500',
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
