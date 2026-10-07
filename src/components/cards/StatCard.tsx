import { Paper, Typography } from "@mui/material";
import CountUp from "react-countup";

import type { MuiIconComponent } from "../../types/common";

export interface StatCardProps {
  label: string;
  value: number;
  icon: MuiIconComponent;
  /** Colour of the icon above the figure. */
  color: string;
  suffix?: string;
  /** Seconds the count-up animation runs for. */
  durationSeconds?: number;
}

const StatCard = ({
  label,
  value,
  icon: Icon,
  color,
  suffix = "",
  durationSeconds = 5,
}: StatCardProps) => {
  return (
    <Paper
      elevation={6}
      className="p-card lg:p-card-lg"
      sx={{
        borderRadius: 4,
        textAlign: "center",
        minWidth: "260px",
        backgroundColor: "#f3f4f6",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.1)" },
      }}
    >
      <Icon sx={{ fontSize: 50, color }} />
      <Typography variant="h6" fontWeight="bold">
        {label}
      </Typography>
      <Typography variant="h4" color="primary">
        <CountUp start={0} end={value} duration={durationSeconds} suffix={suffix} />
      </Typography>
    </Paper>
  );
};

export default StatCard;
