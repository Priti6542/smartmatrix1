import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useRef } from "react";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { SECTION_SPACING_CLASS } from "../../../components/layout/Section";
import { cx } from "../../../utils/helpers";
import { TRUSTED_PARTNER_LOGOS } from "../data";

type ScrollDirection = "left" | "right";

/**
 * Horizontally scrollable partner logos. Not currently mounted on the
 * healthcare page — it was disabled before the TypeScript migration and is
 * kept so it can be switched back on.
 */
const TrustedPartners = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const scrollStepPx = isSmallScreen ? 150 : isMediumScreen ? 200 : 300;

  const scroll = (direction: ScrollDirection) => {
    scrollContainerRef.current?.scrollBy({
      left: direction === "left" ? -scrollStepPx : scrollStepPx,
      behavior: "smooth",
    });
  };

  const handleDragStart = (event: ReactMouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const startX = event.pageX;
    const startScrollLeft = container.scrollLeft;

    const onMouseMove = (moveEvent: MouseEvent) => {
      container.scrollLeft = startScrollLeft - (moveEvent.pageX - startX);
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <Box className={cx(CONTAINER_CLASS, SECTION_SPACING_CLASS)} sx={{ textAlign: "center" }}>
      <Typography variant="h4" className="mb-heading!" sx={{ fontWeight: "bold" }}>
        Our Trusted Partners
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <IconButton
          onClick={() => scroll("left")}
          sx={{ background: "#ddd", borderRadius: "50%" }}
          aria-label="scroll left"
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          onMouseDown={handleDragStart}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: isSmallScreen ? 1 : 3,
            p: 2,
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            scrollBehavior: "smooth",
            maxWidth: isSmallScreen ? "90%" : isMediumScreen ? "85%" : "80%",
            cursor: "grab",
          }}
        >
          {TRUSTED_PARTNER_LOGOS.map((logo, index) => (
            <Box key={logo} sx={{ minWidth: isSmallScreen ? "120px" : "150px", flexShrink: 0 }}>
              <img
                src={logo}
                alt={`Trusted Partner ${index + 1}`}
                style={{
                  width: isSmallScreen
                    ? "250px"
                    : isMediumScreen
                      ? "300px"
                      : "400px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 5px grey",
                }}
              />
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={() => scroll("right")}
          sx={{ background: "#ddd", borderRadius: "50%" }}
          aria-label="scroll right"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TrustedPartners;
