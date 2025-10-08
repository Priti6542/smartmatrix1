import React from "react";
import CountUp from "react-countup";
import { Box, Typography, Paper } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import GroupsIcon from "@mui/icons-material/Groups";

function Counter() {
    return (
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                flexWrap: "wrap", 
                gap: 5, 
                mt: 10, 
                textAlign: "center",
                marginLeft:"9rem",
                marginRight:"9rem",
                marginBottom:"4rem",
            }}
        >
            {/* Clients */}
            <Paper 
                elevation={6} 
                sx={{ 
                    p: 3, 
                    borderRadius: 4, 
                    textAlign: "center", 
                    minWidth: "260px",
                    backgroundColor: "#f3f4f6",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.1)" }
                }}
            >
                <PeopleAltIcon sx={{ fontSize: 50, color: "#007BFF" }} />
                <Typography variant="h6" fontWeight="bold">Clients</Typography>
                <Typography variant="h4" color="primary">
                    <CountUp start={0} end={100} duration={5} suffix="+" />
                </Typography>
            </Paper>

            {/* Projects */}
            <Paper 
                elevation={6} 
                sx={{ 
                    p: 3, 
                    borderRadius: 4, 
                    textAlign: "center", 
                    minWidth: "260px",
                    backgroundColor: "#f3f4f6",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.1)" }
                }}
            >
                <WorkIcon sx={{ fontSize: 50, color: "#28a745" }} />
                <Typography variant="h6" fontWeight="bold">Projects</Typography>
                <Typography variant="h4" color="primary">
                    <CountUp start={0} end={100} duration={5} suffix="+" />
                </Typography>
            </Paper>

            {/* Hours of Support */}
            <Paper 
                elevation={6} 
                sx={{ 
                    p: 3, 
                    borderRadius: 4, 
                    textAlign: "center", 
                    minWidth: "260px",
                    backgroundColor: "#f3f4f6",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.1)" }
                }}
            >
                <SupportAgentIcon sx={{ fontSize: 50, color: "#ffc107" }} />
                <Typography variant="h6" fontWeight="bold">Hours of Support</Typography>
                <Typography variant="h4" color="primary">
                    <CountUp start={0} end={100} duration={5} suffix="+" />
                </Typography>
            </Paper>

            {/* Team Members */}
            <Paper 
                elevation={6} 
                sx={{ 
                    p: 3, 
                    borderRadius: 4, 
                    textAlign: "center", 
                    minWidth: "260px",
                    backgroundColor: "#f3f4f6",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.1)" }
                }}
            >
                <GroupsIcon sx={{ fontSize: 50, color: "#dc3545" }} />
                <Typography variant="h6" fontWeight="bold">Team Members</Typography>
                <Typography variant="h4" color="primary">
                    <CountUp start={0} end={100} duration={5} suffix="+" />
                </Typography>
            </Paper>
        </Box>
    );
}

export default Counter;
