import { Box, Icon, Typography } from "@mui/material";

import type { MuiIconComponent } from "../../types/common";

export interface IconInfoCardProps {
  title: string;
  description: string;
  icon: MuiIconComponent;
  /** Shrinks the icon on narrow screens. */
  compact?: boolean;
}

const IconInfoCard = ({
  title,
  description,
  icon,
  compact = false,
}: IconInfoCardProps) => {
  return (
    <Box
      className="p-card lg:p-card-lg"
      sx={{
        position: "relative",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: 5,
        boxShadow: 5,
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          width: "200%",
          height: "100%",
          background:
            "linear-gradient(120deg, transparent, rgba(240, 214, 202, 0.6), transparent)",
          transform: "skewX(-25deg)",
          animation: "icon-info-card-shine 2s infinite linear",
        },
        "@keyframes icon-info-card-shine": {
          "0%": { left: "-150%" },
          "100%": { left: "150%" },
        },
      }}
    >
      <Icon
        component={icon}
        sx={{ fontSize: compact ? 30 : 40, color: "primary.main" }}
      />
      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default IconInfoCard;
