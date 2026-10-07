import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { ChevronDown, Menu, X } from "lucide-react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/icons/smart_logo.webp";
import { CAPABILITIES } from "../../constants/capabilities";
import { NAVIGATION } from "../../constants/navigation";
import { ROUTES } from "../../constants/routes";
import { BRAND, SITE } from "../../constants/site";
import { cx } from "../../utils/helpers";

import { CONTAINER_CLASS } from "./Container";

const HEADER_HEIGHT = {
  mobile: 72,
  desktop: 80,
} as const;

const MENU_CLOSE_DELAY_MS = 150;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesRef = useRef<HTMLLIElement | null>(null);

  const { pathname } = useLocation();

  const isActive = (path: string): boolean =>
    path === ROUTES.HOME
      ? pathname === path
      : pathname === path || pathname.startsWith(`${path}/`);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openServices = () => {
    clearCloseTimer();
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    clearCloseTimer();

    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, MENU_CLOSE_DELAY_MS);
  };

  const toggleServices = (event: ReactMouseEvent) => {
    event.preventDefault();
    setServicesOpen((open) => !open);
  };

  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    return clearCloseTimer;
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((open) => !open);
  };

  const navLinkClass = (active: boolean) =>
    cx(
      "relative px-1 py-2 text-sm font-medium no-underline",
      "text-[#344054] transition-colors duration-200 hover:text-[#08184A]",
      "after:absolute after:-bottom-1 after:left-0 after:h-[2px]",
      "after:bg-[#F5A623] after:transition-all after:duration-200",
      active
        ? "text-[#08184A] after:w-full"
        : "after:w-0 hover:after:w-full",
    );

  return (
    <>
      {/* =========================================================
          DESKTOP / MAIN NAVBAR
      ========================================================= */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(15, 35, 80, 0.08)",
          boxShadow: "0 4px 24px rgba(15, 35, 80, 0.04)",
          zIndex: 1200,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: {
              xs: HEADER_HEIGHT.mobile,
              md: HEADER_HEIGHT.desktop,
            },
          }}
          className={cx(
            CONTAINER_CLASS,
            "flex! items-center justify-between",
          )}
        >
          {/* LOGO */}
          <Link
            to={ROUTES.HOME}
            aria-label="Go to home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt={`${SITE.shortName} logo`}
              className="h-9 w-auto rounded-md md:h-10"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="flex items-center gap-8 lg:gap-10">
              {NAVIGATION.map((item) => {
                if (item.path === ROUTES.SERVICES) {
                  return (
                    <li
                      key={item.path}
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                    >
                      <button
                        type="button"
                        onClick={toggleServices}
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        className={cx(
                          navLinkClass(
                            isActive(item.path) || servicesOpen,
                          ),
                          "flex items-center gap-1 bg-transparent",
                        )}
                      >
                        {item.label}

                        <ChevronDown
                          size={14}
                          className={cx(
                            "transition-transform duration-200",
                            servicesOpen && "rotate-180",
                          )}
                        />
                      </button>

                      {/* SERVICES MEGA MENU */}
                      <div
                        className={cx(
                          "absolute left-1/2 top-full z-50 w-[560px]",
                          "max-w-[calc(100vw-2.5rem)] -translate-x-1/2 pt-4",
                          "transition-all duration-200",
                          servicesOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-2 opacity-0",
                        )}
                      >
                        <div
                          className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#0B102F]
                            p-3
                            shadow-[0_24px_60px_rgba(0,0,0,0.20)]
                          "
                        >
                          <div className="grid grid-cols-2 gap-1">
                            {CAPABILITIES.map((capability) => {
                              const Icon = capability.icon;

                              return (
                                <Link
                                  key={capability.id}
                                  to={ROUTES.SERVICES}
                                  onClick={() => setServicesOpen(false)}
                                  className="
                                    group
                                    flex
                                    items-start
                                    gap-3
                                    rounded-xl
                                    p-3
                                    no-underline
                                    transition-colors
                                    duration-200
                                    hover:bg-white/5
                                  "
                                >
                                  <span
                                    className="
                                      flex
                                      h-9
                                      w-9
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg
                                      bg-white/5
                                      text-white/70
                                      transition-colors
                                      duration-200
                                      group-hover:bg-[#F5A623]/15
                                      group-hover:text-[#F5A623]
                                    "
                                  >
                                    <Icon size={17} strokeWidth={1.75} />
                                  </span>

                                  <span>
                                    <span className="block text-[11px] font-medium text-white/35">
                                      {capability.index}
                                    </span>

                                    <span className="block text-sm font-semibold text-white">
                                      {capability.shortLabel}
                                    </span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={navLinkClass(isActive(item.path))}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* MOBILE MENU */}
          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Open menu"
            className="lg:hidden!"
            sx={{
              color: "#08184A",
            }}
          >
            <Menu size={24} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* =========================================================
          MOBILE DRAWER
      ========================================================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 300,
            background: `linear-gradient(
              180deg,
              ${BRAND.charcoal} 0%,
              ${BRAND.charcoalDeep} 100%
            )`,
            color: "#fff",
          },
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-5">
          <img
            src={logo}
            alt={`${SITE.shortName} logo`}
            className="h-9 w-auto rounded-md"
          />

          <IconButton
            onClick={handleDrawerToggle}
            aria-label="Close menu"
            sx={{
              color: "#fff",
            }}
          >
            <X size={22} />
          </IconButton>
        </div>

        {/* Navigation */}
        <List sx={{ px: 1.5 }}>
          {NAVIGATION.map((item) => {
            const active = isActive(item.path);

            return (
              <ListItem
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  px: 2,
                  py: 1.5,
                  background: active
                    ? "rgba(245,166,35,0.12)"
                    : "transparent",
                  borderLeft: active
                    ? "3px solid #F5A623"
                    : "3px solid transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: active ? 700 : 500,
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;